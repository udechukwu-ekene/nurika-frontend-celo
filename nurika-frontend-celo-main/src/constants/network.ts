import { ChainId } from "../types";

const RPC_URLS: { [chainId in ChainId]: string } = {
  [ChainId.MAINNET]: "https://forno.celo.org",
  [ChainId.TESTNET]: "https://alfajores-forno.celo-testnet.org",
};

export const CHAIN_ID = process.env.REACT_APP_PUBLIC_CHAIN_ID || '42220';
export const RPC_URL: string = RPC_URLS[CHAIN_ID];

export const BASE_CHAIN_CONFIG = {
  [ChainId.MAINNET]: {
    chainId: 42220,
    name: "Celo",
    currency: "CELO",
    explorerUrl: "https://explorer.celo.org/mainnet",
    rpcUrl: "https://forno.celo.org",
  },
  [ChainId.TESTNET]: {
    chainId: 44787,
    name: "Celo Alfajores Testnet",
    currency: "CELO",
    explorerUrl: "https://alfajores.celoscan.io",
    rpcUrl: "https://alfajores-forno.celo-testnet.org",
  },
};

export const BASE_CHAIN_CURRENCIES = {
  [ChainId.MAINNET]: {
    name: 'Celo',
    symbol: 'CELO',
    decimals: 18,
  },
  [ChainId.TESTNET]: {
    name: 'Celo',
    symbol: 'CELO',
    decimals: 18,
  },
};

export const BASE_CHAINS_LIST = Object.values(BASE_CHAIN_CONFIG);

export default RPC_URLS;
