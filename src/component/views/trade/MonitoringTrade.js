import React from 'react';
import { Table } from 'antd';

function MonitoringTrade() {
    const columns = [
        {
            title: 'Reference Number',
            width: 100,
            dataIndex: 'refenceNumber',
            key: 'refenceNumber',
            fixed: 'left',
        }, {
            title: 'Ori Trade ID',
            width: 100,
            dataIndex: 'oriTradeId',
            key: 'oriTradeId',
        }, {
            title: 'Trade ID',
            width: 100,
            dataIndex: 'tradeId',
            key: 'tradeId',
        },
        {
            title: 'Date',
            width: 100,
            dataIndex: 'date',
            key: 'date',
        },
        {
            title: 'Time',
            width: 100,
            dataIndex: 'time',
            key: 'time',
        },
        {
            title: 'Product',
            width: 100,
            dataIndex: 'product',
            key: 'product',
        },
        {
            title: 'ID Position',
            children: [
                {
                    title: 'Member ID',
                    width: 100,
                    dataIndex: 'memberId',
                    key: 'memberId',
                }, {
                    title: 'SID/LEI',
                    width: 100,
                    dataIndex: 'sidLei',
                    key: 'sidLei',
                }, {
                    title: ' Client ID',
                    width: 100,
                    dataIndex: ' clientId',
                    key: ' clientId',
                }, {
                    title: 'SID/LEI',
                    width: 100,
                    dataIndex: 'sidLeiClient',
                    key: 'sidLeiClient',
                }]
        },
        {
            title: 'Position',
            width: 100,
            dataIndex: 'position',
            key: 'position',
        },
        {
            title: 'OIS',
            children: [
                {
                    title: 'Fixed',
                    width: 100,
                    dataIndex: 'fixedOis',
                    key: 'fixedOis',
                }, {
                    title: 'Payer',
                    width: 100,
                    dataIndex: 'payer',
                    key: 'payer',
                }]
        },
        {
            title: 'IRS',
            children: [
                {
                    title: 'Fixed',
                    width: 100,
                    dataIndex: 'fixedIrs',
                    key: 'fixedIrs',
                }, {
                    title: 'Receive',
                    width: 100,
                    dataIndex: 'receive',
                    key: 'receive',
                }]
        },
        {
            title: 'DNDF',
            children: [
                {
                    title: 'Buyer',
                    width: 100,
                    dataIndex: 'buyer',
                    key: 'buyer',
                }, {
                    title: 'Seller',
                    width: 100,
                    dataIndex: 'seller',
                    key: 'seller',
                }]
        },
        {
            title: 'Fixed Rate',
            children: [
                {
                    title: 'OIS',
                    width: 100,
                    dataIndex: 'oisFixed',
                    key: 'oisFixed',
                }, {
                    title: 'IRS',
                    width: 100,
                    dataIndex: 'irsFixed',
                    key: 'irsFixed',
                }]
        },
        {
            title: 'Reference Rate',
            children: [
                {
                    title: 'OIS',
                    width: 100,
                    dataIndex: 'oisReference',
                    key: 'oisReference',
                }, {
                    title: 'IRS',
                    width: 100,
                    dataIndex: 'irsReference',
                    key: 'irsReference',
                }, {
                    title: 'DNDF',
                    width: 100,
                    dataIndex: 'dndfReference',
                    key: 'dndfReference',
                }]
        },
        {
            title: 'Value',
            width: 100,
            dataIndex: 'value',
            key: 'value',
        },
        {
            title: 'Tenor',
            width: 100,
            dataIndex: 'tenor',
            key: 'tenor',
        },
        {
            title: 'Payment Freq',
            width: 100,
            dataIndex: 'paymentFreq',
            key: 'paymentFreq',
        },
        {
            title: 'Effective Date',
            width: 100,
            dataIndex: 'effectiveDate',
            key: 'effectiveDate',
        },
        {
            title: 'Maturity Date',
            width: 100,
            dataIndex: 'maturityDate',
            key: 'maturityDate',
        },
        {
            title: 'Payment Date',
            width: 100,
            dataIndex: 'paymentDate',
            key: 'paymentDate',
        },
        {
            title: 'Status',
            width: 100,
            dataIndex: 'status',
            key: 'status',
        },
        {
            title: 'Action',
            key: 'operation',
            fixed: 'right',
            width: 100,
            render: () => <a>Detail</a>,
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

export default MonitoringTrade
