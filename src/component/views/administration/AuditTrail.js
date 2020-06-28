import React from 'react';
import { 
    Form, 
    DatePicker, 
    Button, 
    Select,
    Input,
    Table 
} from 'antd';
import { DownloadOutlined } from '@ant-design/icons';

function AuditTrail(){
    const componentSize = 'middle';
    const formItemLayout = {
        labelCol: {
            xs: { span: 24 },
            sm: { span: 6 },
        },
        wrapperCol: {
            xs: { span: 24 },
            sm: { span: 16 },
        },
    };

    const columns = [
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
            filters: [
                {
                    text: 'User1',
                    value: 'User1',
                },
                {
                    text: 'User2',
                    value: 'User2',
                },
                {
                    text: 'User3',
                    value: 'User3',
                },
            ],
            onFilter: (value, record) => record.user.indexOf(value) === 0,
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
    ];
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
            >
                <Form.Item label="User">
                    <Input />
                </Form.Item>
                <Form.Item label="Activity">
                    <Input />
                </Form.Item>
                <Form.Item label="Time">
                    <Input />
                </Form.Item>
                <Form.Item label="Date">
                    <DatePicker />
                </Form.Item>
                <Form.Item wrapperCol={{ span: 12, offset: 6 }}>
                    <Button type="primary">
                        Search
                    </Button>
                </Form.Item>
            </Form>

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
    )
}

export default AuditTrail