import React, { useState } from 'react'
import {
    Form,
    Button,
    Input,
    Table,
    Select,
} from 'antd';
function InquiryPosition() {
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
            title: 'Time',
            width: 100,
            dataIndex: 'time',
            key: 'time',
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
            title: 'Maturity Date',
            width: 100,
            dataIndex: 'maturityDate',
            key: 'maturityDate',
        },
        {
            title: 'Next Fixing Date',
            width: 100,
            dataIndex: 'nextFixingDate',
            key: 'nextFixingDate',
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
    return (
        <div style={{ margin: '15px 20px' }} scroll={{ x: 1300 }}>
            <Form
                {...formItemLayout}
                size={componentSize}
                layout="horizontal"
                initialValues={{ size: componentSize }}
                labelAlign="left"
            >
                <Form.Item label="SID" >
                    <Input />
                </Form.Item>
                <Form.Item label="LEI" >
                    <Input />
                </Form.Item>
                <Form.Item label="Product ">
                    <Select defaultValue={jenisProduct} onChange={productClick}>
                        {productSelect.map(product => (
                            <Select.Option key={product}>{product}</Select.Option>
                        ))}
                    </Select>
                </Form.Item>
                <Form.Item label="UTI" >
                    <Input />
                </Form.Item>
                <Form.Item label="Member" >
                    <Input />
                </Form.Item>
                <Form.Item label="Reference Number" >
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

export default InquiryPosition
