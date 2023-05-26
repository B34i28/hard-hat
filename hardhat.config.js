require("@nomicfoundation/hardhat-toolbox");

const INFURA_API_KEY = "c1e7503142d040c5b4756f97447433e1";

const SEPOLIA_PRIVATE_KEY = "BG4CFS83ULu3Ns8oqSW6ObVu1K3pUzta";

/** @type import('hardhat/config').HardhatUserConfig */
module.exports = {
  solidity: "0.8.18",
  networks: {
    sepolia: {
      url: `https://sepolia.infura.io/v3/${c1e7503142d040c5b4756f97447433e1}`,
      accounts: [BG4CFS83ULu3Ns8oqSW6ObVu1K3pUzta]
    }
  }
};
