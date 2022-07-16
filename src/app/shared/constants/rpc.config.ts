const bitkubTestnetRpcURL = 'https://rpc-testnet.bitkubchain.io';
const bitkubMainnetRpcURL = 'https://rpc.bitkubchain.io';
export function getRPC(mainnet: boolean): string {
  if (mainnet) {
    return bitkubMainnetRpcURL;
  } else {
    return bitkubTestnetRpcURL;
  }
}
