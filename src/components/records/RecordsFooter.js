import React from 'react';
import PageControl from './PageControl';
import ItemsPerPageControl from './ItemsPerPageControl';

function RecordsFooter() {
  return (
    <div className='d-flex flex-row flex-grow-1 justify-content-between align-items-center bg-light border p-2'>
        <div className='d-flex'>
            <ItemsPerPageControl />
        </div>
        <div className='d-flex'>
            <PageControl />
        </div>
        <div className='d-flex'>
            1 to 20 of 100 Records
        </div>
    </div>
  );
}

export default RecordsFooter;
