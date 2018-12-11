import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import * as BooksAPI from './BooksAPI';
import PropTypes from 'prop-types';
import Book from './Book.js';

class SearchBook extends Component {

    static propTypes = {
        booksOnShelf: PropTypes.array,
        onMoveBook: PropTypes.func.isRequired
    }

    state = {
        query: '',
        books: []
    }

    updateQuery = (query) => {
    if (!query) {
        this.setState({query: '', books: []})
    } else {
        this.setState({ query: query.trim() })
        BooksAPI.search(query).then((books) => {
        if (books.error) {
            books = []
        }
        books.map(book => (this.props.booksOnShelf.filter((b) => b.id === book.id).map(b => book.shelf = b.shelf)))
        this.setState({books})
        })
    }
    }

    render(){
        return(
            <div className="search-books">
                <div className="search-books-bar">
                    <Link to='/'>
                        <button className="close-search">Close</button>
                    </Link>
                <div className="search-books-input-wrapper">
                    <input type="text" placeholder="Search by title or author"
                        onChange={(e) => this.updateQuery(e.target.value)}/>
                </div>
                </div>
                <div className="search-books-results">
                <ol className="books-grid">
                {this.state.books
                  .map(book => (
                    <Book 
                      onMoveBook={this.props.onMoveBook}
                      key={book.id}
                      book={book}
                    />
                  ))
                }
                </ol>
                </div>
            </div>
        )
    }
}

export default SearchBook