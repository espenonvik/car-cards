import '@/styles/globals.css'
import type {AppProps} from 'next/app'
import {Fira_Code} from 'next/font/google'

const roboto = Fira_Code({
  weight: '400',
  subsets: ['latin'],
})
export default function App({Component, pageProps}: AppProps) {
  return (
      <main className={roboto.className}>
        <Component {...pageProps} />
      </main>
  )
}
