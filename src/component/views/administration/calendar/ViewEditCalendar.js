import React, { useState, useEffect, useCallback } from 'react'
import {
    Form,
    Input,
    Button,
    Radio,
    Typography,
    DatePicker,
    Spin,
    Space,
} from 'antd';
import {
    ArrowLeftOutlined
} from '@ant-design/icons';
import { useHistory } from "react-router-dom";
import moment from 'moment';
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

const ViewEditCalendar = (props) => {
    let history = useHistory()

    function goBack() {
        history.goBack()
    }

    const dateFormat = 'YYYY/MM/DD';
    const [todayDate] = useState(moment(new Date(), dateFormat));
    const [fieldDate, setFieldDate] = useState(todayDate);

    const [form] = Form.useForm();

    const onFinish = async () => {
        if (idx > 0) {
        setFieldDate(moment(form.getFieldValue("date"), dateFormat));   
        const bodyPut = ({
            date: fieldDate,
            information: form.getFieldValue("information"),
            note: form.getFieldValue("note"),
            status: "active",
            lastUpdate: null
        });
            await API("PUT", "administration", "calendarmarketholidays/" + idx, null, bodyPut)
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
            setFieldDate(moment(new Date(), dateFormat)); 
            const bodyPost = ({
                date: fieldDate,
                information: form.getFieldValue("information"),
                note: form.getFieldValue("note"),
                status: "active",
                lastUpdate: null
            });
            await API("POST", "administration", "calendarmarketholidays", null, bodyPost)
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

    const setCal = useCallback(async (idEdit) => {
        try {
            const req = await API("GET", "administration", "calendarmarketholidays/" + idEdit);
            const resJSON = await req.data
            setFieldDate(moment(resJSON.date, dateFormat));
            form.setFieldsValue({
                //date: resJSON.date,
                information: resJSON.information,
                lastUpdate: resJSON.lastUpdate,
                note: resJSON.note,
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
                    setCal(idx);
                }
            });
        }
        return (() => { ignore = true; });
    }, [idx, setCal]);

    return (
        <div>
            <div className="head-content viewEdit">
                <Title level={4}>
                    <span className="icon-back">
                            <ArrowLeftOutlined onClick={goBack}/>
                    </span>
                    {action} Calendar</Title>
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
                    </Form>
                )}

        </div>
    )
}


export default ViewEditCalendar
