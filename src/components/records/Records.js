import React from 'react';
import RecordsFooter from './RecordsFooter';
import RecordsHeader from './RecordsHeader';
import RecordsTable from './RecordsTable';

function Records() {
  return (
    <div className='container-fluid m-0 p-0 d-flex flex-column flex-grow-1'>
            <div className='container-fluid m-0 p-0 d-flex flex-grow-0'>
                <RecordsHeader />
            </div>
            <div className='container-fluid m-0 p-0 d-flex flex-grow-1'>
                <RecordsTable />
            </div>
            <div className='container-fluid m-0 p-0 d-flex flex-grow-0'>
                <RecordsFooter />
            </div>
    </div>
  );
}

export default Records;
