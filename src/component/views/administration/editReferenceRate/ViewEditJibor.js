import React, { useState, useCallback, useEffect } from 'react'
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
import API from "../../../config/Api";
import moment from 'moment';

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

const ViewEditJibor = (props) => {
    let history = useHistory()

    function goBack() {
        history.goBack()
    }

    const dateFormat = 'YYYY/MM/DD';
    const [form] = Form.useForm();
    const [todayDate] = useState(moment(new Date(), dateFormat));
    const [fieldDate, setFieldDate] = useState(todayDate);

    const onFinish = async () => {
        if (idx > 0) {
        setFieldDate(moment(form.getFieldValue("date"), dateFormat));  
        const bodyPut = ({
            date: fieldDate,
            rate1w: form.getFieldValue("rate1w"),
            rate1m: form.getFieldValue("rate1m"),
            rate3m: form.getFieldValue("rate3m"),
            rate6m: form.getFieldValue("rate6m"),
            rate12m: form.getFieldValue("rate12m"),
            status: "active",
            lastUpdate: null
        }); 
        await API("PUT", "administration", "referencejibors/" + idx, null, bodyPut)
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
                rate1w: form.getFieldValue("rate1w"),
                rate1m: form.getFieldValue("rate1m"),
                rate3m: form.getFieldValue("rate3m"),
                rate6m: form.getFieldValue("rate6m"),
                rate12m: form.getFieldValue("rate12m"),
                status: "active",
                lastUpdate: null
            });
            await API("POST", "administration", "referencejibors", null, bodyPost)
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
    const [error, setError] = useState({});
    const [loading, setLoading] = useState(false);
    const onReset = () => {
        form.resetFields();
    };
    const [sixEyes, setSixEyes] = useState(1);
    const radioOnChange = e => {
        setSixEyes(e.target.value);
    };
    
    const setJibor = useCallback(async (idEdit) => {
        try {
            const req = await API("GET", "administration", "referencejibors/" + idEdit);
            const resJSON = await req.data
            setFieldDate(moment(resJSON.date, dateFormat));
            form.setFieldsValue({
                rate1w: resJSON.rate1w,
                rate1m: resJSON.rate1m,
                rate3m: resJSON.rate3m,
                rate6m: resJSON.rate6m,
                rate12m: resJSON.rate12m,
                lastUpdate: resJSON.lastUpdate,
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
                    setJibor(idx);
                }
            });
        }
        return (() => { ignore = true; });
    }, [idx, setJibor]);

    return (
        <div>
            <div className="head-content viewEdit">
                <Title level={4}>
                    <span className="icon-back">
                       <ArrowLeftOutlined onClick={goBack}/>
                    </span>
                {action} Reference Rate - Jibor </Title>
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
                    >
                        <Form.Item label="Date" name="date"
                                    rules={[{ required: true, message: 'Date is required' }]}>
                            <DatePicker 
                                onChange={(date, dateString) => setFieldDate(dateString)} 
                                style={{ width: '100%' }}
                                defaultValue={fieldDate}
                            />   
                        </Form.Item>
                        <Form.Item label="1 Week" name="rate1w"
                                    rules={[{ required: true, message: 'Value 1 Week is required' }]}>
                            <Input placeholder="Insert Value" />
                        </Form.Item>
                        <Form.Item label="1 Month" name="rate1m"
                                    rules={[{ required: true, message: 'Value 1 Month is required' }]}>
                            <Input placeholder="Insert Value" />
                        </Form.Item>
                        <Form.Item label="3 Months" name="rate3m"
                                    rules={[{ required: true, message: 'Value 3 Months is required' }]}>
                            <Input placeholder="Insert Value" />
                        </Form.Item>
                        <Form.Item label="6 Months" name="rate6m"
                                    rules={[{ required: true, message: 'Value 6 Months is required' }]}>
                            <Input placeholder="Insert Value" />
                        </Form.Item>
                        <Form.Item label="12 Months" name="rate12m"
                                    rules={[{ required: true, message: 'Value 12 Months is required' }]}>
                            <Input placeholder="Insert Value" />
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
                )
            }

        </div>
    )
}


export default ViewEditJibor
