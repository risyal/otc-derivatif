import React, { useState } from 'react';
import {
    Form,
    DatePicker,
    Button,
    Select,
    Input,
    Table
} from 'antd';
import { DownloadOutlined, DownOutlined, UpOutlined } from '@ant-design/icons';

function ApprovalMemberClient() {
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
            title: 'No',
            dataIndex: 'no',
            width: 5,
            key: 'no',
        },
        {
            title: 'Reference number',
            dataIndex: 'refNo',
            width: 100,
            key: 'refNo',
        },
        {
            title: 'Task',
            dataIndex: 'task',
            width: 200,
            key: 'task',
        },
        {
            title: 'Last Update',
            dataIndex: 'lastUpdate',
            width: 100,
            key: 'lastUpdate',
        },
        {
            title: 'Updated By',
            dataIndex: 'updatedBy',
            width: 100,
            key: 'updatedBy',
        },
        {
            title: 'Status',
            dataIndex: 'status',
            width: 100,
            key: 'status',
        },
        {
            title: 'Action',
            key: 'action',
            width: 100,
            fixed: 'right',
            render: () => <a>Detail</a>,
        },
    ];
    const [expand, setExpand] = useState(true);
    const [form] = Form.useForm();
    const data = [
        {
            no: '1',
            refNo: 'MCM200709.0001',
            task: ["Register Member: Create", <br />, "CENAIDJA - Bank Central Asia (BCA)"],
            lastUpdate: '08-07-2020',
            updatedBy: 'fulan',
            status: 'Waiting for Checker'

        },
        {
            no: '2',
            refNo: 'MCM200709.0002',
            task: ["Register Member: Edit", <br />, "CENAIDJA - Bank Central Asia (BCA)"],
            lastUpdate: '08-07-2020',
            updatedBy: 'fulan',
            status: 'Waiting for Approver'
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
            >{expand ? (<div>
                <Form.Item label="Keyword">
                    <Input />
                </Form.Item>
            </div>
            ) : (
                    <div>
                        <Form.Item label="Reff. No">
                            <Input />
                        </Form.Item>
                        <Form.Item label="Status">
                            <Select
                                placeholder="Select a Status"
                            >
                                <Option value="checker">Waiting for Checker</Option>
                                <Option value="approver">Waiting for Approver</Option>
                            </Select>
                        </Form.Item>
                        <Form.Item label="Date Maker">
                            <DatePicker />
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

export default ApprovalMemberClient
