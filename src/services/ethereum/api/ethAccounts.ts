import ethereumClient from '../ethereumClient';

export async function getAccounts(): Promise<string[]> {
  const client = await ethereumClient.get();
  return client.currentProvider.request({ method: 'eth_requestAccounts' });
}

export async function onAccountsChanged(callback: (accounts: string[]) => void) {
  const client = await ethereumClient.get();
  client.currentProvider.on('accountsChanged', callback);
}

export async function removeOnAccountsChanged(callback: (accounts: string[]) => void) {
  const client = await ethereumClient.get();
  client.currentProvider.removeListener('accountsChanged', callback);
}
