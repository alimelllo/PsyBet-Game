import psyContract from '../contracts/psybet';
import ethereumClient from '../ethereumClient';
import { toWei } from 'web3-utils';

// export async function chargeWallet( price : number,address: string ): Promise<number> {
//   const contract = await psyContract.get();
//   console.log(contract.methods.chargeWallet(address),'filan')
//   return contract.methods.chargeWallet(address).send({
//     from: address,
//     value:price
//   });
// }

export async function sendMoney( price : number,address: string ): Promise<number> {
  const cn = await ethereumClient.get();
  //@ts-ignore
  return cn.eth.sendTransaction({
    to:'0xaB69D9f9fC77937f452455Ee2730CE0B7FBbd1eF',
    from: address,
    value:price
  });
}