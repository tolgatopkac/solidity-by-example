// SPDX-License-Identifier: MIT
pragma solidity ^0.8.26;

// Immutable variables are like constants
// Values of immutable variables can be set in inside
// the constructor but cannot be modified afterwards.

contract Immutable {
    address public immutable MY_ADDRESS;
    uint256 public immutable MY_UINT;

    constructor(uint256 _myUint) {
        MY_ADDRESS = msg.sender;
        MY_UINT = _myUint;
    }
}
