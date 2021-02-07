import React, {useState} from 'react'
import './Browser.css'
import Searchitem from './Searchitem';

function Browser() {
    const [searchKeyword, setSearchKeyword] = useState('')
    const [hasData, setHasData] = useState(false)
    const [data, setData] = useState([])
    const searchAnime = async (searchKeyword) => {
        setData([]);
        const keyword = searchKeyword.trim();
        const resp = await fetch(`https://api.jikan.moe/v3/search/anime?q=${keyword}&limit=5`);
        const respjson = await resp.json();
        respjson.results.forEach((item)=>{
            data.push(item.mal_id)
        })
        setHasData(true);
        data.forEach((item)=>{
            console.log(item);
        })
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
                    onClick={()=>{
                        searchAnime(searchKeyword);
                        setSearchKeyword('');
                }}>Search</button>
            </div>
            {hasData &&
                <p>haha</p>
            }
        </div>
    )
}

export default Browser
