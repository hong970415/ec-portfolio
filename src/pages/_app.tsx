import '@/styles/globals.css'
import type { AppProps } from 'next/app'
import { MantineProvider } from '@mantine/core'
import Head from 'next/head'
import data from '@/data/data'

function AppHead() {
  return (
    <Head>
      <title>{data.about.name}</title>
      <meta name="description" content="Software engineer" />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <link rel="icon" href="manTechnologist.ico" />
    </Head>
  )
}
export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <AppHead />
      <MantineProvider
        withGlobalStyles
        withNormalizeCSS
        theme={{
          /** Put your mantine theme override here */
          colorScheme: 'light',
          primaryColor: 'blue',
          primaryShade: 8,
        }}
      >
        <Component {...pageProps} />
      </MantineProvider>
    </>
  )
}
