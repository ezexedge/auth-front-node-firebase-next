import {Context} from '../context'
import {useContext} from 'react'

const Home = () => {

    const {state} = useContext(Context)

    return ( 
        <div>
            <p>hola desde home  sss</p>
            {JSON.stringify(state)}
        </div>
     );
}
 
export default Home;