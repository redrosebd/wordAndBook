"use client";
import React, { useEffect } from "react";
import "./style.css";
import Image from "next/image";
import imageSuccess from '../../../public/image/success.png';
const Book = () => {
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
              <p className="custom-font font-bold text-4xl ">
                Welcome To, <br />{" "}
                <span className="text-red-500">RedRose Ebook</span>
              </p>
            </div>
          </div>

          {/* -----------------First Single Page------------- */}
          <div className="page p-4 ">
           
             <div className="page-border h-full  rounded-md  px-3 py-2 text-justify">

              {/* --------Topic Image-------- */}
              <div className="w-full">
               <Image src={imageSuccess} className="w-7/12 mx-auto">

               </Image>
              </div>

              {/* --------Topic heading-------- */}
              <h2 className="text-center font-bold text-xl my-2">How to success in student life</h2>

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
              <h2 className="text-center pt-3 pb-2 font-bold text-2xl custom-font"  >Learn English Speaking in 30 Days.</h2>
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
                exercitationem eligendi vitae magnam molestias. Ex. Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet.
              </div>
              {/* ---------- Ideal Text Limit 1024 Characters and Maximum Text Limit 1090 Characters------  */}
              <span className="page-counter">3</span>
            </div>
          </div>
       {/* -----------------Third Single Page End------------- */}




         {/* -----------------Fourth Single Page------------- */}

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
                exercitationem eligendi vitae magnam molestias. Ex. Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet.
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
                The End
                
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Book;
