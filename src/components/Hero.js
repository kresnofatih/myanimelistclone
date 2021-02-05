import React from 'react'

function Hero({user, handleLogout}) {
    return (
        <div>
            welcome
            <p>{user.displayName}</p>
            <img src={user.photoURL}/>
            <button onClick={handleLogout}>Logout</button>
        </div>
    )
}

export default Hero
