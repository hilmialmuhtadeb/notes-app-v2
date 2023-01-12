import React, { Component } from 'react'
import NotesList from '../components/NotesList'
import { getArchivedNotes } from '../utils/data'

export class Archived extends Component {
  constructor(props) {
    super(props)

    this.state = {
      notes: getArchivedNotes()
    }
  }
  
  render() {
    return (
      <>
        <h1>Archived Notes</h1>
        <NotesList notes={this.state.notes} />
      </>
    )
  }
}

export default Archived