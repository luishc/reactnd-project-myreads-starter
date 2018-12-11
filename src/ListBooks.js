import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import PropTypes from 'prop-types';
import Book from './Book.js';

class ListBooks extends Component{

    static propTypes = {
        booksOnShelf: PropTypes.array,
        onMoveBook: PropTypes.func.isRequired
    }

    render(){
        const shelves = ["currentlyReading", "wantToRead", "read"]
        const shelveNames = ["Currently Reading", "Want To Read", "Read"]

        return(
            <div className="list-books">
                <div className="list-books-title">
                    <h1>MyReads</h1>
                </div>
            
                {shelves.map((shelf, index) => {
                    return(
                      <div key={index} className="list-books-content">
                        <div>
                          <div>
                            <div className="bookshelf">
                              <h2 className="bookshelf-title">{shelveNames[index]}</h2>
                              <div className="bookshelf-books">
                                <ol className="books-grid">
                                  {this.props.booksOnShelf
                                    .filter(book => book.shelf === shelf)
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
                          </div>
                        </div>
                      </div>
                    )}
                  )}
            <div className="open-search">
              <Link to='/search' className="open-search">
                <button>Add a book</button>
              </Link>
            </div>
          </div>
        )
    }
}

export default ListBooks;