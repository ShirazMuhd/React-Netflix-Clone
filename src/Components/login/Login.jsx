import React from 'react'
import './login.css'
import { auth, provider } from '../../firebase'
import {useDispatch} from "react-redux"
import {setUser} from "../../redux/userSlice/userSlice"

function Login() {
    const dispatch = useDispatch()
    const login = () => {
        auth.signInWithPopup(provider).then((result) => {
            console.log(result)
            dispatch(setUser({
                name: result.additionalUserInfo.profile.name,
                email: result.additionalUserInfo.profile.email,
                photo: result.additionalUserInfo.profile.picture
            }))
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
// const userData = {
//     name: result.additionalUserInfo.profile.name,
//     email: result.additionalUserInfo.profile.email,
//     image: result.additionalUserInfo.profile.picture
// }