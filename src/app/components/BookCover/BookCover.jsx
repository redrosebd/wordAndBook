import React from 'react';
import coverPhoto from '../../../../public/image/bookCoverFs.jpg'
import Image from 'next/image';
const BookCover = () => {
    return (
        <div className='w-full mx-auto py-5'>
            <Image src={coverPhoto} className='mx-auto rounded-md shadow-md shadow-[#0000008f]' alt='English Book Cover' /> 
        </div>
    );
};

export default BookCover;