import React, { useState, useMemo } from 'react'
import {
    Form,
    Button,
    Table,
    Select,
    DatePicker,
    Input,
    Row,
    Col,
    Typography
} from 'antd';
import moment from 'moment';
import { DownOutlined, UpOutlined, DownloadOutlined } from '@ant-design/icons';
const dateFormat = 'YYYY/MM/DD';
const { Title } = Typography;

function TradeSummary() {
    const [columns] = useState([
        {
            title: 'Product',
            width: 50,
            dataIndex: 'product',
            key: 'product',
            fixed: 'left',
        },
        {
            title: 'Trade Accepted',
            width: 50,
            dataIndex: 'tradeAccepted',
            key: 'tradeAccepted',
        },
        {
            title: 'Trade Rejected',
            width: 50,
            dataIndex: 'tradeRejected',
            key: 'tradeRejected',
        },
        {
            title: 'Trade Novated',
            width: 50,
            dataIndex: 'tradeNovated',
            key: 'tradeNovated',
        },
        {
            title: 'Trade on Queue',
            width: 50,
            dataIndex: 'tradeOnQueue',
            key: 'tradeOnQueue',
        },
        {
            title: 'Trade Terminated',
            width: 50,
            dataIndex: 'tradeTerminated',
            key: 'tradeTerminated',
        },
        {
            title: 'Total Trade',
            width: 50,
            dataIndex: 'totalTrade',
            key: 'totalTrade',
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
                <Title level={4}>Trade Summary</Title>
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
                            <Form.Item label="Member ID" >
                                <Input />
                            </Form.Item>
                            <Form.Item label="Trade  Date">
                                <DatePicker style={{ width: '100%' }}
                                    defaultValue={moment('2020/01/23', dateFormat)} />
                            </Form.Item>
                            <Form.Item label="Product ">
                                <Select defaultValue={jenisProduct} onChange={productClick}>
                                    {productSelect.map(product => (
                                        <Select.Option key={product}>{product}</Select.Option>
                                    ))}
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
            />
        </div>
    )
}

export default TradeSummary
