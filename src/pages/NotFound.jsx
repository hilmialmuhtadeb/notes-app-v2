import React, { Component } from 'react'
import { Link } from 'react-router-dom'

export class NotFound extends Component {
  render() {
    return (
      <div className='not-found-page'>
        <h1>404</h1>
        <p>Note you're looking for not found. Browse all notes <Link to="/">here</Link>.</p>
      </div>
    )
  }
}

export default NotFound