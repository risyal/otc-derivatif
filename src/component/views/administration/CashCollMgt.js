import React from 'react';
import { Button, Table } from 'antd';

function CashCollMgt(){
    const columns = [
        {
            title: 'Currency Code',
            dataIndex: 'code',
            key: 'code',
        },
        {
            title: 'Currency Name',
            dataIndex: 'name',
            key: 'name'
        },
        {
            title: 'Eligibility',
            dataIndex: 'eligibility',
            key: 'eligibility',
        },
        {
            title: 'Haircut',
            dataIndex: 'haircut',
            key: 'haircut',
        },
        {
            title: 'Action',
            key: 'action',
            fixed: 'right',
            render: () => <a>Edit</a>,
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
            <Button type="primary">
                Add New
            </Button>

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

export default CashCollMgt