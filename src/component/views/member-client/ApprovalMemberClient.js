import React, { useState } from 'react';
import {
    Form,
    DatePicker,
    Button,
    Select,
    Input,
    Table,
    Row,
    Col,
} from 'antd';
import moment from 'moment';
import { Link } from "react-router-dom";
import { DownloadOutlined, DownOutlined, UpOutlined } from '@ant-design/icons';

function ApprovalMemberClient() {
    const componentSize = 'middle';
    const dateFormat = 'YYYY/MM/DD';
    const { RangePicker } = DatePicker;
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

    const { Option } = Select;

    const [columns] = useState([
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
            render: (text, record) => (<Link to={{
                pathname: `/registerClient/ViewDeleteMember`,
                state: {
                    id: record.key,
                    action: "Detail",
                    disable: false,
                }
            }} style={{ marginRight: '20px' }}>Detail
            </Link>),
        },
    ]);
    const [expand, setExpand] = useState(true);
    const [form] = Form.useForm();
    const [data] = useState([
        {
            no: '1',
            key: '1',
            refNo: 'MCM200709.0001',
            task: ["Register Member: Create", <br />, "CENAIDJA - Bank Central Asia (BCA)"],
            lastUpdate: '08-07-2020',
            updatedBy: 'fulan',
            status: 'Waiting for Checker',
            linkTo: '/registerClient/ViewDeleteMember',

        },
        {
            no: '2',
            key: '2',
            refNo: 'MCM200709.0002',
            task: ["Register Member: Edit", <br />, "CENAIDJA - Bank Central Asia (BCA)"],
            lastUpdate: '08-07-2020',
            updatedBy: 'fulan',
            status: 'Waiting for Approver',
            linkTo: '/registerClient/ViewDeleteMember',
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
                                <Option value="approved">Checked </Option>
                                <Option value="tobeCheckedover">to be Checked</Option>
                                <Option value="rejected">Rejected</Option>
                            </Select>
                        </Form.Item>
                        <Form.Item label="Range Date">
                            <RangePicker
                                defaultValue={[moment('2020/07/01', dateFormat), moment('2020/07/09', dateFormat)]}
                                format={dateFormat}
                            />
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

export default ApprovalMemberClient
