import React from 'react';
import { Table } from 'antd';

function InquiryTrade() {
    const columns = [
        {
            title: 'UTI',
            width: 100,
            dataIndex: 'uti',
            key: 'uti',
            fixed: 'left',
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
            title: 'Member',
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
                }]
        },
        {
            title: 'Position',
            width: 100,
            dataIndex: 'position',
            key: 'position',
        },
        {
            title: 'Fixed Rate',
            children: [
                {
                    title: 'OIS',
                    width: 100,
                    dataIndex: 'ois',
                    key: 'ois',
                }, {
                    title: 'IRS',
                    width: 100,
                    dataIndex: 'irs',
                    key: 'irs',
                }]
        },
        {
            title: 'Reference Rate',
            children: [
                {
                    title: 'OIS',
                    width: 100,
                    dataIndex: 'ois',
                    key: 'ois',
                }, {
                    title: 'IRS',
                    width: 100,
                    dataIndex: 'irs',
                    key: 'irs',
                }, {
                    title: 'DNDF',
                    width: 100,
                    dataIndex: 'dndf',
                    key: 'dndf',
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

export default InquiryTrade
