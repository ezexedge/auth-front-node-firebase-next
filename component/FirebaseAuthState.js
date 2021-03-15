import {useEffect,useContext} from 'react';
import firebase from '../firebase'
import {Context} from '../context'

const FirebaseAuthState = ({children}) => {

    const {dispatch} = useContext(Context)


    useEffect(()=>{
        return firebase.auth().onIdTokenChanged(async(user)=>{
            if(!user){
                dispatch({
                    type: "LOGOUT"
                })
            }else{
                const {token} = await user.getIdTokenResult()
                console.log('token',token)
               // dispatch({
                 //   type: "LOGIN",
                   // payload: user,
               // })
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