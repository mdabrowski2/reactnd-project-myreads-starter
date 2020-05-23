import React from 'react';
import Book from './Book';
import * as BooksAPI from '../BooksAPI';

const Bookshelf = ({ title, books, onChange }) => {
    return <div className="bookshelf">
        <h2 className="bookshelf-title">{title}</h2>
        <div className="bookshelf-books">
            <ol className="books-grid">
                {books.map((book, index) => <li key={index}><Book book={book} updateShelf={shelf => BooksAPI.update(book, shelf).then(onChange)} /></li>)}
            </ol>
        </div>
    </div>;
};

export default Bookshelf;
