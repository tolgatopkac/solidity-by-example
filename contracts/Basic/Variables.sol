// SPDX-License-Identifier: MIT
pragma solidity ^0.8.26;

/* 

    - local
        * declared inside a function
        * not stored on the blockchain
    - state
        * declared outside a function
        * stored on the blockchain
    - global
        * available everywhere
        * stored on the blockchain
 */
contract Variables {
    string public text = "Hello";
    uint256 public num = 123;

    function doSomething() public {
        uint256 i = 456;

        uint256 timestamp = block.timestamp;
        address sender = msg.sender;
    }
}
