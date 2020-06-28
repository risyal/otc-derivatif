import React from 'react'
import { Table } from 'antd';

function EditAccount(){
    const columns = [
        {
            title: 'Member/Client ID',
            children: [
                {
                    title: 'Code',
                    width: 100,
                    dataIndex: 'code',
                    key: 'code',
                    fixed: 'left',
                }, {
                    title: 'SID/LEI',
                    width: 100,
                    dataIndex: 'sidLei',
                    key: 'sidLei',
                    fixed: 'left',
                }
            ]
        },
        {
            title: 'Name',
            width: 100,
            dataIndex: 'name',
            key: 'name',
        },
        {
            title: 'Currency',
            width: 100,
            dataIndex: 'currency',
            key: 'currency',
        },
        {
            title: 'Cash Collateral',
            children: [
                {
                    title: 'ACC No',
                    width: 100,
                    dataIndex: 'accNo',
                    key: 'accNo',
                }, {
                    title: 'Status',
                    width: 100,
                    dataIndex: 'status',
                    key: 'status',
                    render: () => <a>Active</a>,
                }
            ]
        },
        {
            title: 'Non-cash Collateral',
            children: [
                {
                    title: 'ACC No',
                    width: 100,
                    dataIndex: 'accNo',
                    key: 'accNo',
                }, {
                    title: 'Status',
                    width: 100,
                    dataIndex: 'status',
                    key: 'status',
                    render: () => <a>Active</a>,
                }
            ]
        },
        {
            title: 'Default Fund',
            children: [
                {
                    title: 'ACC No',
                    width: 100,
                    dataIndex: 'accNo',
                    key: 'accNo',
                }, {
                    title: 'Status',
                    width: 100,
                    dataIndex: 'status',
                    key: 'status',
                    render: () => <a>Active</a>,
                }
            ]
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

    return (
        <div style={{ margin: '15px 20px' }} scroll={{ x: 1300 }}>
            <Table
                columns={columns}
                dataSource={data}
                bordered
                size="middle"
                scroll={{ x: 'calc(700px + 50%)' }}
            />
        </div>
    )

}

export default EditAccount