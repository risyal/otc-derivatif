import React from 'react'
import {
    Form,
    Input,
    Button,
    Select,
    Radio,
    Typography
} from 'antd';
import {
    CaretLeftOutlined
} from '@ant-design/icons';
import { Link } from "react-router-dom";

const { Title } = Typography;
const { Option } = Select;

function EditRegisterContract() {
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
        <div>
            <Form
                {...formItemLayout}
                size={componentSize}
                layout="horizontal"
                initialValues={{ size: componentSize }}
                labelAlign="left"
                style={{ marginBottom: '80px' }}
            >
                <Form.Item label="Member ID">
                    <Input  />
                </Form.Item>
                <Form.Item label="SID/LEI">
                    <Input  />
                </Form.Item>
                <Form.Item label="Client Name">
                    <Input  />
                </Form.Item>
            </Form>
        </div>
    )
}


export default EditRegisterContract