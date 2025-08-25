import web3 from './web3';
import CampaignFactory from './build/CampaignFactory.json';

const instance = new web3.eth.Contract(
  JSON.parse(CampaignFactory.interface),
'0x504F50f5e2E075f2c19e9ebbB7a3B1d44F3d9Dc1'
);

export default instance;