import web3 from './web3';
import CampaignFactory from './build/CampaignFactory.json';

const instance = new web3.eth.Contract(
  JSON.parse(CampaignFactory.interface),
  '0xbDeD7cce3Cd5fC9a7800C786208C5fA3F41Be743'
);

export default instance;