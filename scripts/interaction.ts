import { ethers } from "hardhat";

async function main() {
  const contractAddress = "0x2638272CC3C60Dd3F4017261f39f8cb3A32EC2f0";
  const SimpleStorage = await ethers.getContractFactory("SimpleStorage");
  const simpleStorage = SimpleStorage.attach(contractAddress);


  const setDataTx = await simpleStorage.setData("Hello, world!");
  await setDataTx.wait();
  console.log("Data set successfully!");

  const getData = await simpleStorage.getData();
  console.log("Retrieved data:", getData);
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
