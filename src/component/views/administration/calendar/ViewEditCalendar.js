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
    const [componentSize] = useMemo(() => 'middle');
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
        axios.post(`http://localhost:8080/calendarmarketholidays`, {
            date: form.getFieldValue("date"),
            information: form.getFieldValue("information"),
            update: form.getFieldValue("update"),
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
        date: "test",
        information: null,
        update: null,
        note: null,
    });
    const tailLayout = {
        wrapperCol: { offset: 8, span: 16 },
    };

    const submitEdit = () => {
        axios.put(`http://localhost:8080/calendarmarketholidays/${idx}`, {
            date: form.getFieldValue("date"),
            information: form.getFieldValue("information"),
            update: form.getFieldValue("update"),
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
            form.setFieldsValue({
                date: resJSON.date,
                information: resJSON.information,
                update: resJSON.update,
                note: resJSON.note,
            });
            setLoading(false);
        }
    };
    useEffect(() => {
        setParams(props.location.state.id);
    }, []);

    const dateFormat = 'YYYY/MM/DD';

    return (
        <div>
            {/* <div className="head-content viewEdit">
                <Title level={4}>
                    <span className="icon-back">
                        <Link to="/calendar">
                            <ArrowLeftOutlined />
                        </Link>
                    </span>
                    {action} Calendar</Title>
            </div> */}
            <Form
                {...formItemLayout}
                // size={componentSize}
                layout={formLayout}
                form={form}
                initialValues={{ layout: formLayout }}
                onFinish={onFinish}
            >
                
                <Form.Item name="date" label="Date">
                    <DatePicker style={{ width: '100%' }}
                        defaultValue={moment('2020/07/31', dateFormat)}/>
                </Form.Item>
                <Form.Item name="information" label="Information">
                    <Input placeholder="Information"/>
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
