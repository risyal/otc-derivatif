import React, { useState, useEffect } from 'react';
import {
    Form,
    Input,
    Button,
    Radio,
    DatePicker,
    Typography
} from 'antd';
import { useHistory } from "react-router-dom";
import {
    ArrowLeftOutlined
} from '@ant-design/icons';
import axios from 'axios';

const { Title } = Typography;
const ViewAdd = (props) => {
    const [form] = Form.useForm();
    const [formLayout, setFormLayout] = useState('horizontal');

    let history = useHistory()

    function goBack() {
        history.goBack()
    }

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
        axios.post(`http://localhost:8080/collateraltransactions`, {
            transactionType: "COLDP",
            memberId: form.getFieldValue("memberId"),
            sourceAccount: form.getFieldValue("sourceAccount"),
            sourceTarget: form.getFieldValue("sourceTarget"),
            instrumentCode: form.getFieldValue("instrumentCode"),
            value: form.getFieldValue("value"),
            settlementDate: form.getFieldValue("settlementDate"),
            remark: form.getFieldValue("remark"),
            status: "active",
            lastUpdate: null
        })
            .then(res => {
                console.log(res);
                console.log(res.data);
                form.resetFields();
            })
    };

    const tailLayout = {
        wrapperCol: { offset: 6, span: 12 },
    };
    const onReset = () => {
        form.resetFields();
    };

    const [sixEyes, setSixEyes] = useState(1);
    const radioOnChange = e => {
        setSixEyes(e.target.value);
    };

    return (
        <div>
            <div className="head-content viewDelete">
                 <Title level={4}>
                     <span className="icon-back">
                         <ArrowLeftOutlined onClick={goBack} />
                     </span>
                     Add New Instruction </Title>
             </div>

             <Form
                {...formItemLayout}
                layout={formLayout}
                form={form}
                labelAlign="left"
                initialValues={{ layout: formLayout }}
                onFinish={onFinish}
            >
                <Form.Item label="Participant Code" name="memberId">
                    <Input />
                </Form.Item>
                <Form.Item label="Source Account" name="sourceAccount">
                    <Input />
                </Form.Item>
                <Form.Item label="Dest Account" name="sourceTarget">
                    <Input />
                </Form.Item>
                <Form.Item label="Instrument Code" name="instrumentCode">
                    <Input />
                </Form.Item>
                <Form.Item label="Value" name="value">
                    <Input />
                </Form.Item>
                <Form.Item label="Settlement Date" name="settlementDate">
                    <DatePicker style={{ width: '100%' }} />
                </Form.Item>
                <Form.Item label="Remark" name="remark">
                    <Input />
                </Form.Item>

                <Form.Item wrapperCol={{ span: 12, offset: 6 }}>
                    <Button onClick={goBack} type="primary" htmlType="submit">
                        Submit
                    </Button>
                </Form.Item>
            </Form>
        </div>
    )
}

export default ViewAdd