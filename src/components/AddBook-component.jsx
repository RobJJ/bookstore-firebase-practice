import React, { useState, useEffect } from "react";
import BookDataService from "../services/bookstore.services";
//
const AddBook = ({ id, setBookId, getBooks }) => {
  //
  const [title, setTitle] = useState("");
  const [author, setAuthor] = useState("");
  const [status, setStatus] = useState("Available");
  // const [flag, setFlag] = useState(true);
  const [message, setMessage] = useState({ error: false, msg: "" });
  //
  const editHandler = async () => {
    setMessage("");
    try {
      const docSnap = await BookDataService.getBook(id);
      // Set values from docSnap. User can see the values to edit
      setTitle(docSnap.data().title);
      setAuthor(docSnap.data().author);
      setStatus(docSnap.data().status);
    } catch (error) {
      setMessage({ error: true, msg: error.message });
    }
  };
  // Watching id.. if changed, this func will pass the values to the inputs
  useEffect(() => {
    if (id !== undefined && id !== "") {
      editHandler();
    }
  }, [id]);

  //
  const handleSubmit = async (e) => {
    e.preventDefault();
    setMessage("");
    if (title === "" || author === "") {
      setMessage({ error: true, msg: "All fields are mandatory!" });
      return;
    }
    //
    const newBook = {
      title,
      author,
      status,
    };
    //
    try {
      // Check if you're updating a book or adding a new book
      if (id !== undefined && id !== "") {
        await BookDataService.updateBook(id, newBook);
        setBookId("");
        // update display list
        getBooks();
        setMessage({ error: false, msg: "Updated successfully!" });
      } else {
        await BookDataService.addBooks(newBook);
        // update display list
        getBooks();
        setMessage({ error: false, msg: "New Book added successfully!" });
      }
    } catch (error) {
      setMessage({ error: true, msg: error.message });
    }
    //
    setTitle("");
    setAuthor("");
  };
  //
  return (
    <div className=" h-60 flex flex-col border-2 border-b-black">
      {/* INPUT SECTION */}
      <form onSubmit={handleSubmit}>
        <section className=" p-5 flex flex-col justify-center items-center gap-2">
          <div className="bg-purple-300 w-1/2 p-2">
            <input
              type="text"
              placeholder="Book Title..."
              className="w-full p-1"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
            />
          </div>
          <div className="bg-purple-300 w-1/2 p-2">
            <input
              type="text"
              placeholder="Book Author..."
              className="w-full p-1"
              value={author}
              onChange={(e) => setAuthor(e.target.value)}
            />
          </div>
        </section>
        {/* BUTTON SECTION */}
        <section className="text-white text-2xl underline flex flex-col justify-center items-center gap-2">
          <div className="w-1/2">
            <button
              className="bg-green-500 w-1/2"
              type="button"
              onClick={(e) => {
                setStatus("Available");
              }}
            >
              Available
            </button>
            <button
              className="bg-red-500 w-1/2"
              type="button"
              onClick={(e) => {
                setStatus("Not Available");
              }}
            >
              Not Available
            </button>
          </div>
          <div className="w-1/2">
            <button type="submit" className="bg-blue-500 w-full">
              Add/Update
            </button>
          </div>
        </section>
      </form>
    </div>
  );
};

export default AddBook;
