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

### 8. Gas and Gas Price

- **Contract:** [`contracts/Basic/GasGasPrice.sol`](contracts/Basic/GasGasPrice.sol)
- **Features:**
  - Gas concepts and limits in Ethereum
  - Gas Limit vs Block Gas Limit differences
  - Transaction failure scenarios when gas runs out
  - State changes are reverted but gas is not refunded
  - Infinite loop example that consumes all gas
  - Understanding gas as "fuel" for operations

### 9. If-Else Statements

- **Contract:** [`contracts/Basic/if-else.sol`](contracts/Basic/if-else.sol)
- **Features:**
  - Conditional statements (`if`, `else if`, `else`)
  - Ternary operator usage
  - Pure functions and return values
  - Control flow in Solidity

### 10. For and While Loops

- **Contract:** [`contracts/Basic/for-while-loop.sol`](contracts/Basic/for-while-loop.sol)
- **Features:**
  - For loop implementation
  - While loop implementation
  - `continue` and `break` statements
  - Loop control and iteration patterns

### 11. Mapping

- **Contract:** [`contracts/Basic/Mapping.sol`](contracts/Basic/Mapping.sol)
- **Features:**
  - Basic mapping (`mapping(keyType => valueType)`)
  - Nested mappings for complex data structures
  - Get, set, and remove operations
  - Default values in mappings
  - Non-iterable nature of mappings

### 12. Ether and Wei Units

- **Contract:** [`contracts/Basic/EtherWei.sol`](contracts/Basic/EtherWei.sol)
- **Features:**
  - Ether unit conversions (wei, gwei, ether)
  - Understanding 1 ether = 10^18 wei
  - Unit literals in Solidity (`1 wei`, `1 gwei`, `1 ether`)
  - Boolean comparisons with unit values
  - Transaction payment concepts

### 13. Arrays

- **Contract:** [`contracts/Basic/Array.sol`](contracts/Basic/Array.sol)
- **Features:**
  - Dynamic arrays (`uint256[] public arr`)
  - Fixed-size arrays (`uint256[10] public myFixedArr`)
  - Array initialization with values
  - Basic operations: `push()`, `pop()`, `get()`, `getLength()`
  - Array deletion with `delete` keyword
  - Memory arrays with `new` keyword
  - Two array removal strategies:
    - **ArrayRemoveByShifting**: Expensive but maintains order
    - **ArrayReplaceFromEnd**: Gas efficient but changes order

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
