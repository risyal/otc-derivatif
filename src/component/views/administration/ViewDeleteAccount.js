import React, { useState } from 'react'
import {
    Form,
    Popconfirm,
    Button,
    Radio,
    Typography,
    Table,
    Row,
    Col,
} from 'antd';
import {
    CaretLeftOutlined,
    ArrowLeftOutlined,
    DownloadOutlined
} from '@ant-design/icons';
import { Link } from "react-router-dom";

const { Title } = Typography;

const ViewDeleteAccount = (props) => {
    const text = 'Are you sure to delete this task?';
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
    ];
    const [data] = useState([
        {
            key: '1',
            code: 'CENAIDJA',
            sidLei: 'SID1LEI1',
            name: 'Nas abah',
            // currency: '$10',
            accNo: 'D4211',
            status: 'Active',
            accNo2: 'D4211',
            status2: 'Frozen',
            accNo3: 'D4211',
            status3: 'Close',
            settlementAcc: 'Settlement1',
        },
        {
            key: '2',
            code: 'CENAIDJA',
            sidLei: 'SID1LEI2',
            name: 'Mega',
            // currency: '$50',
            accNo: 'D4212',
            status: 'Active',
            accNo2: 'D4212',
            status2: 'Frozen',
            accNo3: 'D4212',
            status3: 'Frozen',
            settlementAcc: 'Settlement2',
        },
        {
            key: '3',
            code: 'CENAIDJA',
            sidLei: 'SID1LEI3',
            name: 'Tera',
            // currency: '$25',
            accNo: 'D4212',
            status: 'Frozen',
            accNo2: 'D4212',
            status2: 'Close',
            accNo3: 'D4212',
            status3: 'Active',
            settlementAcc: 'Settlement3',
        },
    ]);
    const dataAccountById = data.find((account) => {
        return account.key === props.location.state.id

    })

    const [dataForView] = useState([
        {
            title: "Member ID :",
            paramData: "Code : " + dataAccountById.code
        },
        {
            title: "",
            paramData: "SID/LEI : " + dataAccountById.sidLei
        },
        {
            title: "Name :",
            paramData: dataAccountById.name
        },
        // {
        //     title: "Currency :",
        //     paramData: "Code : " + dataAccountById.currency
        // },
        {
            title: "Cash Collateral : ",
            paramData: "Account No : " + dataAccountById.accNo
        },
        {
            title: "",
            paramData: "Status : " + dataAccountById.status
        },
        {
            title: "Non-Cash Collateral : ",
            paramData: "Account No : " + dataAccountById.accNo2
        },
        {
            title: "",
            paramData: "Status : " + dataAccountById.status2
        },
        {
            title: "Default Fund : ",
            paramData: "Account No : " + dataAccountById.accNo3
        },
        {
            title: "",
            paramData: "Status : " + dataAccountById.status3
        },
        {
            title: "Settlement Account : ",
            paramData: dataAccountById.settlementAcc
        },
    ]);

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
                        <Link to="/editaccount">
                            <ArrowLeftOutlined />
                        </Link>
                    </span>
                {action} Account Status</Title>
            </div>
            <Form
                {...formItemLayout}
                size={componentSize}
                layout="horizontal"
                initialValues={{ size: componentSize }}
                labelAlign="left"
                style={{ marginBottom: '80px' }}
            >
                {!disable ? (<Form.Item label="Role" className="roleViewDel">
                    <Radio.Group onChange={radioOnChange} value={sixEyes}>
                        <Radio value={1}>Maker</Radio>
                        <Radio value={2}>Direct Checker</Radio>
                        <Radio value={3}>Direct Approver</Radio>
                    </Radio.Group>
                </Form.Item>
                ) : (
                        <div></div>
                    )}
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
                <Form.Item wrapperCol={{ span: 12, offset: 6 }}>
                    {!disable ? (<Link to="/editaccount">
                        <Popconfirm placement="leftTop" title={text} okText="Yes" cancelText="No">
                            <Button type="primary" style={{ marginRight: '15px' }}>Delete</Button>
                        </Popconfirm>
                    </Link>
                    ) : (
                            <div></div>
                        )}
                    <Link to="/editaccount">
                        <Button style={{ marginTop: '15px' }}>
                            {!disable ? (
                                <div>Cancel</div>
                            ) : (
                                    <div>Back</div>
                                )}
                        </Button>
                    </Link>
                </Form.Item>
            </Form>

        </div>
    )
}

export default ViewDeleteAccount
