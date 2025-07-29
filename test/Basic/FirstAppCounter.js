const {
  loadFixture,
} = require("@nomicfoundation/hardhat-toolbox/network-helpers");
const { expect } = require("chai");

describe("Counter", function () {
  // Fixture to deploy Counter contract
  async function deployCounterFixture() {
    // Get signers
    const [owner, otherAccount] = await ethers.getSigners();

    // Deploy Counter contract
    const Counter = await ethers.getContractFactory("Counter");
    const counter = await Counter.deploy();

    return { counter, owner, otherAccount };
  }

  describe("Deployment", function () {
    it("Should deploy successfully", async function () {
      const { counter } = await loadFixture(deployCounterFixture);

      expect(counter.target).to.be.properAddress;
    });

    it("Should initialize count to 0", async function () {
      const { counter } = await loadFixture(deployCounterFixture);

      expect(await counter.count()).to.equal(0);
    });
  });

  describe("Increment Function", function () {
    it("Should increment count by 1", async function () {
      const { counter } = await loadFixture(deployCounterFixture);

      await counter.inc();
      expect(await counter.count()).to.equal(1);
    });

    it("Should increment multiple times", async function () {
      const { counter } = await loadFixture(deployCounterFixture);

      await counter.inc();
      await counter.inc();
      await counter.inc();
      expect(await counter.count()).to.equal(3);
    });

    it("Should be callable by any account", async function () {
      const { counter, otherAccount } = await loadFixture(deployCounterFixture);

      await counter.connect(otherAccount).inc();
      expect(await counter.count()).to.equal(1);
    });
  });

  describe("Decrement Function", function () {
    it("Should decrement count by 1", async function () {
      const { counter } = await loadFixture(deployCounterFixture);

      // First increment to have a value > 0
      await counter.inc();
      await counter.inc();

      await counter.dec();
      expect(await counter.count()).to.equal(1);
    });

    it("Should revert when trying to decrement from 0", async function () {
      const { counter } = await loadFixture(deployCounterFixture);

      await expect(counter.dec()).to.be.revertedWith(
        "Count must be greater than zero to decrement"
      );
    });

    it("Should decrement to 0 successfully", async function () {
      const { counter } = await loadFixture(deployCounterFixture);

      await counter.inc();
      await counter.dec();
      expect(await counter.count()).to.equal(0);
    });
  });

  describe("Reset Function", function () {
    it("Should reset count to 0", async function () {
      const { counter } = await loadFixture(deployCounterFixture);

      // Increment first
      await counter.inc();
      await counter.inc();
      await counter.inc();

      await counter.reset();
      expect(await counter.count()).to.equal(0);
    });

    it("Should reset when count is already 0", async function () {
      const { counter } = await loadFixture(deployCounterFixture);

      await counter.reset();
      expect(await counter.count()).to.equal(0);
    });
  });

  describe("Combined Operations", function () {
    it("Should handle multiple operations correctly", async function () {
      const { counter } = await loadFixture(deployCounterFixture);

      await counter.inc(); // count = 1
      await counter.inc(); // count = 2
      await counter.dec(); // count = 1
      await counter.inc(); // count = 2
      await counter.reset(); // count = 0

      expect(await counter.count()).to.equal(0);
    });

    it("Should maintain state between function calls", async function () {
      const { counter } = await loadFixture(deployCounterFixture);

      for (let i = 0; i < 5; i++) {
        await counter.inc();
      }

      expect(await counter.count()).to.equal(5);

      for (let i = 0; i < 3; i++) {
        await counter.dec();
      }

      expect(await counter.count()).to.equal(2);
    });
  });
});
