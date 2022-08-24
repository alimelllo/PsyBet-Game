import React, { useEffect, useState } from 'react';
import { ethAccounts, ethCain } from '../ethereum/api';
import ethereumClient, { EthClientType } from './ethereumClient';
import EthereumContext from './shared/EthereumContext';
import { ETHEREUM_NETWORK_ID, METAMASK_DAPP } from '../config';

interface IProps {
  children: React.ReactNode;
}

export default function EthereumProvider({ children }: IProps) {
  const [isInitialized, setIsInitialized] = useState(false);
  const [client, setClient] = useState<EthClientType | null>(null);
  const [clientDetected, setClientDetected] = useState(false);
  const [isConnected, setIsConnected] = useState(false);
  const [currentNetwork, setCurrentNetwork] = useState<number|null>(null);
  const [currentAccount, setCurrentAccount] = useState<string|null>(null);
  const [isMainNetwork, setIsMainNetwork] = useState(false);
  const [zencatBalanceOf, setZencatBalanceOf] = useState(0);

  async function connect() {
    if (!isInitialized) {
      throw new Error('Ethereum Client Not Initialized!');
    }
    if (!client && window) {
      const url = window?.location?.href;
      let combinedDapp;
      if (url) { combinedDapp = METAMASK_DAPP + url; } else {
        combinedDapp = METAMASK_DAPP;
      }
      window.open(combinedDapp, '_blank');
    }

    const [account] = await ethAccounts.getAccounts();
    const chainId = await ethCain.getChain();
    setCurrentAccount(account);
    setCurrentNetwork(chainId);
    setIsMainNetwork(String(chainId) === ETHEREUM_NETWORK_ID);
    setIsConnected(true);
    return ({ account, chainId });
  }

  async function disconnect() {
    setIsConnected(false);
    setCurrentAccount(null);
    setCurrentNetwork(null);
  }

  useEffect(() => {
    if (!isInitialized || !clientDetected) return () => {};

    async function handleAccountsChanged(accounts: string[]) {
      if (!accounts.length || accounts.length <= 0) {
        // Account locked
        await disconnect();
        return;
      }

      if (accounts.length && accounts[0] !== currentAccount) {
        // Account changed
        setCurrentAccount(accounts[0]);
      }
    }

    function handleChainChanged(chain: number) {
      setIsMainNetwork(String(chain) === ETHEREUM_NETWORK_ID);
      setCurrentNetwork(chain);
    }

    ethAccounts.onAccountsChanged(handleAccountsChanged);
    ethCain.onChainChanged(handleChainChanged);

    return () => {
      ethAccounts.removeOnAccountsChanged(handleAccountsChanged);
      ethCain.removeOChainChanged(handleChainChanged);
    };
  }, [currentAccount, isInitialized, clientDetected]);

  const initilizeConnection = async () => {
    if (client) {
      const accounts = await client.eth.getAccounts();
      if (accounts && accounts.length > 0) {
        connect();
      }
    }
  };

  useEffect(() => {
    if (isInitialized) {
      initilizeConnection();
    }
  }, [isInitialized]);

  useEffect(() => {
    ethereumClient.init().then((initializedClient) => {
      setClient(initializedClient);
      setClientDetected(true);
    }).catch(() => {
      setClient(null);
      setClientDetected(false);
    }).finally(() => {
      setIsConnected(false);
      setIsInitialized(true);
    });
  }, []);

  return (
    // eslint-disable-next-line react/jsx-no-constructed-context-values
    <EthereumContext.Provider value={{
      isInitialized,
      client,
      isConnected,
      connect,
      disconnect,
      currentAccount,
      currentNetwork,
      isMainNetwork,
      clientDetected,
    }}
    >
      {children}
    </EthereumContext.Provider>
  );
}
