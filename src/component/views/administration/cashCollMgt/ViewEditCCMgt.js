import React, { useState, useMemo, useEffect } from 'react';
import {
    Form,
    Input,
    Button,
    Radio,
    Typography,
    Select
} from 'antd';
import {
    ArrowLeftOutlined
} from '@ant-design/icons';
import { Link } from "react-router-dom";

import axios from 'axios';

const { Title } = Typography;
const { Option } = Select;

const ViewEditCCMgt = (props) => {
    const [form] = Form.useForm();
    const [formLayout, setFormLayout] = useState('horizontal');
    const [elig, setElig] = useState('true');

    const onFormLayoutChange = ({ layout }) => {
        setFormLayout(layout);
    };

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
            axios.put(`http://localhost:8080/cashcollateralmanagements/${idx}`, {
                currencyCode: form.getFieldValue("currencyCode"),
                currencyName: form.getFieldValue("currencyName"),
                eligibility: form.getFieldValue("eligibility"),
                haircut: form.getFieldValue("haircut"),
                status: "active",
                lastUpdate: null
            })
                .then(res => {
                    form.resetFields();
                })

        } else {
            axios.post(`http://localhost:8080/cashcollateralmanagements`, {
                currencyCode: form.getFieldValue("currencyCode"),
                currencyName: form.getFieldValue("currencyName"),
                eligibility: values.eligibility,
                haircut: form.getFieldValue("haircut"),
                status: "active",
                lastUpdate: null
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
    const setParams = async (q) => {
        if (q > 0) {
            console.log("edit" + q)
            setLoading(true);
            const apiRes = await fetch(
                `http://localhost:8080/cashcollateralmanagements/${q}`
            );
            const resJSON = await apiRes.json();
            console.log("asdasd" + resJSON.currencyCode);
            form.setFieldsValue({
                currencyCode: resJSON.currencyCode,
                currencyName: resJSON.currencyName,
                eligibility: resJSON.eligibility,
                haircut: resJSON.haircut,
            });
            setLoading(false);
        }

    };
    useEffect(() => {
        setParams(props.location.state.id);
    }, []);

    return (
        <div>
            <div className="head-content viewEdit">
                <Title level={4}>
                    <span className="icon-back">
                        <Link to="/cashcollmgt">
                            <ArrowLeftOutlined />
                        </Link>
                    </span>
                    {action} Data Currency</Title>
            </div>
            <Form
                {...formItemLayout}
                layout={formLayout}
                form={form}
                labelAlign="left"
                initialValues={{ layout: formLayout }}
                onFinish={onFinish}
            >
                <Form.Item label="Currency Code" 
                            name="currencyCode"
                            rules={[{ required: true, message: 'Currency Code is required' }]}>
                    <Input placeholder="Insert Code" />
                </Form.Item>
                <Form.Item label="Currency Name" name="currencyName"
                    rules={[{ required: true, message: 'Currency Name is required' }]}>
                    <Input placeholder="Insert Name" />
                </Form.Item>
                <Form.Item label="Eligibility">
                    <Input.Group compact>
                        <Form.Item
                            name={['eligibility']}
                            noStyle
                            rules={[{ required: true, message: 'Eligibility is required' }]}
                        >
                            <Select placeholder="Select Eligibility" style={{ width: '100%' }}
                            >
                                <Option value="true">Yes</Option>
                                <Option value="false">No</Option>
                            </Select>
                        </Form.Item>
                    </Input.Group>
                </Form.Item>
                <Form.Item label="Haircut" name="haircut"
                    rules={[{ required: true, message: 'Haircut is required' }]}>
                    <Input placeholder="Insert Haircut" />
                </Form.Item>

                <Form.Item {...tailLayout}>
                    <Button type="primary" htmlType="submit" style={{ marginRight: '10px' }}>
                        Submit
                            </Button>
                    <Button htmlType="button" onClick={onReset} style={{ marginRight: '10px' }}>
                        Reset
                    </Button>
                    <Link to="/cashcollmgt">
                        <Button >
                            <div>Back</div>
                        </Button>
                    </Link>
                </Form.Item>
            </Form>

        </div>
    )

}


export default ViewEditCCMgt
