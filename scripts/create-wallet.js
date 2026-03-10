// Import the Stellar SDK
const StellarSdk = require("@stellar/stellar-sdk");

// Generate a random Stellar keypair (wallet)
const pair = StellarSdk.Keypair.random();

// Print wallet information
console.log("New Stellar Wallet Created\n");

console.log("Public Key (Wallet Address):");
console.log(pair.publicKey());

console.log("\nSecret Key (Private Key):");
console.log(pair.secret());