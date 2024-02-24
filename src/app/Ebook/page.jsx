"use client";
import React, { useEffect, useState } from "react";
import "./style.css";
import Image from "next/image";
import imageSuccess from "../../../public/image/success.png";
const Book = () => {
  const [book, setBook] = useState([]);
  useEffect(() => {
    fetch("https://wordbook-ten.vercel.app/books")
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setBook(data);
      });
  }, []);
  useEffect(() => {
    const pages = document.getElementsByClassName("page");

    for (let i = 0; i < pages.length; i++) {
      const page = pages[i];

      if (i % 2 === 0) {
        page.style.zIndex = pages.length - i;
      }
    }

    for (let i = 0; i < pages.length; i++) {
      const currentPage = pages[i];

      currentPage.pageNum = i + 1;

      currentPage.onclick = function () {
        if (this.pageNum % 2 === 0) {
          this.classList.remove("flipped");
          this.previousElementSibling.classList.remove("flipped");
        } else {
          this.classList.add("flipped");
          this.nextElementSibling.classList.add("flipped");
        }
      };
    }
  }, []);

  return (
    <div className="mainArea">
      <div className="book">
        <div id="pages" className="pages">
          {/* -------------------Cover Page --------------- */}

          <div className="page p-4  ">
            <div className="page-border h-full  rounded-md flex justify-center items-center">
              {/* <p className="custom-font font-bold text-4xl ">
                  Welcome To, <br />{" "}
                  <span className="text-red-500">RedRose Ebook</span>
                </p> */}
              {book.map((data) => {
                return (
                  <p className="custom-font font-bold text-4xl ">
                    {data?.data?.title}
                  </p>
                );
              })}
            </div>
          </div>

          {/* -----------------First Single Page------------- */}
          <div className="page p-4 ">
            <div className="page-border h-full  rounded-md  px-3 py-2 text-justify">
              {/* --------Topic Image-------- */}
              <div className="w-full">
                <Image src={imageSuccess} className="w-7/12 mx-auto"></Image>
              </div>

              {/* --------Topic heading-------- */}
              <h2 className="text-center font-bold text-xl my-2">
                How to success in student life
              </h2>

              {/* ---------Main Text content--------- */}
              <div className="z-[2] text-[15px] text-gray-700">
                Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                Excepturi provident odit nihil non assumenda! Ea quos ducimus
                aspernatur numquam cumque magnam harum, sed asperiores eaque
                optio expedita similique inventore error praesentium,
                repellendus distinctio explicabo perspiciatis maxime temporibus
                delectus hic voluptatum illum. Sed nostrum vero odit quam quod
                animi iure rerum consequuntur voluptate eum doloremque ipsum
                dolore quos impedit modi alias a earum, cupiditate ullam non
                veritatis! Ullam eum dolorem ex ipsam
              </div>
              {/* ---------- Ideal Text Limit 1024 Characters and Maximum Text Limit 1090 Characters------  */}
              <span className="page-counter">1</span>
            </div>
          </div>
          {/* -----------------------First Single Page End ------------------ */}

          {/* -----------------Second Single Page------------- */}
          <div className="page p-4 ">
            <div className="page-border h-full  rounded-md  px-3 py-2 text-justify">
              <h2 className="text-center pt-3 pb-2 font-bold text-2xl custom-font">
                Learn English Speaking in 30 Days.
              </h2>
              <div className="z-[2] text-[15px] text-gray-700">
                Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                Excepturi provident odit nihil non assumenda! Ea quos ducimus
                aspernatur numquam cumque magnam harum, sed asperiores eaque
                optio expedita similique inventore error praesentium,
                repellendus distinctio explicabo perspiciatis maxime temporibus
                delectus hic voluptatum illum. Sed nostrum vero odit quam quod
                animi iure rerum consequuntur voluptate eum doloremque ipsum
                dolore quos impedit modi alias a earum, cupiditate ullam non
                veritatis! Ullam eum dolorem ex ipsam, minima harum sunt,
                quisquam voluptatibus beatae illo sed illum enim? Consectetur
                culpa velit unde. Iste, voluptas tempore! Quia, itaque? Dolorum
                perspiciatis quaerat iure reprehenderit corporis ipsa debitis
                magnam in culpa necessitatibus obcaecati quos quam aut, ipsum
                ullam ratione dolores adipisci. Doloribus accusantium veritatis
                error architecto ipsum aperiam enim.
              </div>
              {/* ---------- Ideal Text Limit 1024 Characters and Maximum Text Limit 1090 Characters------  */}
              <span className="page-counter">2</span>
            </div>
          </div>
          {/* -----------------------Second Single Page End ------------------ */}

          {/* -----------------Third Single Page------------- */}

          <div className="page p-4 ">
            <div className="page-border h-full  rounded-md  px-3 py-2 text-justify">
              <div className="z-[2] text-[15px] text-gray-700">
                Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                Excepturi provident odit nihil non assumenda! Ea quos ducimus
                aspernatur numquam cumque magnam harum, sed asperiores eaque
                optio expedita similique inventore error praesentium,
                repellendus distinctio explicabo perspiciatis maxime temporibus
                delectus hic voluptatum illum. Sed nostrum vero odit quam quod
                animi iure rerum consequuntur voluptate eum doloremque ipsum
                dolore quos impedit modi alias a earum, cupiditate ullam non
                veritatis! Ullam eum dolorem ex ipsam, minima harum sunt,
                quisquam voluptatibus beatae illo sed illum enim? Consectetur
                culpa velit unde. Iste, voluptas tempore! Quia, itaque? Dolorum
                perspiciatis quaerat iure reprehenderit corporis ipsa debitis
                magnam in culpa necessitatibus obcaecati quos quam aut, ipsum
                ullam ratione dolores adipisci. Doloribus accusantium veritatis
                error architecto ipsum aperiam enim, explicabo quia dolorem modi
                excepturi voluptas expedita labore, eveniet tempora
                exercitationem eligendi vitae magnam molestias. Ex. Lorem ipsum
                dolor sit amet. Lorem ipsum dolor sit amet. Lorem ipsum dolor
                sit amet.
              </div>
              {/* ---------- Ideal Text Limit 1024 Characters and Maximum Text Limit 1090 Characters------  */}
              <span className="page-counter">3</span>
            </div>
          </div>
          {/* -----------------Third Single Page End------------- */}

          {/* -----------------Fourth Single Page------------- */}

          <div className="page p-4 ">
            <div className="page-border h-full  rounded-md  px-3 py-2 text-justify">
              <h2 className="text-center pt-3 pb-4 font-thin text-3xl text-gray-600  heading-AsharAlo">
                সফল মানুষ হওয়ার থেকে ভালো মানুষ হওয়া জরুরি ,,
              </h2>
              <div className="z-[2] text-[15px] text-gray-700 text-common">
                <p>
                  আমরা হয়তো কিছুটা পড়াশোনা করে কিছুটা শিক্ষিত হতে পেরেছি।
                  কিন্তু ভালো মানুষ হতে পারিনি। একজন মানুষ শিক্ষিত হওয়ার ছেয়ে
                  ভালো মানুষ হওয়া খুবই জরুরি। জীবনে যদি কারো উপকার নাও করতে
                  পারেন তা হলে অন্তত কারো ক্ষতি করার চেষ্টা করবেন না। একজন
                  মানুষকে যে সবাই পছন্দ করবে তা কিন্তু নয়। কিছু লোক তাকে পছন্দ
                  করবে আবার কিছু লোক তাকে অপছন্দ করবে। এটাই স্বাভাবিক! তা না হলে
                  সবাই ঐশ্বরিয়া রায়/দীপিকা পাড়ুকোনেরই ফ্যান হতো। মল্লিকা
                  শেরাওয়াত/মালাইকা অরোরা এর কোন ফ্যান থাকতো না।
                </p>
                <br />
                <p>
                  একজন মানুষকে আপনার অপছন্দ হতেই পারে। কিন্তু তাই বলে কেন তাকে
                  খারাপ ব্যবহার করে সমাজের অন্য মানুষদের কাছে হেয় প্রতিপন্ন
                  করবেন। একজন মেথর/মুচির কাছ থেকেও অনেক কিছু শেখার আছে। মানুষের
                  চলার পথে বিভিন্ন সময় বিভিন্ন প্রয়োজনে একে অন্যের সহায়তার
                  প্রয়োজন হয়ে থাকে। কারণ মানুষ সামাজিক জীব তাই তারা একা একা চলতে
                  পারেনা। আপনি যদি মনে করেন যে আপনার জীবনে কারো সহায়তার প্রয়োজন
                  নেই তাহলে আপনি ভূল চিন্তা করেছেন।{" "}
                </p>
              </div>
              {/* ---------- Ideal Text Limit 1024 Characters and Maximum Text Limit 1090 Characters------  */}
              <span className="page-counter">4</span>
            </div>
          </div>
          {/* -----------------Fourth Single Page End------------- */}

          {/* <div className="page"><p>Third Page</p></div>
          <div className="page"><p>Fourth Page</p></div>
          <div className="page"><p>Fifth Page</p></div>
          <div className="page"><p>Sixth Page</p></div>
          <div className="page"><p>Seventh Page</p></div>
          <div className="page"><p>Eighth Page</p></div>
          <div className="page"><p>Ninth Page</p></div>
          <div className="page"><p>Tenth Page</p></div>
          <div className="page"><p>Eleven Page</p></div>
          <div className="page"><p>Twelve Page</p></div>
          <div className="page"><p>Thirteenth Page</p></div>
          <div className="page"><p>Fourteenth Page</p></div> */}

          {/* -------------------End Page --------------- */}
          <div className="page p-4  ">
            <div className="page-border h-full  rounded-md flex justify-center items-center">
              <p className="custom-font font-bold text-4xl ">
                The End <span className="text-red-500">...</span>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Book;
