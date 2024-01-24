"use client";
import Link from "next/link";
import React, { useEffect, useState } from "react";

const page = () => {
  const [books, setBooks] = useState([]);
  useEffect(() => {
    fetch("http://localhost:8001/books")
      .then((res) => res.json())
      .then((data) => setBooks(data));
  }, []);
  console.log(books);
  return (
    <div>
      <div className="flex justify-center items-center gap-6 rounded-lg">
        {books.map((book) => {
          return (
            <div
              key={book._id}
              className="card w-96 bg-base-100 shadow-xl rounded-lg"
            >
              <div className="card-body items-center text-center">
                <h2 className="card-title">{book.data.title}</h2>

                <div className="card-actions">
                  <button className="btn btn-primary">
                    <Link href={`/book/${book._id}`}>Read</Link>
                  </button>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default page;
