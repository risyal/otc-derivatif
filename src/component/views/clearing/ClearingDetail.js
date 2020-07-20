import React, { useState } from 'react'
import {
    Form,
    Popconfirm,
    Button,
    Radio,
    Typography,
    Table,
    Input,
    Row,
    Col,
} from 'antd';
import {
    ArrowLeftOutlined
} from '@ant-design/icons';
import { Link } from "react-router-dom";
import { DownloadOutlined } from '@ant-design/icons';
const { Title } = Typography;

const ClearingDetail = (props) => {
    const [text] = useState('Are you sure to Cancel this ?');
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
            tradeId: 'UTI001002',
            product: 'IRS',
            time: '25-02-2020 12:00:00',
            memberId: 'CENAIDJA',
            sidMember: 'SID/LEI001',
            clientId: 'CENAIDJA001',
            sidClient: 'SID/LEI001',
            contrack: 'Buy',
            value: 'Rp. 1.000.000.000',
            tenor: 'tenor',
            paymentFrequency: '6M',
            maturityDate: '23-02-2020',
            nextFixingDate: '6M',
        },
    ]);
    const dataParamById = data.find((param) => {
        return param.key === props.location.state.id
    })

    const [dataForView] = useState([
        {
            title: "Trade ID :",
            paramData: dataParamById.tradeId
        },
        {
            title: "Product :",
            paramData: dataParamById.product
        },
        {
            title: "Member ID - SID/LEI :",
            paramData: dataParamById.memberId + "-" + dataParamById.sidMember
        },
        {
            title: "Client ID - SID/LEI :",
            paramData: dataParamById.clientId + "-" + dataParamById.sidClient
        },
        {
            title: "Contrack :",
            paramData: dataParamById.contrack
        },
        {
            title: "Value :",
            paramData: dataParamById.value
        },
        {
            title: "Tenor :",
            paramData: dataParamById.tenor
        },
        {
            title: "Payment Frequency :",
            paramData: dataParamById.paymentFrequency
        },
        {
            title: "Maturity Date :",
            paramData: dataParamById.maturityDate
        },
        {
            title: "Next Fixing Date :",
            paramData: dataParamById.nextFixingDate
        },

    ]);

    const action = props.location.state.action
    const disable = props.location.state.disable
    const linkBack = props.location.state.linkBack
    const [sixEyes, setSixEyes] = useState(1);
    const radioOnChange = e => {
        setSixEyes(e.target.value);
    };
    const [dataForChecker] = useState([
        {
            title: "Nama :",
            paramData: "Fulan"
        },
        {
            title: "Email :",
            paramData: "Fulan@gmail.com"
        },
        {
            title: "Date :",
            paramData: "07-07-2020"
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
        <div>
            <div className="head-content viewDelete">
                <Title level={4}>
                    <span className="icon-back">
                        <Link to={linkBack}>
                            <ArrowLeftOutlined />
                        </Link>
                    </span>
                    {action} Trade</Title>
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
                {action === "Approval" ? (
                    <div><br />
                        <h2>Checker Information :</h2>
                        <Table
                            className="viewDelTable"
                            columns={columns}
                            dataSource={dataForChecker}
                            showHeader={false}
                            rowClassName={(record, index) => index % 2 === 0 ? 'table-row-light' : 'table-row-dark'}
                            size="middle"
                            pagination={false}
                        />
                        <br />
                        <Form.Item label="Catatan">
                            <Input.TextArea rows={4} />
                        </Form.Item>
                    </div>) : null
                }
                {!disable ? (<Form.Item label="Role" className="roleViewDel">
                    <Radio.Group onChange={radioOnChange} value={sixEyes}>
                        <Radio value={1}>Maker</Radio>
                        <Radio value={2}>Direct Checker</Radio>
                        <Radio value={3}>Direct Approver</Radio>
                    </Radio.Group>
                </Form.Item>
                ) : null}
                <Form.Item wrapperCol={{ span: 12, offset: 6 }}>
                    {!disable ? (<Link to={linkBack}>
                        <Popconfirm placement="leftTop" title={action === "Cancel" ? text : null} okText="Yes" cancelText="No">
                            <Button type="primary" style={{ marginRight: '15px' }}>{action === "Cancel" ? action + " Trade" :
                                (action === "Confirmation" ? "Confirm" : action === "Approval" ? "Approve" : "Delete")}</Button>
                        </Popconfirm>
                    </Link>
                    ) : null}
                    <Link to={linkBack}>
                        <Button style={{ marginTop: '15px' }}>
                            {!disable ? action === "Approval" ? "Reject" : (
                                <div>Back</div>
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

export default ClearingDetail
