import '../styles/globals.css'
import '../styles/global.scss'
import React, { useState, useEffect } from 'react'
import { Layout } from '../components'
import type { AppProps } from 'next/app'
import { Header } from '../components'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <Layout>
      <Component {...pageProps} />
     </Layout>
  );
}

export default MyApp
