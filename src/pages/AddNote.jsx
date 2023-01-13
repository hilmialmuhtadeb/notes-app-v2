import React from 'react'
import { useNavigate } from 'react-router-dom';
import { useInput } from '../utils/custom-hooks';
import { addNote } from '../utils/network-data';

function AddNoteWrapper () {
  const navigate = useNavigate();
  const [title, onTitleChange] = useInput('')
  const [body, onBodyChange] = useInput('')
  
  async function handleSave () {
    await addNote({ title, body });
    navigate('/')
  }
  
  return (
    <div className="add-note-page">
      <input
        type="text"
        className='title-input'
        placeholder='Note Title'
        onChange={onTitleChange}
      />
      <textarea
        type="text"
        className='body-input'
        placeholder='Write your notes here'
        onChange={onBodyChange}
      />
      <div className="action-wrapper">
        <button onClick={handleSave}>Save</button>
      </div>
    </div>
  )
}

export default AddNoteWrapper