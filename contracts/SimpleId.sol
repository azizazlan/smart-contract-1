// SPDX-License-Identifier: Unlicensed
pragma solidity ^0.8.0;

contract SimpleId {
    mapping(uint256 => address) public nrics;

    event NricSet(address user, uint256 nric);

    constructor() {}

    function setNric(address user, uint256 nric) public {
        nrics[nric] = user;
        emit NricSet(user, nric);
    }
}
