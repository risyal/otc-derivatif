import React from 'react'
import {
    Form,
    Input,
    Button,
} from 'antd';

function RegisterBeneficiaries() {
    const componentSize = 'middle';
    const formItemLayout = {
        labelCol: {
            xs: { span: 24 },
            sm: { span: 6 },
        },
        wrapperCol: {
            xs: { span: 24 },
            sm: { span: 16 },
        },
    };

    return (
        <div style={{ margin: '15px 20px' }}>
            <Form
                {...formItemLayout}
                size={componentSize}
                layout="horizontal"
                initialValues={{ size: componentSize }}
                labelAlign="left"
            >
                <Form.Item label="Participant ID " >
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
