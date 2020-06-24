import React from 'react';
import { Table } from 'antd';

function TradeSummary() {
    const columns = [
        {
            title: 'Product',
            width: 50,
            dataIndex: 'product',
            key: 'product',
            fixed: 'left',
        },
        {
            title: 'Trade Accepted',
            width: 50,
            dataIndex: 'tradeAccepted',
            key: 'tradeAccepted',
        },
        {
            title: 'Trade Rejected',
            width: 50,
            dataIndex: 'tradeRejected',
            key: 'tradeRejected',
        },
        {
            title: 'Trade Novated',
            width: 50,
            dataIndex: 'tradeNovated',
            key: 'tradeNovated',
        },
        {
            title: 'Trade on Queue',
            width: 50,
            dataIndex: 'tradeOnQueue',
            key: 'tradeOnQueue',
        },
        {
            title: 'Trade Terminated',
            width: 50,
            dataIndex: 'tradeTerminated',
            key: 'tradeTerminated',
        },
        {
            title: 'Total Trade',
            width: 50,
            dataIndex: 'totalTrade',
            key: 'totalTrade',
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
            />
        </div>
    )
}

export default TradeSummary
