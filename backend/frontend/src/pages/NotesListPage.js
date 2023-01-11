import React, {useState, useEffect} from 'react'
import ListItem from '../components/ListItem'
import AddButton from '../components/AddButton'

const NotesListPage = () => {
  let [notes, setNotes] = useState([])
  useEffect(() => {
    getNotes()
  }, [])

  let getNotes = async () => {
    let resp = await fetch('/api/notes/')
    let data = await resp.json()
    setNotes(data)
    console.log(data)
  }

  return (
    <div className="notes">
      <div className="notes-header">
        <h2 className="notes-title">&#9782; Notes</h2>
        <p className="notes-count">{notes.length}</p>
      </div>
        
      <div className="notes-list">
        {notes.map((note, index) => (
          <ListItem key={index} note={note} />
        ))}
      </div>
      <div>
        <AddButton />
      </div>
    </div>
  )
}

export default NotesListPage
