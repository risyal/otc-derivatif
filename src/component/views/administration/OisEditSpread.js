import React, { useState } from 'react'
import {
    Button,
    Checkbox,
    Form,
    Radio,
    Typography,
    InputNumber
} from 'antd';
import {
    ArrowLeftOutlined,
    PlusOutlined
} from '@ant-design/icons';
import { Link } from "react-router-dom";

const { Title } = Typography;

function OisEditSpread(){
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

    const [sixEyes, setSixEyes] = useState(1);
    const radioOnChange = e => {
        setSixEyes(e.target.value);
    }

    function onChange(value) {
        console.log('changed', value);
    }

    return (
        <div>
            <div className="head-content viewEdit">
                <Title level={4}>
                    <span className="icon-back">
                        <Link to="/registercontract">
                            <ArrowLeftOutlined />
                        </Link>
                    </span>
                    OIS - Edit Spread</Title>
            </div>

            <div style={{ margin: '15px 20px' }}>
                <Form
                    {...formItemLayout}
                    size={componentSize}
                    layout="horizontal"
                    initialValues={{ size: componentSize }}
                    labelAlign="left"
                >
                    <Form.Item label="Spread">
                        <InputNumber    min={0}
                                        defaultValue="0.12301"
                                        step={0.00001} 
                                        onChange={onChange}
                                        style={{ width: '100%' }} />
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
                            pathname: `/registercontract`}}>
                            <Button type="primary" htmlType="submit">
                                Submit
                            </Button>
                            <Button style={{ marginLeft: '15px' }}>
                                Back
                            </Button>
                        </Link>
                    </Form.Item>
                </Form>
            </div>
        </div>
    )

}


export default OisEditSpread