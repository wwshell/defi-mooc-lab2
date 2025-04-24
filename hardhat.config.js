require("@nomiclabs/hardhat-waffle");
require("dotenv").config(); // 加载 .env 文件

module.exports = {
  defaultNetwork: "hardhat",
  networks: {
    hardhat: {
      chainId: 1,
      forking: {
        url: process.env.ALCHE_API,
        blockNumber: 12489619
      },
      mining: {
        auto: true
      },
      gasPrice: 0,
      initialBaseFeePerGas: 0,
      accounts: {
        mnemonic: "swap swap swap swap swap swap swap swap swap swap swap swap"
      }
    }
  },
  solidity: {
    version: "0.8.7",
    settings: {
      optimizer: {
        enabled: true,
        runs: 200
      }
    }
  },
  mocha: {
    timeout: 600000
  }
};
