import { AppHeader } from '@/components/layout/AppHeader'
import '@/styles/globals.css'
import {
  getDefaultWallets,
  RainbowKitProvider,
} from '@rainbow-me/rainbowkit'
import '@rainbow-me/rainbowkit/styles.css'
import type { AppProps } from 'next/app'
import Head from 'next/head'
import { configureChains, createClient, WagmiConfig } from 'wagmi'
import { polygonZkEvmTestnet, scrollTestnet } from 'wagmi/chains'
import { publicProvider } from 'wagmi/providers/public'


export default function App({ Component, pageProps }: AppProps) {

  const { chains, provider } = configureChains(
    [polygonZkEvmTestnet, scrollTestnet],
    [
      publicProvider()
    ]
  );

  const { connectors } = getDefaultWallets({
    appName: 'My RainbowKit App',
    projectId: 'YOUR_PROJECT_ID',
    chains
  });

  const wagmiClient = createClient({
    autoConnect: true,
    connectors,
    provider
  })


  return <>
    <Head>
      <title>Nice QV</title>
    </Head>
    <>
      <WagmiConfig client={wagmiClient}>
        <RainbowKitProvider chains={chains}>
          <AppHeader />
          <div className='container mx-auto px-4'>
            <Component {...pageProps} />
          </div>
        </RainbowKitProvider>
      </WagmiConfig>
    </>
  </>
}
