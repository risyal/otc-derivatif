import React, { useState } from 'react'
import {
    Form,
    Button,
    Input,
    Table,
    Select,
    DatePicker,
} from 'antd';
import moment from 'moment';
import { Link } from "react-router-dom";

function ClearingPostition() {
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
                            linkBack: "/clearingManagement/clearingPosition",
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
                <Form.Item label="Member ID" >
                    <Input.Group compact >
                        <Input style={{ width: '45%', textAlign: 'center' }} placeholder="Code" />
                        <Input
                            className="site-input-split"
                            style={{
                                width: '10%',
                                borderLeft: 0,
                                borderRight: 0,
                                pointerEvents: 'none', textAlign: 'center'
                            }}
                            placeholder="|"
                            disabled
                        />
                        <Input
                            className="site-input-right"
                            style={{
                                width: '45%',
                                textAlign: 'center',
                            }}
                            placeholder="SID/LEI"
                        />
                    </Input.Group>
                </Form.Item>
                <Form.Item label="Client ID" >
                    <Input.Group compact >
                        <Input style={{ width: '45%', textAlign: 'center' }} placeholder="Code" />
                        <Input
                            className="site-input-split"
                            style={{
                                width: '10%',
                                borderLeft: 0,
                                borderRight: 0,
                                pointerEvents: 'none', textAlign: 'center'
                            }}
                            placeholder="|"
                            disabled
                        />
                        <Input
                            className="site-input-right"
                            style={{
                                width: '45%',
                                textAlign: 'center',
                            }}
                            placeholder="SID/LEI"
                        />
                    </Input.Group>
                </Form.Item>
                <Form.Item label="Product ">
                    <Select defaultValue={jenisProduct} onChange={productClick}>
                        {productSelect.map(product => (
                            <Select.Option key={product}>{product}</Select.Option>
                        ))}
                    </Select>
                </Form.Item>
                <Form.Item label="Maturity Date">
                    <DatePicker style={{ width: '100%' }}
                        defaultValue={moment('2020/01/23', dateFormat)} />
                </Form.Item>
                <Form.Item label="Next Fixing Date">
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
                scroll={{ x: 'calc(700px + 50%)' }}
            />
        </div>
    )
}

export default ClearingPostition
