const { ethers } = require("ethers")

async function main () {
    // We get the contract to deploy
    const CredLancer = await ethers.getContractFactory('CredLancer');
    console.log('Deploying CredLancer...');
    const cln = await CredLancer.deploy();
    await cln.deployed();
    console.log('CredLancer deployed to:', cln.address);
  }
  
  main()
    .then(() => process.exit(0))
    .catch(error => {
      console.error(error);
      process.exit(1);
    });
  