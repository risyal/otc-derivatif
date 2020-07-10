import React, { useState } from 'react'
import {
    Form,
    Input,
    Button,
    Table,
    Select,
    DatePicker,
    Dropdown,
    Menu,
} from 'antd';
import { Link } from "react-router-dom";
import moment from 'moment';
import { DownOutlined, UpOutlined, DownloadOutlined } from '@ant-design/icons';

function CancelTrade() {
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
            title: 'Counterparty',
            width: 100,
            dataIndex: 'Counterparty',
            key: 'Counterparty',
        },
        {
            title: 'Position',
            width: 100,
            dataIndex: 'position',
            key: 'position',
        },
        {
            title: 'Rate',
            width: 100,
            dataIndex: 'rate',
            key: 'rate',
        },
        {
            title: 'Reference Number',
            width: 100,
            dataIndex: 'referenceNumber',
            key: 'referenceNumber',
        },
        {
            title: 'Leg Type',
            width: 100,
            dataIndex: 'legType',
            key: 'legType',
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
            render: (text, record) => (
                <Dropdown
                    overlay={
                        <Menu>
                            <Menu.Item>
                                <Link to={{
                                    pathname: `/registerClient/ViewDeleteClient`,
                                    state: {
                                        id: record.key,
                                        action: "View",
                                        disable: true,
                                    }
                                }} style={{ marginRight: '20px' }}>View
                    </Link>
                            </Menu.Item>
                            <Menu.Item>
                                <Link to={{
                                    pathname: `/registerClient/viewClient`,
                                    state: {
                                        id: record.key,
                                        action: "Edit",
                                        disable: false,
                                    }
                                }} style={{ marginRight: '20px' }}>Cancel
                    </Link>
                            </Menu.Item>
                        </Menu>
                    }
                    placement="bottomLeft"
                    trigger={['click']}>
                    <Button>Action</Button>
                </Dropdown>
            ),
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
    const [expand, setExpand] = useState(true);
    const [form] = Form.useForm();
    return (
        <div style={{ margin: '15px 20px' }} scroll={{ x: 1300 }}>
            <Form
                {...formItemLayout}
                size={componentSize}
                layout="horizontal"
                initialValues={{ size: componentSize }}
                labelAlign="left"
            >
                {expand ? (<div>
                    <Form.Item label="Keyword">
                        <Input />
                    </Form.Item>
                </div>
                ) : (
                        <div>
                            <Form.Item label="Reference Number" >
                                <Input />
                            </Form.Item>
                            <Form.Item label="Member ID" >
                                <Input />
                            </Form.Item>
                            <Form.Item label="SID/LEI" >
                                <Input />
                            </Form.Item>
                            <Form.Item label="UTI" >
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
                            <Form.Item label="Status">
                                <Select
                                    placeholder="Select a Status"
                                >
                                    <Select.Option value="checker">Waiting for Checker</Select.Option>
                                    <Select.Option value="approver">Waiting for Approver</Select.Option>
                                </Select>
                            </Form.Item>
                        </div>
                    )}
                <Form.Item wrapperCol={{ span: 12, offset: 6 }}>
                    <Button
                        type="primary"
                        htmlType="submit"
                        tyle={{ marginRight: '15px' }}>
                        Search
                                </Button>
                    <Button
                        style={{ margin: '0 8px' }}
                        onClick={() => {
                            form.resetFields();
                        }}>
                        Clear
                        </Button>
                    <Button
                        htmlType="submit"
                        onClick={() => {
                            setExpand(!expand);
                        }}>
                        {expand ? (<div><DownOutlined />Advance Search</div>) :
                            (<div><UpOutlined />Simple Search</div>)}
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
            <Button type="primary" icon={<DownloadOutlined />}>
                Export File
            </Button>
        </div>
    )
}

export default CancelTrade
