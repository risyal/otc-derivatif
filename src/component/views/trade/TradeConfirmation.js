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
    Typography
} from 'antd';
import moment from 'moment';
import { Link } from "react-router-dom";
import { DownOutlined, UpOutlined, DownloadOutlined } from '@ant-design/icons';
import OtherLink from '../../config/OtherLink';

const dateFormat = 'YYYY/MM/DD';
const { Title } = Typography;
const ListLink = OtherLink.filter((otherMenu) => {
    return otherMenu.useFor === "trade"
});

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
            title: 'SID',
            width: 100,
            dataIndex: 'sid',
            key: 'sid',
        },
        {
            title: 'LEI',
            width: 100,
            dataIndex: 'lei',
            key: 'lei',
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
                                    pathname: ListLink.find((pathLink) => {
                                        return pathLink.useIn === 'detail'
                                    }).linkTo,
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
                                    pathname: ListLink.find((pathLink) => {
                                        return pathLink.useIn === 'confirmation'
                                    }).linkTo,
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
    const [expand, setExpand] = useState(true);
    const [form] = Form.useForm();
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
            <div className="head-content">
                <Title level={4}>Trade Confirmation</Title>
            </div>
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
                            <Form.Item label="UTI" >
                                <Input />
                            </Form.Item>
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
                            <Form.Item label="Counterparty" >
                                <Input />
                            </Form.Item>
                            <Form.Item label="Trade  Date">
                                <DatePicker style={{ width: '100%' }}
                                    defaultValue={moment('2020/01/23', dateFormat)} />
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
                        {expand ? (<div><DownOutlined /> Advance Search</div>) :
                            (<div><UpOutlined /> Simple Search</div>)}
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
