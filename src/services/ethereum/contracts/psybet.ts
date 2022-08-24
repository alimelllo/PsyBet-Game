import type { AbiItem } from 'web3-utils';
import type { Contract } from 'web3-eth-contract';
import ethereumClient from '../ethereumClient';
import contractJSON from '../abi/psybet.json';
// import { ZENCATS_CONTRACT_ADDRESS } from '@/config';

const { abi } = contractJSON;

let contract: null | Contract = null;
let isInitialing = false;
let onInitializedFns: Function[] = [];

function onInitialized(fn: () => void) {
  onInitializedFns.push(fn);
}

function initialized() {
  onInitializedFns.forEach((fn) => fn());

  onInitializedFns = [];
}

async function init() {
  isInitialing = true;
  const client = await ethereumClient.get();
  const myContract = new client.eth.Contract(abi as unknown as AbiItem,"0x1438CC75Bb1e68F6b9054438e9E27762c637CE26");
  // const myContract = new client.eth.Contract();
  contract = myContract;
  isInitialing = false;

  initialized();
  return contract;
}

async function get(): Promise<Contract> {
  if (contract) return contract;

  if (!isInitialing) {
    init();
  }
  return new Promise((resolve) => {
    onInitialized(() => resolve(contract as Contract));
  });
}

const zencatsContract = {
  get,
};

export default zencatsContract;
