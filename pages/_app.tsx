import type { AppProps } from 'next/app'
import React from 'react'

import { QueryClient, QueryClientProvider } from '@tanstack/react-query'

import '@/styles/globals.css'

import Layout from '@/components/Layout'

export default function App({ Component, pageProps }: AppProps) {
  const [queryClient] = React.useState(
    () =>
      new QueryClient({
        defaultOptions: {
          queries: {
            staleTime: Infinity,
            retry: 1,
            networkMode: 'offlineFirst',
          },
        },
      })
  )
  return (
    <QueryClientProvider client={queryClient}>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </QueryClientProvider>
  )
}
