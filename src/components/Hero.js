import React, {useEffect} from 'react'


function Hero({user, handleLogout}) {
    return (
        <div>
            welcome
            <div>
                <p>{user.displayName}</p>
                <img src={user.photoURL}/>
            </div>
            {/* {user.displayName!="" ? (
                <div>
                    <p>{user.displayName}</p>
                    <img src={user.photoURL}/>
                </div>
            ) : (
                <div>
                    <p>new user</p>
                    <img src="https://i1.wp.com/mainstsolar.com/wp-content/uploads/2016/08/avatar-placeholder-generic.png?fit=300%2C300"/>
                </div>
            )} */}
            <button onClick={handleLogout}>Logout</button>
        </div>
    )
}

export default Hero
