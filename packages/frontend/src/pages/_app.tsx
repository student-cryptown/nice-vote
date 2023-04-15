import { Auth, NoSSR } from '@/components'
import { AppHeader } from '@/components/layout/AppHeader'
import '@/styles/globals.css'
import {
  RainbowKitProvider,
  getDefaultWallets,
} from '@rainbow-me/rainbowkit'
import '@rainbow-me/rainbowkit/styles.css'
import type { AppProps } from 'next/app'
import Head from 'next/head'
import { WagmiConfig, configureChains, createClient } from 'wagmi'
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
    appName: 'Nice Votes',
    projectId: 'Nice_Votes',
    chains
  });

  const wagmiClient = createClient({
    autoConnect: true,
    connectors,
    provider
  })

  return <>
    <Head>
      <title>Nice Votes</title>
      <link rel="icon" href="/favicon.png" />
    </Head>
    <NoSSR>
      <WagmiConfig client={wagmiClient}>
        <RainbowKitProvider chains={chains}>
          <AppHeader />
          <div className='container mx-auto px-4'>
            <Auth><Component {...pageProps} /></Auth>
          </div>
        </RainbowKitProvider>
      </WagmiConfig>
    </NoSSR>
  </>
}
