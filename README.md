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
- **Features:**
  - Boolean types (`bool`)
  - Unsigned integers (`uint8`, `uint256`)
  - Signed integers (`int8`, `int256`)
  - Address type (`address`)
  - Byte arrays (`bytes1`)
  - Default values for uninitialized variables
  - Min/max values using `type()` function

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
