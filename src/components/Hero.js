import React from 'react'

function Hero({user, handleLogout}) {
    return (
        <div>
            welcome
            <div>
                <p>{user.displayName}</p>
                <img src={user.photoURL}/>
            </div>
            <button onClick={handleLogout}>Logout</button>
        </div>
    )
}

export default Hero
