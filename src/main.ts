import { createWeb3Modal, defaultWagmiConfig } from '@web3modal/wagmi';
import {
  watchAccount,
  disconnect,
  getAccount,
  reconnect,
  WatchAccountParameters,
} from '@wagmi/core';

import { mainnet, arbitrum } from 'viem/chains';

const defaultMetadata = {
  name: 'Further',
  description: 'Further wallet connect',
  url: 'https://web3modal.com', // origin must match your domain & subdomain.
  icons: [
    'https://pbs.twimg.com/profile_images/1538910460245856256/EVS8v1Dh_400x400.jpg',
  ],
};

type Metadata = {
  name: string;
  description: string;
  url: string;
  icons: string[];
};

type InitProps = {
  projectId: string;
  metadata?: Metadata;
  onChangeAccount?: WatchAccountParameters['onChange'];
};

declare global {
  interface Window {
    initializeWalletConnect: (props: InitProps) => () => void;
  }
}

const initializeWalletConnect = ({
  projectId,
  metadata = defaultMetadata,
  onChangeAccount,
}: InitProps) => {
  const finalMetadata = {
    ...defaultMetadata,
    metadata,
  };

  const chains = [mainnet, arbitrum] as const;
  const config = defaultWagmiConfig({
    chains,
    projectId,
    metadata: finalMetadata,
  });

  reconnect(config);

  // 3. Create modal
  const modal = createWeb3Modal({
    wagmiConfig: config,
    projectId,
  });

  // listening for account changes
  watchAccount(config, {
    onChange(account, prevAccount) {
      onChangeAccount?.(account, prevAccount);
    },
  });

  function connect() {
    if (getAccount(config).isConnected) {
      disconnect(config);
    } else {
      modal.open();
    }
  }

  return connect;
};

window.initializeWalletConnect = initializeWalletConnect;
