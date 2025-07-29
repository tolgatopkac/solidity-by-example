// SPDX-License-Identifier: MIT
pragma solidity ^0.8.26;

// To write or update a state variable you need to send a transaction.
// On the other hand, you can read a state variables, for free,
// without any transaction fee.

contract SimpleStorage {
    // State variable to store a number
    uint256 public num;

    // you need to send a transaction to write to a state variable
    function setNum(uint256 _num) public {
        num = _num;
    }
}
