import React from 'react';
import { Button, Table } from 'antd';

function SecuritiesCollMgt(){
    const columns = [
        {
            title: 'Instrument Code',
            dataIndex: 'code',
            filters: [
                {
                    text: 'IC123',
                    value: 'IC123',
                },
                {
                    text: 'IC456',
                    value: 'IC456',
                },
                {
                    text: 'IC789',
                    value: 'IC789',
                },
            ],
            onFilter: (value, record) => record.code.indexOf(value) === 0,
        },
        {
            title: 'Instrument Name',
            dataIndex: 'name',
            key: 'name',
        },
        {
            title: 'Instrument Type',
            dataIndex: 'type',
            filters: [
                {
                    text: 'Type1',
                    value: 'Type1',
                },
                {
                    text: 'Type2',
                    value: 'Type2',
                },
                {
                    text: 'Type3',
                    value: 'Type3',
                },
            ],
            onFilter: (value, record) => record.name.indexOf(value) === 0,
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