import React, {useState, useEffect} from 'react'

const NotesListPage = () => {
  let [notes, setNotes] = useState([])
  useEffect(() => {
    getNotes()
  }, [])

  let getNotes = async () => {
    let resp = await fetch('/api/notes/')
    let data = await resp.json()
    console.log(data)
    setNotes(data)
  }
}

export default NotesListPage
