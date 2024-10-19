import React, { useEffect, useState } from 'react'
import { MdSearch } from 'react-icons/md';
import { setGLobalSearchValue } from '../Redux/Features/NoteSlice/NoteSlice';
import { useDispatch } from "react-redux"
const Search = () => {

    const [localSearch, setLocalSearch] = useState("");

    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(setGLobalSearchValue(localSearch))
    }, [localSearch])


    return (
        <div className='search'>
            <MdSearch className='search-icons' size='1.3em' />
            <input
                value={localSearch}
                onChange={(e) => setLocalSearch(e.target.value)}
                type='text'
                placeholder='type to search...'
            />
        </div>
    )
}

export default Search
