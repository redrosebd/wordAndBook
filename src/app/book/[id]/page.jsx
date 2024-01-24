// ... (your existing imports)
"use client";
import { useEffect, useState } from "react";
import HTMLFlipBook from "react-pageflip";

const Page = ({ params }) => {
  const [book, setBook] = useState([]);

  useEffect(() => {
    const fetchBook = async () => {
      try {
        const response = await fetch(
          `http://localhost:8001/books/${params.id}`
        );
        const data = await response.json();

        // Assuming data is in the expected format
        const pagesContent = data?.map((book) =>
          book?.data?.pages.map((page) => page?.content)
        );
        setBook(pagesContent);
      } catch (error) {
        console.error("Error fetching book:", error);
        setBook([]);
      }
    };

    fetchBook();
  }, [params.id]);

  return (
    <div className=" w-[1600px] mx-auto">
      <div style={{ height: "100vh" }}>
        <HTMLFlipBook width={300} height={500} className=" mx-auto p-12 ">
          {book.map((pageContents, pageIndex) => (
            <div key={pageIndex} className="demoPage">
              {pageContents.map((item, itemIndex) => (
                <div
                  key={`${pageIndex}-${itemIndex}`}
                  className="w-[800px] text-xl card  card-body my-6 min-h-[400px] bg-base-300 p-8 flex  border-2 border-teal-900 mx-auto"
                >
                  {item && <div dangerouslySetInnerHTML={{ __html: item }} />}
                </div>
              ))}
              {pageIndex < book.length - 1 && (
                <hr style={{ pageBreakAfter: "always" }} />
              )}
            </div>
          ))}
        </HTMLFlipBook>
      </div>
    </div>
  );
};

export default Page;
