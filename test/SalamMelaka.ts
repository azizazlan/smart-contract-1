import { time, loadFixture } from "@nomicfoundation/hardhat-network-helpers";
import { anyValue } from "@nomicfoundation/hardhat-chai-matchers/withArgs";
import { expect } from "chai";
import { ethers } from "hardhat";

describe("SalamMelaka", function () {
  async function deploySalamMelaka() {
    // Contracts are deployed using the first signer/account by default
    const [owner, otherAccount] = await ethers.getSigners();
    const SalamMelaka = await ethers.getContractFactory("SalamMelaka");
    const salamMelaka = await SalamMelaka.deploy("Rauf Yusoh");

    return { salamMelaka, owner, otherAccount };
  }

  describe("Deployment", function () {
    it("Should return the correct Salam", async function () {
      const { salamMelaka, owner, otherAccount } = await loadFixture(
        deploySalamMelaka
      );

      expect(await salamMelaka.salam()).to.equal(
        "Assalamualaikum, Rauf Yusoh!"
      );
    });

    describe("Change state name", function () {
      it("Should change to new name", async function () {
        const { salamMelaka, owner, otherAccount } = await loadFixture(
          deploySalamMelaka
        );
        const newName = "Azlan";
        await salamMelaka.changeName(newName);
        expect(await salamMelaka.name()).equals("Azlan");
        expect(await salamMelaka.salam()).equals("Assalamualaikum, Azlan!");
      });
    });

    describe("Event emission", function () {
      it("should emit AgeChanged event", async function () {
        const { salamMelaka, owner, otherAccount } = await loadFixture(
          deploySalamMelaka
        );
        await salamMelaka.changeAge(40);
        const event = await salamMelaka.filters.AgeChanged(null);
        const eAgeChanged = await salamMelaka.queryFilter(event);
        // console.log(eAlhamdulillahEvent);
        expect(eAgeChanged[0].args.newAge).equals(40);
      });
    });
  });
});
