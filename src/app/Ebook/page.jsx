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
          <div className="page"><p>Welcome To, <br/>RedRose Ebook</p></div>
          <div className="page">1</div>
          <div className="page"><p>First Page</p></div>
          <div className="page">Second Page</div>
          <div className="page"></div>
          <div className="page"></div>
          <div className="page"></div>
          <div className="page"></div>
          <div className="page"></div>
          <div className="page"></div>
          <div className="page"></div>
          <div className="page"></div>
          <div className="page"></div>
          <div className="page"></div>
          <div className="page"></div>
          <div className="page"><p>The End</p></div>
          
        </div>
      </div>
  );
};

export default Book;
