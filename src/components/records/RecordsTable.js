import React from 'react';
import Table from 'react-bootstrap/Table';

function RecordsTable() {
    const items = [];
    for (let i = 0; i < 10; i++) {
        let theAItem = 'Data A-' + i;
        let theBItem = 'Data B-' + i;
        let theCItem = 'Data C-' + i;
        let theDItem = 'Data D-' + i;
        items.push({
            dataA: theAItem,
            dataB: theBItem,
            dataC: theCItem,
            dataD: theDItem
        })
    }
    return (
        <div className='d-flex flex-row flex-grow-1'>
            <div className='d-flex flex-grow-1 overflow-auto'>
                <Table striped bordered hover size="sm">
                    <thead className='sticky-top bg-light'>
                        <tr>
                            <th>Header A</th>
                            <th>Header B</th>
                            <th>Header C</th>
                            <th>Header D</th>
                        </tr>
                    </thead>
                    <tbody>
                        {items.map(item=>
                            <tr>
                                <td>{item.dataA}</td>
                                <td>{item.dataB}</td>
                                <td>{item.dataC}</td>
                                <td>{item.dataD}</td>
                            </tr>
                        )}
                    </tbody>
                </Table>
            </div>
        </div>
    );
}

export default RecordsTable;