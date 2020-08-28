import React, { useState, useMemo } from 'react'
import {
    Form,
    Input,
    Button,
    Table,
    Row,
    Col,
} from 'antd';

import { DownOutlined, UpOutlined, DownloadOutlined } from '@ant-design/icons';

function DefaultFund() {
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
            title: 'Default Fund',
            children: [
                {
                    title: 'Acc No',
                    width: 50,
                    dataIndex: 'accNo',
                    key: 'accNo',
                }, {
                    title: 'Value',
                    width: 50,
                    dataIndex: 'value',
                    key: 'value',
                }, {
                    title: 'Currency',
                    dataIndex: 'currency',
                    key: 'currency',
                    width: 50,
                }, {
                    title: 'Excess Requirement',
                    width: 50,
                    dataIndex: 'excessReq',
                    key: 'excessReq',
                }]
        }
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
                            <Form.Item label="Member / Client ID" >
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
                            <Form.Item label="Default Fund">
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
                                        placeholder="Value"
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
            />
        </div>

    )

}

export default DefaultFund
