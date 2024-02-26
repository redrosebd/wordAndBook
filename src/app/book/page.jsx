"use client";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import Navbar from "../Navbar/Navbar";

const page = () => {
  const [books, setBooks] = useState([]);
  useEffect(() => {
    fetch("https://wordbook-ten.vercel.app/books")
      .then((res) => res.json())
      .then((data) => setBooks(data));
  }, []);

  return (
    <div>
      <Navbar />

      <div>
        <div className="flex justify-center items-center gap-6 rounded-lg my-4">
          {books.map((book) => {
            return (
              <div
                key={book._id}
                className="card w-96 border-2 border-teal-950  bg-base-100 shadow-xl rounded-lg"
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
    </div>
  );
};

export default page;
