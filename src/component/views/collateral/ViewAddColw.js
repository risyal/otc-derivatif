import React from 'react';
import {
    Form,
    Input,
    Button,
    Radio,
    DatePicker,
    Typography
} from 'antd';
import { useHistory } from 'react-router-dom';
import {
    ArrowLeftOutlined
} from '@ant-design/icons';

const { Title } = Typography;

function ViewAddColw() {
    let history = useHistory()

    function goBack() {
        history.goBack()
    }
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
            <div className="head-content viewDelete">
                <Title level={4}>
                    <span className="icon-back">
                        <ArrowLeftOutlined onClick={goBack} />
                    </span>
                    Add New Instruction </Title>
            </div>
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
                    <Button onClick={goBack} type="primary" htmlType="submit">
                        Submit
                        </Button>
                </Form.Item>
            </Form>
        </div>

    )

}


export default ViewAddColw