import React from "react";
//
const BookList = () => {
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
          <div className="flex text-center p-1">
            <span className="w-1/12">1</span>
            <span className="w-3/12">Harry Potter</span>
            <span className="w-3/12">JK Rowling</span>
            <span className="w-3/12">Available</span>
            <span className="w-3/12">
              <button className="bg-blue-500 w-1/2">Edit</button>
              <button className="bg-red-500 w-1/2">Delete</button>
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BookList;
