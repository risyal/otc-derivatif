import React, { useState, useMemo } from 'react'
import {
    Button,
    Checkbox,
    Form,
    Radio,
    Typography
} from 'antd';
import {
    ArrowLeftOutlined,
    PlusOutlined
} from '@ant-design/icons';
import { Link } from "react-router-dom";

const { Title } = Typography;

function OisEditContractTerm(){
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
                    OIS - Edit Contract Term</Title>
            </div>

            <div style={{ margin: '15px 20px' }}>
                <Form
                    {...formItemLayout}
                    size={componentSize}
                    layout="horizontal"
                    initialValues={{ size: componentSize }}
                    labelAlign="left"
                >
                    <Form.Item label="Contract Term">
                        <Checkbox defaultChecked>1W</Checkbox>
                        <Checkbox defaultChecked>1M</Checkbox>
                        <Checkbox defaultChecked>3M</Checkbox>
                        <br/>
                        <Checkbox defaultChecked>6M</Checkbox>
                        <Checkbox defaultChecked>9M</Checkbox>
                        <Checkbox defaultChecked>12M</Checkbox>
                        <br/>
                        <Button type="primary" icon={<PlusOutlined />} size="small" style={{ marginTop: '15px', paddingBottom: '15px'}} >
                            Add Contract Term
                        </Button>
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


export default OisEditContractTerm