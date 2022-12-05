// const { ALCHEMY_API_KEY, GOERLI_PRIVATE_KEY } = require("dotenv").config();
require("@nomicfoundation/hardhat-toolbox");
require("ethers");
require('@nomiclabs/hardhat-ethers');

const { ALCHEMY_API_KEY, GOERLI_PRIVATE_KEY } = require("dotenv").config();


// Go to https://www.alchemyapi.io, sign up, create
// a new App in its dashboard, and replace "KEY" with its key

// Replace this private key with your Goerli account private key
// To export your private key from Metamask, open Metamask and
// go to Account Details > Export Private Key
// Beware: NEVER put real Ether into testing accounts

module.exports = {
  solidity: "0.8.9",
  networks: {
    goerli: {
      url: `https://eth-goerli.alchemyapi.io/v2/${ALCHEMY_API_KEY}`,
      accounts: [GOERLI_PRIVATE_KEY]
    }
  }
};
