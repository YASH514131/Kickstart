const HDWalletProvider = require('@truffle/hdwallet-provider');
const { Web3 } = require('web3');
const compiledFactory = require('./build/CampaignFactory.json');
const compiledCampaign = require('./build/Campaign.json');

const provider = new HDWalletProvider(
  'alert hope suit bridge fatal below secret false dress head atom hungry',
  // remember to change this to your own phrase!
  'https://sepolia.infura.io/v3/b254b118e56b4b34bc2faf7921317c4f'
  // remember to change this to your own endpoint!
);
const web3 = new Web3(provider);

const deploy = async () => {
  const accounts = await web3.eth.getAccounts();

  console.log('Attempting to deploy from account', accounts[0]);

  const result = await new web3.eth.Contract(JSON.parse(compiledFactory.interface))
    .deploy({ data: compiledFactory.bytecode })
    .send({ gas: '1000000', from: accounts[0] });

  
  console.log("Contract deployed to", result.options.address);
  provider.engine.stop();
};
deploy();
