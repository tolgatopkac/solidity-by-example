// SPDX-License-Identifier: MIT
pragma solidity ^0.8.26;

/* 
- Maps are created with the syntax `mapping(keyType => valueType)`.
- The keyType can be any built-in value type, bytes, string, or any contract.
- valueType can be any type, including another mapping or an array.
- Mappings are not iterable.
 */

contract Mapping {
    // Mapping from address to uint

    mapping(address => uint256) public myMap;

    function get(address _addr) public view returns (uint256) {
        // Mapping always returns a value
        // If the value was never set, it will return the default value.

        return myMap[_addr];
    }

    function set(address _addr, uint256 _i) public {
        // Update the value at this address
        myMap[_addr] = _i;
    }

    function remove(address _addr) public {
        // Reset the value to default value.
        delete myMap[_addr];
    }
}

contract NestedMapping {
    // Nested mapping from address to another mapping
    mapping(address => mapping(uint256 => bool)) public nested;

    function get(address _addr, uint256 _i) public view returns (bool) {
        // Accessing nested mapping
        return nested[_addr][_i];
    }

    function set(address _addr1, uint256 _i, bool _boo) public {
        nested[_addr1][_i] = _boo;
    }

    function remove(address _addr1, uint256 _i) public {
        delete nested[_addr1][_i];
    }
}
