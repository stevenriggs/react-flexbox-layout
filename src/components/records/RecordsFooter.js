import React from 'react';
import RecordsPagination from './RecordsPagination';

function RecordsFooter() {
  return (
    <div className='d-flex flex-row flex-grow-1 justify-content-between bg-secondary text-white'>
        <div>
            Items Per Page Control
        </div>
        <div>
            <RecordsPagination />
        </div>
        <div>
            1 to 20 of 100 Records
        </div>
    </div>
  );
}

export default RecordsFooter;
