# streamforge-stellar-rewards

A Stellar-based reward distribution module for the StreamForge ecosystem.
Handles the creation and release of contributor rewards using USDC on the Stellar blockchain.

> 🚧 Early development — contributions are welcome!

---

## Overview

`streamforge-stellar-rewards` is responsible for the payment layer of StreamForge. When a contributor completes approved work, this module handles locking and releasing USDC rewards trustlessly on the Stellar blockchain.

It is designed to be minimal, modular, and extensible — core logic is intentionally left unimplemented and open for contributors to build.

---

## How The Reward Flow Works
```
Maintainer posts bounty on issue
         ↓
USDC is locked in escrow
         ↓
Contributor picks up issue and submits PR
         ↓
Maintainer reviews and approves PR
         ↓
Escrow releases USDC to contributor's Stellar wallet
```

---

## Project Structure
```
streamforge-stellar-rewards/
├── src/
│   └── escrow.js        # Escrow creation and release logic (stub)
├── utils/
│   └── wallet.js        # Stellar wallet generation and loading utilities
├── .env.example         # Environment variable template
├── package.json
└── README.md
```

---

## Getting Started

### Prerequisites
- Node.js v18 or higher
- A Stellar testnet wallet — generate one at https://laboratory.stellar.org
- Funded testnet account — use the Stellar Friendbot at https://friendbot.stellar.org

### Installation
```bash
# Clone the repository
git clone https://github.com/arclayerlabs/streamforge-stellar-rewards.git

# Navigate into the project
cd streamforge-stellar-rewards

# Install dependencies
npm install

# Copy the environment variable template
cp .env.example .env
```

### Configuration

Open your `.env` file and fill in your values:
```bash
SENDER_SECRET=your_stellar_secret_key_here
RECIPIENT_PUBLIC=recipient_stellar_public_key_here
STELLAR_NETWORK=testnet
```

> ⚠️ Never commit your `.env` file. It is already listed in `.gitignore`.

---

## Current Status

| Feature | Status |
|---|---|
| Wallet generation and loading | ✅ Done |
| Escrow creation | 🔲 Open for contribution |
| Escrow release | 🔲 Open for contribution |
| USDC asset support | 🔲 Open for contribution |
| Error handling | 🔲 Open for contribution |
| Test coverage | 🔲 Open for contribution |

---

## Contributing

Contributions are what make this project grow. Check the open issues to find tasks you can work on.

### Steps to contribute

1. Fork the repository
2. Create a new branch: `git checkout -b feature/your-feature-name`
3. Make your changes
4. Commit your changes: `git commit -m "add: your descriptive message"`
5. Push to your branch: `git push origin feature/your-feature-name`
6. Open a Pull Request

Please make sure your code is clean and well commented before submitting.

---

## Network

This project runs on the **Stellar testnet** by default.

> ⚠️ Never run against mainnet without thorough testing. Stellar transactions are irreversible.

To switch to mainnet set `STELLAR_NETWORK=mainnet` in your `.env` file.

---

## License

MIT — see [LICENSE](./LICENSE) for details.
