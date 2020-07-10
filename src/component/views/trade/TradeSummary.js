import React, { useState } from 'react'
import {
    Form,
    Button,
    Table,
    Select,
    DatePicker,
    Input,
} from 'antd';
import moment from 'moment';

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
    const productSelect = ['OIS', 'IRS', 'DNDF'];
    const [jenisProduct, SetJenisProduct] = useState(productSelect[0]);
    const productClick = (e) => {
        SetJenisProduct(e);
    };
    const dateFormat = 'YYYY/MM/DD';
    return (
        <div style={{ margin: '15px 20px' }} scroll={{ x: 1300 }}>
            <Form
                {...formItemLayout}
                size={componentSize}
                layout="horizontal"
                initialValues={{ size: componentSize }}
                labelAlign="left"
            >
                <Form.Item label="Member ID" >
                    <Input />
                </Form.Item>
                <Form.Item label="Trade  Date">
                    <DatePicker style={{ width: '100%' }}
                        defaultValue={moment('2020/01/23', dateFormat)} />
                </Form.Item>
                <Form.Item label="Product ">
                    <Select defaultValue={jenisProduct} onChange={productClick}>
                        {productSelect.map(product => (
                            <Select.Option key={product}>{product}</Select.Option>
                        ))}
                    </Select>
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
            />
        </div>
    )
}

export default TradeSummary
