import '../assets/styles/globals.scss'
import styles from '../assets/styles/_app.module.scss'
import type { AppProps } from 'next/app'

function MyApp({ Component, pageProps }: AppProps) {

  return <div className={styles.root}>
    <Component {...pageProps} />
  </div>
}

export default MyApp
