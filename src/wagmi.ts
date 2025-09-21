import { http, createConfig } from "wagmi";
import { mainnet, polygon, arbitrum, base, optimism } from "wagmi/chains";
import { injected, coinbaseWallet, walletConnect } from "@wagmi/connectors";

const WC_PROJECT_ID = import.meta.env.VITE_WC_PROJECT_ID as string | undefined;

export const config = createConfig({
  chains: [mainnet, polygon, arbitrum, base, optimism],
  transports: {
    [mainnet.id]: http(),
    [polygon.id]: http(),
    [arbitrum.id]: http(),
    [base.id]: http(),
    [optimism.id]: http(),
  },
  connectors: [
    injected({
      shimDisconnect: true,
    }),
    coinbaseWallet({ appName: "My Dapp" }),
    ...(WC_PROJECT_ID ? [walletConnect({ projectId: WC_PROJECT_ID })] : []),
  ],
  ssr: false,
});
