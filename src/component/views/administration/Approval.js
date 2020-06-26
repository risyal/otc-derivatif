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

function Approval(){
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

    const { Option } = Select;

    const columns = [
        {
            title: 'Reff. No',
            dataIndex: 'no',
            width: 100,
            key: 'no',
        },
        {
            title: 'Maker',
            children: [
                {
                    title: 'Date',
                    width: 100,
                    dataIndex: 'date',
                    key: 'date',
                }, {
                    title: 'Time',
                    width: 100,
                    dataIndex: 'time',
                    key: 'time',
                }, {
                    title: 'User',
                    width: 100,
                    dataIndex: 'user',
                    key: 'user',
                }, {
                    title: 'Status',
                    width: 100,
                    dataIndex: 'status',
                    key: 'status',
                }
            ]
        },
        {
            title: 'Checker',
            children: [
                {
                    title: 'Date',
                    width: 100,
                    dataIndex: 'date',
                    key: 'date',
                }, {
                    title: 'Time',
                    width: 100,
                    dataIndex: 'time',
                    key: 'time',
                }, {
                    title: 'User',
                    width: 100,
                    dataIndex: 'user',
                    key: 'user',
                }, {
                    title: 'Status',
                    width: 100,
                    dataIndex: 'status',
                    key: 'status',
                }
            ]
        },
        {
            title: 'Approver',
            children: [
                {
                    title: 'Date',
                    width: 100,
                    dataIndex: 'date',
                    key: 'date',
                }, {
                    title: 'Time',
                    width: 100,
                    dataIndex: 'time',
                    key: 'time',
                }, {
                    title: 'User',
                    width: 100,
                    dataIndex: 'user',
                    key: 'user',
                }, {
                    title: 'Status',
                    width: 100,
                    dataIndex: 'status',
                    key: 'status',
                }
            ]
        },
        {
            title: 'Topik',
            dataIndex: 'topik',
            width: 100,
            key: 'topik',
        },
        {
            title: 'Action',
            key: 'action',
            width: 100,
            fixed: 'right',
            render: () => <a>Detail</a>,
        },
    ];
    const data = [
        {
        },
        {
        },
        {
        },
        {
        },
        {
        },
    ];

    return (
        <div style={{ margin: '15px 20px' }} scroll={{ x: 1300 }}>
            <Form
                {...formItemLayout}
                size={componentSize}
                layout="horizontal"
                initialValues={{ size: componentSize }}
                labelAlign="left"
            >
                <Form.Item label="Reff. No">
                    <Input />
                </Form.Item>
                <Form.Item label="Approver Status">
                    <Select
                        placeholder="Select a Status"
                    >
                        <Option value="approved">Approved</Option>
                        <Option value="rejected">Rejected</Option>
                    </Select>
                </Form.Item>
                <Form.Item label="Checker Status">
                    <Select
                        placeholder="Select a Status"
                    >
                        <Option value="checked">Checked</Option>
                        <Option value="tobechecked">To Be Checked</Option>
                        <Option value="rejected">Rejected</Option>
                    </Select>
                </Form.Item>
                <Form.Item label="Topik">
                    <Input />
                </Form.Item>
                <Form.Item label="Date Maker">
                    <DatePicker />
                </Form.Item>
                <Form.Item wrapperCol={{ span: 12, offset: 6 }}>
                    <Button type="primary" htmlType="submit">
                        Search
                    </Button>
                </Form.Item>
            </Form>

            <Table
                columns={columns}
                dataSource={data}
                bordered
                size="middle"
                scroll={{ x: 'calc(700px + 50%)' }}
            />
            <Button type="primary" icon={<DownloadOutlined />}>
                Export File
            </Button>
        </div>
    )
}

export default Approval