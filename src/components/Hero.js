import React, {useState} from 'react'
import Header from './herocomponents/Header'
import './Hero.css'
import Browser from './herocomponents/Browser'
import Feed from './herocomponents/Feed'

function Hero({user, handleLogout}) {
    const [page, setPage] = useState('Feed');
    return (
        <div className="hero">
            <Header 
                userName={user.displayName}
                profilePictureUrl={user.photoURL}
                redirectPage={setPage}
                handleLogout={handleLogout}
            />
            {page==='Feed' &&
                <Feed/>
            }
            {page==='Browse' &&
                <Browser/>
            }
        </div>
    )
}

export default Hero
