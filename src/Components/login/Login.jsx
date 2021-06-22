import React from 'react'
import './login.css'
import { auth, Storage, provider } from '../../firebase'
import db from '../../firebase'

function Login() {
    const login = () => {
        auth.signInWithPopup(provider).then((result) => {
            console.log(result)
            const userData = {
                name: result.additionalUserInfo.profile.name,
                email: result.additionalUserInfo.profile.email,
                image: result.additionalUserInfo.profile.picture
            }
            console.log(userData)
        }).catch((error) => {
            console.log(error)
        })

    }
    return (
        <div className="login-container">
            <div className="login">
                <button onClick={login}>click</button>
            </div>
        </div>
    )
}

export default Login
