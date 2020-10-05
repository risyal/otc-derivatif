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
import { useHistory } from "react-router-dom";
import { DownloadOutlined } from '@ant-design/icons';
const { Title } = Typography;

const DetailCancelCM = (props) => {
    let history = useHistory()

    function goBack() {
        history.goBack()
    }
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
            participantCode: 'CENAIDJA001',
            sourceAcc: 'ACC.0001',
            destAccount: 'Account001',
            instrumentCode: 'Code100',
            value: 'Value1',
            settlementDate: '23-02-2020',
        },
    ]);
    const dataParamById = data.find((param) => {
        return param.key === props.location.state.id
    })

    const [dataForView] = useState([
        {
            title: "Participant Code :",
            paramData: dataParamById.participantCode
        },
        {
            title: "Source Acc :",
            paramData: dataParamById.sourceAcc
        },
        {
            title: "Dest Account :",
            paramData: dataParamById.destAccount
        },
        {
            title: "Instrument Code :",
            paramData: dataParamById.instrumentCode
        },
        {
            title: "Value :",
            paramData: dataParamById.value
        },
        {
            title: "Settlement Date :",
            paramData: dataParamById.settlementDate
        }
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
                        <ArrowLeftOutlined onClick={goBack} />
                    </span>
                    {action} Instruction Cash Management</Title>
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
                {!disable ? (<Form.Item label="Role">
                    <Radio.Group onChange={radioOnChange} value={sixEyes}>
                        <Radio value={1}>Maker</Radio>
                        <Radio value={2}>Direct Checker</Radio>
                        <Radio value={3}>Direct Approver</Radio>
                    </Radio.Group>
                </Form.Item>
                ) : null}
                <Form.Item wrapperCol={{ span: 12, offset: 6 }}>
                    {!disable ? (
                        <Popconfirm placement="leftTop" title={action === "Cancel" ? text : null} okText="Yes" cancelText="No">
                            <Button onClick={goBack} type="primary" style={{ marginRight: '15px' }}>{action === "Cancel" ? action + " Instruction" :
                                (action === "Confirmation" ? "Confirm" : action === "Approval" ? "Approve" : "Delete")}</Button>
                        </Popconfirm>
                    ) : null}
                    <Button onClick={goBack} style={{ marginTop: '15px' }}>
                        {!disable ? action === "Approval" ? "Reject" : (
                            <div>Back</div>
                        ) : (
                                <div>Back</div>
                            )}
                    </Button>
                </Form.Item>
            </Form>
        </div>
    )
}

export default DetailCancelCM
