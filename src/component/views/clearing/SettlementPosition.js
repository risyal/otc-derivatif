import React, { useState, useMemo } from 'react'
import {
    Form,
    Button,
    Input,
    Table,
    Select,
    DatePicker,
    Row,
    Col,
    Typography
} from 'antd';
import moment from 'moment';
import {  DownOutlined, UpOutlined, DownloadOutlined } from '@ant-design/icons';
const { Title } = Typography;

function SettlementPosition() {
    const [columns] = useState([
        {
            title: 'Member ID/Client ID',
            children: [
                {
                    title: 'Code',
                    width: 100,
                    dataIndex: 'code',
                    key: 'code',
                    fixed: 'left',
                }, {
                    title: 'SID',
                    width: 100,
                    dataIndex: 'sid',
                    key: 'sid',
                    fixed: 'left',
                }, {
                    title: 'LEI',
                    width: 100,
                    dataIndex: 'lei',
                    key: 'lei',
                    fixed: 'left',
                }]
        },
        {
            title: 'Trade ID',
            width: 100,
            dataIndex: 'tradeId',
            key: 'tradeId',
        },
        {
            title: 'Settlement Date',
            width: 100,
            dataIndex: 'settlementDate',
            key: 'settlementDate',
        },
        {
            title: 'Product',
            width: 100,
            dataIndex: 'product',
            key: 'product',
        },
        {
            title: 'Account Type (H/C)',
            width: 100,
            dataIndex: 'accountType',
            key: 'accountType',
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
            title: 'Net Present Value',
            children: [
                {
                    title: 'Previous Business Day',
                    width: 100,
                    dataIndex: 'previousBusDay',
                    key: 'previousBusDay',
                }, {
                    title: 'Current Business Day',
                    width: 100,
                    dataIndex: 'currentBusDay',
                    key: 'currentBusDay',
                }]
        },
        {
            title: 'Daily MTM',
            width: 100,
            dataIndex: 'dailyMtm',
            key: 'dailyMtm',
        },
        {
            title: 'Net Cash Flow Payments',
            width: 100,
            dataIndex: 'netCashFlowPayments',
            key: 'netCashFlowPayments',
        },
        {
            title: 'Price Alignment Amount',
            width: 100,
            dataIndex: 'priceAlignmentAmount',
            key: 'priceAlignmentAmount',
        },
        {
            title: 'Clearing Fees',
            width: 100,
            dataIndex: 'clearingFees',
            key: 'clearingFees',
        },
        {
            title: 'Default Fund Shortage',
            width: 100,
            dataIndex: 'defaultFund',
            key: 'defaultFund',
        },
        {
            title: 'Penalties',
            width: 100,
            dataIndex: 'penalties',
            key: 'penalties',
        },
        {
            title: 'Charges',
            width: 100,
            dataIndex: 'charges',
            key: 'charges',
        },
        {
            title: 'Carry Forward',
            width: 100,
            dataIndex: 'carryForward',
            key: 'carryForward',
        },
        {
            title: 'Net Settlement',
            width: 100,
            dataIndex: 'netSettlement',
            key: 'netSettlement',
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
    const productSelect = ['OIS', 'IRS', 'DNDF'];
    const [jenisProduct, SetJenisProduct] = useState(productSelect[0]);
    const productClick = (e) => {
        SetJenisProduct(e);
    };
    const dateFormat = 'YYYY/MM/DD';
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
                <Title level={4}>Settlement Position</Title>
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
                            <Form.Item label="Trade ID" >
                                <Input />
                            </Form.Item>
                            <Form.Item label="Code" >
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
                            <Form.Item label="Settlement  Date">
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
                scroll={{ x: 'calc(700px + 50%)' }}
            />
        </div>
    )
}

export default SettlementPosition;
