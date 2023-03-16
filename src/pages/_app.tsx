import type { AppProps as NextAppProps } from 'next/app'

import '@/styles/global.css'

type AppProps<P = any> = {
  pageProps: P
} & Omit<NextAppProps<P>, 'pageProps'>

export default function MyApp({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />
}
