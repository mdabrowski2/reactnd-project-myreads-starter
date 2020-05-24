import React from 'react';
import { Link } from 'react-router-dom';
import * as BooksAPI from '../BooksAPI';

class SearchPage extends React.Component {
    constructor() {
        super();

        this.state = {
            fetchedBooks: []
        };
    }

    async searchBooks(query) {
        if (!query) {
            return;
        }

        const response = await BooksAPI.search(query)

        if (Array.isArray(response.books)) {
            this.setState({
                fetchedBooks: response.books
            });
        }
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
                <ol className="books-grid"></ol>
            </div>
        </div>
    }
}

export default SearchPage;
