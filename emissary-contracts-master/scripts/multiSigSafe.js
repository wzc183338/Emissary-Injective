const { ethers } = require("ethers");
const {
  abi,
  bytecode,
} = require("../artifacts/contracts/MultiSigSafe.sol/MultiSigSafe.json");

// Replace these with your actual values
const privateKey = "your private key ";
const infuraApiKey = "your rpc url";

// Set up the provider and wallet
const infuraProvider = new ethers.providers.JsonRpcProvider(infuraApiKey);
const wallet = new ethers.Wallet(privateKey, infuraProvider);

// Replace with the compiled MultiSigSafe contract bytecode and ABI

async function deployMultiSigSafe() {
  // Deploy the MultiSigSafe contract
  const factory = new ethers.ContractFactory(abi, bytecode, wallet);
  const multiSigSafe = await factory.deploy();

  await multiSigSafe.deployed();

  console.log("MultiSigSafe deployed to:", multiSigSafe.address);
}

deployMultiSigSafe();
