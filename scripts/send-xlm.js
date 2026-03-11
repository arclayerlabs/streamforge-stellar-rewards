require('dotenv').config();
const StellarSdk = require('@stellar/stellar-sdk');

// Load sender wallet from .env
const senderSecret = process.env.SENDER_SECRET;
const senderKeypair = StellarSdk.Keypair.fromSecret(senderSecret);

// Recipient wallet public key
const recipientPublicKey = process.env.RECIPIENT_PUBLIC;

// Connect to testnet
const server = new StellarSdk.Server('https://horizon-testnet.stellar.org');
StellarSdk.Networks.TESTNET;

(async () => {
  try {
    // Load account details
    const account = await server.loadAccount(senderKeypair.publicKey());

    // Build transaction
    const transaction = new StellarSdk.TransactionBuilder(account, {
      fee: await StellarSdk.BASE_FEE,
      networkPassphrase: StellarSdk.Networks.TESTNET
    })
      .addOperation(StellarSdk.Operation.payment({
        destination: recipientPublicKey,
        asset: StellarSdk.Asset.native(),
        amount: '1'
      }))
      .setTimeout(30)
      .build();

    // Sign transaction
    transaction.sign(senderKeypair);

    // Submit to Stellar network
    const result = await server.submitTransaction(transaction);
    console.log('Transaction successful!');
    console.log(result);
  } catch (err) {
    console.error('Transaction failed:', err.response?.data || err);
  }
})();