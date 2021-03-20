import firebase from '../firebase'
import {useState} from 'react'
import {useRouter} from 'next/router'
import LoginRegisterForm from '../component/LoginRegisterForm'
import {  toast } from 'react-toastify';
import {Button} from 'antd'
import {GoogleOutlined} from '@ant-design/icons'



const Login = () => {

    const [loginEmail,setLoginEmail] = useState('')
    const [loginPass,setLoginPass] = useState('')

    const [registerEmail,setRegisterEmail] = useState('')
    const [registerPass,setRegisterPass] = useState('')


    const router = useRouter()

    const register = async () => {

      //  console.log(registerEmail,registerPass)

        await firebase.auth().createUserWithEmailAndPassword(registerEmail,registerPass)
        .then((user)=> {
            console.log('register',user)
            router.push('/')
        })
        .catch((err)=>{
            console.log(err)
            toast.error(err.message)
        })


    }
    const login = async () => {

        //console.log(loginEmail,loginPass)
        await firebase.auth().signInWithEmailAndPassword(loginEmail,loginPass)
        .then((user)=>{
            console.log('login',user)
            router.push('/')
        })
        .catch((err)=>{
            console.log(err)
            toast.error(err.message)
        })
    }

    const googleLogin = async () => {
            await firebase.auth().signInWithPopup(new firebase.auth.GoogleAuthProvider())
            .then((user)=>{
                console.log('login',user)
            })
            .catch((err)=>{
                console.log(err)
                toast.error(err.message)
            })  
    }

    return ( 
        <div className="container">

                <h2 className="text-center pt-4">Login/Register</h2>


                <Button
                    onClick={googleLogin}
                    className="md-3"
                    type="danger"
                    shape="round"
                    icon={<GoogleOutlined/>}
                    block
                    >
                        Login with google
                    </Button>


                <div className="row">
                    <LoginRegisterForm

                        email={loginEmail}
                        setEmail={setLoginEmail}
                        pass={loginPass}
                        setPass={setLoginPass}
                        buttonName="Login"
                        handleSubmit={login}
                    
                    />

                    <LoginRegisterForm
                    
                         email={registerEmail}
                        setEmail={setRegisterEmail}
                        buttonName="Register"
                        pass={registerPass}
                        setPass={setRegisterPass}
                        handleSubmit={register}
                    />
                </div>

        </div>
     );
}
 
export default Login;