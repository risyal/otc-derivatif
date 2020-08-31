import React, { useState, useMemo } from 'react'
import {
    Form,
    Button,
    Input,
    Table,
    Select,
    Row,
    Col,
} from 'antd';
import {  DownOutlined, UpOutlined, DownloadOutlined } from '@ant-design/icons';

function InquiryPosition() {
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
                }
            ]
        },
        {
            title: 'Trade ID',
            width: 100,
            dataIndex: 'tradeId',
            key: 'tradeId',
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
            title: 'Tenor',
            width: 100,
            dataIndex: 'tenor',
            key: 'tenor',
        },
        {
            title: 'Payment Frequency',
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

export default InquiryPosition
