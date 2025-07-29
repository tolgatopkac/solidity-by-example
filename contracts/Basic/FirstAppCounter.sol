// SPDX-License-Identifier: MIT
pragma solidity ^0.8.26;

contract Counter {
    uint256 public count;

    // if u create a variable public
    // it automatically creates a getter function
    /* 
    function count() public view returns (uint256) {
    return count;
    }
    */

    function inc() external {
        count += 1;
    }

    function dec() external {
        require(count > 0, "Count must be greater than zero to decrement");
        count -= 1;
    }

    function reset() external {
        count = 0;
    }
}
