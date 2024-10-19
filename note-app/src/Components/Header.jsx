import React from 'react'
import { useDispatch } from "react-redux"
import { toggleDarkMode } from '../Redux/Features/NoteSlice/NoteSlice'
const Header = () => {
    const dispatch = useDispatch()
    return (
        <div className='header'>
            <h1>Note</h1>
            <button onClick={() => dispatch(toggleDarkMode())} className='save'>Dark mode</button>
        </div>
    )
}

export default Header