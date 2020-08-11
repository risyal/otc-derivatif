import React, { useState, useMemo } from 'react'
import {
    Form,
    Input,
    Button,
    Radio,
    Typography,
    TimePicker, 
} from 'antd';
import {
    ArrowLeftOutlined
} from '@ant-design/icons';
import { Link } from "react-router-dom";
import moment from 'moment';

const { Title } = Typography;

const ViewEditParam = (props) => {
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
    
    const [data] = useState([
        {
            key: '1',
            parameter: 'Trade Submission & Validation',
            startTime: '12:08',
			endTime: '15:08',
        },
        {
            key: '2',
            parameter: 'Settlement and Reconciliation',
            startTime: '12:08',
			endTime: '15:08',
        },
        {
            key: '3',
            parameter: 'Clearing Process',
            startTime: '12:08',
			endTime: '15:08',
        },
    ]);

    const dataMemberById = data.find((member) => {
        return member.key === props.location.state.id
    })

    const action = props.location.state.action
    const disable = props.location.state.disable
    const [sixEyes, setSixEyes] = useState(1);
    const radioOnChange = e => {
        setSixEyes(e.target.value);
    };
    const format = 'HH:mm';

    return (
        <div>
            <div className="head-content viewEdit">
                <Title level={4}>
                    <span className="icon-back">
                        <Link to="/editparameter">
                            <ArrowLeftOutlined />
                        </Link>
                    </span>
                    {action} Time Parameter</Title>
            </div>
            <Form
                {...formItemLayout}
                size={componentSize}
                layout="horizontal"
                initialValues={{ size: componentSize }}
                labelAlign="left"
                style={{ marginBottom: '80px' }}
            >
                <Form.Item label="Parameter">
                    <Input disabled={disable} defaultValue={dataMemberById.parameter} />
                </Form.Item>
                <Form.Item label="Start Time">
                    <TimePicker
                        defaultValue={moment('12:08', format)}
                        format={format}
                        style={{ width: '100%' }}
                    />
                </Form.Item>
                <Form.Item label="End Time">
                    <TimePicker
                        defaultValue={moment('15:08', format)}
                        format={format}
                        style={{ width: '100%' }}
                    />
                </Form.Item>

                {!disable ? (<Form.Item label="Role">
                    <Radio.Group onChange={radioOnChange} value={sixEyes}>
                        <Radio value={1}>Maker</Radio>
                        <Radio value={2}>Direct Checker</Radio>
                        <Radio value={3}>Direct Approver</Radio>
                    </Radio.Group>
                </Form.Item>
                ) : (
                        <div></div>
                    )}
                    
                <Form.Item wrapperCol={{ span: 12, offset: 6 }}>
                    {!disable ? (<Link to="/editparameter">
                        <Button type="primary" htmlType="submit" style={{ marginRight: '15px' }}>
                            Submit
                        </Button>
                    </Link>
                    ) : (
                            <div></div>
                        )}
                    <Link to="/editparameter">
                        <Button >
                            {!disable ? (
                                <div>Cancel</div>
                            ) : (
                                    <div>Back</div>
                                )}
                        </Button>
                    </Link>
                </Form.Item>
            </Form>

        </div>
    )
}


export default ViewEditParam