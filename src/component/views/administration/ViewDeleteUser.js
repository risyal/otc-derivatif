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

const ViewDeleteUser= (props) => {
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
            userId: 'User1',
            memberId: 'Member1',
            status: 'Active',
            lastLogin: '10:04:34',
        },
        {
            key: '2',
            userId: 'User2',
            memberId: 'Member2',
            status: 'Blocked',
            lastLogin: '10:04:34',
        },
        {
            key: '3',
            userId: 'User3',
            memberId: 'Member3',
            status: 'Active',
            lastLogin: '10:04:34',
        },
        {
            key: '4',
            userId: 'User4',
            memberId: 'Member4',
            status: 'Active',
            lastLogin: '10:04:34',
        },
        {
            key: '5',
            userId: 'User5',
            memberId: 'Member5',
            status: 'Blocked',
            lastLogin: '10:04:34',
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
                        <Link to="/usermanagement">
                            <CaretLeftOutlined />
                        </Link>
                    </span>
                {action} User</Title>
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
                <Form.Item label="User ID">
                    {dataMemberById.userId}
                </Form.Item>
                <Form.Item label="Member ID">
                    {dataMemberById.memberId}
                </Form.Item>
                <Form.Item label="Status">
                    {dataMemberById.status}
                </Form.Item>
                <Form.Item wrapperCol={{ span: 12, offset: 6 }}>
                    {!disable ? (<Link to="/usermanagement">
                        <Popconfirm placement="leftTop" title={text} okText="Yes" cancelText="No">
                            <Button type="primary" style={{ marginRight: '15px' }}>Delete</Button>
                        </Popconfirm>
                    </Link>
                    ) : (
                            <div></div>
                        )}
                    <Link to="/usermanagement">
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

export default ViewDeleteUser
