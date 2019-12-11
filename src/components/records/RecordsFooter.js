import React from 'react';

function RecordsFooter() {
  return (
    <div className='d-flex flex-row flex-grow-1 justify-content-between'>
        <div>
            Items Per Page Control
        </div>
        <div>
            Pagination Control
        </div>
        <div>
            1 to 20 of 100 Records
        </div>
    </div>
  );
}

export default RecordsFooter;
