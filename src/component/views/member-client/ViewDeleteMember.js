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

const ViewDeleteMember = (props) => {
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
            key: '0',
            memberID: ' ',
            sid: ' ',
            lei: ' ',
            namaPerusahaan: ' ',
            alamat: ' ',
            pic: ' ',
            noTelp: ' ',
            email: ' ',
            bic: ' ',
            collateral: 'Auto Generate',
            settlement: 'Auto Generate',
            dFund: 'Auto Generate',
            ssss: 'Auto Generate',
            status: 'Active',
        },
        {
            key: '1',
            no: '1',
            memberID: 'Member123',
            sid: 'ID12',
            lei: 'lei1',
            namaPerusahaan: 'PT Jaya Abadi',
            alamat: 'New York No. 1 Lake Park',
            pic: 'John Brown',
            noTelp: '085112345227',
            email: 'john@gmail.com',
            bic: 'BIC01',
            collateral: 'Collateral1',
            settlement: 'Settlement1',
            dFund: 'Def-Fund1',
            ssss: 'SSSS1',
            status: 'Waiting for Approver',
        },
        {
            key: '2',
            no: '2',
            memberID: 'Member345',
            sid: 'ID23',
            lei: 'lei2',
            namaPerusahaan: 'PT Citra Utama',
            alamat: 'New York No. 1 Lake Park',
            pic: 'Jim Green',
            noTelp: '085112345227',
            email: 'jim@gmail.com',
            bic: 'BIC02',
            collateral: 'Collateral2',
            settlement: 'Settlement2',
            dFund: 'Def-Fund2',
            ssss: 'SSSS2',
            status: 'Waiting for Approver',
        },
        {
            key: '3',
            no: '3',
            memberID: 'Member567',
            sid: 'ID34',
            lei: 'lei3',
            namaPerusahaan: 'PT Abadi Makmur',
            alamat: 'New York No. 1 Lake Park',
            pic: 'John Black',
            noTelp: '085112345227',
            email: 'black@gmail.com',
            bic: 'BIC03',
            collateral: 'Collateral3',
            settlement: 'Settlement3',
            dFund: 'Def-Fund3',
            ssss: 'SSSS3',
            status: 'Waiting for Approver',
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

    const dataMemberById = data.find((member) => {
        return member.key === props.location.state.id

    })
    /* 
        const dataCheckerById = dataChecker.find((checker) => {
            return checker.key === props.location.state.id
    
        }) */

    const [dataForView] = useState([
        {
            title: "Member ID :",
            paramData: dataMemberById.memberID
        },
        {
            title: "SID :",
            paramData: dataMemberById.sid
        },
        {
            title: "LEI :",
            paramData: dataMemberById.lei
        },
        {
            title: "Company Name :",
            paramData: dataMemberById.namaPerusahaan
        },
        {
            title: "Address :",
            paramData: dataMemberById.alamat
        },
        {
            title: "PIC :",
            paramData: dataMemberById.pic
        },
        {
            title: "Telephone Number :",
            paramData: dataMemberById.noTelp
        },
        {
            title: "Email :",
            paramData: dataMemberById.email
        },
        {
            title: "RTGS Account :",
            paramData: "Settlement : " + dataMemberById.settlement
        },
        {
            title: "",
            paramData: "Default fund : " + dataMemberById.dFund
        },
        {
            title: "SSSS Account :",
            paramData: dataMemberById.ssss
        },
        {
            title: "Status :",
            paramData: dataMemberById.status
        },
    ]);
    /*     const [dataForChecker] = useState([
            {
                title: "Nama :",
                paramData: "Fulan"
            },
            {
                title: "Date :",
                paramData: "07-07-2020"
            },
        ]); */

    const action = props.location.state.action
    const disable = props.location.state.disable
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
                        <Link to="/memberandclientmanagement/registermember">
                            <ArrowLeftOutlined />
                        </Link>
                    </span>
                    {action} Member</Title>
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
                        {exportButtton}
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

                {action === 'Detail' ? (
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

                        {!disable ? (<Form.Item label="Role" className="roleViewDel">
                            <Radio.Group onChange={radioOnChange} value={sixEyes}>
                                <Radio value={1}>Checker</Radio>
                                <Radio value={2}>Direct Approver</Radio>
                            </Radio.Group>
                        </Form.Item>
                        ) : (
                                <div></div>
                            )}

                        <br />
                        <Form.Item wrapperCol={{ span: 12, offset: 6 }}>
                            <Link to="/memberandclientmanagement/approval">
                                <Button type="primary" style={{ marginRight: '15px' }}>Approve
                                </Button>
                                <Button style={{ marginRight: '15px' }}>Reject
                                </Button>
                                <Button >Cancel
                                </Button>
                            </Link>
                        </Form.Item>
                    </div>
                ) : (
                        <Form.Item wrapperCol={{ span: 12, offset: 6 }}>
                            {!disable ? (<Link to="/memberandclientmanagement/registermember">
                                <Popconfirm placement="leftTop" title={text} okText="Yes" cancelText="No">
                                    <Button type="primary" style={{ marginRight: '15px' }}>Delete</Button>
                                </Popconfirm>
                            </Link>
                            ) : (
                                    <div></div>
                                )}
                            <Link to="/memberandclientmanagement/registermember">
                                <Button style={{ marginTop: '15px' }}>
                                    {!disable ? (
                                        <div>Cancel</div>
                                    ) : (
                                            <div>Back</div>
                                        )}
                                </Button>
                            </Link>
                        </Form.Item>
                    )}

            </Form>

        </div>
    )
}

export default ViewDeleteMember
