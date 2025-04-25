module.exports = {
    networks: {
      development: {
        host: "127.0.0.1",
        port: 8545,
        network_id: "*", 
      },
      rinkeby: {
        provider: () =>
          new HDWalletProvider(
            "oblige slush flush invest evolve woman expire clarify theory clerk gospel knife",
            `https://mainnet.infura.io/v3/d0113a6cd39849c6866096e4fdb90356`
          ),
        network_id: 4,      
        gas: 4500000,        // Gas limit
        gasPrice: 10000000000,  // Gas price
      },
    },
    compilers: {
      solc: {
        version: "0.8.0",    // Specify the Solidity compiler version
      },
    },
  };
  