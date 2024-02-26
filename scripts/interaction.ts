import { ethers } from "hardhat";

async function main() {
  const SimpleStorageFactory = await ethers.getContractFactory(
    "SimpleStorageFactory"
  );
  const factory = await SimpleStorageFactory.deploy();
//   await factory.deployed();
  console.log("Factory deployed to:", factory.address);

  // Call the createSimpleStorage function
  const tx = await factory.createSimpleStorage();
  await tx.wait();

  console.log("SimpleStorage created:", tx.events[0].args[1]);
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
