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

  describe("Setting nrics with accounts", function () {
    it("should be able to assign nric to a wallet", async function () {
      const { simpleId, exec1 } = await loadFixture(deploySimpleId);
      const nric1 = 750117095107;
      await simpleId.setNric(exec1.address, nric1);

      const filterNricSet = await simpleId.filters.NricSet(null, null);
      const eventFiltered = await simpleId.queryFilter(filterNricSet);

      expect(eventFiltered[0].args.nric).equals(nric1);

      expect(await simpleId.nrics(nric1)).equals(exec1.address);
    });
  });
});
