# Very Simple Dapp

In this dapp, a lock contract is implemented with a frontend.

## How to run

1. Install dependencies

```bash
npm install
```

2. Run the hardhat node

```bash
npx hardhat node
```

3. Connect the node with Metamask

4. Add some accounts to Metamask (Use the private keys from the hardhat node), don't forget to import the zeroth account it is the owner of the contract.

5. Deploy the contract

```bash
npx hardhat run scripts/deploy.js --network localhost
```

5. Load the frontend using VSCode Live Server extension 

6. Interact with the frontend





