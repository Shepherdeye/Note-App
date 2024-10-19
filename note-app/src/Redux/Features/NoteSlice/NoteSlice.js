import { createSlice } from "@reduxjs/toolkit";
import { nanoid } from "@reduxjs/toolkit";
const initialState = {
    notes: localStorage.getItem("addnote") ? JSON.parse(localStorage.getItem("addnote")) : [],
    darkMode: false,
    searchValue: ""

}

const noteSlice = createSlice({
    name: "notes",
    initialState: initialState,
    reducers: {
        addNotes: (state, action) => {
            const date = new Date()
            const newNote = {
                id: nanoid(),
                text: action.payload,
                date: date.toLocaleDateString()
            }
            state.notes = [...state.notes, newNote]
            localStorage.setItem("addnote", JSON.stringify(state.notes))
        },
        removeNotes: (state, action) => {
            const newNotes = [...state.notes]
            state.notes = newNotes.filter((note) => note.id != action.payload);
            localStorage.setItem("addnote", JSON.stringify(state.notes))

        }, setGLobalSearchValue: (state, action) => {
            state.searchValue = action.payload;
        }, toggleDarkMode: (state) => {
            state.darkMode = !state.darkMode
        }

    }
})
export default noteSlice.reducer
export const { addNotes, removeNotes, setGLobalSearchValue, toggleDarkMode } = noteSlice.actions