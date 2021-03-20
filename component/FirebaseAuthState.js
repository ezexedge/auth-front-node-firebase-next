import {useEffect,useContext} from 'react';
import firebase from '../firebase'
import {Context} from '../context'
import {axiosAuth} from '../actions/axios'
import {setCookie,destroyCookie} from 'nookies'

const FirebaseAuthState = ({children}) => {

    const {dispatch} = useContext(Context)


    useEffect(()=>{
        return firebase.auth().onIdTokenChanged( async (user)=>{
            if(!user){
                dispatch({
                    type: "LOGOUT"
                })


                destroyCookie(null,"token")
                setCookie(null,"token",token,{})
            }else{
                const {token} = await user.getIdTokenResult()

                destroyCookie(null,"token")
                setCookie(null,"token",token,{})
//console.log('token',token)
               /* dispatch({
                    type: "LOGIN",
                    payload: user,
                })
*/
               axiosAuth.post('/current-user',{})
               .then(res => {
                  
                    const {data} = res
                    console.log('sssss',data)
                   dispatch({
                       type: "LOGIN",
                       payload:  data
                   })
                   
               })
              
            }
        })

    },[])

    return ( 
        <>
        {children}
        </>
     );
}
 
export default FirebaseAuthState;