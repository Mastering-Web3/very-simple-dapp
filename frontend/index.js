import { ethers } from "./ethers.js";

// check if MetaMask exists
if (typeof window.ethereum !== 'undefined') {
    console.log('MetaMask is installed!');
}

// create a new ethers.js provider using that MetaMask instance
const provider = new ethers.providers.Web3Provider(window.ethereum);

// connect to MetaMask on button click
document.getElementById('connect').onclick = async function () {
    // MetaMask requires requesting permission to connect users accounts
    await provider.send("eth_requestAccounts", []);
}

// get the network
const network = await provider.getNetwork();
console.log(network);

// get the account
const signer = provider.getSigner();
const account = await signer.getAddress();
console.log(account);

// edit DOM to show account
document.getElementById('account').innerHTML = account;

// get the balance
const balance = ethers.utils.formatEther(await signer.getBalance());
console.log(balance);

// edit DOM to show balance
document.getElementById('balance').innerHTML = balance;

// get this from hardhat
const contractAddress = "0x5FbDB2315678afecb367f032d93F642f64180aa3";

// get the contract's abi from the artifacts/contracts folder
const abi = [ // abi is an array of objects describing the contract's functions and arguments
    {
        "inputs": [
            {
                "internalType": "uint256",
                "name": "_unlockTime",
                "type": "uint256"
            }
        ],
        "stateMutability": "payable",
        "type": "constructor"
    },
    {
        "anonymous": false,
        "inputs": [
            {
                "indexed": false,
                "internalType": "uint256",
                "name": "amount",
                "type": "uint256"
            },
            {
                "indexed": false,
                "internalType": "uint256",
                "name": "when",
                "type": "uint256"
            }
        ],
        "name": "Withdrawal",
        "type": "event"
    },
    {
        "inputs": [],
        "name": "owner",
        "outputs": [
            {
                "internalType": "address payable",
                "name": "",
                "type": "address"
            }
        ],
        "stateMutability": "view",
        "type": "function"
    },
    {
        "inputs": [],
        "name": "unlockTime",
        "outputs": [
            {
                "internalType": "uint256",
                "name": "",
                "type": "uint256"
            }
        ],
        "stateMutability": "view",
        "type": "function"
    },
    {
        "inputs": [],
        "name": "withdraw",
        "outputs": [],
        "stateMutability": "nonpayable",
        "type": "function"
    }
]

// create a new ethers.js contract instance
const contract = new ethers.Contract(contractAddress, abi, signer);

// edit DOM to show contract address
document.getElementById('contractAddress').innerHTML = contractAddress;

// edit DOM to show contract balance
document.getElementById('contractBalance').innerHTML = ethers.utils.formatEther(await provider.getBalance(contractAddress));

// edit DOM to show contract owner
document.getElementById('contractOwner').innerHTML = await contract.owner();

// edit DOM to show contract unlock time
document.getElementById('unlockTime').innerHTML = new Date((await contract.unlockTime()).toNumber() * 1000).toLocaleString();

// add event Listener to withdraw button
document.getElementById('withdraw').onclick = async function () {
    try {
        // show tx object in console
        console.log(await contract.withdraw());

    } catch (err) {
        // show error in console
        console.log(err);

    }
}