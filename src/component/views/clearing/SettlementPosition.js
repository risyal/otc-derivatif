import React from 'react';
import { Table } from 'antd';

function SettlementPosition() {
    const columns = [
        {
            title: 'Trade ID',
            width: 100,
            dataIndex: 'tradeId',
            key: 'tradeId',
            fixed: 'left',
        },
        {
            title: 'Settlement Date',
            width: 100,
            dataIndex: 'settlementDate',
            key: 'settlementDate',
        },
        {
            title: 'Product',
            width: 100,
            dataIndex: 'product',
            key: 'product',
        },
        {
            title: 'Member ID',
            children: [
                {
                    title: 'Code',
                    width: 100,
                    dataIndex: 'code',
                    key: 'code',
                }, {
                    title: 'SID/LEI',
                    width: 100,
                    dataIndex: 'sidLei',
                    key: 'sidLei',
                }]
        },
        {
            title: 'Client',
            children: [
                {
                    title: 'Code',
                    width: 100,
                    dataIndex: 'code',
                    key: 'code',
                }, {
                    title: 'SID/LEI',
                    width: 100,
                    dataIndex: 'sidLeiClient',
                    key: 'sidLeiClient',
                }]
        },
        {
            title: 'Contract',
            children: [
                {
                    title: 'Buy',
                    width: 100,
                    dataIndex: 'buy',
                    key: 'buy',
                }, {
                    title: 'Sell',
                    width: 100,
                    dataIndex: 'sell',
                    key: 'sell',
                }, {
                    title: 'Fix',
                    width: 100,
                    dataIndex: 'fix',
                    key: 'fix',
                }, {
                    title: 'Float',
                    width: 100,
                    dataIndex: 'float',
                    key: 'float',
                }]
        },
        {
            title: 'Value',
            width: 100,
            dataIndex: 'value',
            key: 'value',
        },
        {
            title: 'Net Present Value',
            children: [
                {
                    title: 'Previous Business Day',
                    width: 100,
                    dataIndex: 'previousBusDay',
                    key: 'previousBusDay',
                }, {
                    title: 'Current Business Day',
                    width: 100,
                    dataIndex: 'currentBusDay',
                    key: 'currentBusDay',
                }]
        },
        {
            title: 'Daily MTM',
            width: 100,
            dataIndex: 'dailyMtm',
            key: 'dailyMtm',
        },
        {
            title: 'Net Cash Flow Payments',
            width: 100,
            dataIndex: 'netCashFlowPayments',
            key: 'netCashFlowPayments',
        },
        {
            title: 'Price Alignment Amount',
            width: 100,
            dataIndex: 'priceAlignmentAmount',
            key: 'priceAlignmentAmount',
        },
        {
            title: 'Clearing Fees',
            width: 100,
            dataIndex: 'clearingFees',
            key: 'clearingFees',
        },
        {
            title: 'Default Fund Shortage',
            width: 100,
            dataIndex: 'defaultFund',
            key: 'defaultFund',
        },
        {
            title: 'Penalties',
            width: 100,
            dataIndex: 'penalties',
            key: 'penalties',
        },
        {
            title: 'Charges',
            width: 100,
            dataIndex: 'charges',
            key: 'charges',
        },
        {
            title: 'Carry Forward',
            width: 100,
            dataIndex: 'carryForward',
            key: 'carryForward',
        },
        {
            title: 'Net Settlement',
            width: 100,
            dataIndex: 'netSettlement',
            key: 'netSettlement',
        },
        {
            title: 'Initial Margin Shortage',
            width: 100,
            dataIndex: 'initialMargin',
            key: 'initialMargin',
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

export default SettlementPosition;
