import { configureStore } from "@reduxjs/toolkit"
import AddNoteReducer from "../Features/NoteSlice/NoteSlice"
import logger from "redux-logger"
const store = configureStore({
    reducer: {
        addNote: AddNoteReducer
    },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(logger)
})
export default store