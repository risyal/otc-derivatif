import React from 'react'
import { Button, Table } from 'antd';
import { DownloadOutlined } from '@ant-design/icons';

function SystemParameter(){
    const columns = [
        {
            title: 'Settlement Window',
            width: 100,
            dataIndex: 'settlement',
            key: 'settlement',
        },
        {
            title: 'Trade Validation Time',
            width: 100,
            dataIndex: 'tvTime',
            key: 'tvTime',
        },
        {
            title: 'Initial Margin Percentage',
            width: 100,
            dataIndex: 'initialMp',
            key: 'initialMp',
        },
        {
            title: 'Indicator Percentage Chart',
            width: 100,
            dataIndex: 'ipChart',
            key: 'ipChart',
        },
        {
            title: 'Fees',
            children: [
                {
                    title: 'Fee Type',
                    width: 100,
                    dataIndex: 'feeType',
                    key: 'feeType',
                }, {
                    title: 'Produk',
                    width: 100,
                    dataIndex: 'produk',
                    key: 'produk',
                }, {
                    title: 'Object Fee',
                    width: 100,
                    dataIndex: 'objectFee',
                    key: 'objectFee',
                }, {
                    title: 'Variables',
                    width: 100,
                    dataIndex: 'variables',
                    key: 'variables',
                }, {
                    title: 'Cycle',
                    width: 100,
                    dataIndex: 'cycle',
                    key: 'cycle',
                }
                
            ]
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
             <Button type="primary" icon={<DownloadOutlined />}>
                Export File
            </Button>
        </div>
    )

}

export default SystemParameter