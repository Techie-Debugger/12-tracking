# 🚚 Stellar Shipment Tracking System

A decentralized application (dApp) for creating, managing, and tracking shipments on the **Stellar Blockchain** using **Soroban** smart contracts. This project provides a transparent and immutable ledger for logistics, ensuring trust between senders and receivers.

![Project Banner](https://img.shields.io/badge/Stellar-Blockchain-blue?style=for-the-badge)
![React](https://img.shields.io/badge/React-19.0-61DAFB?style=for-the-badge&logo=react)
![Vite](https://img.shields.io/badge/Vite-8.0-646CFF?style=for-the-badge&logo=vite)

## ✨ Features

- **Freighter Wallet Integration**: Securely connect and sign transactions using the [Freighter Wallet](https://www.freighter.app/) extension.
- **On-Chain Shipment Creation**: Record shipment details (Sender, Receiver, Origin, Destination, Weight) directly on the Stellar network.
- **Dynamic Status Updates**: Track shipments through multiple stages: `created`, `in_transit`, `out_for_delivery`, and `delivered`.
- **Checkpoint Logging**: Add granular location updates and custom notes to every shipment, providing a full audit trail.
- **Transparent Querying**:
  - `Get Shipment`: View full details and history for a specific ID.
  - `List Shipments`: Browse all shipments managed by the contract.
  - `Get Count`: Real-time count of all shipments recorded on-chain.
- **Modern UI**: A responsive, high-performance interface built with React and Vite, featuring glassmorphism and a sleek dark theme.

## 🛠️ Technical Stack

- **Frontend**: [React 19](https://react.dev/) + [Vite](https://vitejs.dev/)
- **Blockchain**: [Stellar SDK](https://github.com/stellar/js-stellar-sdk)
- **Smart Contracts**: [Soroban](https://soroban.stellar.org/) (WASM-based contracts)
- **Styling**: Vanilla CSS with modern design patterns.

## 🔗 Contract Details

- **Network**: Stellar Testnet
- **Contract ID**: `CAD5XNVMV7ZVIMLKUIKCTRCREPHZ4U2YIELTIFEBFSHUROKGOIORU4OP`
- **RPC Endpoint**: `https://soroban-testnet.stellar.org`

## 🚀 Getting Started

### Prerequisites

1.  **Node.js**: Install from [nodejs.org](https://nodejs.org/).
2.  **Freighter Wallet**: Install the browser extension from [freighter.app](https://www.freighter.app/).
3.  **Testnet Account**: Ensure you have a Stellar account on the **Testnet** with some test XLM. You can fund your account using [Friendbot](https://stellar.org/laboratory/#account-creator?network=testnet).

### Installation

1.  Clone the repository:
    ```bash
    git clone https://github.com/your-username/stellar-shipment-tracking.git
    cd stellar-shipment-tracking/my-stellar-app
    ```

2.  Install dependencies:
    ```bash
    npm install
    ```

3.  Start the development server:
    ```bash
    npm run dev
    ```

### Usage

1.  **Connect Wallet**: Click the "Connect Wallet" button on the landing page to link your Freighter account.
2.  **Create Shipment**: Fill in the "New Shipment" form and submit to record it on the blockchain.
3.  **Update Tracking**: Use the "Update Tracking" section to change status or add checkpoints.
4.  **Query**: Use the buttons in "Delivery Actions" to fetch real-time data from the Stellar network.

## 📝 License

This project is licensed under the MIT License.
