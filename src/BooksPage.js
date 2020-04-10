import React from "react";
import Header from "./Header";
import AddBookButton from "./AddBookButton";
import BookShelf from "./BookShelf";

class BookPage extends React.Component {
  state = {
    currentlyReading: [],
    wantToRead: [],
    read: []
  };

  addBooksToShelf(books) {
    let currentlyReading = [];
    let wantToRead = [];
    let read = [];

    books.forEach(book => {
      switch (book.shelf) {
        case "currentlyReading":
          currentlyReading.push(book);
          break;
        case "wantToRead":
          wantToRead.push(book);
          break;
        case "read":
          read.push(book);
          break;
        default:
          break;
      }
    });
    this.setState({
      currentlyReading: [...this.state.currentlyReading, ...currentlyReading]
    });
    this.setState({
      wantToRead: [...this.state.wantToRead, ...wantToRead]
    });
    this.setState({
      read: [...this.state.read, ...read]
    });
  }

  componentDidMount() {
    // Add books to their respective shelf
    console.log(this.props.books);
    // this.addBooksToShelf(this.props.books);
  }

  render() {
    return (
      <div className="list-books">
        <Header />
        <div className="list-books-content">
          <BookShelf
            shelfName="Currently Reading"
            books={this.state.currentlyReading}
            updateShelf={this.updateShelf}
          />
          <BookShelf
            shelfName="Want to Read"
            books={this.state.wantToRead}
            updateShelf={this.updateShelf}
          />
          <BookShelf
            shelfName="Read"
            books={this.state.read}
            updateShelf={this.updateShelf}
          />
          <AddBookButton />
        </div>
      </div>
    );
  }
}

export default BookPage;
