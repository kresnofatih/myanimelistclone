import React, {useState, useEffect} from 'react'
import './Searchitem.css'
import AddCircleIcon from '@material-ui/icons/AddCircle';
import { cyan } from '@material-ui/core/colors';
import Button from '@material-ui/core/Button';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';

function Searchitem({id}) {
    const [data] = useState({})
    const [hasData, setHasData] = useState(false)
    const getAnimeData = async () => {
        const resp = await fetch(`https://api.jikan.moe/v3/anime/${id}`);
        if(resp.status===200){
            console.log("got the data");
            const respjson = await resp.json();
    
            // assign properties
            data.imageUrl = respjson.image_url;
            data.title = respjson.title;
            data.epsiodes = respjson.episodes;
    
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
        } else if(resp.status===429){
            console.log("retrying");
            return getAnimeData();
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
                            <p className="searchitem_data">Episodes: {data.epsiodes}</p>
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
                            <MenuItem onClick={handleClose}>{val}</MenuItem>
                        ))}
                    </Menu>
                </div>
            }
        </div>
    )
}

export default Searchitem
