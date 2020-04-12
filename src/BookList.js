import React from "react";
import Book from "./Book";

function BookList(props) {
  return (
    <ol className="books-grid">
      {props.books.map(_book => {
        return (
          <li key={_book.id}>
            <Book book={_book} updateShelf={props.updateShelf} />
          </li>
        );
      })}
    </ol>
  );
}

export default BookList;
