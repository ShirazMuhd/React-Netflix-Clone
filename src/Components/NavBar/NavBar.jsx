import React, { useEffect } from 'react'
import './NavBar.css'
import { selectUserPhoto } from "../../redux/userSlice/userSlice"
import { useSelector } from "react-redux"
import { useDispatch } from 'react-redux'
import { setUser } from "../../redux/userSlice/userSlice"
import { auth } from "../../firebase"

function NavBar() {
    useEffect(() => {
        auth.onAuthStateChanged((user) => {
            dispatch(setUser({
                name: user.displayName,
                email: user.email,
                photo: user.photoURL
            }))
        })
    })
    const dispatch = useDispatch()
    const userPhoto = useSelector(selectUserPhoto)

    return (
        <header>
            <div className="logo-section">
                <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Netflix_2015_logo.svg/1920px-Netflix_2015_logo.svg.png" alt="" />
            </div>
            {
                userPhoto ? (
                    <div className="avatar-section">
                        <img src={userPhoto && userPhoto} alt="" />
                        <button className="logout">Logout</button>
                    </div>
                ) : (
                    <button>login</button>
                )
            }
        </header>
    )
}

export default NavBar
// useEffect(()=>{
//     auth.onAuthStateChanged((user)=>{
//         if(user){
//             dispatch(setUser({

//             }))
//         }
//     })
// })