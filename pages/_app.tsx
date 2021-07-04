import { AppProps } from 'next/app'
import './global.scss'
import 'prismjs/themes/prism-tomorrow.css'

const MyApp: React.FC<AppProps> = ({ Component, pageProps }: AppProps) => {
  return <Component {...pageProps} />
}

export default MyApp
