// SPDX-License-Identifier: MIT
pragma solidity ^0.8.26;

// There are 2 upper bounds to the amount of gas you can spend

// gas limit ( max amount of gas you're willing to use for transaction, set by you )
// block gas limit ( max amount of gas allowed in a block, set by network)

contract Gas {
    uint256 public i = 0;

    // Using up all of the gas that you send causes your transaction to fail.
    // State changes are undone.
    // Gas spent is not refunded.

    function forever() public {
        // Here we run a loop until all of the gas are spent.
        // and the transaction fails.

        while (true) {
            i++;
        }
    }
}

/* Gas = The "fuel" required to perform operations
Gas Price = The price of this fuel
Gas Limit = Maximum amount of fuel you're willing to use
Block Gas Limit = Maximum limit set by the network */
