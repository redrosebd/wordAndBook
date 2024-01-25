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
    <div className="book">
        <div id="pages" className="pages">
          <div className="page "><p>Welcome To, <br/> <br /><span className='text-red-500'>RedRose Ebook</span></p></div>
          <div className="page"><p>First Page</p></div>
          <div className="page"><p>Second Page</p></div>
          <div className="page"><p>Third Page</p></div>
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
          <div className="page"><p>Fourteenth Page</p></div>
          <div className="page"><p>The End</p></div>
          
        </div>
      </div>
  );
};

export default Book;
