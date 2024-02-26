// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

import "./SimpleStorage.sol";

contract SimpleStorageFactory {
    event SimpleStorageCreated(address indexed owner, address indexed simpleStorage);

    function createSimpleStorage() external returns (address) {
        SimpleStorage simpleStorage = new SimpleStorage();
        emit SimpleStorageCreated(msg.sender, address(simpleStorage));
        return address(simpleStorage);
    }
}
