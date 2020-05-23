import React from 'react';

const ActionMenu = ({ updateShelf, currentShelf }) => {
    return <div className="book-shelf-changer">
        <select defaultValue={currentShelf} onChange={event => updateShelf(event.target.value)}>
            <option value="move" disabled>Move to...</option>
            <option value="currentlyReading">Currently Reading</option>
            <option value="wantToRead">Want to Read</option>
            <option value="read">Read</option>
            <option value="none">None</option>
        </select>
    </div>;
};

export default ActionMenu;
