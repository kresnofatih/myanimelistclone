import React from 'react'
import './Header.css'

function Header({userName, profilePictureUrl}) {
    return (
        <div className="heroheader">
            <div className="heroheadercontainer">
                <h1 className="heroheaderlogo">malc.</h1>
                <img className="heroava" src={profilePictureUrl}/>
            </div>
        </div>
    )
}

export default Header
