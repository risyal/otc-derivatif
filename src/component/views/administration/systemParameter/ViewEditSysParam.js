import React, { useState, useMemo, useEffect } from 'react';
import {
    Form, Input, Button,
    Typography, Radio
} from 'antd';
import { Link } from "react-router-dom";

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
                labelCol: { span: 4 },
                wrapperCol: { span: 14 },
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
        wrapperCol: { offset: 8, span: 16 },
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
    return (
        <div>
             {/* <div className="head-content viewEdit">
                <Title level={4}>
                    <span className="icon-back">
                        <Link to="/systemparameter">
                            <ArrowLeftOutlined />
                        </Link>
                    </span>
                    {action} Parameter</Title>
            </div> */}
            <Form
                {...formItemLayout}
                layout={formLayout}
                form={form}
                initialValues={{ layout: formLayout }}
                onFinish={onFinish}
            >
                <Form.Item name="param" label="System Paramater">
                    <Input placeholder="System Paramater" />
                </Form.Item>
                <Form.Item name="value" label="Value">
                    <Input placeholder="Value" />
                </Form.Item>
                <Form.Item name="valueType" label="Value Type">
                    <Input placeholder="Value Type" />
                </Form.Item>
                <Form.Item name="note" label="Note">
                    <Input placeholder="Note" />
                </Form.Item>
                <Form.Item {...tailLayout}>

                    {action == "Edit" ? (
                        <Button type="primary" onClick={submitEdit} style={{ marginRight: '10px' }}>
                            Submit edit
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
