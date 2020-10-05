import React, { useState } from 'react'
import {
    Form,
    Button,
    Radio,
    Typography,
    Table,
    Row,
    Col,
} from 'antd';
import {
    ArrowLeftOutlined
} from '@ant-design/icons';
import { DownloadOutlined } from '@ant-design/icons';
import { useHistory } from "react-router-dom";

const { Title } = Typography;

const AccDetailView = (props) => {
    let history = useHistory()

    function goBack() {
        history.goBack()
    }
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
            code: 'CODE123',
            sid: 'SCD01020303',
            lei: 'LEI123',
            accType: 'Type1',
            accNo: 'AD0010020003',
            accName: 'OSO SEKURITAS ID, PT',
            instrumentCode: 'IDR',
            currentBalance: '2.123.444.788',
            balanceType: 'Available',
            status: 'Status1',
            startBalance: '2.123.444.788',
        },
        {
            key: '2',
            code: 'CODE456',
            sid: 'SCD111222333',
            lei: 'LEI456',
            accType: 'Type2',
            accNo: 'AD004005666',
            accName: 'Flash ID, PT',
            instrumentCode: 'IDR',
            currentBalance: 'IDR',
            balanceType: 'Available',
            status: 'Status2',
        },
        {
            key: '3',
            code: 'CODE678',
            sid: 'SCD11234556',
            lei: 'LEI456',
            accType: 'Type3',
            accNo: 'AD0010011113',
            accName: 'CJ Industry, PT',
            instrumentCode: 'IDR',
            currentBalance: 'IDR',
            balanceType: 'Available',
            status: 'Status3',
        },
    ]);

    const dataParamById = data.find((param) => {
        return param.key === props.location.state.id
    })

    const [dataForView] = useState([
        {
            title: "Code :",
            paramData: dataParamById.code
        },
        {
            title: "SID :",
            paramData: dataParamById.sid
        },
        {
            title: "LEI :",
            paramData: dataParamById.lei
        },
        {
            title: "Account Type :",
            paramData: dataParamById.accType
        },
        {
            title: "Account Number :",
            paramData: dataParamById.accNo
        },
        {
            title: "Account Name :",
            paramData: dataParamById.accName
        },
        {
            title: "Instrument Code :",
            paramData: dataParamById.instrumentCode
        },
        {
            title: "Balance Type :",
            paramData: dataParamById.balanceType
        },
        {
            title: "Status :",
            paramData: dataParamById.status
        },
        {
            title: "Start Balance :",
            paramData: dataParamById.startBalance
        },
        {
            title: "Current Balance :",
            paramData: dataParamById.currentBalance
        },
    ]);

    const action = props.location.state.action
    const disable = props.location.state.disable
    const linkBack = props.location.state.linkBack

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
                    {action} Account Information</Title>
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

                <Form.Item wrapperCol={{ span: 12, offset: 6 }}>
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

export default AccDetailView