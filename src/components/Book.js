import React from 'react';
import ActionMenu from './ActionMenu';

const Book = ({ book, updateShelf }) => {
    const {
        authors = [],
        title,
        imageLinks = {},
        shelf
    } = book;
    const { smallThumbnail } = imageLinks;

    return <div className="book">
        <div className="book-top">
            <div className="book-cover" style={{ width: 128, height: 193, backgroundImage: `url("${smallThumbnail}")` }}></div>
            <ActionMenu updateShelf={updateShelf} currentShelf={shelf} />
        </div>
        <div className="book-title">{title}</div>
        <div className="book-authors">{authors.join(', ')}</div>
  </div>;
};

export default Book;
