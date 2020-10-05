import React, { useState, useMemo } from 'react'
import {
    Form,
    Button,
    Input,
    Table,
    Row,
    Col,
    Typography
} from 'antd';
import { DownOutlined, UpOutlined, DownloadOutlined } from '@ant-design/icons';
import { Link } from "react-router-dom";
import OtherLink from '../../config/OtherLink';

const { Title } = Typography;

const ListLink = OtherLink.filter((otherMenu) => {
    return otherMenu.useFor === "clearing"
});
function CashFlowIrs() {
    const [columns] = useState([
        {
            title: 'Trade ID',
            width: 100,
            dataIndex: 'tradeId',
            key: 'tradeId',
            fixed: 'left',
        },
        {
            title: 'Member',
            children: [
                {
                    title: 'Code',
                    width: 100,
                    dataIndex: 'code',
                    key: 'code',
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
            title: 'Role',
            width: 100,
            dataIndex: 'role',
            key: 'role',
        },
        {
            title: 'Product',
            width: 100,
            dataIndex: 'product',
            key: 'product',
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
            dataIndex: 'paymentFrequency',
            key: 'paymentFrequency',
        },
        {
            title: 'Market Position/Leg',
            width: 100,
            dataIndex: 'marketPosition',
            key: 'marketPosition',
        },
        {
            title: 'Fixing Date',
            width: 100,
            dataIndex: 'fixingDate',
            key: 'fixingDate',
        },
        {
            title: 'Coupon Payment Date',
            width: 100,
            dataIndex: 'couponPaymentDate',
            key: 'couponPaymentDate',
        },
        {
            title: 'Maturity Date',
            width: 100,
            dataIndex: 'maturityDate',
            key: 'maturityDate',
        },
        {
            title: 'Notional',
            width: 100,
            dataIndex: 'notional',
            key: 'notional',
        },
        {
            title: 'Cash Flow',
            width: 100,
            dataIndex: 'cashFlow',
            key: 'cashFlow',
        },
        {
            title: 'Action',
            key: 'action',
            fixed: 'right',
            dataIndex: 'action',
            width: 100,
            render: () =>
                <div>
                    <Link to={{
                        pathname: ListLink.find((pathLink) => {
                            return pathLink.useIn === 'detailcashflow'
                        }).linkTo,
                        state: {
                            id: "1",
                            action: "Detail",
                            disable: true,
                            linkBack: "/clearingManagement/cashFlowIrs",
                        }
                    }} style={{ marginRight: '20px' }}>Detail
                    </Link>
                </div>,
        },
    ]);
    const [data] = useState([
        {
            key: '1',
            tradeId: 'UTI1',
            code: 'Code1',
            sid: 'SID1',
            lei: 'LEI1',
            role: 'Role1',
            product: 'Product1',
            tenor: 'Tenor1',
            paymentFrequency: 'Payment Frequency1',
            marketPosition: 'Market Position1',
            fixingDate: '23-03-2020',
            couponPaymentDate: '30-03-2020',
            maturityDate: '30-03-2020',
            notional: 'Notional1',
            cashFlow: '123',
        },
        {
            key: '2',
            tradeId: 'UTI2',
            code: 'Code2',
            sid: 'SID2',
            lei: 'LEI2',
            role: 'Role2',
            product: 'Product2',
            tenor: 'Tenor2',
            paymentFrequency: 'Payment Frequency2',
            marketPosition: 'Market Position2',
            fixingDate: '23-03-2020',
            couponPaymentDate: '30-03-2020',
            maturityDate: '30-03-2020',
            notional: 'Notional2',
            cashFlow: '123',
        },
        {
            key: '3',
            tradeId: 'UTI3',
            code: 'Code3',
            sid: 'SID3',
            lei: 'LEI3',
            role: 'Role3',
            product: 'Product3',
            tenor: 'Tenor3',
            paymentFrequency: 'Payment Frequency3',
            marketPosition: 'Market Position3',
            fixingDate: '23-03-2020',
            couponPaymentDate: '30-03-2020',
            maturityDate: '30-03-2020',
            notional: 'Notional3',
            cashFlow: '123',
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
                <Title level={4}>Cash Flow IRS Calculation</Title>
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
                            <Form.Item label="Member ID" >
                                <Input />
                            </Form.Item>
                            <Form.Item label="Tenor" >
                                <Input />
                            </Form.Item>
                            <Form.Item label="Reference Rate" >
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

export default CashFlowIrs
