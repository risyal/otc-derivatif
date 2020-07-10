import React, { useState } from 'react'
import {
    Form,
    Popconfirm,
    Button,
    Radio,
    Typography
} from 'antd';
import {
    CaretLeftOutlined
} from '@ant-design/icons';
import { Link } from "react-router-dom";

const { Title } = Typography;

const ViewDeleteRRate = (props) => {
    const text = 'Are you sure to delete this task?';
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
            code: 'JIBOR1',
            type: 'JIBOR',
            date: '30-02-2020',
            value: 'Value',
        },
        {
            key: '2',
            code: 'JIBOR1',
            type: 'INDONIA',
            date: '30-02-2020',
            value: 'Value2',        
        },
        {
            key: '3',
            code: 'JIBOR2',
            type: 'JISDOR',
            date: '24-03-2020',
            value: 'Value3',        
        },
        {
            key: '4',
            code: 'JIBOR3',
            type: 'LIBOR',
            date: '24-03-2020',
            value: 'Value4',
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

    return (
        <div>
            <div className="head-content viewDelete">
                <Title level={4}>
                    <span className="icon-back">   
                        <Link to="/editaccount">
                            <CaretLeftOutlined />
                        </Link>
                    </span>
                {action} Data</Title>
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
                <Form.Item label="Ref. Code">
                    {dataMemberById.code}
                </Form.Item>
                <Form.Item label="Ref. Type">
                    {dataMemberById.type}
                </Form.Item>
                <Form.Item label="Date">
                    {dataMemberById.date}
                </Form.Item>
                <Form.Item label="Value">
                    {dataMemberById.value}
                </Form.Item>
                <Form.Item wrapperCol={{ span: 12, offset: 6 }}>
                    {!disable ? (<Link to="/editreferencerate">
                        <Popconfirm placement="leftTop" title={text} okText="Yes" cancelText="No">
                            <Button type="primary" style={{ marginRight: '15px' }}>Delete</Button>
                        </Popconfirm>
                    </Link>
                    ) : (
                            <div></div>
                        )}
                    <Link to="/editreferencerate">
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

export default ViewDeleteRRate
