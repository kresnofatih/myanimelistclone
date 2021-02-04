import React from 'react'

function Hero({handleLogout}) {
    return (
        <div>
            welcome
            <button onClick={handleLogout}>Logout</button>
        </div>
    )
}

export default Hero
