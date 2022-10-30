import React, { useEffect, useState } from "react";
import BookDataService from "../services/bookstore.services";

//
const BookList = () => {
  //
  const [books, setBooks] = useState([]);
  //
  useEffect(() => {
    getBooks();
  }, []);
  //
  const getBooks = async () => {
    // use the defined method to get all the data from firestore
    const data = await BookDataService.getAllBooks();
    // setBooks - returns array with each document being an object containing the information we want. 4 props
    setBooks(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
  };
  //
  const handleDelete = async (id) => {
    // remove book using passed in ID
    await BookDataService.deleteBook(id);
    // Refresh book list by calling getBooks again.
    getBooks();
  };
  //
  const getBookId = (id) => {};

  //
  return (
    <div className="w-full bg-purple-300 p-2 flex justify-center items-center">
      <div className="w-3/4 bg-purple-100 flex flex-col">
        {/* HEADER SECTION */}
        <div className="w-full flex border-2 border-b-black font-semibold text-center">
          <span className="w-1/12">#</span>
          <span className="w-3/12">Book Title</span>
          <span className="w-3/12">Book Author</span>
          <span className="w-3/12">Status</span>
          <span className="w-3/12">Action</span>
        </div>
        {/* DISPLAY SECTION */}
        <div className="w-full flex flex-col">
          {books &&
            books.map((book, index) => {
              return (
                <div className="flex text-center p-1" key={book.id}>
                  <span className="w-1/12">{index + 1}</span>
                  <span className="w-3/12">{book.title}</span>
                  <span className="w-3/12">{book.author}</span>
                  <span className="w-3/12">{book.status}</span>
                  <span className="w-3/12">
                    <button
                      className="bg-blue-500 w-1/2"
                      onClick={(e) => getBookId(book.id)}
                    >
                      Edit
                    </button>
                    <button
                      className="bg-red-500 w-1/2"
                      onClick={(e) => handleDelete(book.id)}
                    >
                      Delete
                    </button>
                  </span>
                </div>
              );
            })}
        </div>
      </div>
    </div>
  );
};

export default BookList;
