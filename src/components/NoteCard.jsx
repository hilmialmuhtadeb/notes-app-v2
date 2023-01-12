import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'
import { getReadableDate } from '../utils/date'

const NoteCard = ({ note }) => {
  return (
    <div className='note-card'>
      <Link to={`/notes/${note.id}`}>
        <h3>{ note.title }</h3>
      </Link>
      <p>{ getReadableDate(note.createdAt) }</p>
      <p>{ note.body }</p>
    </div>
  )
}

NoteCard.propTypes = {
  note: PropTypes.object.isRequired
}

export default NoteCard