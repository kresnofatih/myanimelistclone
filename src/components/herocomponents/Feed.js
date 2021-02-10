import React, {useEffect, useState} from 'react'
import './Feed.css'
import Feedpost from './Feedpost';
import fire from '../../Fire';

function Feed() {
    const [feedPosts, setFeedPosts] = useState([]);
    useEffect(()=>{
        fire.firestore().collection('feed').onSnapshot(snapshot=>(
        setFeedPosts(snapshot.docs.map(doc=>doc.data()))
        ))
    }, [])
    return (
        <div className="feed">
            <div className="feedheader">
                <h2 className="feedheadertitle">Feed</h2>
            </div>
            {feedPosts.map(feedPost=>(
                <Feedpost 
                    photoUrl={feedPost.photoUrl}
                    user={feedPost.user}
                    data={feedPost.data}
                    id={feedPost.mal_id}
                    score={feedPost.score}
                />
            ))}
        </div>
    )
}

export default Feed
