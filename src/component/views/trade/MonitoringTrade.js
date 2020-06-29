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
                <Form.Item label="SID/LEI" >
                    <Input />
                </Form.Item>
                <Form.Item label="UTI" >
                    <Input />
                </Form.Item>
                <Form.Item label="Reference Number" >
                    <Input />
                </Form.Item>
                <Form.Item label="Product ">
                    <Select defaultValue={jenisProduct} onChange={productClick}>
                        {productSelect.map(product => (
                            <Select.Option key={product}>{product}</Select.Option>
                        ))}
                    </Select>
                </Form.Item>
                <Form.Item label="Trade  Date">
                    <DatePicker style={{ width: '100%' }}
                        defaultValue={moment('2020/01/23', dateFormat)} />
                </Form.Item>
                <Form.Item label="Effective Date">
                    <DatePicker style={{ width: '100%' }}
                        defaultValue={moment('2020/01/23', dateFormat)} />
                </Form.Item>
                <Form.Item label="Counterparty" >
                    <Input />
                </Form.Item>
                <Form.Item label="Tipe ATS ">
                    <Select defaultValue="bloomberg">
                        <Select.Option value="bloomberg">Bloomberg</Select.Option>
                        <Select.Option value="refinitiv">Refinitiv</Select.Option>
                        <Select.Option value="skd">SKD</Select.Option>
                    </Select>
                </Form.Item>
                <Form.Item label="Status" >
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

export default MonitoringTrade
