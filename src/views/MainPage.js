import React from 'react';
import { Link } from 'react-router-dom';
import Bookshelf from '../components/Bookshelf';
import * as BooksAPI from '../BooksAPI'

class MainPage extends React.Component {
    constructor() {
        super();

        this.state = {
            currentlyReading: [],
            wantToRead: [],
            read: []
        };
    }

    componentDidMount() {
        return this.refreshBooks();
    }

    async refreshBooks() {
        const books = await BooksAPI.getAll();
        const currentlyReading = [];
        const wantToRead = [];
        const read = [];

        books.forEach(book => {
            switch(book.shelf) {
                case 'currentlyReading':
                    currentlyReading.push(book);
                    break;
                case 'wantToRead':
                    wantToRead.push(book);
                    break;
                case 'read':
                    read.push(book);
                    break;
                default:
                    // no default case
            }
        });

        this.setState({
            currentlyReading,
            wantToRead,
            read
        });
    }

    render() {
        return <div className="list-books">
            <div className="list-books-title">
                <h1>MyReads</h1>
            </div>
            <div className="list-books-content">
                <div>
                    <Bookshelf onChange={() => this.refreshBooks()} title="Currently Reading" books={this.state.currentlyReading} />
                    <Bookshelf onChange={() => this.refreshBooks()} title="Want to Read" books={this.state.wantToRead} />
                    <Bookshelf onChange={() => this.refreshBooks()} title="Read" books={this.state.read} />
                </div>
            </div>
            <div className="open-search">
                <Link to="/search" style={{ cursor: 'default' }}>
                    <button>Add a book</button>
                </Link>
            </div>
        </div>;
    }
};

export default MainPage;
