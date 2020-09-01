import React, {useState} from "react";
import MicIcon from '@material-ui/icons/Mic';
import SearchIcon from '@material-ui/icons/Search';
import {Button} from '@material-ui/core'
import {useHistory} from 'react-router-dom'
import {useStateValue} from "../StateProvider";
import {actionTypes} from "../reducer";

import './Search.css'

function Search({hideButtons = false}){

    const [state,dispatch] = useStateValue()
    const [input,setInput] = useState("")
    const history = useHistory()

    const search = (e) => {
        e.preventDefault();
        console.log(input)
        dispatch({
            type:actionTypes.SET_SEARCH_TERM,
            term:input
        })
        console.log(input)

        history.push('/search')
    }

    return(
        <form className="search">
            <div className="search__input">
                <SearchIcon className="search__icon"/>
                <input value={input} onChange={e => setInput(e.target.value)} variant="outlined"/>
                <MicIcon/>
            </div>
            {!hideButtons ? (
                <div className="search__buttons">
                    <Button onClick={search}  type = "submit"  >Google Search</Button>
                    <Button variant="outlined">I'am Feeling Lucky</Button>
                </div>
            ): (
                <div className="search__buttons">
                    <Button className="search__buttonsHidden" onClick={search}  type = "submit"  >Google Search</Button>
                    <Button className="search__buttonsHidden"  variant="outlined">I'am Feeling Lucky</Button>
                </div>
            )}
        </form>
    )
}
export default Search