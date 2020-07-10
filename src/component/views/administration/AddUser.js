import React from 'react';
import {
    Form,
    Input,
    Button
} from 'antd';
import { Link } from 'react-router-dom';

function AddUser(){
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
                <Form.Item label="User ID">
                    <Input />
                </Form.Item>
                <Form.Item label="Member ID">
                    <Input />
                </Form.Item>
                <Form.Item label="Pincode">
                    <Input />
                </Form.Item>
                <Form.Item wrapperCol={{ span: 12, offset: 6 }}>
                    <Link to={{
                    pathname: `/usermanagement`}}>
                        <Button type="primary" htmlType="submit">
                            Submit
                        </Button>
                    </Link>
                </Form.Item>
            </Form>
        </div>
        
    )

}


export default AddUser