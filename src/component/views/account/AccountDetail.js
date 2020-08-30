import React, { useState, useMemo } from 'react'
import {
    Form,
    Input,
    Button,
    Select,
    Table,
    InputNumber,
    Dropdown,
    Row,
    Col,
    Menu
} from 'antd';
import { Link } from "react-router-dom";
import moment from 'moment';
import { DownOutlined, UpOutlined, DownloadOutlined } from '@ant-design/icons';

function AccountDetail() {
    const [componentSize] = useMemo(() => 'middle');
    const [formItemLayout] = useState ({
        labelCol: {
            xs: { span: 24 },
            sm: { span: 6 },
        },
        wrapperCol: {
            xs: { span: 24 },
            sm: { span: 16 },
        },
    });

    const [columns] = useState([
        {
            title: 'Member / Client ID',
            children: [
                {
                    title: 'Code',
                    width: 100,
                    dataIndex: 'code',
                    key: 'code',
                }, {
                    title: 'SID',
                    width: 150,
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
            title: 'Account Type',
            dataIndex: 'accType',
            key: 'accType',
            width: 100,
        },
        {
            title: 'Account Number',
            dataIndex: 'accNo',
            key: 'accNo',
            width: 150,
        },
        {
            title: 'Account Name',
            dataIndex: 'accName',
            key: 'accName',
            width: 200,
        },
        {
            title: 'Instrument Code',
            dataIndex: 'instrumentCode',
            key: 'instrumentCode',
            width: 100,
        },
        {
            title: 'Balance Type',
            dataIndex: 'balanceType',
            key: 'balanceType',
            width: 100,
        },
        {
            title: 'Status',
            dataIndex: 'status',
            key: 'status',
            width: 100,
        },
        {
            title: 'Action',
            width: 100,
            dataIndex: 'action',
            key: 'action',
            fixed: 'right',
            render: () =>
                <div>
                    <Link to={{
                        pathname: `/accountManagement/accDetailView`,
                        state: {
                            id: "1",
                            action: "Detail",
                            disable: true,
                            linkBack: "/accountManagement/detailinformation",
                        }
                    }} style={{ marginRight: '20px' }}>Detail
                    </Link>
                </div>,
        }

    ]);
    const [data] = useState([
        {
            key: '1',
            code: 'CODE123',
            sid: 'SCD01020303',
            lei: 'LEI123',
            accType: 'Type1',
            accNo: 'AD0010020003',
            accName: 'OSO SEKURITAS ID, PT',
            instrumentCode: 'IDR',
            balanceType: 'Available',
            status: 'Status1',
        },
        {
            key: '2',
            code: 'CODE456',
            sid: 'SCD111222333',
            lei: 'LEI456',
            accType: 'Type2',
            accNo: 'AD004005666',
            accName: 'Flash ID, PT',
            instrumentCode: 'IDR',
            balanceType: 'Available',
            status: 'Status2',
        },
        {
            key: '3',
            code: 'CODE678',
            sid: 'SCD11234556',
            lei: 'LEI456',
            accType: 'Type3',
            accNo: 'AD0010011113',
            accName: 'CJ Industry, PT',
            instrumentCode: 'IDR',
            balanceType: 'Available',
            status: 'Status3',
        },
    ]);

    const accountType = ['ALL', 'Type1', 'Type2', 'Type3'];
    const [typeAccount, SetAccountType] = useState(accountType[0]);
    const typeClick = (e) => {
        SetAccountType(e);
    };
    const instrumentCode = ['LOCAL', 'Code1', 'Code2', 'Code3'];
    const [codeInstrument, SetInstrumentCode] = useState(instrumentCode[0]);
    const codeClick = (e) => {
        SetInstrumentCode(e);
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
                            <Form.Item label="Account Type" >
                                <Select placeholder="Select a Type" 
                                        onChange={typeClick}>
                                                {accountType.map(product => (
                                        <Select.Option key={product}>{product}</Select.Option>
                                        ))}
                                </Select>
                            </Form.Item>
                            <Form.Item label="Account Number" >
                                <Input />
                            </Form.Item>
                            <Form.Item label="Account Name" >
                                <Input />
                            </Form.Item>
                            <Form.Item label="SID" >
                                <Input />
                            </Form.Item>
                            <Form.Item label="LEI" >
                                <Input />
                            </Form.Item>
                            <Form.Item label="Instrument Code">
                                <Select placeholder="Select an Instrument Code" 
                                        onChange={codeClick}>
                                                {instrumentCode.map(product => (
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
                scroll={{ x: 'calc(700px + 50%)' }}
            />
        </div>

    )

}

export default AccountDetail
