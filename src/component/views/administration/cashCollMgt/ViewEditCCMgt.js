import React, { useState, useCallback, useEffect } from 'react';
import {
    Form,
    Input,
    Button,
    Radio,
    Typography,
    Select,
    Spin,
    Space,
} from 'antd';
import {
    ArrowLeftOutlined
} from '@ant-design/icons';
import { useHistory } from "react-router-dom";
import API from "../../../config/Api";

const { Title } = Typography;
const { Option } = Select;
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

const ViewEditCCMgt = (props) => {
    let history = useHistory()

    function goBack() {
        history.goBack()
    }

    const [form] = Form.useForm();
   
    const onFinish = async () => {
        var egl = "true";
        const bodyPost = ({
            currencyCode: form.getFieldValue("currencyCode"),
            currencyName: form.getFieldValue("currencyName"),
            eligibility: form.getFieldValue("eligibility"),
            haircut: form.getFieldValue("haircut"),
            status: "active",
            lastUpdate: null
        });
        if (idx > 0) {
            await API("PUT", "administration", "cashcollateralmanagements/" + idx, null, bodyPost)
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
            await API("POST", "administration", "cashcollateralmanagements", null, bodyPost)
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

    const setCashCollMgt = useCallback(async (idEdit) => {
        try {
            const req = await API("GET", "administration", "cashcollateralmanagements/" + idEdit);
            const resJSON = await req.data
            form.setFieldsValue({
                currencyCode: resJSON.currencyCode,
                currencyName: resJSON.currencyName,
                eligibility: resJSON.eligibility,
                haircut: resJSON.haircut,
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
                    setCashCollMgt(idx);
                }
            });
        }
        return (() => { ignore = true; });
    }, [idx, setCashCollMgt]);   

    return (
        <div>
            <div className="head-content viewEdit">
                <Title level={4}>
                    <span className="icon-back">
                            <ArrowLeftOutlined onClick={goBack}/>
                    </span>
                    {action} Data Currency</Title>
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
                            <Button onClick={goBack} >
                                <div>Back</div>
                            </Button>
                        </Form.Item>
                    </Form>
                )
            }

        </div>
    )

}


export default ViewEditCCMgt
