import { createContext } from 'react';
import { EthClientType } from '../ethereumClient';

interface connectReturns {
  chainId:number, account:string
}
export type EthereumContextType = {
  isInitialized: boolean;
  client: null | EthClientType;
  isConnected: boolean;
  connect:() => Promise<connectReturns>;
  disconnect: () => Promise<void>;
  currentNetwork: number | null;
  currentAccount: string | null;
  isMainNetwork: boolean;
  clientDetected: boolean;
};

const EthereumContext = createContext<EthereumContextType | null>(null);

export default EthereumContext;
