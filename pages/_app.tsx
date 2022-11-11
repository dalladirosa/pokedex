import type { AppProps } from 'next/app'
import React from 'react'

import {
  Hydrate,
  QueryClient,
  QueryClientProvider,
} from '@tanstack/react-query'

import '@/styles/globals.css'

import Layout from '@/components/Layout'

type Props = AppProps<{
  dehydratedState: unknown
}>

export default function App({ Component, pageProps }: Props) {
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
      <Hydrate state={pageProps.dehydratedState}>
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </Hydrate>
    </QueryClientProvider>
  )
}
