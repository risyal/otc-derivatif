import React, { useState, useMemo } from 'react';
import { 
    Form,
    Input,
    Button, 
    Table,
    Row,
    Col,
    Dropdown,
    Menu,
} from 'antd';
import { Link } from "react-router-dom";
import { DownOutlined, UpOutlined, DownloadOutlined } from '@ant-design/icons';

function SystemParameter(){
    const [form] = Form.useForm();
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
    
    const [columns] = useState([
        {
            title: 'Settlement Window',
            width: 100,
            dataIndex: 'settlement',
            key: 'settlement',
        },
        {
            title: 'Trade Validation Time',
            width: 100,
            dataIndex: 'tvTime',
            key: 'tvTime',
        },
        {
            title: 'Initial Margin Percentage',
            width: 100,
            dataIndex: 'initialMp',
            key: 'initialMp',
        },
        {
            title: 'Indicator Percentage Chart',
            width: 100,
            dataIndex: 'ipChart',
            key: 'ipChart',
        },
        {
            title: 'Fees',
            children: [
                {
                    title: 'Fee Type',
                    width: 100,
                    dataIndex: 'feeType',
                    key: 'feeType',
                }, {
                    title: 'Product',
                    width: 100,
                    dataIndex: 'product',
                    key: 'product',
                }, {
                    title: 'Object Fee',
                    width: 100,
                    dataIndex: 'objectFee',
                    key: 'objectFee',
                }, {
                    title: 'Variables',
                    width: 100,
                    dataIndex: 'variables',
                    key: 'variables',
                }, {
                    title: 'Settlement Cycle',
                    width: 100,
                    dataIndex: 'cycle',
                    key: 'cycle',
                }
                
            ]
        },
        {
            title: 'Action',
            key: 'action',
            width: 100,
            render: (text, record) => (
                <Dropdown
                    overlay={
                        <Menu>
                            <Menu.Item>
                                <Link to={{
                                    pathname: `/administration/ViewDeleteSysParam`,
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
                                    pathname: `/administration/ViewEditSysParam`,
                                    state: {
                                        id: record.key,
                                        action: "Edit",
                                        disable: false,
                                    }
                                }} style={{ marginRight: '20px' }}>Edit
                                </Link>
                            </Menu.Item>
                            <Menu.Item>
                                <Link to={{
                                    pathname: `/administration/ViewDeleteSysParam`,
                                    state: {
                                        id: record.key,
                                        action: "Delete",
                                        disable: false,
                                    }
                                }} style={{ marginRight: '20px' }}>Delete
                                </Link>
                            </Menu.Item>
                        </Menu>
                    }
                    placement="bottomLeft"
                    trigger={['click']}>
                    <Button>Action</Button>
                </Dropdown>
            )
        }
    ]);

    const [data] = useState([
        {
            key: '1',
            settlement: 'SettlementWindow1',
            tvTime: 'TradeValidationTime1',
            initialMp: 'InitialMarginPercentage1',
            ipChart: 'IndicatorPercentageChart1',
            feeType: 'Type1',
            product: 'Product1',
            objectFee: 'Object1',
            variables: 'Variables1',
            cycle: 'SettlementCycle1',
        },
        {
            key: '2',
            settlement: 'SettlementWindow2',
            tvTime: 'TradeValidationTime2',
            initialMp: 'InitialMarginPercentage2',
            ipChart: 'IndicatorPercentageChart2',
            feeType: 'Type2',
            product: 'Product2',
            objectFee: 'Object2',
            variables: 'Variables2',
            cycle: 'SettlementCycle2',
        },
        {
            key: '3',
            settlement: 'SettlementWindow3',
            tvTime: 'TradeValidationTime3',
            initialMp: 'InitialMarginPercentage3',
            ipChart: 'IndicatorPercentageChart3',
            feeType: 'Type3',
            product: 'Product3',
            objectFee: 'Object3',
            variables: 'Variables3',
            cycle: 'SettlementCycle3',
        },
    ]);

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
        <div style={{ margin: '15px 20px' }}>
            <Form
                {...formItemLayout}
                size={componentSize}
                layout="horizontal"
                initialValues={{ size: componentSize }}
                labelAlign="left"
            > 
                <div>
                    <Form.Item label="Keyword">
                        <Input />
                    </Form.Item>
                </div>
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
                </Form.Item>
            </Form>

            <div style={{ margin: '15px 20px' }} scroll={{ x: 1300 }}>
                <Row justify="end">
                    <Col span={8}>
                        <Link to={{
                                pathname: `/administration/ViewEditSysParam`,
                                state: {
                                    id: '0',
                                    action: "Add New",
                                    disable: false,
                                }
                            }}>
                                <Button type="primary" htmlType="submit" style={{ marginBottom: '15px' }}>
                                    Add New Parameter
                                </Button>
                        </Link>
                    </Col>

                    <Col span={8} offset={8}>
                        {/* <Link to={{
                            pathname: `#`,
                            state: {
                                id: '1',
                                action: "Edit",
                                disable: false,
                            }
                        }} > */}
                        {exportButtton}
                        {/* </Link> */}
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
        </div>
    )

}

export default SystemParameter