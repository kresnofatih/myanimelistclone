import React, {useState} from 'react'
import './Browser.css'

function Browser() {
    const [searchKeyword, setSearchKeyword] = useState('')
    const searchAnime = async (searchKeyword) => {
        const keyword = searchKeyword.trim();
        const resp = await fetch(`https://api.jikan.moe/v3/search/anime?q=${keyword}&page=1`);
        const data = await resp.json();
        console.log(data.results);
        console.log(data.results.length);
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
                <button onClick={()=>searchAnime(searchKeyword)}>Search</button>
            </div>
        </div>
    )
}

export default Browser
