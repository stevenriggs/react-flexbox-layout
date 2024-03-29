import React from 'react';
import Pagination from 'react-bootstrap/Pagination';

function PageControl() {
  return (
    <div>
        <Pagination size="sm" className='m-0 p-0'>
            <Pagination.First />
            <Pagination.Prev />
            <Pagination.Item>{1}</Pagination.Item>
            <Pagination.Ellipsis />
            
            <Pagination.Item>{11}</Pagination.Item>
            <Pagination.Item active>{12}</Pagination.Item>
            <Pagination.Item>{13}</Pagination.Item>

            <Pagination.Ellipsis />
            <Pagination.Item>{20}</Pagination.Item>
            <Pagination.Next />
            <Pagination.Last />
        </Pagination>
    </div>
  );
}

export default PageControl;
