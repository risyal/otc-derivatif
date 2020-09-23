import React, { useState, useMemo, useEffect } from 'react';
import {
    Form,
    Input,
    Button,
    Radio,
    Typography,
    DatePicker,
    Select
} from 'antd';
import {
    ArrowLeftOutlined
} from '@ant-design/icons';
import { Link } from "react-router-dom";
import moment from 'moment';

import axios from 'axios';

const { Title } = Typography;    
const { Option } = Select;

const ViewEditSCMgt = (props) => {
    const dateFormat = 'YYYY/MM/DD';
    const [form] = Form.useForm();
    const [formLayout, setFormLayout] = useState('horizontal');
    const [elig, setElig] = useState('true');
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
        var eg1 = "true";
        if (idx > 0) {
            axios.put(`http://localhost:8080/securitiescollateralmanagements/${idx}`, {
                instrumentCode: form.getFieldValue("instrumentCode"),
                instrumentName: form.getFieldValue("instrumentName"),
                instrumentType: form.getFieldValue("instrumentType"),
                eligibility: form.getFieldValue("eligibility"),
                haircut: form.getFieldValue("haircut"),
                maturityDate: form.getFieldValue("maturityDate"),
                status: "active",
                lastUpdate: null
            })
                .then(res => {
                    console.log(res);
                    console.log(res.data);
                })
        } else {
            axios.post(`http://localhost:8080/securitiescollateralmanagements`, {
                instrumentCode: form.getFieldValue("instrumentCode"),
                instrumentName: form.getFieldValue("instrumentName"),
                instrumentType: form.getFieldValue("instrumentType"),
                eligibility: form.getFieldValue("eligibility"),
                haircut: form.getFieldValue("haircut"),
                maturityDate: fieldDate,
                status: "active",
                lastUpdate: null
            })
                .then(res => {
                    console.log(res);
                    console.log(res.data);
                })
            }

    }

    const [action] = useState(props.location.state.action);
    const [idx] = useState(props.location.state.id);
    const [loading, setLoading] = useState(false);
    const tailLayout = {
        wrapperCol: { offset: 6, span: 12 },
    };

    const onReset = () => {
        form.resetFields();
    };

    const setParams = async (q) => {
        if (q > 0) {
            console.log("edit" + q)
            setLoading(true);
            const apiRes = await fetch(
                `http://localhost:8080/securitiescollateralmanagements/${q}`
            );
            const resJSON = await apiRes.json();
            console.log("asdasd" + resJSON.maturityDate);
            setFieldDate(moment(resJSON.maturityDate, dateFormat));
            form.setFieldsValue({
                instrumentCode: resJSON.instrumentCode,
                instrumentName: resJSON.instrumentName,
                instrumentType: resJSON.instrumentType,
                eligibility: resJSON.eligibility,
                haircut: resJSON.haircut,
                // maturityDate: fieldDate,
            });
            setLoading(false);
        } else {
            setFieldDate(moment(new Date(), dateFormat));
        }

    };
    useEffect(() => {
        setParams(props.location.state.id);
    }, []);

    return(
        <div>
            <div className="head-content viewEdit">
                <Title level={4}>
                    <span className="icon-back">
                        <Link to="/securitiescollmgt">
                            <ArrowLeftOutlined />
                        </Link>
                    </span>
                {action} Instrument</Title>
            </div>
            <Form
                {...formItemLayout}
                layout={formLayout}
                form={form}
                labelAlign="left"
                initialValues={{ layout: formLayout }}
                onFinish={onFinish}
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
                    <Link to="/securitiescollmgt">
                        <Button >
                            <div>Back</div>
                        </Button>
                    </Link>
            
                </Form.Item>
            </Form>

        </div>
    )

}


export default ViewEditSCMgt
