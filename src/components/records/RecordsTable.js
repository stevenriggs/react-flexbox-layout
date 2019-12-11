import React from 'react';
import Table from 'react-bootstrap/Table';

function RecordsTable() {
    const items = [];
    for (let i = 0; i < 30; i++) {
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
        <div className='h-100 overflow-auto' >
            <Table striped bordered hover repsonsive size="sm">
                <thead className='bg-light'>
                    <tr>
                        <th className='sticky-top bg-light'>Header A</th>
                        <th className='sticky-top bg-light'>Header B</th>
                        <th className='sticky-top bg-light'>Header C</th>
                        <th className='sticky-top bg-light'>Header D</th>
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
    );
}

export default RecordsTable;