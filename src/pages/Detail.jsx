import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { getReadableDate } from '../utils/date'
import { archiveNote, deleteNote, getNote, unarchiveNote } from '../utils/network-data'
import NotFound from './NotFound'

function DetailPageWrapper () {
  const { id } = useParams()
  const navigate = useNavigate();
  const [note, setNote] = useState(null)

  async function getNoteById () {
    const { error, data } = await getNote(id)

    if (error) {
      return <NotFound />
    }
    
    setNote(data)
  }
  
  useEffect(() => {
    getNoteById()
  }, [])    

  async function archiveHandler (id) {
    await archiveNote(id)
    navigate('/notes/archived')
  }

  async function unarchiveHandler (id) {
    unarchiveNote(id)
    navigate('/')
  }

  async function deleteHandler (id) {
    if (window.confirm("Do you really want to delete this note?")) {
      await deleteNote(id)
      navigate('/')
    }
  }

  if (!note) {
    return (
      <div>
        <p>Loading</p>
      </div>
    )
  }
  
  return (
    <>
      <div className='detail-page-wrapper'>
        <h1>{note.title}</h1>
        <p>{ getReadableDate(note.createdAt) }</p>
        <p className='text-body'>{note.body}</p>
        <div className="action-wrapper">
          {
            note.archived ?  (
              <button onClick={() => unarchiveHandler(note.id)}>Unarchive</button>
            ) : (
              <button onClick={() => archiveHandler(note.id)}>Archive</button>
            )
          }
          <button onClick={() => deleteHandler(note.id)} >Delete</button>
        </div>
      </div>
    </>
  )
}

export default DetailPageWrapper