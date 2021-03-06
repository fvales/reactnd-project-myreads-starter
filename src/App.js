import React from "react";
import * as API from "./BooksAPI";
import "./App.css";
import BooksPage from "./BooksPage";
import SearchPage from "./SearchPage";

import { Route } from "react-router-dom";

class BooksApp extends React.Component {
  constructor() {
    super();
    // Books - Books currently in shelves
    this.state = {
      books: []
    };

    this.updateShelf = this.updateShelf.bind(this);
  }

  componentDidMount() {
    // Get all the books currently in shelves
    API.getAll().then(response => {
      this.setState({
        books: [...this.state.books, ...response]
      });
    });
  }

  updateShelf(book, shelf) {
    API.update(book, shelf).then(() => {
      book.shelf = shelf;
      this.setState(currentState => ({
        books: currentState.books.filter(b => b.id !== book.id).concat([book])
      }));
    });
  }

  render() {
    return (
      <div className="app">
        <Route
          path="/"
          exact
          render={() => (
            <BooksPage
              books={this.state.books}
              updateShelf={this.updateShelf}
            />
          )}
        />
        <Route
          exact
          path="/search"
          render={() => (
            <SearchPage
              books={this.state.books}
              updateShelf={this.updateShelf}
            />
          )}
        />
      </div>
    );
  }
}

export default BooksApp;
