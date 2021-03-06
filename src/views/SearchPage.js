import React from 'react';
import { Link } from 'react-router-dom';
import * as BooksAPI from '../BooksAPI';
import Book from '../components/Book';

class SearchPage extends React.Component {
    constructor() {
        super();

        this.state = {
            fetchedBooks: [],
            inputTimeout: null
        };
    }

    searchBooks(query) {
        clearTimeout(this.state.inputTimeout);

        const timeoutId = setTimeout(async () => {
            if (!query) {
                this.setState({
                    fetchedBooks: []
                });
                return;
            }

            let books = await BooksAPI.search(query);
            const myBooks = await BooksAPI.getAll();

            books = books.map(book => {
                const bookOnShelf = myBooks.find(myBook => myBook.id === book.id);

                if (bookOnShelf) {
                    return {
                        ...book,
                        shelf: bookOnShelf.shelf
                    };
                }

                return book;
            });

            if (Array.isArray(books)) {
                this.setState({
                    fetchedBooks: books
                });
            } else {
                this.setState({
                    fetchedBooks: null
                });
            }
        }, 500);

        this.setState({
            inputTimeout:  timeoutId
        });
    }

    render() {
        return <div className="search-books">
            <div className="search-books-bar">
                <Link to="/" style={{ cursor: 'default' }}>
                    <button className="close-search">Close</button>
                </Link>
                <div className="search-books-input-wrapper">
                    {/*
                    NOTES: The search from BooksAPI is limited to a particular set of search terms.
                    You can find these search terms here:
                    https://github.com/udacity/reactnd-project-myreads-starter/blob/master/SEARCH_TERMS.md

                    However, remember that the BooksAPI.search method DOES search by title or author. So, don't worry if
                    you don't find a specific author or title. Every search is limited by search terms.
                    */}
                    <input type="text" onChange={event => this.searchBooks(event.target.value)} placeholder="Search by title or author"/>

                </div>
            </div>
            <div className="search-books-results">
                <ol className="books-grid">
                    {this.state.fetchedBooks
                        ? this.state.fetchedBooks.map((book, index) => <li key={index}><Book book={book} updateShelf={shelf => BooksAPI.update(book, shelf)}></Book></li>)
                        : 'No results found'}
                </ol>
            </div>
        </div>
    }
}

export default SearchPage;
