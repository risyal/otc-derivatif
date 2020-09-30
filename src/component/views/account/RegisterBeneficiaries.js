import React, { useState, useMemo } from 'react'
import {
    Form,
    Input,
    Button,
    Typography
} from 'antd';
const { Title } = Typography;

function RegisterBeneficiaries() {
    const [componentSize] = useMemo(() => 'middle');
    const [formItemLayout] = useState ({
        labelCol: {
            xs: { span: 24 },
            sm: { span: 6 },
        },
        wrapperCol: {
            xs: { span: 24 },
            sm: { span: 16 },
        },
    });

    return (
        <div style={{ margin: '15px 20px' }}>
            <div className="head-content">
                <Title level={4}>Register Beneficiaries</Title>
            </div>
            <Form
                {...formItemLayout}
                size={componentSize}
                layout="horizontal"
                initialValues={{ size: componentSize }}
                labelAlign="left"
            >
                <Form.Item label="Beneficiary Name " >
                    <Input.Group compact >
                        <Input />
                    </Input.Group>
                </Form.Item>
                <Form.Item label="RTGS Acc Number" >
                    <Input.Group compact >
                        <Input />
                    </Input.Group>
                </Form.Item>
                <Form.Item label="SSSS Acc Number" >
                    <Input.Group compact >
                        <Input />
                    </Input.Group>
                </Form.Item>
                <Form.Item wrapperCol={{ span: 12, offset: 6 }}>
                    <Button type="primary" htmlType="submit">
                        Input
                    </Button>
                </Form.Item>
            </Form>
        </div>

    )

}

export default RegisterBeneficiaries
