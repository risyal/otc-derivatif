import React, { useState, useMemo } from 'react'
import {
    Form,
    Input,
    Button,
    Table,
    Row,
    Col,
    DatePicker,
} from 'antd';
import { DownOutlined, UpOutlined, DownloadOutlined } from '@ant-design/icons';

function SettlementStatus() {
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
            title: 'Settlement Type',
            children: [
                {
                    title: 'Value',
                    width: 100,
                    dataIndex: 'value',
                    key: 'value',
                }, {
                    title: 'Status',
                    width: 100,
                    dataIndex: 'status',
                    key: 'status',
                }]
        },
        {
            title: 'Member',
            width: 100,
            dataIndex: 'member',
            key: 'member',
        }
        
    ]);
    const [data] = useState([
        {
            key: '1',
            value: 'Position Settlement',
            status: 'Status',
            member: 'Member1'
        },
        {
            key: '2',
            value: 'Penalti Settlement',
            status: 'Status',
            member: 'Member2'
        },
        {
            key: '3',
            value: 'Charges Settlement',
            status: 'Status',
            member: 'Member3'
        },
        {
            key: '4',
            value: 'Clearing Fee',
            status: 'Status',
            member: 'Member4'
        },
        {
            key: '5',
            value: 'Default Fund Settlement',
            status: 'Status',
            member: 'Member5'
        },
        {
            key: '6',
            value: 'Initial Margin Settlement',
            status: 'Status',
            member: 'Member6'
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
                            <Form.Item label="Settlement Type" >
                                <Input />
                            </Form.Item>
                            <Form.Item label="Settlement Date">
                                <DatePicker style={{ width: '100%' }} />
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

export default SettlementStatus
