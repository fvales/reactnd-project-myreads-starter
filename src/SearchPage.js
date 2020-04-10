import React from "react";
import BookList from "./BookList";
import { Link } from "react-router-dom";

class SearchPage extends React.Component {
  state = {};

  render() {
    console.log(this.props.books);
    return (
      <div className="search-books">
        <div className="search-books-bar">
          <Link to="/">
            <button className="close-search">Close</button>
          </Link>
          <div className="search-books-input-wrapper">
            <input type="text" placeholder="Search by title or author" />
          </div>
        </div>
        <div className="search-books-results">
          <BookList
            books={this.props.books}
            updateShelf={this.props.updateShelf}
          />
        </div>
      </div>
    );
  }
}

export default SearchPage;
