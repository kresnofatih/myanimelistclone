import React, {useState, useEffect} from 'react'
import './Searchitem.css'
import AddCircleIcon from '@material-ui/icons/AddCircle';
import { cyan } from '@material-ui/core/colors';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import fire from '../../Fire';

function Searchitem({id}) {
    const email = fire.auth().currentUser.email;
    const userName = fire.auth().currentUser.displayName;
    const photoUrl = fire.auth().currentUser.photoURL;
    const [data] = useState({})
    const [hasData, setHasData] = useState(false)
    const getAnimeData = async () => {
        const doc = await fire.firestore().collection('animes').doc(''+id).get();
        if (!doc.exists){
            const resp = await fetch(`https://api.jikan.moe/v3/anime/${id}`);
            if(resp.status===200){
                const respjson = await resp.json();
        
                // assign properties
                data.imageUrl = respjson.image_url;
                data.title = respjson.title;
                data.episodes = respjson.episodes;
        
                // process the synopsis data
                if(respjson.synopsis===null){
                    data.synopsis = 'This anime has no synopsis yet.'
                } else {
                    data.synopsis = respjson.synopsis.slice(0, 200)+' ...';
                }
                data.type = respjson.type;
                
                //  process multiple genres
                data.genres = '';
                respjson.genres.forEach(({name})=>{
                    data.genres += name;
                    data.genres += ', ';
                })
                setHasData(true);
            }
        } else {
            const respjson = doc.data();
            // assign properties
            data.imageUrl = respjson.data.imageUrl;
            data.title = respjson.data.title;
            data.episodes = respjson.data.episodes;
    
            // process the synopsis data
            if(respjson.synopsis===null){
                data.synopsis = 'This anime has no synopsis yet.'
            } else {
                data.synopsis = respjson.data.synopsis.slice(0, 200)+' ...';
            }
            data.type = respjson.data.type;
            data.genres = respjson.data.genres;
            setHasData(true);

        }

        // set state
    }
    const [anchorEl, setAnchorEl] = useState(null);
    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    }
    const handleClose = () => {
        setAnchorEl(null);
    };
    useEffect(()=>{
        getAnimeData();
    }, [])
    return (
        <div className="searchitem">
            {hasData &&
                <div className="searchitem_container">
                    <div className="searchitem_alignleft">
                        <div className="searchitem_imgbox">
                            <img src={data.imageUrl}/>
                        </div>
                        <div className="searchitem_info">
                            <p className="searchitem_title">{data.title}</p>
                            <p className="searchitem_data">Episodes: {data.episodes}</p>
                            <p className="searchitem_data">Genres: {data.genres}</p>
                            <p className="searchitem_data">Synopsis: {data.synopsis}</p>
                            <p className="searchitem_data">Type: {data.type}</p>
                        </div>
                    </div>
                    <button 
                        className="submitscore" 
                        aria-controls="simple-menu" 
                        aria-haspopup="true"
                        onClick={handleClick}
                    >
                        <AddCircleIcon fontSize="large" style={{color: cyan[800]}}/>
                    </button>
                    <Menu
                        id="simple-menu"
                        anchorEl={anchorEl}
                        keepMounted
                        open={Boolean(anchorEl)}
                        onClose={handleClose}
                    >
                        <MenuItem onClick={handleClose}><p className="submitScoreTabTitle">Score</p></MenuItem>
                        {[1,2,3,4,5,6,7,8,9,10].map((val)=>(
                            <MenuItem
                            onClick={async()=>{
                                handleClose();
                                await fire
                                        .firestore()
                                        .collection('users')
                                        .doc(email)
                                        .collection('posts')
                                        .doc(""+id)
                                        .set({
                                            mal_id: id,
                                            score: val,
                                            data: data
                                        });
                                await fire
                                        .firestore()
                                        .collection('animes')
                                        .doc(""+id)
                                        .set({
                                            mal_id: id,
                                            data: data
                                        });
                                const now = new Date;
                                await fire
                                        .firestore()
                                        .collection('feed')
                                        .add({
                                            mal_id: id,
                                            data: data,
                                            user: userName,
                                            photoUrl: photoUrl,
                                            score: val,
                                            time: Date.UTC(
                                                now.getUTCFullYear(),
                                                now.getUTCMonth(), 
                                                now.getUTCDate(), 
                                                now.getUTCHours(), 
                                                now.getUTCMinutes(), 
                                                now.getUTCSeconds(), 
                                                now.getUTCMilliseconds()
                                            )
                                        });
                            }}><p className="submitScoreMenuItem">{val}</p></MenuItem>
                        ))}
                    </Menu>
                </div>
            }
        </div>
    )
}

export default Searchitem
