import React from 'react';
import { Form, DatePicker, Button, Table } from 'antd';

function DHKLevel(){
    const columns = [
        {
            title: 'Member ID',
            dataIndex: 'memberId',
            key: 'memberId',
            width: 100,
            fixed: 'left',
        },
        {
            title: 'SID/LEI',
            dataIndex: 'sidLei',
            key: 'sidLei',
            width: 100,
        },
        {
            title: 'Client ID',
            dataIndex: 'clientId',
            key: 'clientId',
            width: 100,
        },
        {
            title: 'Contract',
            dataIndex: 'contract',
            key: 'contract',
            width: 100,
        },
        {
            title: 'Previous Position',
            dataIndex: 'previousPosition',
            key: 'previousPosition',
            width: 150,
        },
        {
            title: 'New Position',
            dataIndex: 'newPosition',
            key: 'newPosition',
            width: 150,
        },
        {
            title: 'Net Position',
            dataIndex: 'netPosition',
            key: 'netPosition',
            width: 100,
        },
        {
            title: 'Cash Right/Obligation',
            dataIndex: 'cashRightObligation',
            key: 'cashRightObligation',
            width: 150,
        },
        {
            title: 'Fee',
            dataIndex: 'fee',
            key: 'fee',
            width: 100,
        },
        {
            title: 'DF Fund Billing',
            dataIndex: 'dfFundBilling',
            key: 'dfFundBilling',
            width: 100,
        },
        {
            title: 'Initial Margin Billing',
            dataIndex: 'initialMarginBilling',
            key: 'initialMarginBilling',
            width: 100,
        },
        {
            title: 'PAA',
            dataIndex: 'paa',
            key: 'paa',
            width: 100,
        },
        {
            title: 'Free Collateral',
            dataIndex: 'freeCollateral',
            key: 'freeCollateral',
            width: 100,
        },
        {
            title: 'Blocked Collateral',
            dataIndex: 'blockedCollateral',
            key: 'blockedCollateral',
            width: 100,
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
            <Form layout="horizontal">
                <Form.Item label="Date">
                    <DatePicker /> <Button type="primary" htmlType="submit">Go</Button>
                </Form.Item>
            </Form>
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

export default DHKLevel