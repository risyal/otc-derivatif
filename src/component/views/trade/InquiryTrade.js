import React, { useState, useMemo } from 'react'
import {
    Form,
    Input,
    Button,
    Table,
    Select,
    DatePicker,
    Typography,
    Row,
    Col,
} from 'antd';
import { Link } from "react-router-dom";
import moment from 'moment';
import { DownOutlined, UpOutlined, DownloadOutlined } from '@ant-design/icons';
import OtherLink from '../../config/OtherLink';

const dateFormat = 'YYYY/MM/DD';
const { Title } = Typography;
const ListLink = OtherLink.filter((otherMenu) => {
    return otherMenu.useFor === "trade"
});

function InquiryTrade() {
    const [columns] = useState([
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
            render: () =>
                <div>
                    <Link to={{
                        pathname: ListLink.find((pathLink) => {
                            return pathLink.useIn === 'detail'
                        }).linkTo,
                        state: {
                            id: "1",
                            action: "Detail",
                            disable: true,
                            linkBack: "/inquerytrade",
                        }
                    }} style={{ marginRight: '20px' }}>Detail
                    </Link>
                </div>,
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
                <Title level={4}>Inquiry Input Trade</Title>
            </div>
            {console.log('asd', ListLink)}
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
                            <Form.Item label="SID" >
                                <Input />
                            </Form.Item>
                            <Form.Item label="LEI" >
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
                                    <Select.Option value="accepted">Accepted</Select.Option>
                                    <Select.Option value="eligibility1">Eligibility Check 1</Select.Option>
                                    <Select.Option value="eligibility2">Eligibility Check 2</Select.Option>
                                    <Select.Option value="novasi">Novasi</Select.Option>
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
                scroll={{ x: 'calc(700px + 50%)' }}
            />
        </div>
    )
}

export default InquiryTrade
