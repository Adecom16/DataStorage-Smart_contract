import { ethers } from "hardhat";

async function main() {
  const contractAddress = "0xFa87C4c96b092Ed5273759eEA806cd6C40259b93";
  const SimpleStorage = await ethers.getContractFactory("SimpleStorage");
  const simpleStorage = SimpleStorage.attach(contractAddress);

  // Set data in the SimpleStorage contract
  const setDataTx = await simpleStorage.setData("Hello, world!");
  await setDataTx.wait();
  console.log("Data set successfully!");

  // Get data from the SimpleStorage contract
  const getData = await simpleStorage.getData();
  console.log("Retrieved data:", getData);
}

main()
  .then(() => process.exit(0))
  .catch(error => {
    console.error(error);
    process.exit(1);
  });
