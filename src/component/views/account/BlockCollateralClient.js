import React, { useState, useMemo } from 'react'
import {
    Form,
    Input,
    Button,
    Select,
    Table,
    InputNumber,
    Row,
    Col,
} from 'antd';
import { DownOutlined, UpOutlined, DownloadOutlined } from '@ant-design/icons';

function BlockCollateralClient() {
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
            title: 'Client ID',
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
            title: 'Cash Collateral',
            children: [
                {
                    title: 'Acc No',
                    width: 100,
                    dataIndex: 'accNo',
                    key: 'accNo',
                }, {
                    title: 'Balance',
                    width: 100,
                    dataIndex: 'balance',
                    key: 'balance',
                }, {
                    title: 'Currency',
                    dataIndex: 'currency',
                    key: 'currency',
                    width: 100,
                }]
        },
        {
            title: 'Non-cash Collateral',
            children: [
                {
                    title: 'Acc No',
                    width: 100,
                    dataIndex: 'accNoNon',
                    key: 'accNoNon',
                }, {
                    title: 'Balance',
                    width: 100,
                    dataIndex: 'balanceNon',
                    key: 'balanceNon',
                }]
        },
        {
            title: 'Total Balance Value',
            children: [
                {
                    title: 'Acc No',
                    width: 100,
                    dataIndex: 'accNoDef',
                    key: 'accNoDef',
                }, {
                    title: 'Balance',
                    width: 100,
                    dataIndex: 'balanceDef',
                    key: 'balanceDef',
                }]
        },
        {
            title: 'Block Collatera',
            children: [
                {
                    title: 'Initial Margin',
                    width: 100,
                    dataIndex: 'initialMargin',
                    key: 'initialMargin',
                }, {
                    title: 'Variation Margin',
                    width: 100,
                    dataIndex: 'variationMargin',
                    key: 'variationMargin',
                }]
        }, {
            title: 'Excess Collateral',
            width: 100,
            dataIndex: 'excessCollateral',
            key: 'excessCollateral',
        },
    ]);
    const [data] = useState([
        {
        },
        {
        },
        {
        },
    ]);

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
                            <Form.Item label="Client ID" >
                                <Input.Group compact >
                                    <Input style={{ width: '30%', textAlign: 'center' }} placeholder="Code" />
                                    <Input
                                        className="site-input-split"
                                        style={{
                                            width: '5%',
                                            borderLeft: 0,
                                            borderRight: 0,
                                            pointerEvents: 'none', textAlign: 'center'
                                        }}
                                        placeholder="|"
                                        disabled
                                    />
                                    <Input style={{ width: '30%', textAlign: 'center' }} placeholder="SID" />
                                    <Input
                                        className="site-input-split"
                                        style={{
                                            width: '5%',
                                            borderLeft: 0,
                                            borderRight: 0,
                                            pointerEvents: 'none', textAlign: 'center'
                                        }}
                                        placeholder="|"
                                        disabled
                                    />
                                    <Input
                                        className="site-input-right"
                                        style={{
                                            width: '30%',
                                            textAlign: 'center',
                                        }}
                                        placeholder="LEI"
                                    />
                                </Input.Group>
                            </Form.Item>
                            <Form.Item label="Currency">
                                <Input.Group compact>
                                    <Select defaultValue="Rp" style={{ width: '15%' }}>
                                        <Select.Option value="Rp">Rp</Select.Option>
                                    </Select>
                                    <InputNumber
                                        defaultValue={0}
                                        formatter={value => `${value}`.replace(/\B(?=(\d{3})+(?!\d))/g, ',')}
                                        parser={value => value.replace(/\$\s?|(,*)/g, '')}
                                        style={{ width: '85%' }} />
                                </Input.Group>
                            </Form.Item>
                            <Form.Item label="Cash Collateral">
                                <Input.Group compact >
                                    <Input style={{ width: '45%', textAlign: 'center' }} placeholder="Acc No" />
                                    <Input
                                        className="site-input-split"
                                        style={{
                                            width: '10%',
                                            borderLeft: 0,
                                            borderRight: 0,
                                            pointerEvents: 'none', textAlign: 'center'
                                        }}
                                        placeholder="|"
                                        disabled
                                    />
                                    <Input
                                        className="site-input-right"
                                        style={{
                                            width: '45%',
                                            textAlign: 'center',
                                        }}
                                        placeholder="Balance"
                                    />
                                </Input.Group>
                            </Form.Item>
                            <Form.Item label="Non-cash Collateral">
                            <Input.Group compact >
                                    <Input style={{ width: '45%', textAlign: 'center' }} placeholder="Acc No" />
                                    <Input
                                        className="site-input-split"
                                        style={{
                                            width: '10%',
                                            borderLeft: 0,
                                            borderRight: 0,
                                            pointerEvents: 'none', textAlign: 'center'
                                        }}
                                        placeholder="|"
                                        disabled
                                    />
                                    <Input
                                        className="site-input-right"
                                        style={{
                                            width: '45%',
                                            textAlign: 'center',
                                        }}
                                        placeholder="Balance"
                                    />
                                </Input.Group>
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


export default BlockCollateralClient
