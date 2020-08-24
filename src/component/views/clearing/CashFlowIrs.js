import React from 'react'
import {
    Form,
    Button,
    Input,
    Table,
} from 'antd';

import { Link } from "react-router-dom";

function CashFlowIrs() {
    const columns = [
        {
            title: 'Trade ID',
            width: 100,
            dataIndex: 'tradeId',
            key: 'tradeId',
            fixed: 'left',
        },
        {
            title: 'Product',
            width: 100,
            dataIndex: 'product',
            key: 'product',
        },
        {
            title: 'Tenor',
            width: 100,
            dataIndex: 'tenor',
            key: 'tenor',
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
                    title: 'SID',
                    width: 100,
                    dataIndex: 'sid',
                    key: 'sid',
                }, {
                    title: 'LEI',
                    width: 100,
                    dataIndex: 'lei',
                    key: 'lei',
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
                    title: 'SID',
                    width: 100,
                    dataIndex: 'sidClient',
                    key: 'sidClient',
                }, {
                    title: 'LEI',
                    width: 100,
                    dataIndex: 'leiClient',
                    key: 'leiClient',
                }]
        },
        {
            title: 'Value',
            width: 100,
            dataIndex: 'value',
            key: 'value',
        },
        {
            title: 'Currency',
            width: 100,
            dataIndex: 'currency',
            key: 'currency',
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
            title: 'Fixed Date',
            width: 100,
            dataIndex: 'fixedDate',
            key: 'fixedDate',
        },
        {
            title: 'Total Cash Flow',
            width: 100,
            dataIndex: 'totalCashFlow',
            key: 'totalCashFlow',
        },
        {
            title: 'Action',
            key: 'operation',
            fixed: 'right',
            width: 100,
            render: () =>
                <div>
                    <Link to={{
                        pathname: `/clearingManagement/clearingDetail`,
                        state: {
                            id: "1",
                            action: "Detail",
                            disable: true,
                            linkBack: "/clearingManagement/cashFlowIrs",
                        }
                    }} style={{ marginRight: '20px' }}>Detail
                    </Link>
                </div>,
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
    const componentSize = 'middle';
    const formItemLayout = {
        labelCol: {
            xs: { span: 24 },
            sm: { span: 6 },
        },
        wrapperCol: {
            xs: { span: 24 },
            sm: { span: 16 },
        },
    };
    return (
        <div style={{ margin: '15px 20px' }} scroll={{ x: 1300 }}>
            <Form
                {...formItemLayout}
                size={componentSize}
                layout="horizontal"
                initialValues={{ size: componentSize }}
                labelAlign="left"
            >
                <Form.Item label="UTI" >
                    <Input />
                </Form.Item>
                <Form.Item label="SID" >
                    <Input />
                </Form.Item>
                <Form.Item label="LEI" >
                    <Input />
                </Form.Item>
                <Form.Item label="Tenor" >
                    <Input />
                </Form.Item>
                <Form.Item wrapperCol={{ span: 12, offset: 6 }}>
                    <Button type="primary" htmlType="submit">
                        Search
                    </Button>
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

export default CashFlowIrs
