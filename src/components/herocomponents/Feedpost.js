import React from 'react'
import './Feedpost.css'
import Searchitem from './Searchitem'

function Feedpost({photoUrl, user, score, data, id}) {
    return (
        <div className="feedpost">
            <div className="feedpostheader">
                <img className="feedpostphoto" src={photoUrl}/>
                <h2 className="feedpostusername">{user}</h2>
                <p> gave {data.title} a {score}/10!</p>
            </div>
            <Searchitem key={id} id={id}/>
        </div>
    )
}

export default Feedpost
