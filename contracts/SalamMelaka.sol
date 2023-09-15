// SPDX-License-Identifier: Unlicensed
pragma solidity ^0.8.0;

contract SalamMelaka {
    string public name;

    constructor(string memory _name) {
        name = _name;
    }

    function salam() public view returns (string memory) {
        return string(abi.encodePacked("Assalamualaikum, ", name, "!"));
    }
}
