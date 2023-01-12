import React from 'react'
import PropTypes from 'prop-types'
import NoteCard from './NoteCard'

const NotesList = ({ notes }) => {
  if (!notes.length) {
    return (
      <div className='notes-wrapper empty'>
        <p>There is no notes.</p>
      </div>)
  }
  
  return (
    <>
      <div className='notes-wrapper'>
        { notes.map(note => (
          <NoteCard note={note} key={note.id} />
        )) }
      </div>
    </>
  )
}

NotesList.propTypes = {
  notes: PropTypes.array.isRequired
}

export default NotesList