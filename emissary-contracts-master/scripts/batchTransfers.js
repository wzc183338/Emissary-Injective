const { ethers } = require("ethers");
const {
  abi,
  bytecode,
} = require("../artifacts/contracts/batchTranfers.sol/BatchTransfers.json");

// Replace these with your actual values
const privateKey = "your private key ";
const infuraApiKey = "your rpc url";

// Set up the provider and wallet
const infuraProvider = new ethers.providers.JsonRpcProvider(infuraApiKey);
const wallet = new ethers.Wallet(privateKey, infuraProvider);

// Replace with the compiled batchTransfers contract bytecode and ABI

async function deploybatchTransfers() {
  // Deploy the batchTransfers contract
  const factory = new ethers.ContractFactory(abi, bytecode, wallet);
  const batchTransfers = await factory.deploy();

  await batchTransfers.deployed();

  console.log("batchTransfers deployed to:", batchTransfers.address);
}

deploybatchTransfers();
