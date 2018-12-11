import React from 'react'
import {Route} from 'react-router-dom'
import * as BooksAPI from './BooksAPI'
import './App.css'
import SearchBook from './SearchBook.js'
import ListBooks from './ListBooks.js'

class BooksApp extends React.Component {
  state = {
    books: []
  }

  moveBook = (book, shelf) => {
    if (this.state.books) {
      BooksAPI.update(book,shelf).then(() => {
        book.shelf = shelf;
        console.log(this.state.books.filter(b => b.id !== book.id));
        console.log(book);
        this.setState(state => ({
          books: state.books.filter(b => b.id !== book.id).concat([ book ])
        }));
        console.log(this.state.books.filter(b => b.id !== book.id));
      })
    }
  }

  componentDidMount(){
    BooksAPI.getAll().then(books => {
        this.setState({books});
    });
}

  render() {
    return (
        <div className="app">
          <Route exact path="/" render={() => (
            <ListBooks
              onMoveBook={this.moveBook}
              booksOnShelf={this.state.books} />
          )} />
          <Route path="/search" render={() => (
            <SearchBook
              onMoveBook={this.moveBook}
              booksOnShelf={this.state.books}
            />
          )}/>
        </div>
    )
  }
}

export default BooksApp
