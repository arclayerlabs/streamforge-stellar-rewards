const StellarSdk = require('@stellar/stellar-sdk');

/**
 * Generates a new random Stellar keypair.
 * USE WITH CAUTION — never share or expose the secret key.
 *
 * @returns {{ publicKey: string, secretKey: string }}
 */
function generateWallet() {
  const keypair = StellarSdk.Keypair.random();

  return {
    publicKey: keypair.publicKey(),
    secretKey: keypair.secret(),
  };
}

/**
 * Loads an existing wallet from a secret key.
 *
 * @param {string} secretKey
 * @returns {{ publicKey: string, keypair: object }}
 */
function loadWallet(secretKey) {
  const keypair = StellarSdk.Keypair.fromSecret(secretKey);

  return {
    publicKey: keypair.publicKey(),
    keypair,
  };
}

module.exports = { generateWallet, loadWallet };
