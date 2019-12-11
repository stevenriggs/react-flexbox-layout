import React from 'react';
import RecordsFooter from './RecordsFooter';
import RecordsHeader from './RecordsHeader';
import RecordsTable from './RecordsTable';

function Records() {
  return (
    <div className='d-flex flex-column flex-grow-1 h-100 w-100'>
            <div className='d-flex flex-column flex-grow-0 flex-shrink-0 w-100'>
                <RecordsHeader />
            </div>
            <div className='d-flex flex-column flex-grow-1 flex-shrink-1 h-100 w-100'>
                <RecordsTable />
            </div>
            <div className='d-flex flex-column flex-grow-0 flex-shrink-0 w-100'>
                <RecordsFooter />
            </div>
    </div>
  );
}

export default Records;
