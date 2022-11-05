import React, { useState, useEffect } from "react";
import NavBar from "./components/NavBar-component";
import AddBook from "./components/AddBook-component";
import BookList from "./components/BookList-component";
import BookDataService from "./services/bookstore.services";

//
function App() {
  //
  console.log("app rendered");
  const [bookId, setBookId] = useState("");
  //
  const [books, setBooks] = useState([]);
  //
  console.log("books, ", books);
  //
  const getBooks = async () => {
    // use the defined method to get all the data from firestore
    const data = await BookDataService.getAllBooks();
    console.log("Data from getBook func", data);
    // setBooks - returns array with each document being an object containing the information we want. 4 props
    setBooks(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
  };
  //
  const getBookIdHandler = (id) => {
    // console.log("The id of the book to be edited: ", id);
    // This id comes from the bookList.
    setBookId(id);
  };
  //
  return (
    <>
      <NavBar />
      <AddBook id={bookId} setBookId={setBookId} getBooks={getBooks} />
      <BookList
        getBookId={getBookIdHandler}
        getBooks={getBooks}
        books={books}
      />
    </>
  );
}

export default App;
