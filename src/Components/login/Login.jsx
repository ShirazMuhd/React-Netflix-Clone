import React from 'react'
import './login.css'
import { auth, provider } from '../../firebase'
import { useDispatch } from "react-redux"
import { setUser } from "../../redux/userSlice/userSlice"
import { useHistory } from "react-router-dom"

function Login() {
    const dispatch = useDispatch()
    const history = useHistory()
    const login = () => {
        auth.signInWithPopup(provider).then((result) => {
            dispatch(setUser({
                name: result.additionalUserInfo.profile.name,
                email: result.additionalUserInfo.profile.email,
                photo: result.additionalUserInfo.profile.picture
            }))
            history.push('/')
        }).catch((error) => {
            history.push('/error')
            console.log(error)
        })

    }
    return (
        <div className="login-container">
            <div className="login">
                <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Netflix_2015_logo.svg/1920px-Netflix_2015_logo.svg.png" alt="" />
                <button onClick={login}>Login with Google</button>
                <button onClick={login}>Login with Facebook</button>
            </div>
        </div>
    )
}

export default Login 