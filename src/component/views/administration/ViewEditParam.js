import React, { useState } from 'react'
import {
    Form,
    Input,
    Button,
    Select,
    Radio,
    Typography,
    DatePicker
} from 'antd';
import {
    CaretLeftOutlined
} from '@ant-design/icons';
import { Link } from "react-router-dom";
import moment from 'moment';

const { Title } = Typography;
const { Option } = Select;


const ViewEditParam = (props) => {
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
    const data = [
        {
            key: '1',
            parameter: 'Trade Submission & Validation',
            startTime: '23-02-2020',
            endTime: '29-02-2020',
        },
        {
            key: '2',
            parameter: 'Settlement and Reconciliation',
            startTime: '23-02-2020',
            endTime: '29-02-2020',
        },
        {
            key: '3',
            parameter: 'Clearing Process',
            startTime: '23-02-2020',
            endTime: '29-02-2020',
        },
    ];
    const dataMemberById = data.find((member) => {
        return member.key === props.location.state.id
    })

    const action = props.location.state.action
    const disable = props.location.state.disable
    const [sixEyes, setSixEyes] = useState(1);
    const radioOnChange = e => {
        setSixEyes(e.target.value);
    };
    const dateFormat = 'YYYY/MM/DD';

    return (
        <div>
            <div className="head-content viewEdit">
                <Title level={4}>
                    <span className="icon-back">
                        <Link to="/editparameter">
                            <CaretLeftOutlined />
                        </Link>
                    </span>
                    {action} Parameter</Title>
            </div>
            <Form
                {...formItemLayout}
                size={componentSize}
                layout="horizontal"
                initialValues={{ size: componentSize }}
                labelAlign="left"
                style={{ marginBottom: '80px' }}
            >
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
                <Form.Item label="Parameter">
                    <Input disabled={disable} defaultValue={dataMemberById.parameter} />
                </Form.Item>
                <Form.Item label="Start Time">
                    <DatePicker style={{ width: '100%' }}
                        defaultValue={moment('2020/02/23', dateFormat)} />
                </Form.Item>
                <Form.Item label="End Time">
                    <DatePicker style={{ width: '100%' }}
                        defaultValue={moment('2020/02/29', dateFormat)} />
                </Form.Item>
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
