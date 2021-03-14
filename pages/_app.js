import 'bootstrap/dist/css/bootstrap.css'
import Nav from '../component/Nav'
import {Provider } from '../context/index'
export default function MyApp({ Component, pageProps }) {

  return(
   <Provider>
<Nav/>
  <Component {...pageProps} />

        </Provider>
  )
}