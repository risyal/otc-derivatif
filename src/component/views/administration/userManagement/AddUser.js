import React, { useState, useMemo } from 'react';
import {
    Form,
    Input,
    Button,
    Radio,
    Typography,
} from 'antd';
import { Link } from 'react-router-dom';
import {
    ArrowLeftOutlined
} from '@ant-design/icons';

const { Title } = Typography;

function AddUser(){
    const [componentSize] = useMemo(() => 'middle');
    const [formItemLayout] = useState({
        labelCol: {
            xs: { span: 24 },
            sm: { span: 6 },
        },
        wrapperCol: {
            xs: { span: 24 },
            sm: { span: 16 },
        },
    });

    const [sixEyes, setSixEyes] = useState(1);
    const radioOnChange = e => {
        setSixEyes(e.target.value);
    };

    return (
        <div style={{ margin: '15px 20px' }}>
            <div className="head-content viewEdit">
                <Title level={4}>
                    <span className="icon-back">
                        <Link to="/usermanagement">
                            <ArrowLeftOutlined />
                        </Link>
                    </span>
                Add New User</Title>
            </div>
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
                
                <Form.Item label="Role">
                    <Radio.Group onChange={radioOnChange} value={sixEyes}>
                        <Radio value={1}>Maker</Radio>
                        <Radio value={2}>Direct Checker</Radio>
                        <Radio value={3}>Direct Approver</Radio>
                    </Radio.Group>
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