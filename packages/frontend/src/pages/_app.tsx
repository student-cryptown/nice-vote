import { AppHeader } from '@/components/layout/AppHeader'
import '@/styles/globals.css'
import type { AppProps } from 'next/app'
import Head from 'next/head'
import { useState } from 'react'

export default function App({ Component, pageProps }: AppProps) {
  const [user, setUser] = useState<{
    login: true,
    user: {
      address: string
    }
  } | {
    login: false
  }>({ login: false })
  //TODO:login hook周り


  return <>
    <Head>
      <title>Nice QV</title>
    </Head>
    <>
      {/* header */}
      <AppHeader />
      <Component {...pageProps} />
    </>
  </>
}
