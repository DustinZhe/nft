require('@nomiclabs/hardhat-waffle')
require('@openzeppelin/hardhat-upgrades')
require('dotenv').config()

require('./tasks/upload')
require('./tasks/mint')
require('./tasks/tokenURI')
require('./tasks/pack')
require('./tasks/zip')
require('./tasks/deploy')
require('./tasks/paymentInfo')
require('./tasks/price')
require('./tasks/lockTokens')
require('./tasks/metadata')
require('./tasks/uploadLockMint')

// You need to export an object to set up your config
// Go to https://hardhat.org/config/ to learn more

/**
 * @type import('hardhat/config').HardhatUserConfig
 */
module.exports = {
  solidity: '0.8.4',
  defaultNetwork: 'mumbai',
  networks: {
    mumbai: {
      url: process.env.MUMBAI_URL,
      accounts: [process.env.PRIVATE_KEY],
      contract: '0x1A1e5AC88C493e0608C84c60b7bb5f04D9cF50B3',
      mcp: {
        fs3Recipient: process.env.RECIPIENT_ADDRESS,
        uploadUrl: process.env.MCP_UPLOAD_URL,
        filecoinUrl: process.env.MCP_FILECOIN_PRICE_URL,
        paymentInfoUrl: process.env.MCP_PAYMENT_INFO_URL,
      },
      usdcAddress: process.env.USDC_ADDRESS,
      swanPaymentAddress: process.env.SWAN_PAYMENT_ADDRESS,
      storageStatsUrl: process.env.SWAN_STORAGE_STATS_URL,
    },
  },
}
