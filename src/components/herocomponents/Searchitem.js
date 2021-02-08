import React, {useState, useEffect} from 'react'
import './Searchitem.css'
import AddCircleIcon from '@material-ui/icons/AddCircle';
import { cyan } from '@material-ui/core/colors';

function Searchitem({id}) {
    const [data] = useState({})
    const [hasData, setHasData] = useState(false)
    const getAnimeData = async () => {
        const resp = await fetch(`https://api.jikan.moe/v3/anime/${id}`);
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

        // set state
        setHasData(true);
    }
    useEffect(()=>{
        getAnimeData();
        // console.log(data.imageUrl);
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
                    <button className="submitscore">
                        <AddCircleIcon fontSize="large" style={{color: cyan[800]}}/>
                    </button>
                </div>
            }
        </div>
    )
}

export default Searchitem
