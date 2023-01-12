import React, { Component } from 'react'
import { useNavigate } from 'react-router-dom';
import { addNote } from '../utils/data'
import PropTypes from 'prop-types'

function AddNoteWrapper () {
  const navigate = useNavigate();
  
  return (
    <AddNote navigate={navigate} />
  )
}

export class AddNote extends Component {
  constructor(props) {
    super(props)

    this.state = {
      title: '',
      body: ''
    }

    this.handleTitleChange = this.handleTitleChange.bind(this)
    this.handleBodyChange = this.handleBodyChange.bind(this)
    this.handleSave = this.handleSave.bind(this)
  }

  handleTitleChange = (event) => {
    this.setState({ title: event.target.value })
  }

  handleBodyChange = (event) => {
    this.setState({ body: event.target.value })
  }
  
  handleSave = () => {
    const { title, body } = this.state
    addNote({ title, body });
    this.props.navigate('/')
  }
  
  render() {
    return (
      <div className="add-note-page">
        <input
          type="text"
          className='title-input'
          placeholder='Note Title'
          onChange={this.handleTitleChange}
        />
        <textarea
          type="text"
          className='body-input'
          placeholder='Write your notes here'
          onChange={this.handleBodyChange}
        />
        <div className="action-wrapper">
          <button onClick={this.handleSave}>Save</button>
        </div>
      </div>
    )
  }
}

AddNote.propsType = {
  navigate: PropTypes.func.isRequired
}

export default AddNoteWrapper