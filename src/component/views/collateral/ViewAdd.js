import React from 'react';
import {
    Form,
    Input,
    Button,
    Radio,
    DatePicker
} from 'antd';
import { Link } from 'react-router-dom';

function ViewAdd(){
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
                <Form.Item label="Participant Code" >
                    <Input />
                </Form.Item>
                <Form.Item label="Source Acc" >
                    <Input />
                </Form.Item>
                <Form.Item label="Dest Account" >
                    <Input />
                </Form.Item>
                <Form.Item label="Instrument Code" >
                    <Input />
                </Form.Item>
                <Form.Item label="Value" >
                    <Input />
                </Form.Item>
                <Form.Item label="Settlement Date" >
                    <DatePicker style={{ width: '100%' }} />
                </Form.Item>
                
                <Form.Item label="Role">
                    <Radio.Group>
                        <Radio value={1}>Maker</Radio>
                        <Radio value={2}>Direct Checker</Radio>
                        <Radio value={3}>Direct Approver</Radio>
                    </Radio.Group>
                </Form.Item>

                <Form.Item wrapperCol={{ span: 12, offset: 6 }}>
                    <Link to={{
                    pathname: `/collateralManagement/instructionColdp`}}>
                        <Button type="primary" htmlType="submit">
                            Submit
                        </Button>
                    </Link>
                </Form.Item>
            </Form>
        </div>
        
    )

}


export default ViewAdd