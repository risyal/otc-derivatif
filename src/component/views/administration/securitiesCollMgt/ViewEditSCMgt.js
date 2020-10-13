import React, { useState, useCallback, useEffect } from 'react';
import {
    Form,
    Input,
    Button,
    Radio,
    Typography,
    DatePicker,
    Spin,
    Space,
    Select
} from 'antd';
import {
    ArrowLeftOutlined
} from '@ant-design/icons';
import { useHistory } from "react-router-dom";
import API from "../../../config/Api";
import moment from 'moment';

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

const ViewEditSCMgt = (props) => {
    let history = useHistory()

    function goBack() {
        history.goBack()
    }
    const dateFormat = 'YYYY/MM/DD';
    const [form] = Form.useForm();

    const [todayDate] = useState(moment(new Date(), dateFormat));
    const [fieldDate, setFieldDate] = useState(todayDate);

    const onFinish = async () => {
        var eg1 = "true";
        if (idx > 0) {
            setFieldDate(moment(form.getFieldValue("date"), dateFormat));
            const bodyPut = ({
                instrumentCode: form.getFieldValue("instrumentCode"),
                instrumentName: form.getFieldValue("instrumentName"),
                instrumentType: form.getFieldValue("instrumentType"),
                eligibility: form.getFieldValue("eligibility"),
                haircut: form.getFieldValue("haircut"),
                maturityDate:  fieldDate,
                status: "active",
                lastUpdate: null
            });
            await API("PUT", "administration", "securitiescollateralmanagements/" + idx, null, bodyPut)
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
                instrumentCode: form.getFieldValue("instrumentCode"),
                instrumentName: form.getFieldValue("instrumentName"),
                instrumentType: form.getFieldValue("instrumentType"),
                eligibility: form.getFieldValue("eligibility"),
                haircut: form.getFieldValue("haircut"),
                maturityDate: fieldDate,
                status: "active",
                lastUpdate: null
            });
            await API("POST", "administration", "securitiescollateralmanagements", null, bodyPost)
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

    const setSecCollMgt = useCallback(async (idEdit) => {
        try {
            const req = await API("GET", "administration", "securitiescollateralmanagements/" + idEdit);
            const resJSON = await req.data
            setFieldDate(moment(resJSON.maturityDate, dateFormat));
            form.setFieldsValue({
                instrumentCode: resJSON.instrumentCode,
                instrumentName: resJSON.instrumentName,
                instrumentType: resJSON.instrumentType,
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
                    setSecCollMgt(idx);
                }
            });
        }
        return (() => { ignore = true; });
    }, [idx, setSecCollMgt]);
   

    return(
        <div>
            <div className="head-content viewEdit">
                <Title level={4}>
                    <span className="icon-back">
                        <ArrowLeftOutlined onClick={goBack}/>
                    </span>
                {action} Instrument</Title>
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
                        <Form.Item label="Instrument Code" name="instrumentCode"
                                    rules={[{ required: true, message: 'Instrument Code is required' }]}>
                            <Input placeholder="Insert Code" />
                        </Form.Item>
                        <Form.Item label="Instrument Name" name="instrumentName"
                                    rules={[{ required: true, message: 'Instrument Name is required' }]}>
                            <Input placeholder="Insert Name" />
                        </Form.Item>
                        <Form.Item label="Instrument Type" name="instrumentType"
                                    rules={[{ required: true, message: 'Instrument Type is required' }]}>
                            <Input placeholder="Insert Type" />
                        </Form.Item>
                        <Form.Item label="Eligibity">
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
                        <Form.Item label="Maturity Date" name="maturityDate">
                            <DatePicker onChange={(date, dateString) => setFieldDate(dateString)} 
                                style={{ width: '100%' }}
                                defaultValue={fieldDate}/>
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


export default ViewEditSCMgt
