import React, {useState, useEffect} from 'react'
import {useParams, useNavigate} from 'react-router-dom'
import { ReactComponent as ArrowLeft } from '../assets/arrow-left.svg'

const NotesPage = ({ history }) => {

  let params = useParams()
  let navigate = useNavigate()
  let [note, setNote] = useState(null)

  useEffect(() => {
    getNote()
  }, [params.id])

  let getNote = async () => {
    let resp = await fetch(`/api/notes/${params.id}/`)
    let data = await resp.json()
    setNote(data)
  }
  
  let updateNote = async () => {
    fetch(`/api/notes/${params.id}/update/`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(note)
    })
    navigate('/')
  }

  let deleteNote = async () => {
    fetch(`/api/notes/${params.id}/delete/`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json"
      }
    })
    navigate('/')
  }
  
  let createNote = async () => {
    fetch(`/api/notes/create/`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(note)
    })
  }

  let handleUpdate = () => {
    if (params.id !== 'new' && !note.body) {
      deleteNote()
    } else if (params.id !== 'new') {
      updateNote()
    } else if (params.id == 'new' && note !== null) {
      createNote()
    }
    navigate('/')
  }

  return (
    <div className="note">
      <div className="note-header">
        <h3>
          <ArrowLeft onClick={handleUpdate} />
        </h3>
        {
          params.id == 'new' ? (
            <button onClick={handleUpdate}>Done</button>
          ) : (
            <button onClick={deleteNote}>Delete</button>
          )
        }
      </div>
      <textarea onChange={(e)=>{ setNote({...note,'body':e.target.value}) }} value={note?.body}></textarea>
    </div>
  )
}

export default NotesPage
