import React, { useEffect } from 'react'
import './NavBar.css'
import { selectUserPhoto } from "../../redux/userSlice/userSlice"
import { useSelector } from "react-redux"
import { useDispatch } from 'react-redux'
import { setUser, setSignout } from "../../redux/userSlice/userSlice"
import { auth } from "../../firebase"
import { useHistory } from "react-router-dom"

function NavBar() {
    useEffect(() => {
        auth.onAuthStateChanged((user) => {
            if (user) {
                history.push('/')
                dispatch(setUser({
                    name: user.displayName,
                    email: user.email,
                    photo: user.photoURL
                }))
            }
        })
    })
    const logOut = () => {
        auth.signOut().then(() => {
            dispatch(setSignout())
            history.push('/login')
        })
    }

    const dispatch = useDispatch()
    const history = useHistory()
    const userPhoto = useSelector(selectUserPhoto)

    return (
        <header>
            <div className="logo-section">
                <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Netflix_2015_logo.svg/1920px-Netflix_2015_logo.svg.png" alt="" />
            </div>
            {
                userPhoto ? (
                    <div className="avatar-section">
                        <img src={userPhoto} alt="profile_img" />
                        <button className="logout" onClick={logOut}>Logout</button>
                    </div>
                ) : (
                    <button onClick={()=> history.push('/login')} className="logout-btn">login</button>
                )
            }
        </header>
    )
}

export default NavBar