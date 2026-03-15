require('dotenv').config();
const StellarSdk = require('@stellar/stellar-sdk');
const { loadWallet } = require('../utils/wallet');

/**
 * Connects to the Stellar network.
 * Defaults to testnet. Set STELLAR_NETWORK=mainnet in .env for production.
 */
const server = new StellarSdk.Server(
  process.env.STELLAR_NETWORK === 'mainnet'
    ? 'https://horizon.stellar.org'
    : 'https://horizon-testnet.stellar.org'
);

const networkPassphrase =
  process.env.STELLAR_NETWORK === 'mainnet'
    ? StellarSdk.Networks.PUBLIC
    : StellarSdk.Networks.TESTNET;

/**
 * Creates an escrow payment to a contributor.
 * 
 * TODO: Implement full escrow logic with USDC asset
 * TODO: Add escrow release conditions
 * TODO: Add error handling for failed transactions
 * 
 * @param {string} contributorPublicKey - Stellar public key of the contributor
 * @param {string} amount - Amount of USDC to escrow
 * @returns {Promise<object>} - Transaction result
 */
async function createEscrow(contributorPublicKey, amount) {
  // TODO: implement escrow creation
  throw new Error('Not implemented yet — see issue #2');
}

/**
 * Releases escrowed USDC to a contributor after work is approved.
 * 
 * TODO: Implement release logic triggered by PR merge
 * TODO: Verify approval conditions before releasing
 * 
 * @param {string} contributorPublicKey - Stellar public key of the contributor
 * @param {string} amount - Amount of USDC to release
 * @returns {Promise<object>} - Transaction result
 */
async function releaseEscrow(contributorPublicKey, amount) {
  // TODO: implement escrow release
  throw new Error('Not implemented yet — see issue #1');
}

module.exports = { createEscrow, releaseEscrow };
