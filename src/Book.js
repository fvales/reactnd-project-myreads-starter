import React from "react";
import ControlMenu from "./ControlMenu";

function Book(props) {
  // console.log(props.book);
  return (
    <div className="book">
      <div className="book-top">
        <div
          className="book-cover"
          style={{
            width: 128,
            height: 192,
            backgroundImage: `url(${props.book.imageLinks.thumbnail})`
          }}
        ></div>
        <ControlMenu updateShelf={props.updateShelf} book={props.book} />
      </div>
      <div className="book-title">{props.book.title}</div>
      <div className="book-authors">{props.book.authors}</div>
    </div>
  );
}

export default Book;
