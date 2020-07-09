import React from 'react';
import { Button, Table } from 'antd';

function SecuritiesCollMgt(){
    const columns = [
        {
            title: 'Instrument Code',
            dataIndex: 'code',
            key:'code',
        },
        {
            title: 'Instrument Name',
            dataIndex: 'name',
            key: 'name',
        },
        {
            title: 'Instrument Type',
            dataIndex: 'type',
            key: 'type',
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
            title: 'Maturity Date',
            dataIndex: 'maturityDate',
            key: 'maturityDate',
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
            <Button type="primary" htmlType="submit">
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

export default SecuritiesCollMgt