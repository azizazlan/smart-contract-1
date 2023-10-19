import { time, loadFixture } from "@nomicfoundation/hardhat-network-helpers";
import { anyValue } from "@nomicfoundation/hardhat-chai-matchers/withArgs";
import { expect } from "chai";
import { ethers } from "hardhat";

describe("SimpleId", function () {
  async function deploySimpleId() {
    // Contracts are deployed using the first signer/account by default
    const [owner, exec1, exec2, exec3] = await ethers.getSigners();
    const SimpleId = await ethers.getContractFactory("SimpleId");
    const simpleId = await SimpleId.deploy();

    return { simpleId, owner, exec1, exec2, exec3 };
  }
});
