const abi = require('../abis/abi.json');
const Web3 = require('web3'); // Import Web3 library
const web3 = new Web3(window.ethereum);
const contractAddress = '0x8638BF6B932764Db8C81ECBAA92f36BcAf369cDc';
const contract = new web3.eth.Contract(abi, contractAddress);


import { getMessage } from './message';

export const onRpcRequest = async ({
  origin,
  request,
}) => {
  // Make the function async
  switch (request.method) {
    case 'getPendingInvoices': // Add a new case for the new method
      const accounts = await window.ethereum.request({
        method: 'eth_requestAccounts',
      }); // Request user accounts
      const pendingInvoices = await contract.methods
        .getPayments(accounts[0])
        .call(); // Call the getPayments method on the contract
      return pendingInvoices; // Return the result
    case 'payLatestInvoice':
      const latestInvoice = await contract.methods.getLatestInvoice().call(); // Call the getLatestInvoice method on the contract
      const result = await contract.methods
        .payInvoice(latestInvoice)
        .send({ from: accounts[0] }); // Call the payInvoice method on the contract, reusing the 'accounts' variable from the previous case
      return result; // Return the transaction result
    case 'hello':
      return snap.request({
        method: 'snap_confirm',
        params: [
          {
            prompt: getMessage(origin),
            description:
              'This custom confirmation is just for display purposes.',
            textAreaContent:
              'Edit the source code to make your snap do what you want.',
          },
        ],
      });
    default:
      throw new Error('Method not found.');
  }
};
