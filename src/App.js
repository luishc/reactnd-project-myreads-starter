import React from 'react'
import {Route} from 'react-router-dom'
// import * as BooksAPI from './BooksAPI'
import './App.css'
import SearchBook from './SearchBook.js'
import ListBooks from './ListBooks.js'

class BooksApp extends React.Component {
  state = {
  }

  render() {
    return (
        <div className="app">
          <Route exact path="/" component={ListBooks} />
          <Route path="/search" component={SearchBook} />
        </div>
    )
  }
}

export default BooksApp
