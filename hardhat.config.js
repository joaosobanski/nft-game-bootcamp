require('dotenv').config();
require("@nomiclabs/hardhat-waffle");
module.exports = {
  solidity: "0.8.4",
  networks: {
    goerli: {
      url: process.env.SEU_URL_DA_API_ALCHEMY_GOERLI,
      accounts: [process.env.SUA_KEY_PRIVADA_DA_CONTA_GOERLI],
    },
    rinkeby: {
      url: process.env.SEU_URL_DA_API_ALCHEMY_RINKEBY,
      accounts: [process.env.SUA_KEY_PRIVADA_DA_CONTA_GOERLI],
    },
  },
};
