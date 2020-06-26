import React from 'react';
import { Button, Table } from 'antd';

function Calendar(){
    const columns = [
        {
            title: 'Date',
            dataIndex: 'date',
            key: 'date',
        },
        {
            title: 'Information',
            dataIndex: 'information',
            key: 'information',
        },
        {
            title: 'Action',
            key: 'action',
            fixed: 'right',
            render: () => <a>Edit Calendar</a>,
        },
        {
            title: 'Last Update Calendar',
            dataIndex: 'update',
            key: 'update',
        },
    ];
    const data = [
        {
        },
        {
        },
        {
        },
        {
        },
        {
        },
        {
        },
    ];

    return(
        <div>
            <Button type="primary">Add New</Button> <Button type="primary">Import</Button>

            <div style={{ marginTop: '15px' }}>
                <Table
                    columns={columns}
                    dataSource={data}
                    bordered
                    size="middle"
                />
            </div>
        </div>
    )

}

export default Calendar