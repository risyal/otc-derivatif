import React, { useState, useMemo } from 'react'
import {
    Form, Popconfirm,
    Button,
    Radio,
    Input,
    Typography,
    Table,
    Row,
    Col,
    Divider,
} from 'antd';
import {
    DownloadOutlined,
    ArrowLeftOutlined
} from '@ant-design/icons';
import { Link } from "react-router-dom";

const { Title } = Typography;

const DetailApproval = (props) => {
    const [componentSize] = useMemo(() => 'middle');
    const text = 'Are you sure to delete this task?';

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
            title: '',
            dataIndex: 'title',
            key: 'title',
            width: 280,
        },
        {
            title: '',
            dataIndex: 'paramData',
            key: 'paramData',
        },
    ]);

    const [data] = useState([
        {
            key: '1',
            userId: 'User1',
            memberId: 'Member1',
            status: 'Active',
            lastLogin: '23-07-2020 10:04',
        },
        {
            key: '2',
            userId: 'User2',
            memberId: 'Member2',
            status: 'Blocked',
            lastLogin: '23-07-2020 10:04',
        },
        {
            key: '3',
            userId: 'User3',
            memberId: 'Member3',
            status: 'Active',
            lastLogin: '23-07-2020 10:04',
        }
    ]);

    const dataUserById = data.find((user) => {
        return user.key === props.location.state.id
    })

    const [dataForView] = useState([
        {
            title: "User ID :",
            paramData: dataUserById.userId
        },
        {
            title: "Member ID :",
            paramData: dataUserById.memberId
        },
        {
            title: "Status :",
            paramData: dataUserById.status
        },
        {
            title: "Last Login :",
            paramData: dataUserById.lastLogin
        },
    ]);

    const [approvalHistory] = useState([
        {
            key: '1',
            no: '1',
            user: 'Fulan',
            dateTime: '27-07-2020 12:09:12',
            status: 'Maker',
            notes: ' ',
        },
    ]);
    const [columnsAppHistory] = useState([
        {
            title: 'No',
            dataIndex: 'no',
            width: 5,
            key: 'no',
        },
        {
            title: 'User',
            dataIndex: 'user',
            width: 100,
            key: 'user',
        },
        {
            title: 'Date Time',
            dataIndex: 'dateTime',
            width: 200,
            key: 'dateTime',
        },
        {
            title: 'Status',
            dataIndex: 'status',
            width: 100,
            key: 'status',
        },
        {
            title: 'Notes',
            dataIndex: 'notes',
            width: 100,
            key: 'notes',
        },
    ]);

    const [sixEyes, setSixEyes] = useState(1);
    const radioOnChange = e => {
        setSixEyes(e.target.value);
    };
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
        <div>
            <div className="head-content viewDelete">
                <Title level={4}>
                    <span className="icon-back">
                        <Link to="/approval">
                            <ArrowLeftOutlined />
                        </Link>
                    </span>
                    Approval</Title>
            </div>
            <Form
                {...formItemLayout}
                size={componentSize}
                layout="horizontal"
                initialValues={{ size: componentSize }}
                labelAlign="left"
                style={{ marginBottom: '80px' }}
            >
                <Row justify="end">
                    <Col span={4}>
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
                    className="viewDelTable"
                    columns={columns}
                    dataSource={dataForView}
                    showHeader={false}
                    rowClassName={(record, index) => index % 2 === 0 ? 'table-row-light' : 'table-row-dark'}
                    size="middle"
                    pagination={false}
                />

                <div>
                    <br />
                    <Divider orientation="left">
                        <h2>Approval History</h2></Divider>
                    <Table
                        pagination={false}
                        columns={columnsAppHistory}
                        dataSource={approvalHistory}
                        bordered
                        size="middle"
                    />
                    <br />
                    <Divider orientation="left">
                        <h2>Approval</h2></Divider>
                    <Form.Item label="Note">
                        <Input.TextArea rows={4} />
                    </Form.Item>
                    <Form.Item label="Role" className="roleViewDel">
                        <Radio.Group onChange={radioOnChange} value={sixEyes}>
                            <Radio value={1}>Checker</Radio>
                            <Radio value={2}>Direct Approver</Radio>
                        </Radio.Group>
                    </Form.Item>


                    <br />
                    <Form.Item wrapperCol={{ span: 12, offset: 6 }}>
                        <Link to="/approval">
                            <Button type="primary" style={{ marginRight: '15px' }}>Approve
                                </Button>
                            <Button style={{ marginRight: '15px' }}>Reject
                                </Button>
                            <Button >Cancel
                                </Button>
                        </Link>
                    </Form.Item>
                </div>


            </Form>

        </div>
    )
}

export default DetailApproval
