import React, { Component } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { archiveNote, getNote, unarchiveNote, deleteNote } from '../utils/data'
import { getReadableDate } from '../utils/date'
import NotFound from './NotFound'
import PropTypes from 'prop-types'

function DetailPageWrapper () {
  const { id } = useParams()
  const navigate = useNavigate();

  function archiveHandler (id) {
    archiveNote(id)
    navigate('/notes/archived')
  }

  function unarchiveHandler (id) {
    unarchiveNote(id)
    navigate('/')
  }

  function deleteHandler (id) {
    if (window.confirm("Do you really want to delete this note?")) {
      deleteNote(id)
      navigate('/')
    }
  }
  
  return (
    <Detail
      id={ id }
      archiveHandler={archiveHandler}
      unarchiveHandler={unarchiveHandler}
      deleteHandler={deleteHandler}
    />
  )
}

class Detail extends Component {
  constructor(props) {
    super(props)
    
    this.state = {
      note: getNote(props.id)
    }

    this.archiveHandler = props.archiveHandler
    this.unarchiveHandler = props.unarchiveHandler
    this.deleteHandler = props.deleteHandler
  }

  render() {
    if (!this.state.note) return (<NotFound />)
    
    return (
      <div className='detail-page-wrapper'>
        <h1>{this.state.note.title}</h1>
        <p>{ getReadableDate(this.state.note.createdAt) }</p>
        <p className='text-body'>{this.state.note.body}</p>
        <div className="action-wrapper">
          {
            this.state.note.archived ?  (
              <button onClick={() => this.unarchiveHandler(this.state.note.id)}>Unarchive</button>
            ) : (
              <button onClick={() => this.archiveHandler(this.state.note.id)}>Archive</button>
            )
          }
          <button onClick={() => this.deleteHandler(this.state.note.id)} >Delete</button>
        </div>
      </div>
    )
  }
}

Detail.propTypes = {
  id: PropTypes.string.isRequired,
  archiveHandler: PropTypes.func.isRequired,
  unarchiveHandler: PropTypes.func.isRequired,
  deleteHandler: PropTypes.func.isRequired
}

export default DetailPageWrapper