import React, { useContext, useEffect, useState } from 'react'
import NotesList from '../components/NotesList'
import UserContext from '../contexts/UserContext';
import { useInput } from '../utils/custom-hooks';
import { getActiveNotes } from '../utils/network-data';
import Login from './Auth/Login';

function NotesWrapper () {
  const {user} = useContext(UserContext)
  const [keyword, onKeywordChange] = useInput('')
  const [notes, setNotes] = useState(null)

  async function getNotes() {
    const { data } = await getActiveNotes()
    setNotes(data)
  }

  useEffect(() => {
    getNotes()
  }, [user, notes])

  if (!user) {
    return (
      <Login />
    )
  }

  if (!notes) {
    return (
      <div>Loading...</div>
    )
  }
  
  return (
    <>
      <h1>Active Notes</h1>
      <div className='search-bar-wrapper'>
        <input
          type="text"
          placeholder="Search"
          value={keyword}
          onChange={onKeywordChange}
        />
      </div>
      <NotesList notes={notes} />
    </>
  )
}

export default NotesWrapper