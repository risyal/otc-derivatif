import React from 'react';
import { Form, DatePicker, Button, Table } from 'antd';
import { DownloadOutlined } from '@ant-design/icons';

function AuditTrail(){
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
            onFilter: (value, record) => record.code.indexOf(value) === 0,
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
        <div style={{ margin: '15px 20px' }} scroll={{ x: 1300 }}>
            <Form layout="horizontal">
                <Form.Item label="Date">
                    <DatePicker /> <Button type="primary" htmlType="submit">Go</Button>
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