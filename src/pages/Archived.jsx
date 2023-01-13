import React, { useEffect, useState } from 'react'
import NotesList from '../components/NotesList'
import { getArchivedNotes } from '../utils/network-data'

const Archived = () => {
  const [notes, setNotes] = useState([])

  async function getArchivedNotesHandler () {
    const { error, data } = await getArchivedNotes()
    setNotes(data)
  }

  useEffect(() => {
    getArchivedNotesHandler()
  }, [])
  
  return (
    <>
      <h1>Archived Notes</h1>
      <NotesList notes={notes} />
    </>
  )
}

export default Archived