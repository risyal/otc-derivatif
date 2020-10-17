import React, { useState } from 'react';
import {
    Form,
    Input,
    Button,
    Radio,
    DatePicker,
    Typography,
    Spin,
    Space,
} from 'antd';
import { useHistory } from "react-router-dom";
import {
    ArrowLeftOutlined
} from '@ant-design/icons';
import API from "../../config/Api";

const { Title } = Typography;

const formLayout = 'horizontal';
const formItemLayout =
    formLayout === 'horizontal'
        ? {
            labelCol: {
                xs: { span: 24 },
                sm: { span: 6 },
            },
            wrapperCol: {
                xs: { span: 24 },
                sm: { span: 16 },
            },
        }
        : null;

const tailLayout = {
    wrapperCol: { offset: 6, span: 12 },
};
const simulateSlowNetworkRequest = () =>
    new Promise(resolve => setTimeout(resolve, 1));

const ViewAddSM = (props) => {
    let history = useHistory()

    function goBack() {
        history.goBack()
    }

    const [form] = Form.useForm();

    const onFinish = async () => {
        const bodyPost = ({
            memberId: form.getFieldValue("memberId"),
            clientId: form.getFieldValue("clientId"),
            securitiesAccountId: form.getFieldValue("securitiesAccountId"),
            securityCode: form.getFieldValue("securityCode"),
            instructionType: form.getFieldValue("instructionType"),
            instructionDate: form.getFieldValue("instructionDate"),
            instrumentType: form.getFieldValue("instrumentType"),
            sourceAccount: form.getFieldValue("sourceAccount"),
            targetAccount: form.getFieldValue("targetAccount"),
            volume: form.getFieldValue("volume"),
            value: form.getFieldValue("value"),
            settlementDate: form.getFieldValue("settlementDate"),
            reference: form.getFieldValue("reference"),
            remark: form.getFieldValue("remark"),
            status: "active",
            lastUpdate: null
        });
        await API("POST", "instruction", "securitymanagements", null, bodyPost)
            .then(
                res => {
                    form.resetFields();
                    console.log(res.data.content);
                }
            ).catch(
                error => {
                    // Error
                    if (error.response) {
                        // The request was made and the server responded with a status code
                        // that falls out of the range of 2xx
                        // console.log(error.response.data);
                        // console.log(error.response.status);
                        // console.log(error.response.headers);
                        console.log(error.response);
                    } else if (error.request) {
                        // The request was made but no response was received
                        // `error.request` is an instance of XMLHttpRequest in the 
                        // browser and an instance of
                        // http.ClientRequest in node.js
                        console.log(error.request);
                    } else {
                        // Something happened in setting up the request that triggered an Error
                        console.log('Error', error.message);
                    }
                    console.log(error.config);
                }
            )
    };

    const onReset = () => {
        form.resetFields();
    };

    const [loading, setLoading] = useState(false);
    const [sixEyes, setSixEyes] = useState(1);
    const radioOnChange = e => {
        setSixEyes(e.target.value);
    };

    return(
        <div>
            <div className="head-content viewDelete">
                <Title level={4}>
                    <span className="icon-back">
                        <ArrowLeftOutlined onClick={goBack} />
                    </span>
                    Add New Instruction </Title>
            </div>

            {loading ? (
                <div style={{ textAlign: "center" }}> <Space size="large" >
                    <Spin size="large" tip="Loading..." />
                </Space>
                </div>
            ) : (
                <Form
                    {...formItemLayout}
                    layout={formLayout}
                    form={form}
                    labelAlign="left"
                    initialValues={{ layout: formLayout }}
                    onFinish={onFinish}
                    style={{ marginBottom: '80px' }}
            >
                <Form.Item label="Member Id" name="memberId"
                         rules={[{ required: true, message: 'Member Id is required' }]}>
                    <Input />
                </Form.Item>
                <Form.Item label="Participant Code" name="clientId"
                         rules={[{ required: true, message: 'Participant Code is required' }]}>
                    <Input />
                </Form.Item>
                <Form.Item label="Securities Account Id" name="securitiesAccountId"
                        rules={[{ required: true, message: 'Securities Account Id is required' }]}>
                    <Input />
                </Form.Item>
                <Form.Item label="Security Code" name="securityCode"
                        rules={[{ required: true, message: 'Securities Code is required' }]}>
                    <Input />
                </Form.Item>
                <Form.Item label="Instruction Type" name="instructionType"
                        rules={[{ required: true, message: 'Instruction Type is required' }]}>
                    <Input />
                </Form.Item>
                <Form.Item label="Instruction Date" name="instructionDate"
                        rules={[{ required: true, message: 'Instruction Date is required' }]}>
                    <DatePicker style={{ width: '100%' }} />
                </Form.Item>
                <Form.Item label="Instrument Type" name="instrumentType"
                        rules={[{ required: true, message: 'Instrument Type is required' }]}>
                    <Input />
                </Form.Item>
                <Form.Item label="Source Account" name="sourceAccount"
                        rules={[{ required: true, message: 'Source Account is required' }]}>
                    <Input />
                </Form.Item>
                <Form.Item label="Destination Account" name="targetAccount"
                        rules={[{ required: true, message: 'Destination Account is required' }]}>
                    <Input />
                </Form.Item>
                <Form.Item label="Volume" name="volume"
                        rules={[{ required: true, message: 'Volume is required' }]}>
                    <Input />
                </Form.Item>
                <Form.Item label="Value" name="value"
                        rules={[{ required: true, message: 'Value is required' }]}>
                    <Input />
                </Form.Item>
                <Form.Item label="Settlement Date" name="settlementDate"
                        rules={[{ required: true, message: 'Settlement Date is required' }]}>
                    <DatePicker style={{ width: '100%' }} />
                </Form.Item>
                <Form.Item label="Reference" name="reference"
                        rules={[{ required: true, message: 'Reference is required' }]}>
                    <Input />
                </Form.Item>
                <Form.Item label="Remark" name="remark"
                        rules={[{ required: true, message: 'Remark is required' }]}>
                    <Input />
                </Form.Item>

                <Form.Item label="Role">
                    <Radio.Group>
                        <Radio value={1}>Maker</Radio>
                        <Radio value={2}>Direct Checker</Radio>
                        <Radio value={3}>Direct Approver</Radio>
                    </Radio.Group>
                </Form.Item>

                <Form.Item {...tailLayout}>
                    <Button onClick={goBack} type="primary" htmlType="submit" style={{ marginRight: '10px' }}>
                        Submit
                    </Button>
                    <Button htmlType="button" onClick={onReset} style={{ marginRight: '10px' }}>
                        Reset
                    </Button>
                    <Button onClick={goBack} >
                        <div>Back</div>
                    </Button>
                </Form.Item>
            </Form>
            )}
        </div>
    )
}


export default ViewAddSM