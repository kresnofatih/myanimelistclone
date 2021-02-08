import React, {useState, useEffect} from 'react'

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
        // data.genres = respjson.genres.toString();
        if(respjson.synopsis===null){
            data.synopsis = 'This anime has no synopsis yet.'
        } else {
            data.synopsis = respjson.synopsis.slice(0, 200)+' ...';
        }
        data.type = respjson.type;
        data.genres = '';
        respjson.genres.forEach(({name})=>{
            data.genres += name;
            data.genres += ', ';
        })
        // console.log(respjson.genres);

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
                <div>
                    <img src={data.imageUrl}/>
                    <div className="searchiteminfo">
                        <p className="searchitem_title">{data.title}</p>
                        <p className="searchitem_data">{data.epsiodes}</p>
                        <p className="searchitem_data">{data.genres}</p>
                        <p className="searchitem_data">{data.synopsis}</p>
                        <p className="searchitem_data">{data.type}</p>
                    </div>
                </div>
            }
        </div>
    )
}

export default Searchitem
