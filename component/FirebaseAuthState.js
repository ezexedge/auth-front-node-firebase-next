import {useEffect,useContext} from 'react';
import firebase from '../firebase'
import {Context} from '../context'
import axios from 'axios'
const FirebaseAuthState = ({children}) => {

    const {dispatch} = useContext(Context)


    useEffect(()=>{
        return firebase.auth().onIdTokenChanged( async (user)=>{
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

               axios.post('http://localhost:5000/api/current-user',{},{
                   headers:{
                       token,

                   },
                 }
               )
               .then(res => {
                   console.log('resss===',res)

                   /*
                   dispatch({
                       type: 'LOGIN',
                       payload: res.data
                   })
                   */
               })
               .catch((err)=> {
                   console.log(err)
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