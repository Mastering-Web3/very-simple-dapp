# Very Simple Dapp

In this dapp, a lock contract is implemented with a frontend.

## How to run

1. Install dependencies

```bash
npm install
```

2. Run the hardhat node. This will create 20 accounts with 10000 ETH each. The zeroth account is the owner of the contract.

```bash
npx hardhat node
```

3. Connect the node with Metamask. 
    - Go to Metamask > Click on networks tab > Click on add network > Add network manually > Fill in the following details
```bash
Network Name: localhost
RPC URL: http://localhost:8545
Chain ID: 31337
Currency Symbol: ETH
```

4. Add some accounts to Metamask (Use the private keys from the hardhat node), don't forget to import the zeroth account it is the owner of the contract.
    - Go to Metamask > Click on account icon > Import account > Paste the private key > Click on Import


5. Deploy the contract

```bash
npx hardhat run scripts/deploy.js --network localhost
```

5. Load the frontend using VSCode Live Server extension. 
    - Right click on index.html > Open with Live Server

6. Interact with the frontend.

In the browser go to developer tools and check the console for logs.

If getting error nonce too low, reset the account in Metamask. Go to Metamask > Click on account icon > Click on settings > Advanced > Clear Activity tab data. 