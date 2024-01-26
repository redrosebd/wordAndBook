"use client"
import React, { useEffect } from 'react';
import './style.css';

const Book = () => {
  useEffect(() => {
    const pages = document.getElementsByClassName('page');
    
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
          this.classList.remove('flipped');
          this.previousElementSibling.classList.remove('flipped');
        } else {
          this.classList.add('flipped');
          this.nextElementSibling.classList.add('flipped');
        }
      };
    }
  }, []);

  return (
    <div className="main-container">
      <div className="book">
        <div id="pages" className="pages">
          <div className="page "><p>Welcome To, <br/> <br /><span className='text-red-500'>RedRose Ebook</span></p></div>

          {/* -----------------Single Page------------- */}
          <div className="page p-4 ">
            <div className='page-border h-full  rounded-md  overflow-hidden p-3 text-justify'>
              <div className='z-[2]'>First Page Lorem ipsum dolor sit amet consectetur, adipisicing elit. Omnis id eveniet quos debitis perspiciatis corporis. Optio, tempore ut, nesciunt cum voluptas officiis laudantium porro possimus maxime, doloribus aspernatur earum fugit dolor vero. Illo eius fugiat est deleniti enim magni nesciunt! Molestiae, asperiores qui neque modi, dolorem eligendi culpa iusto consequuntur similique facere voluptatibus consectetur sit minus rem! Voluptatum libero mollitia tempore velit excepturi doloremque ipsa nihil rem, consectetur vitae, quo perspiciatis qui neque id ipsum quae animi illo totam omnis. Assumenda velit temporibus ab, provident similique sequi, corporis repudiandae exercitationem beatae rerum corrupti aut ad quidem. Nam deleniti molestias obcaecati.</div>
              
              <span className='page-counter'>1</span>

            </div>
          </div>
          {/* -----------------------Single Page End ------------------ */}

          <div className="page p-4">
            <div className='page-border h-full  rounded-md'>
              <p>Second Page</p>
            </div>
          </div>


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
          <div className="page"><p>The End</p></div>
          
        </div>
      </div>
    </div>
  );
};

export default Book;
