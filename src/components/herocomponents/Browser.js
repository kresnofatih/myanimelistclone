import React, {useState} from 'react'
import './Browser.css'
import Searchitem from './Searchitem'

function Browser() {
    const [searchKeyword, setSearchKeyword] = useState('')
    const [hasData, setHasData] = useState(false)
    const [data] = useState([])
    const searchAnime = async (searchKeyword) => {

        const keyword = searchKeyword.trim();
        const resp = await fetch(`https://api.jikan.moe/v3/search/anime?q=${keyword}&limit=20`);
        const respjson = await resp.json();
        data.splice(0, data.length);
        setHasData(false);
        respjson.results.forEach((item)=>{
            data.push(item.mal_id)
        })
        setHasData(true);
    }

    return (
        <div className="browser">
            <div className="browsersearchbar">
                <input 
                    type="text"
                    value={searchKeyword} 
                    placeholder="Enter anime name here..."
                    onChange={(e)=>setSearchKeyword(e.target.value)}
                />
                <button 
                    onClick={(e)=>{
                        e.preventDefault();
                        searchAnime(searchKeyword);
                        setSearchKeyword('');
                }}>Search</button>
            </div>
            {hasData && data.map(item=>(
                <Searchitem key={item} id={item}/>
            ))}
        </div>
    )
}

export default Browser
