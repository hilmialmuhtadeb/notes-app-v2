import React, { Component } from 'react'
import { useSearchParams } from 'react-router-dom';
import { getActiveNotes, searchNotes } from '../utils/data'
import PropTypes from 'prop-types'
import NotesList from '../components/NotesList'

function NotesWrapper () {
  const [searchParams, setSearchParams] = useSearchParams()

  const title = searchParams.get('title')

  function changeSearchParams(keyword) {
    setSearchParams({ title: keyword })
  }
  
  return (
    <Notes
      onSearch={changeSearchParams}
      activeKeyword={title}
    />
  )
}

export class Notes extends Component {
  constructor(props) {
    super(props)

    this.state = {
      notes: props.activeKeyword ? searchNotes(props.activeKeyword) : getActiveNotes(),
      keyword: props.activeKeyword || ''
    }

    this.onSearch = this.onSearch.bind(this)
  }

  onSearch = (keyword) => {
    this.setState({
      notes: searchNotes(keyword),
      keyword
    })

    this.props.onSearch(keyword)
  }
  
  render() {
    return (
      <>
        <h1>Active Notes</h1>
        <div className='search-bar-wrapper'>
          <input
            type="text"
            placeholder="Search"
            value={this.state.keyword}
            onChange={(e) => this.onSearch(e.target.value)}
          />
        </div>
        <NotesList notes={this.state.notes} />
      </>
    )
  }
}

Notes.propsType = {
  changeSearchParams: PropTypes.func,
  activeKeyword: PropTypes.string
}

export default NotesWrapper