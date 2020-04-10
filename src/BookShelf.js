import React from "react";
import BookList from "./BookList";

function BookShelf(props) {
  return (
    <div className="bookshelf">
      <h2 className="bookshelf-title">{props.shelfName}</h2>
      <div className="bookshelf-books">
        <BookList books={props.books} updateShelf={props.updateShelf} />
      </div>
    </div>
  );
}

export default BookShelf;
