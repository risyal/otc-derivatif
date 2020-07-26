import React, { useState, useMemo } from 'react'
import {
    Form,
    Input,
    Button,
    Table,
    Select,
    DatePicker,
    Dropdown,
    Menu,
    Row,
    Col,
} from 'antd';
import moment from 'moment';
import { Link } from "react-router-dom";
import { DownloadOutlined } from '@ant-design/icons';
const dateFormat = 'YYYY/MM/DD';

function TradeConfirmation() {
    const [columns] = useState([
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
                <Dropdown
                    overlay={
                        <Menu>
                            <Menu.Item>
                                <Link to={{
                                    pathname: `/trade/detailView`,
                                    state: {
                                        id: "1",
                                        action: "Detail",
                                        disable: true,
                                        linkBack: "/tradeConfirmation",
                                    }
                                }} style={{ marginRight: '20px' }}>Detail
                    </Link>
                            </Menu.Item>
                            <Menu.Item>
                                <Link to={{
                                    pathname: `/trade/detailView`,
                                    state: {
                                        id: "1",
                                        action: "Confirmation",
                                        disable: false,
                                        linkBack: "/tradeConfirmation",
                                    }
                                }} style={{ marginRight: '20px' }}>Confirmation
                    </Link>
                            </Menu.Item>
                        </Menu>
                    }
                    placement="bottomLeft"
                    trigger={['click']}>
                    <Button>Action</Button>
                </Dropdown>
        },
    ]);
    const [data] = useState([
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
    ]);
    const [componentSize] = useMemo(() => 'middle');
    const [formItemLayout] = useState({
        labelCol: {
            xs: { span: 24 },
            sm: { span: 6 },
        },
        wrapperCol: {
            xs: { span: 24 },
            sm: { span: 16 },
        },
    });
    const [productSelect] = useState(['OIS', 'IRS', 'DNDF']);
    const [jenisProduct, SetJenisProduct] = useState(productSelect[0]);
    const productClick = (e) => {
        SetJenisProduct(e);
    };
    const [exportButtton] = useState(<Button
        type="primary"
        style={{
            marginBottom: '15px',
            paddingBottom: '15px',
            float: 'right',
            height: '35px'
        }}
        icon={<DownloadOutlined />}>Export File</Button>);
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
            <Row justify="end">
                <Col span={4}>
                    {exportButtton}
                </Col>
            </Row>
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
