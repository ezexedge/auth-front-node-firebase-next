import 'bootstrap/dist/css/bootstrap.css'
import Nav from '../component/Nav'

export default function MyApp({ Component, pageProps }) {

  return <>
<Nav/>
  <Component {...pageProps} />

        </>
}