import React from 'react';
import {
    Form,
    Input,
    Button
} from 'antd';

function RegisterAts(){
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
                <Form.Item label=" Company Name">
                    <Input />
                </Form.Item>
                <Form.Item label="Address">
                    <Input />
                </Form.Item>
                <Form.Item label="PIC Name">
                    <Input />
                </Form.Item>
                <Form.Item label="Telephone Number">
                    <Input />
                </Form.Item>
                <Form.Item label="Email">
                    <Input />
                </Form.Item>
                <Form.Item wrapperCol={{ span: 12, offset: 6 }}>
                    <Button type="primary" htmlType="submit">
                        Submit
                    </Button>
                </Form.Item>
            </Form>
        </div>
        
    )

}


export default RegisterAts