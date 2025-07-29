const {
  loadFixture,
} = require("@nomicfoundation/hardhat-toolbox/network-helpers");
const { expect } = require("chai");

describe("HelloWorld", function () {
  // Fixture to deploy HelloWorld contract
  async function deployHelloWorldFixture() {
    // Get signers
    const [owner, otherAccount] = await ethers.getSigners();

    // Deploy HelloWorld contract
    const HelloWorld = await ethers.getContractFactory("HelloWorld");
    const helloWorld = await HelloWorld.deploy();

    return { helloWorld, owner, otherAccount };
  }

  describe("Deployment", function () {
    it("Should deploy successfully", async function () {
      const { helloWorld } = await loadFixture(deployHelloWorldFixture);

      expect(helloWorld.target).to.be.properAddress;
    });

    it("Should set the correct greeting message", async function () {
      const { helloWorld } = await loadFixture(deployHelloWorldFixture);

      expect(await helloWorld.greet()).to.equal("Hello, World!");
    });

    it("Should have greet as a public variable", async function () {
      const { helloWorld } = await loadFixture(deployHelloWorldFixture);

      // Test that greet is accessible (public variable creates getter)
      const greeting = await helloWorld.greet();
      expect(greeting).to.be.a("string");
      expect(greeting.length).to.be.greaterThan(0);
    });
  });

  describe("Greet Function", function () {
    it("Should return the correct greeting", async function () {
      const { helloWorld } = await loadFixture(deployHelloWorldFixture);

      const greeting = await helloWorld.greet();
      expect(greeting).to.equal("Hello, World!");
    });

    it("Should be callable by any account", async function () {
      const { helloWorld, otherAccount } = await loadFixture(
        deployHelloWorldFixture
      );

      // Call from another account
      const greeting = await helloWorld.connect(otherAccount).greet();
      expect(greeting).to.equal("Hello, World!");
    });
  });
});
