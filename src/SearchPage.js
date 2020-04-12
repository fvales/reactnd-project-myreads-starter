import React from "react";
import BookList from "./BookList";
import { Link } from "react-router-dom";
import * as API from "./BooksAPI";

class SearchPage extends React.Component {
  constructor() {
    super();
    this.state = {
      searchResult: []
    };

    this.updateSearchList = this.updateSearchList.bind(this);
  }

  updateSearchList(event) {
    let query = event.target.value;

    this.setState({
      searchResult: []
    });

    if (query.length > 0) {
      API.search(query.trim()).then(response => {
        if (!response.error) {
          response.forEach(book => {
            this.props.books
              .filter(_book => _book.id === book.id)
              .map(b => (book.shelf = b.shelf));
          });
          this.setState({
            searchResult: response
          });
        }
      });
    }
  }

  render() {
    return (
      <div className="search-books">
        <div className="search-books-bar">
          <Link to="/">
            <button className="close-search">Close</button>
          </Link>
          <div className="search-books-input-wrapper">
            <input
              type="text"
              placeholder="Search by title or author"
              onChange={this.updateSearchList}
            />
          </div>
        </div>
        <div className="search-books-results">
          <BookList
            books={this.state.searchResult}
            updateShelf={this.props.updateShelf}
          />
        </div>
      </div>
    );
  }
}

export default SearchPage;
