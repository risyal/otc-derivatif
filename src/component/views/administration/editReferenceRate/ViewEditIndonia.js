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

const ViewEditIndonia = (props) => {
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
                value: form.getFieldValue("value"),
                status: "active",
                lastUpdate: null
            }); 
            await API("PUT", "administration", "referenceindonias/" + idx, null, bodyPut)
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
                    value: form.getFieldValue("value"),
                    status: "active",
                    lastUpdate: null
                });
                await API("POST", "administration", "referenceindonias", null, bodyPost)
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

    const setIndonia = useCallback(async (idEdit) => {
        try {
            const req = await API("GET", "administration", "referenceindonias/" + idEdit);
            const resJSON = await req.data
            setFieldDate(moment(resJSON.date, dateFormat));
            form.setFieldsValue({
                value: resJSON.value,
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
                    setIndonia(idx);
                }
            });
        }
        return (() => { ignore = true; });
    }, [idx, setIndonia]);

    return (
        <div>
            <div className="head-content viewEdit">
                <Title level={4}>
                    <span className="icon-back">
                        <ArrowLeftOutlined />
                    </span>
                {action} Reference Rate - Indonia </Title>
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
                                defaultValue={fieldDate}/>   
                        </Form.Item>
                        <Form.Item label="IndONIA (%)" name="value"
                                    rules={[{ required: true, message: 'Value is required' }]}>
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


export default ViewEditIndonia
