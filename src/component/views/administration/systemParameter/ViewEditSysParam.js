import React, { useState, useMemo, useEffect } from 'react';
import {
    Form, Input, Button,
    Typography, Radio
} from 'antd';
import { Link } from "react-router-dom";
import {
    ArrowLeftOutlined
} from '@ant-design/icons';

import axios from 'axios';

const { Title } = Typography;
const ViewEditSysParam = (props) => {
    const [form] = Form.useForm();
    const [formLayout, setFormLayout] = useState('horizontal');

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
        axios.post(`http://localhost:8080/sysparams`, {
            param: form.getFieldValue("param"),
            value: form.getFieldValue("value"),
            valueType: form.getFieldValue("valueType"),
            note: form.getFieldValue("note"),
            status: "active",
            lastUpdate: null
        })
            .then(res => {
                console.log(res);
                console.log(res.data);
                form.resetFields();
            })
    };
    const [action] = useState(props.location.state.action);
    const [idx] = useState(props.location.state.id);
    const [loading, setLoading] = useState(false);
    const [sysparam, setSysParam] = useState({
        param: "test",
        value: null,
        valueType: null,
        note: null,
    });
    const tailLayout = {
        wrapperCol: { offset: 6, span: 12 },
    };
    const submitEdit = () => {
        axios.put(`http://localhost:8080/sysparams/${idx}`, {
            param: form.getFieldValue("param"),
            value: form.getFieldValue("value"),
            valueType: form.getFieldValue("valueType"),
            note: form.getFieldValue("note"),
            status: "active",
            lastUpdate: null
        })
            .then(res => {
                console.log(res);
                console.log(res.data);
                form.resetFields();
            })
    };
    const onReset = () => {
        form.resetFields();
    };
    const setParams = async (q) => {
        if (q > 0) {
            console.log("edit" + q)
            setLoading(true);
            const apiRes = await fetch(
                `http://localhost:8080/sysparams/${q}`
            );
            const resJSON = await apiRes.json();
            console.log(resJSON);
            form.setFieldsValue({
                param: resJSON.param,
                value: resJSON.value,
                valueType: resJSON.valueType,
                note: resJSON.note,
            });
            setLoading(false);
        }

    };
    useEffect(() => {
        setParams(props.location.state.id);
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
                        <Link to="/systemparameter">
                            <ArrowLeftOutlined />
                        </Link>
                    </span>
                    {action} Parameter</Title>
            </div>
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
                    {action == "Edit" ? (
                        <Button type="primary" onClick={submitEdit} style={{ marginRight: '10px' }}>
                            Submitedit
                        </Button>
                    ) : (
                            <Button type="primary" htmlType="submit" style={{ marginRight: '10px' }}>
                                Submit
                            </Button>
                        )
                    }
                        <Button htmlType="button" onClick={onReset} style={{ marginRight: '10px' }}>
                            Reset
                        </Button>
                    <Link to="/systemparameter">
                        <Button >
                            <div>Back</div>
                        </Button>
                    </Link>
                </Form.Item>
            </Form>

        </div>
    )

}

export default ViewEditSysParam
