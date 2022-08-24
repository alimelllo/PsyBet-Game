import Web3 from "web3";

export const weiValue = (value : string) => Web3.utils.toWei(value, 'ether');
export const etherValue = (value : string) => Web3.utils.fromWei(value, 'ether');
