import React from 'react';
import Dropdown from 'react-bootstrap/Dropdown';

function ItemsPerPageControl() {
  return (
    <div>
        <Dropdown>
            <Dropdown.Toggle variant="outline-secondary" id="dropdown-basic" size="sm">
                Items: 10
            </Dropdown.Toggle>
            <Dropdown.Menu>
                <Dropdown.Item>10</Dropdown.Item>
                <Dropdown.Item>25</Dropdown.Item>
                <Dropdown.Item>50</Dropdown.Item>
                <Dropdown.Item>100</Dropdown.Item>
            </Dropdown.Menu>
        </Dropdown>
    </div>
  );
}

export default ItemsPerPageControl;
