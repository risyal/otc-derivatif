import React, { useState } from 'react';
import {
    Form,
    Input,
    Button,
    Table,
} from 'antd';
import { DownOutlined, UpOutlined, DownloadOutlined } from '@ant-design/icons';

function AuditTrail() {
    const [expand, setExpand] = useState(true);
    const [form] = Form.useForm();
    const componentSize = 'middle';
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
            title: 'Date',
            dataIndex: 'date',
            width: 100,
            key: 'date',
        },
        {
            title: 'Time',
            dataIndex: 'time',
            width: 100,
            key: 'time',
        },
        {
            title: 'User',
            dataIndex: 'user',
            width: 100,
            key: 'user',
        },
        {
            title: 'Module/Service',
            dataIndex: 'moduleService',
            width: 100,
            key: 'moduleService',
        },
        {
            title: 'Activity',
            dataIndex: 'activity',
            width: 100,
            key: 'activity',
        },
        {
            title: 'Detail/Note',
            dataIndex: 'detailNote',
            width: 100,
            key: 'detailNote',
        },
    ]);
    const data = [
        {
        },
        {
        },
        {
        },
    ];

    return (
        <div style={{ margin: '15px 20px' }}>
            <Form
                {...formItemLayout}
                size={componentSize}
                layout="horizontal"
                initialValues={{ size: componentSize }}
                labelAlign="left"
            > {expand ? (<div>
                <Form.Item label="Keyword">
                    <Input />
                </Form.Item>
            </div>
            ) : (
                    <div>
                        <Form.Item label="User">
                            <Input />
                        </Form.Item>
                        <Form.Item label="Activity">
                            <Input />
                        </Form.Item>
                        <Form.Item label="Time">
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
                        {expand ? (<div><DownOutlined />Advance Search</div>) :
                            (<div><UpOutlined />Simple Search</div>)}
                    </Button>
                </Form.Item>
            </Form>

            <div style={{ margin: '15px 20px' }} scroll={{ x: 1300 }}>
                <Table
                    columns={columns}
                    dataSource={data}
                    bordered
                    size="middle"
                />
                <Button type="primary" icon={<DownloadOutlined />}>
                    Export File
                </Button>
            </div>
        </div>
    )
}

export default AuditTrail