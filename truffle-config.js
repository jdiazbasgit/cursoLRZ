const HDWalletProvider = require('@truffle/hdwallet-provider');
const mnemonic = require("./.secrets.json").mnemonic;


module.exports = {
  //contracts_build_directory: './src/artifacts/',
  networks: {
   rinkeby: {
      provider: () => new HDWalletProvider(mnemonic,'https://rinkeby.infura.io/v3/a7b50694ccb343a89d0c63e9e231f1e1' ),
      network_id: 4,
      gas: 8000000,
      confirmations: 1,
      timeoutBlocks:600,
      skipDryRun:true
    },
        
      

    /* development: {
      host: "127.0.0.1",
      port: 8545,
      network_id: "*", // Match any network id
      gas: 5000000
    }*/
  },
  compilers: {
    solc: {
      version: "^0.7.0",
      settings: {
        optimizer: {
          enabled: false, // Default: false
          runs: 200      // Default: 200
        },
      }
    }
  }
};
