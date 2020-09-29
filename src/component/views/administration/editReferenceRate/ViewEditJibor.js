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
import { Link } from "react-router-dom";
import moment from 'moment';

import axios from 'axios';

const { Title } = Typography;

const ViewEditJibor = (props) => {
    const dateFormat = 'YYYY/MM/DD';
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

    const onFinish = values => {
        console.log('test==',form.getFieldValue("date"))
        console.log('date==',fieldDate)
        if (idx > 0) {
            axios.put(`http://localhost:8080/referencejibors/${idx}`, {
            date: form.getFieldValue("date"),
            rate1w: form.getFieldValue("rate1w"),
            rate1m: form.getFieldValue("rate1m"),
            rate3m: form.getFieldValue("rate3m"),
            rate6m: form.getFieldValue("rate6m"),
            rate12m: form.getFieldValue("rate12m"),
            status: "active",
            lastUpdate: null
        })
            .then(res => {
                console.log(res);
                console.log(res.data);
                // form.resetFields();
            })
        } else {
            axios.post(`http://localhost:8080/referencejibors`, {
                date: fieldDate,
                rate1w: form.getFieldValue("rate1w"),
                rate1m: form.getFieldValue("rate1m"),
                rate3m: form.getFieldValue("rate3m"),
                rate6m: form.getFieldValue("rate6m"),
                rate12m: form.getFieldValue("rate12m"),
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
        axios.put(`http://localhost:8080/referencejibors/${idx}`, {
            date: form.getFieldValue("date"),
            rate1w: form.getFieldValue("rate1w"),
            rate1m: form.getFieldValue("rate1m"),
            rate3m: form.getFieldValue("rate3m"),
            rate6m: form.getFieldValue("rate6m"),
            rate12m: form.getFieldValue("rate12m"),
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
                `http://localhost:8080/referencejibors/${q}`
            );
            const resJSON = await apiRes.json();
            console.log(resJSON);
            setFieldDate(resJSON.date);
            form.setFieldsValue({
                rate1w: resJSON.rate1w,
                rate1m: resJSON.rate1m,
                rate3m: resJSON.rate3m,
                rate6m: resJSON.rate6m,
                rate12m: resJSON.rate12m,
                lastUpdate: resJSON.lastUpdate,
            });
            setLoading(false);
        }else{
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
                {action} Reference Rate - Jibor </Title>
            </div>
            <Form
                {...formItemLayout}
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
                        defaultValue={fieldDate}
                    />   
                </Form.Item>
                <Form.Item label="1 Week" name="rate1w">
                    <Input placeholder="Insert Value" />
                </Form.Item>
                <Form.Item label="1 Month" name="rate1m">
                    <Input placeholder="Insert Value" />
                </Form.Item>
                <Form.Item label="3 Months" name="rate3m">
                    <Input placeholder="Insert Value" />
                </Form.Item>
                <Form.Item label="6 Months" name="rate6m">
                    <Input placeholder="Insert Value" />
                </Form.Item>
                <Form.Item label="12 Months" name="rate12m">
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
                    <Button type="primary" htmlType="submit" style={{ marginRight: '10px' }}>
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


export default ViewEditJibor
