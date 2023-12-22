const { ethers } = require("ethers");
const {
  abi,
  bytecode,
} = require("../artifacts/contracts/milestoneSafe.sol/milestoneSafe.json");

// Replace these with your actual values
const privateKey = "your private key ";
const infuraApiKey = "your rpc url";

// Set up the provider and wallet
const infuraProvider = new ethers.providers.JsonRpcProvider(infuraApiKey);
const wallet = new ethers.Wallet(privateKey, infuraProvider);

// Replace with the compiled milestoneSafe contract bytecode and ABI

async function deploymilestoneSafe() {
  // Deploy the milestoneSafe contract
  const factory = new ethers.ContractFactory(abi, bytecode, wallet);
  const milestoneSafe = await factory.deploy();

  await milestoneSafe.deployed();

  console.log("milestoneSafe deployed to:", milestoneSafe.address);
}

deploymilestoneSafe();
