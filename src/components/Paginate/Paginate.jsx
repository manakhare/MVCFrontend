import React from 'react';
import "./paginate.css";

export const Paginate = ({setPage, page}) => {
    // console.log(page);
    const prevPage = () => {
        if(page>1) setPage(page - 1);
        console.log(page);
    }

    const nextPage = () => {
        setPage(page + 1);
        console.log(page);
    }


  return (
    <div className='paginate'>
        <div className='prev-btn'>
            <button className='previous btn' onClick={prevPage}>PREV</button>
        </div>

        <div className='next-btn'>
            <button className='next btn' onClick={nextPage}>NEXT</button>
        </div>
    </div>
  )
}
