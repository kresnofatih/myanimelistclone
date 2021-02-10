import React from 'react'
import Header from './herocomponents/Header'
import './Hero.css'
import Browser from './herocomponents/Browser'
import Feed from './herocomponents/Feed'

function Hero({user, handleLogout}) {
    return (
        <div className="hero">
            <Header 
                userName={user.displayName}
                profilePictureUrl={user.photoURL}
            />
            <Feed/>
            {/* <Browser/> */}
            <button onClick={handleLogout}>Logout</button>
        </div>
    )
}

export default Hero
