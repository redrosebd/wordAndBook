// Import useEffect, useState from React
"use client";
import Navbar from "@/app/Navbar/Navbar";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import "./style.css";
const Page = ({ params }) => {
  const [book, setBook] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 1; // Assuming you want one book page per pagination page for simplicity

  useEffect(() => {
    const fetchBook = async () => {
      try {
        const response = await fetch(
          `https://wordbook-ten.vercel.app/books/${params.id}`
        );
        const data = await response.json();
        const pagesContent = data.map((book) =>
          book.data.pages.map((page) => page.content)
        );
        setBook(pagesContent.flat()); // Flatten the array if the structure is nested
      } catch (error) {
        console.error("Error fetching book:", error);
      }
    };
    fetchBook();
  }, [params.id]);
  const navigate = useRouter();
  const handleBack = () => {
    navigate.back();
  };
  const totalPages = Math.ceil(book.length / itemsPerPage);

  // Calculate the pages to be shown based on the current page
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = book.slice(indexOfFirstItem, indexOfLastItem);

  // Change page function
  const paginate = (pageNumber) => setCurrentPage(pageNumber);
  const browserHistoryFunctionBack = (s) => {
    let stack1 = [];
    let box1 = s;

    let reverse1 = "";

    let button = ["1"];
    for (let i = 0; i < box1?.length; i++) {
      stack1.push(box1[i]);
    }
    for (let i = 0; i < box1?.length; i++) {
      reverse1 += stack1.pop();
    }

    for (let i = 0; i < button.length; i++) {
      const back = reverse1 == button[i];

      if (back) {
        window.history.back();
      }
    }

    return;
  };
  return (
    <div>
      <Navbar />
      <div>
        <div style={{ height: "100vh" }}>
          <div className="pagination mx-auto max-w-[1600px]">
            {Array.from({ length: totalPages }, (_, i) => i + 1).map(
              (number) => (
                <button
                  className="btn mt-4 ml-4 w-[150px] btn-outline btn-primary  text-xl font-bold mr-2 mx-auto"
                  key={number}
                  disabled={currentPage === number}
                  onClick={() => paginate(number)}
                >
                  {number}
                </button>
              )
            )}
            <button
              onClick={handleBack}
              className="btn text-xl font-bold btn-error btn-outline my-4 w-[150px]"
            >
              Back
            </button>
          </div>
          {currentItems.map((item, index) => (
            <div key={index} className="demoPage mb-4">
              <div
                className="w-[800px] text-xl card card-body my-6 min-h-[400px] bg-base-300 p-8 flex border-2 border-teal-900 mx-auto"
                dangerouslySetInnerHTML={{ __html: item }}
              />
            </div>
          ))}
          <div className="pagination mx-auto max-w-[1600px]">
            {Array.from({ length: totalPages }, (_, i) => i + 1).map(
              (number) => (
                <button
                  className="btn mt-4 ml-4 w-[150px] btn-outline btn-primary mr-2 font-bold mb-4 mx-auto"
                  key={number}
                  disabled={currentPage === number}
                  onClick={() => paginate(number)}
                >
                  {number}
                </button>
              )
            )}
            <button
              onClick={() => browserHistoryFunctionBack("1")}
              className="btn font-bold text-xl btn-error btn-outline my-4 w-[150px]"
            >
              Back
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Page;
