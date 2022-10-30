import React from "react";
import NavBar from "./components/NavBar-component";
import AddBook from "./components/AddBook-component";
import BookList from "./components/BookList-component";
//
function App() {
  return (
    <>
      <NavBar />
      <AddBook />
      <BookList />
    </>
  );
}

export default App;
