// key from alchemy
// https://eth-ropsten.alchemyapi.io/v2/ZCiamtEl9PMMNgPEQEla7xMx6eXe1wd_

require("@nomiclabs/hardhat-waffle");

module.exports = {
  solidity: "0.8.0",
  networks: {
    ropsten: {
      url: "https://eth-ropsten.alchemyapi.io/v2/ZCiamtEl9PMMNgPEQEla7xMx6eXe1wd_",
      accounts: [
        "8b941aa18873f1ae33ec7e57b647570aca1f601536933ee54287d389db68e8a8",
      ],
    },
  },
};
