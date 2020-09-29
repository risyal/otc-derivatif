import React, { useState, useMemo, useEffect } from 'react'
import {
    Form,
    Input,
    Button,
    Radio,
    Typography,
    DatePicker
} from 'antd';
import {
    ArrowLeftOutlined
} from '@ant-design/icons';
import { Link, useHistory } from "react-router-dom";
import moment from 'moment';

import axios from 'axios';

const { Title } = Typography;

const ViewEditJisdor = (props) => {
    let dateFormat = 'YYYY/MM/DD';
    let history = useHistory();
    const [submitLoading, setSubmitLoading] = useState(false);
    const [componentSize] = useMemo(() => 'middle');
    const [form] = Form.useForm();
    const [formLayout, setFormLayout] = useState('horizontal');
    const [todayDate] = useState(moment(new Date(), dateFormat));
    const [fieldDate, setFieldDate] = useState(todayDate);

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

    const onFinish = async values => {
        console.log('test==', form.getFieldValue("date"))
        console.log('date==', fieldDate)
        if (idx > 0) {
            await axios.put(`http://localhost:8080/referencejisdors/${idx}`, {
                date: form.getFieldValue("date"),
                value: form.getFieldValue("value"),
                status: "active",
                lastUpdate: null
            })
                .then(res => {
                    console.log(res);
                    console.log(res.data);
                    // form.resetFields();
                });
            history.push('/editreferencerate');
        } else {
            axios.post(`http://localhost:8080/referencejisdors`, {
                date: fieldDate,
                value: form.getFieldValue("value"),
                status: "active",
                lastUpdate: null
            })
                .then(res => {
                    console.log(res);
                    console.log(res.data);
                    // form.resetFields();
                })
        }
    };

    const [action] = useState(props.location.state.action);
    const [idx] = useState(props.location.state.id);
    const [loading, setLoading] = useState(false);
    const tailLayout = {
        wrapperCol: { offset: 6, span: 12 },
    };

    const submitEdit = () => {
        axios.put(`http://localhost:8080/referencejisdors/${idx}`, {
            date: form.getFieldValue("date"),
            value: form.getFieldValue("value"),
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
                `http://localhost:8080/referencejisdors/${q}`
            );
            const resJSON = await apiRes.json();
            console.log(resJSON);
            setFieldDate(resJSON.date);
            form.setFieldsValue({
                value: resJSON.value,
                lastUpdate: resJSON.lastUpdate,
            });
            setLoading(false);
        } else {
            setFieldDate(moment(new Date(), dateFormat));
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
                        <Link to="/editreferencerate">
                            <ArrowLeftOutlined />
                        </Link>
                    </span>
                    {action} Reference Rate - Jisdor </Title>
            </div>
            <Form
                {...formItemLayout}
                // size={componentSize}
                layout={formLayout}
                form={form}
                labelAlign="left"
                initialValues={{ layout: formLayout }}
                onFinish={onFinish}
            >
                <Form.Item label="Date" name="date">
                    <DatePicker
                        onChange={(date, dateString) => setFieldDate(dateString)}
                        style={{ width: '100%' }}
                        defaultValue={fieldDate} />
                </Form.Item>
                <Form.Item label="Value" name="value">
                    <Input placeholder="Insert Value" />
                </Form.Item>

                {/* {!disable ? (<Form.Item label="Role">
                    <Radio.Group onChange={radioOnChange} value={sixEyes}>
                        <Radio value={1}>Maker</Radio>
                        <Radio value={2}>Direct Checker</Radio>
                        <Radio value={3}>Direct Approver</Radio>
                    </Radio.Group>
                </Form.Item>
                ) : (
                        <div></div>
                    )} */}

                <Form.Item {...tailLayout}>
                    <Button type="primary" htmlType="submit"
                        loading={submitLoading}
                        onClick={() => setSubmitLoading(true)}
                        style={{ marginRight: '10px' }}>
                        Submit
                            </Button>
                    <Button htmlType="button" onClick={onReset} style={{ marginRight: '10px' }}>
                        Reset
                    </Button>
                    <Link to="/editreferencerate">
                        <Button >
                            <div>Back</div>
                        </Button>
                    </Link>
                </Form.Item>
            </Form>

        </div>
    )
}


export default ViewEditJisdor
