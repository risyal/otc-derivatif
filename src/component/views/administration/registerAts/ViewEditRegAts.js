import React, { useState, useEffect, useCallback } from 'react';
import {
    Form,
    Input,
    Button,
    Radio,
    Typography,
    Spin,
    Space,
} from 'antd';
import {
    ArrowLeftOutlined
} from '@ant-design/icons';
import { useHistory } from "react-router-dom";
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


const ViewEditRegAts = (props) => {
    let history = useHistory()

    function goBack() {
        history.goBack()
    }
    const [form] = Form.useForm();
    const onFinish = async () => {
        const bodyPost = ({
            companyName: form.getFieldValue("companyName"),
            applicationName: form.getFieldValue("applicationName"),
            companyInfo:
            {
                address: form.getFieldValue("address"),
                picName: form.getFieldValue("picName"),
                phoneNumber: form.getFieldValue("phoneNumber"),
                email: form.getFieldValue("email"),
            },
            status: "active",
        });
        if (idx > 0) {
            await API("PUT", "administration", "registeratss/" + idx, null, bodyPost)
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
            await API("POST", "administration", "registeratss", null, bodyPost)
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

    const setRegAts = useCallback(async (idEdit) => {
        try {
            const req = await API("GET", "administration", "registeratss/" + idEdit);
            const resJSON = await req.data
            form.setFieldsValue({
                companyName: resJSON.companyName,
                applicationName: resJSON.applicationName,
                address: resJSON.companyInfo.address,
                picName: resJSON.companyInfo.picName,
                phoneNumber: resJSON.companyInfo.phoneNumber,
                email: resJSON.companyInfo.email,
            })
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
                    setRegAts(idx);
                }
            });
        }
        return (() => { ignore = true; });
    }, [idx, setRegAts]);
    return (
        <div>
            <div className="head-content viewEdit">
                <Title level={4}>
                    <span className="icon-back">
                        <ArrowLeftOutlined onClick={goBack} />
                    </span>
                    {action} ATS</Title>
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

                        <Form.Item label="Company name"
                            name="companyName"
                            rules={[{ required: true, message: 'Currency Code is required' }]}>
                            <Input placeholder="Insert Company name" />
                        </Form.Item>
                        <Form.Item label="Application Name"
                            name="applicationName"
                            rules={[{ required: true, message: 'Application Name Code is required' }]}>
                            <Input />
                        </Form.Item>
                        <Form.Item label="Address"
                            name="address"
                            rules={[{ required: true, message: 'Address Code is required' }]}>
                            <Input />
                        </Form.Item>
                        <Form.Item label="PIC Name"
                            name="picName"
                            rules={[{ required: true, message: 'PIC Name Code is required' }]}>
                            <Input />
                        </Form.Item>
                        <Form.Item label="Telephone Number"
                            name="phoneNumber"
                            rules={[{ required: true, message: 'Telephone Number Code is required' }]}>
                            <Input />
                        </Form.Item>
                        <Form.Item label="Email"
                            name="email"
                            rules={[{ required: true, message: 'Email Code is required' }]}>
                            <Input />
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
                            <Button onClick={goBack} >
                                <div>Back</div>
                            </Button>
                        </Form.Item>
                    </Form>)
            }


        </div >
    )

}


export default ViewEditRegAts
