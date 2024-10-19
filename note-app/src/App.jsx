import Header from './Components/Header.jsx'
import NoteList from './Components/NoteList.jsx'
import Search from './Components/Search.jsx'
import { useSelector } from "react-redux"
const App = () => {
  const darkMode = useSelector((state) => state.addNote.darkMode)
  return (
    <div className={`${darkMode ? " dark-mode" : ""}`}>
      <div className='container'>
        <Header />
        <Search />
        <NoteList />
      </div>
    </div>
  )
}

export default App