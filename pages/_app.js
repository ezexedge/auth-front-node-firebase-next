import 'bootstrap/dist/css/bootstrap.css'
import Nav from '../component/Nav'
import {Provider } from '../context/index'
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import FirebaseAuthState from '../component/FirebaseAuthState'
import 'antd/dist/antd.css'; // or 'antd/dist/antd.less'


export default function MyApp({ Component, pageProps }) {

  return(
   <Provider>
       <FirebaseAuthState>
<Nav/>
<ToastContainer  />
  <Component {...pageProps} />
  </FirebaseAuthState>
        </Provider>
  )
}