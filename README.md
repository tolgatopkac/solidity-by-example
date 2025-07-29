# Solidity Practice Examples

This project is a Hardhat-based repository for practicing Solidity smart contract development. It contains various example contracts and tests to learn and practice fundamental Solidity concepts.

## Examples

### 1. HelloWorld Contract

- **Contract:** [`contracts/Basic/HelloWorld.sol`](contracts/Basic/HelloWorld.sol)
- **Test:** [`test/Basic/HelloWorld.js`](test/Basic/HelloWorld.js)

### 2. First App Counter Contract

- **Contract:** [`contracts/Basic/FirstAppCounter.sol`](contracts/Basic/FirstAppCounter.sol)
- **Test:** [`test/Basic/FirstAppCounter.js`](test/Basic/FirstAppCounter.js)

### 3. Primitive Data Types

- **Contract:** [`contracts/Basic/PrimitiveDataTypes.sol`](contracts/Basic/PrimitiveDataTypes.sol)

### 4. Variables

- **Contract:** [`contracts/Basic/Variables.sol`](contracts/Basic/Variables.sol)
- **Features:**

  - Local variables (declared inside functions, not stored on blockchain)
  - State variables (declared outside functions, stored on blockchain)
  - Global variables (`block.timestamp`, `msg.sender`)
  - Variable scope and storage differences

  ### 5. Constants

- **Contract:** [`contracts/Basic/Constants.sol`](contracts/Basic/Constants.sol)
- **Features:**

  - Constant variables (cannot be modified after declaration)
  - Gas optimization with hard-coded values
  - `constant` keyword usage
  - Immutable values for addresses and

  ### 6. Immutable

- **Contract:** [`contracts/Basic/Immutable.sol`](contracts/Basic/Immutable.sol)
- **Features:**

  - Immutable variables (can only be set in constructor)
  - `immutable` keyword usage
  - Constructor-time initialization
  - Gas optimization compared to state variables
  - Cannot be modified

  ### 7. Reading and Writing State Variables

- **Contract:** [`contracts/Basic/ReadingWritingStateVariable.sol`](contracts/Basic/ReadingWritingStateVariable.sol)
- **Features:**
  - State variable storage and retrieval
  - Transaction requirements for writing state
  - Free reading of state variables
  - `public` variables automatic getter functions
  - Gas costs difference between read and write operations

## Installation

```shell
npm install
```

## Running Tests

### All tests

```shell
npx hardhat test
```

### Specific tests

```shell
# HelloWorld tests
npx hardhat test test/Basic/HelloWorld.js

# Counter tests
npx hardhat test test/Basic/FirstAppCounter.js

# Lock tests
npx hardhat test test/Lock.js
```
