import React, { useState, useEffect } from "react";
//
const AddBook = () => {
  return (
    <div className=" h-60 flex flex-col border-2 border-b-black">
      {/* INPUT SECTION */}
      <section className=" p-5 flex flex-col justify-center items-center gap-2">
        <div className="bg-purple-300 w-1/2 p-2">
          <input
            type="text"
            placeholder="Book Title..."
            className="w-full p-1"
          />
        </div>
        <div className="bg-purple-300 w-1/2 p-2">
          <input
            type="text"
            placeholder="Book Author..."
            className="w-full p-1"
          />
        </div>
      </section>
      {/* BUTTON SECTION */}
      <section className="text-white text-2xl underline flex flex-col justify-center items-center gap-2">
        <div className="w-1/2">
          <button className="bg-green-500 w-1/2">Available</button>
          <button className="bg-red-500 w-1/2">Not Available</button>
        </div>
        <div className="w-1/2">
          <button className="bg-blue-500 w-full">Add/Update</button>
        </div>
      </section>
    </div>
  );
};

export default AddBook;
