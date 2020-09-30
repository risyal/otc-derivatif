import React, { useState, useMemo, useEffect } from 'react'
import {
    Form,
    Input,
    Button,
    Radio,
    Typography,
    DatePicker,
} from 'antd';
import {
    ArrowLeftOutlined
} from '@ant-design/icons';
import { Link } from "react-router-dom";
import moment from 'moment';

import axios from 'axios';

const { Title } = Typography;

const ViewEditCalendar = (props) => {
    
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
            axios.put(`http://localhost:8080/calendarmarketholidays/${idx}`, {
            date: form.getFieldValue("date"),
            information: form.getFieldValue("information"),
            note: form.getFieldValue("note"),
            status: "active",
            lastUpdate: null
        })
            .then(res => {
                console.log(res);
                console.log(res.data);
                // form.resetFields();
            })
        } else {
            axios.post(`http://localhost:8080/calendarmarketholidays`, {
                date: fieldDate,
                information: form.getFieldValue("information"),
                note: form.getFieldValue("note"),
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
    const [sysparam, setSysParam] = useState({
        date: "test",
        information: null,
        lastUpdate: null,
        note: null,
    });
    const tailLayout = {
        wrapperCol: { offset: 6, span: 12 },
    };

    const submitEdit = () => {
        axios.put(`http://localhost:8080/calendarmarketholidays/${idx}`, {
            date: form.getFieldValue("date"),
            information: form.getFieldValue("information"),
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
                `http://localhost:8080/calendarmarketholidays/${q}`
            );
            const resJSON = await apiRes.json();
            console.log(resJSON);
            setFieldDate(resJSON.date);
            form.setFieldsValue({
                information: resJSON.information,
                lastUpdate: resJSON.lastUpdate,
                note: resJSON.note,
            });
            setLoading(false);
        }else{
            setFieldDate(moment(new Date(), dateFormat));
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
                        <Link to="/calendar">
                            <ArrowLeftOutlined />
                        </Link>
                    </span>
                    {action} Calendar</Title>
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
                <Form.Item name="date" label="Date"
                            rules={[{ required: true, message: 'Date is required' }]}>
                    <DatePicker
                        onChange={(date, dateString) => setFieldDate(dateString)} 
                        style={{ width: '100%' }}
                        defaultValue={fieldDate}/>
                </Form.Item>
                <Form.Item name="information" label="Information"
                            rules={[{ required: true, message: 'Information is required' }]}>
                    <Input placeholder="Information"/>
                </Form.Item>
                <Form.Item name="note" label="Note"
                            rules={[{ required: true, message: 'Note is required' }]}>
                    <Input placeholder="Note"/>
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
                    <Link to="/calendar">
                        <Button >
                            <div>Back</div>
                        </Button>
                    </Link>
                </Form.Item>
            </Form>

        </div>
    )
}


export default ViewEditCalendar
