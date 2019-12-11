import React from 'react';
import PageControl from './PageControl';

function RecordsFooter() {
  return (
    <div className='d-flex flex-row flex-grow-1 justify-content-between bg-light border pt-2 pr-2 pl-2'>
        <div className='d-flex'>
            Items Per Page Control
        </div>
        <div className='d-flex'>
            <PageControl />
        </div>
        <div className='d-flex align-middle'>
            1 to 20 of 100 Records
        </div>
    </div>
  );
}

export default RecordsFooter;
