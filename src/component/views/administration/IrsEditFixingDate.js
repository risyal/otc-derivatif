import React, { useState } from 'react'
import {
    Button,
    Checkbox,
    Form,
    Radio,
    Typography,
    Input
} from 'antd';
import {
    ArrowLeftOutlined,
    PlusOutlined
} from '@ant-design/icons';
import { Link } from "react-router-dom";

const { Title } = Typography;

function IrsEditFixingDate(){
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

    return (
        <div>
            <div className="head-content viewEdit">
                <Title level={4}>
                    <span className="icon-back">
                        <Link to="/registercontract">
                            <ArrowLeftOutlined />
                        </Link>
                    </span>
                    IRS - Edit Valuation/Fixing Date</Title>
            </div>

            <div style={{ margin: '15px 20px' }}>
                <Form
                    {...formItemLayout}
                    size={componentSize}
                    layout="horizontal"
                    initialValues={{ size: componentSize }}
                    labelAlign="left"
                >
                    <Form.Item label="Number">
                        <Input defaultValue="-2"/>
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


export default IrsEditFixingDate