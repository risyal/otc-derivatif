import React, { useState, useEffect } from 'react';
import {
    Form,
    Input,
    Button,
    Radio,
    Typography,
} from 'antd';
import {
    ArrowLeftOutlined
} from '@ant-design/icons';
import { Link } from "react-router-dom";

import axios from 'axios';

const { Title } = Typography;

const ViewEditRegAts = (props) => {
    const [form] = Form.useForm();
    const [formLayout, setFormLayout] = useState('horizontal');
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
    const onFinish = values => {

        console.log('Received values of form: ', values);
        console.log('idnya: ', idx);
        console.log('Received eli of form: ', values.eligibility);
        var egl = "true";
        console.log("eg" + egl);
        console.log('asd', form.getFieldValue("eligibility"));
        if (idx > 0) {
            axios.put(`http://localhost:8080/registeratss/${idx}`, {
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
            })
                .then(res => {
                    form.resetFields();
                })

        } else {
            axios.post(`http://localhost:8080/registeratss`, {
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
            })
                .then(res => {
                    form.resetFields();
                })
        }

    };
    const [action] = useState(props.location.state.action);
    const [idx] = useState(props.location.state.id);
    const [loading, setLoading] = useState(false);
    const tailLayout = {
        wrapperCol: { offset: 6, span: 12 },
    };
    const onReset = () => {
        form.resetFields();
    };
    const setRegAts = async (q) => {
        if (q > 0) {
            console.log("edit" + q)
            setLoading(true);
            const apiRes = await fetch(
                `http://localhost:8080/registeratss/${q}`
            );
            const resJSON = await apiRes.json();
            console.log("asdasd", resJSON.companyInfo.address);
            form.setFieldsValue({
                companyName: resJSON.companyName,
                applicationName: resJSON.applicationName,
                address: resJSON.companyInfo.address,
                picName: resJSON.companyInfo.picName,
                phoneNumber: resJSON.companyInfo.phoneNumber,
                email: resJSON.companyInfo.email,
            });
            setLoading(false);
        }

    };
    useEffect(() => {
        if (props.location.state.id > 0) {
            setRegAts(props.location.state.id);
        }
    }, []);
    const disable = props.location.state.disable
    const [sixEyes, setSixEyes] = useState(1);
    const radioOnChange = e => {
        setSixEyes(e.target.value);
    };
    return (
        <div>
            <div className="head-content viewEdit">
                <Title level={4}>
                    <span className="icon-back">
                        <Link to="/registerats">
                            <ArrowLeftOutlined />
                        </Link>
                    </span>
                    {action} ATS</Title>
            </div>
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

                {!disable ? (<Form.Item label="Role">
                    <Radio.Group onChange={radioOnChange} value={sixEyes}>
                        <Radio value={1}>Maker</Radio>
                        <Radio value={2}>Direct Checker</Radio>
                        <Radio value={3}>Direct Approver</Radio>
                    </Radio.Group>
                </Form.Item>

                ) : (
                        <div></div>
                    )}
                <Form.Item {...tailLayout}>
                    <Button type="primary" htmlType="submit" style={{ marginRight: '10px' }}>
                        Submit
                            </Button>
                    <Button htmlType="button" onClick={onReset} style={{ marginRight: '10px' }}>
                        Reset
                    </Button>
                    <Link to="/registerats">
                        <Button >
                            <div>Back</div>
                        </Button>
                    </Link>
                </Form.Item>
            </Form>

        </div>
    )

}


export default ViewEditRegAts
