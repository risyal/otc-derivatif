import React, { useState } from 'react'
import {
    Form,
    Input,
    Button,
    Table,
    Select,
    DatePicker,
} from 'antd';
import moment from 'moment';
import { Link } from "react-router-dom";

function TradeConfirmation() {
    const columns = [
        {
            title: 'Original UTI',
            width: 100,
            dataIndex: 'uti',
            key: 'uti',
            fixed: 'left',
        },
        {
            title: 'SID/LEI',
            width: 100,
            dataIndex: 'sid',
            key: 'sid',
        },
        {
            title: 'Product',
            width: 100,
            dataIndex: 'product',
            key: 'product',
        },
        {
            title: 'Counterparty',
            width: 100,
            dataIndex: 'counterparty',
            key: 'counterparty',
        },
        {
            title: 'Trade Date',
            width: 100,
            dataIndex: 'tradeDate',
            key: 'tradeDate',
        },
        {
            title: 'Action',
            key: 'operation',
            fixed: 'right',
            width: 100,
            render: () =>
                <div>
                    <Link to={{
                        pathname: `/tradeConfirmation`,
                        state: {
                            action: "Detail",
                            disable: false,
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
                <Form.Item label="UTI" >
                    <Input />
                </Form.Item>
                <Form.Item label="SID/LEI" >
                    <Input />
                </Form.Item>
                <Form.Item label="Product ">
                    <Select defaultValue={jenisProduct} onChange={productClick}>
                        {productSelect.map(product => (
                            <Select.Option key={product}>{product}</Select.Option>
                        ))}
                    </Select>
                </Form.Item>
                <Form.Item label="Counterparty" >
                    <Input />
                </Form.Item>
                <Form.Item label="Trade  Date">
                    <DatePicker style={{ width: '100%' }}
                        defaultValue={moment('2020/01/23', dateFormat)} />
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

export default TradeConfirmation
