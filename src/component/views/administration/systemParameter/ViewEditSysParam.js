import React, { useState, useCallback, useEffect } from 'react';
import {
    Form, Input, Button,
    Typography, Radio,
    Spin,
    Space,
} from 'antd';
import { useHistory } from "react-router-dom";
import {
    ArrowLeftOutlined
} from '@ant-design/icons';
import API from "../../../config/Api";

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

const ViewEditSysParam = (props) => {
    let history = useHistory()

    function goBack() {
        history.goBack()
    }
    const [form] = Form.useForm();
    const onFinish = async () => {
        const bodyPost = ({
            param: form.getFieldValue("param"),
            value: form.getFieldValue("value"),
            valueType: form.getFieldValue("valueType"),
            note: form.getFieldValue("note"),
            status: "active",
            lastUpdate: null
        });
        if (idx > 0) {
            await API("PUT", "administration", "sysparams/" + idx, null, bodyPost)
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

        } else {
            await API("POST", "administration", "sysparams", null, bodyPost)
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
        }

    };

    const [action] = useState(props.location.state.action);
    const [idx] = useState(props.location.state.id);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState({});
    const onReset = () => {
        form.resetFields();
    };
    const [sixEyes, setSixEyes] = useState(1);
    const radioOnChange = e => {
        setSixEyes(e.target.value);
    };
    const setParams = useCallback(async (idEdit) => {
        try {
            const req = await API("GET", "administration", "sysparams/" + idEdit);
            const resJSON = await req.data
            form.setFieldsValue({
                param: resJSON.param,
                value: resJSON.value,
                valueType: resJSON.valueType,
                note: resJSON.note,
            });
        } catch (err) {
            setError(err);
        } finally {
            setLoading(false);
        }

    }, [form]);
    useEffect(() => {
        let ignore = false;
        if (idx > 0) {
            setLoading(true);
            setError({});
            simulateSlowNetworkRequest().then(() => {
                if (!ignore) {
                    setParams(idx);
                }
            });
        }
        return (() => { ignore = true; });
    }, [idx, setParams]);

    return (
        <div>
            <div className="head-content viewEdit">
                <Title level={4}>
                    <span className="icon-back">
                        <ArrowLeftOutlined onClick={goBack} />
                    </span>
                    {action} Parameter</Title>
            </div> {loading ? (
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
                    >
                        <Form.Item name="param" label="System Paramater"
                            rules={[{ required: true, message: 'System Paramater is required' }]}>
                            <Input placeholder="System Paramater" />
                        </Form.Item>
                        <Form.Item name="value" label="Value"
                            rules={[{ required: true, message: 'Value is required' }]}>
                            <Input placeholder="Value" />
                        </Form.Item>
                        <Form.Item name="valueType" label="Value Type"
                            rules={[{ required: true, message: 'Value Type is required' }]}>
                            <Input placeholder="Value Type" />
                        </Form.Item>
                        <Form.Item name="note" label="Note"
                            rules={[{ required: true, message: 'Note is required' }]}>
                            <Input placeholder="Note" />
                        </Form.Item>

                        <Form.Item label="Role">
                            <Radio.Group onChange={radioOnChange} value={sixEyes}>
                                <Radio value={1}>Maker</Radio>
                                <Radio value={2}>Direct Checker</Radio>
                                <Radio value={3}>Direct Approver</Radio>
                            </Radio.Group>
                        </Form.Item>

                        <Form.Item {...tailLayout}>
                            <Button type="primary" htmlType="submit" style={{ marginRight: '10px' }}>
                                Submit
                            </Button>
                            <Button htmlType="button" onClick={onReset} style={{ marginRight: '10px' }}>
                                Reset
                        </Button>
                            <Button onClick={goBack}>
                                <div>Back</div>
                            </Button>
                        </Form.Item>
                    </Form>)
            }

        </div>
    )

}

export default ViewEditSysParam
