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
    Typography,
} from 'antd';
import moment from 'moment';
import { Link } from "react-router-dom";
import { DownOutlined, UpOutlined, DownloadOutlined } from '@ant-design/icons';
import OtherLink from '../../config/OtherLink';

const { Title } = Typography;
const ListLink = OtherLink.filter((otherMenu) => {
    return otherMenu.useFor === "clearing"
});


function ClearingPostition() {

    const [columns] = useState([
        {
            title: 'No.',
            width: 50,
            dataIndex: 'no',
            key: 'no',
            fixed: 'left',
        },
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
        {
            title: 'Currency',
            width: 100,
            dataIndex: 'currency',
            key: 'currency',
        },
        {
            title: 'Action',
            key: 'action',
            dataIndex: 'action',
            width: 100,
            fixed: 'right',
            render: (text, record) => <Link to={{
                pathname: ListLink.find((pathLink) => {
                    //console.log(('detail' + record.product).replace(/\s+/g, '-').toLowerCase());
                    return pathLink.useIn === (('detail' + record.product).replace(/\s+/g, '-').toLowerCase())
                }).linkTo,
                state: {
                    id: "1",
                    action: "Detail",
                    disable: true,
                    linkBack: "/monitoringtrade",
                }
            }} style={{ marginRight: '20px' }}>Detail</Link>,
            // width: 100,
            // render: () =>
            //     <div>
            //         <Link to={{
            //             pathname: `/clearingManagement/clearingDetail`,
            //             state: {
            //                 id: "1",
            //                 action: "Detail",
            //                 disable: true,
            //                 linkBack: "/clearingManagement/clearingPosition",
            //             }
            //         }} style={{ marginRight: '20px' }}>Detail
            //         </Link>
            //     </div>,
        },
    ]);
    const [data] = useState([
        {
            key: '1',
            no: '1',
            tradeId: 'UTI1',
            product: 'IRS',
            code: 'Code1',
            sid: 'SID1',
            lei: 'LEI1',
            accountType: 'House',
            buy: 'Buy1',
            sell: 'Sell1',
            fix: '1',
            float: '1',
            value: 'Value1',
            tenor: 'Tenor1',
            paymentFreq: 'Payment1',
            maturityDate: '23-01-2020',
            nextFixingDate: '23-01-2020',
            currency: 'Currency1',
            action:
                <Link to={{ pathname: `/clearingManagement/clearingDetailIrs` }}>
                    Detail
                </Link>
        },
        {
            key: '2',
            no: '2',
            tradeId: 'UTI2',
            product: 'OIS',
            code: 'Code2',
            sid: 'SID2',
            lei: 'LEI2',
            accountType: 'Client',
            buy: 'Buy2',
            sell: 'Sell2',
            fix: '2',
            float: '2',
            value: 'Value2',
            tenor: 'Tenor2',
            paymentFreq: 'Payment2',
            maturityDate: '23-01-2020',
            nextFixingDate: '23-01-2020',
            currency: 'Currency2',
            action:
                <Link to={{ pathname: `/clearingManagement/clearingDetailOis` }}>
                    Detail
                </Link>
        },
        {
            key: '3',
            no: '3',
            tradeId: 'UTI3',
            product: 'DNDF',
            code: 'Code3',
            sid: 'SID3',
            lei: 'LEI3',
            accountType: 'House',
            buy: 'Buy3',
            sell: 'Sell3',
            fix: '3',
            float: '3',
            value: 'Value3',
            tenor: 'Tenor3',
            paymentFreq: 'Payment3',
            maturityDate: '23-01-2020',
            nextFixingDate: '23-01-2020',
            currency: 'Currency3',
            action:
                <Link to={{ pathname: `/clearingManagement/clearingDetailDndf` }}>
                    Detail
                </Link>
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
                <Title level={4}>Clearing Position</Title>
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
                            <Form.Item label="Maturity Date">
                                <DatePicker style={{ width: '100%' }}
                                    defaultValue={moment('2020/01/23', dateFormat)} />
                            </Form.Item>
                            <Form.Item label="Next Fixing Date">
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

export default ClearingPostition
