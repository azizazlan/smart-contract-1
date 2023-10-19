// SPDX-License-Identifier: Unlicensed
pragma solidity ^0.8.0;

contract SalamMelaka {
    string public name;
    uint256 public age;
    event AgeChanged(uint256 newAge);

    constructor(string memory _name) {
        name = _name;
        age = 21;
    }

    function salam() public view returns (string memory) {
        return string(abi.encodePacked("Assalamualaikum, ", name, "!"));
    }

    function changeName(string memory _name) public {
        name = _name;
    }

    function changeAge(uint256 _age) public {
        age = _age;
        emit AgeChanged(_age);
    }
}
