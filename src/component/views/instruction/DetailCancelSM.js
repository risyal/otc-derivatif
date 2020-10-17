import React, { useState, useEffect } from 'react'
import {
    Form,
    Popconfirm,
    Button,
    Radio,
    Typography,
    Spin,
    Space,
    Descriptions,
} from 'antd';
import {
    ArrowLeftOutlined, 
    DownloadOutlined
} from '@ant-design/icons';
import { useHistory } from "react-router-dom";
import API from "../../config/Api";

const { Title } = Typography;
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

const DetailCancelSM = (props) => {
    let history = useHistory()

    function goBack() {
        history.goBack()
    }
    const [text] = useState('Are you sure to Cancel this ?');
    const [loading, setLoading] = useState(false);
    const [idx] = useState(props.location.state.id);
    const action = props.location.state.action
    const disable = props.location.state.disable
    const [sixEyes, setSixEyes] = useState(1);
    const radioOnChange = e => {
        setSixEyes(e.target.value);
    };
    const [fieldsValue, setFieldsValue] = useState({
        memberCode: null,
        clientId: null,
        securitiesAccountId: null,
        securityCode: null,
        instructionType: null,
        instructionDate: null,
        instrumentType: null,
        sourceAccount: null,
        targetAccount: null,
        volume: null,
        value: null,
        settlementDate: null,
        reference: null,
        remark: null,
    });

    const setSecMgt = async (q) => {
        setLoading(true);
        const req = await API("GET", "instruction", "securitymanagements/" + q);
        const resJSON = await req.data
        setFieldsValue({
            memberCode: resJSON.memberCode,
            clientId: resJSON.clientId,
            securitiesAccountId: resJSON.securitiesAccountId,
            securityCode: resJSON.securityCode,
            instructionType: resJSON.instructionType,
            instructionDate: resJSON.instructionDate,
            instrumentType: resJSON.instrumentType,
            sourceAccount: resJSON.sourceAccount,
            targetAccount: resJSON.targetAccount,
            volume: resJSON.volume,
            value: resJSON.value,
            settlementDate: resJSON.settlementDate,
            reference: resJSON.reference,
            remark: resJSON.remark,
        })
        setLoading(false);
    }

    const submitDelete = () => {
        API("DELETE", "instruction", "securitymanagements/" + idx)
        .then(res => {
            console.log(res);
            console.log(res.data);
            history.goBack()
        })
    };
    useEffect(() => {
        if (idx > 0) {
            setSecMgt(idx);
        }
    }, [idx]);

    return (
        <div>
            <div className="head-content viewDelete">
                <Title level={4}>
                    <span className="icon-back">
                        <ArrowLeftOutlined onClick={goBack} />
                    </span>
                    {action} Instruction </Title>
            </div>

            {loading ? (
                <div style={{ textAlign: "center" }}> <Space size="large" >
                    <Spin size="large" tip="Loading..." />
                </Space>
                </div>
            ) : (
                <div>
                    <Descriptions column={1} bordered
                        extra={<Button type="primary"> <DownloadOutlined /> test</Button>}>
                        <Descriptions.Item label="Member Code">{fieldsValue.memberCode}</Descriptions.Item>
                        <Descriptions.Item label="Participant Codet">{fieldsValue.clientId}</Descriptions.Item>
                        <Descriptions.Item label="Securities Account Id">{fieldsValue.securitiesAccountId}</Descriptions.Item>
                        <Descriptions.Item label="Security Code">{fieldsValue.securityCode}</Descriptions.Item>
                        <Descriptions.Item label="Instruction Type">{fieldsValue.instructionType}</Descriptions.Item>
                        <Descriptions.Item label="Instruction Date">{fieldsValue.instructionDate}</Descriptions.Item>
                        <Descriptions.Item label="Instrument Type">{fieldsValue.instrumentType}</Descriptions.Item>
                        <Descriptions.Item label="Source Account">{fieldsValue.sourceAccount}</Descriptions.Item>
                        <Descriptions.Item label="Destination Account">{fieldsValue.targetAccount}</Descriptions.Item>
                        <Descriptions.Item label="Volume">{fieldsValue.volume}</Descriptions.Item>
                        <Descriptions.Item label="Value">{fieldsValue.value}</Descriptions.Item>
                        <Descriptions.Item label="Settlement Date">{fieldsValue.settlementDate}</Descriptions.Item>
                        <Descriptions.Item label="Reference">{fieldsValue.reference}</Descriptions.Item>
                        <Descriptions.Item label="Remark">{fieldsValue.remark}</Descriptions.Item>
                    </Descriptions>

                    <Form
                        {...formItemLayout}
                        size={componentSize}
                        layout="horizontal"
                        initialValues={{ size: componentSize }}
                        labelAlign="left"
                        style={{ marginBottom: '80px' }}
                    >
                        {!disable ? (<Form.Item label="Role" className="roleViewDel" style={{ paddingLeft: '25px' }}>
                            <Radio.Group onChange={radioOnChange} value={sixEyes}>
                                <Radio value={1}>Maker</Radio>
                                <Radio value={2}>Direct Checker</Radio>
                                <Radio value={3}>Direct Approver</Radio>
                            </Radio.Group>
                        </Form.Item>
                        ) : null}

                        <Form.Item wrapperCol={{ span: 12, offset: 6 }}
                                    style={{ marginLeft: '20px' }}>
                            {!disable ? (
                                <Popconfirm placement="leftTop" 
                                            title={text} 
                                            okText="Yes" 
                                            cancelText="No"
                                            onConfirm={submitDelete} >
                                    <Button type="primary" 
                                            style={{ marginRight: '15px' }}>Delete</Button>
                                </Popconfirm>
                            ) : (
                                    null
                                )}
                            <Button onClick={goBack} style={{ marginTop: '15px' }}>
                                <div>Back</div>
                            </Button>
                        </Form.Item>
                    </Form>
                </div>
            )}
        </div>
    )
}

export default DetailCancelSM
