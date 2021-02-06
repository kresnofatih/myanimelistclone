import React, {useEffect} from 'react'
import Header from './herocomponents/Header'
import './Hero.css'

function Hero({user, handleLogout}) {
    return (
        <div className="hero">
            <Header 
                userName={user.displayName}
                profilePictureUrl={user.photoURL}
            />
            <button onClick={handleLogout}>Logout</button>
        </div>
    )
}

export default Hero
