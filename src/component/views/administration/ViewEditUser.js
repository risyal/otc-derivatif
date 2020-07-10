import React, { useState } from 'react'
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


const ViewEditUser = (props) => {
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

    const statusSelect = ['Active', 'Blocked'];
    const [selectedStatus, setSelectedStatus] = useState(statusSelect[0]);
    const statusClick = (e) => {
        setSelectedStatus(e);
    };
    const action = props.location.state.action
    const disable = props.location.state.disable
    const [sixEyes, setSixEyes] = useState(1);
    const radioOnChange = e => {
        setSixEyes(e.target.value);
    };

    return (
        <div>
            <div className="head-content viewEdit">
                <Title level={4}>
                    <span className="icon-back">
                        <Link to="/usermanagementt">
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
                    <Input disabled={disable} defaultValue={dataMemberById.userId} />
                </Form.Item>
                <Form.Item label="Member ID">
                    <Input disabled={disable} defaultValue={dataMemberById.memberId} />
                </Form.Item>
                <Form.Item label="Status">
                    <Select
                        value={selectedStatus}
                        onChange={statusClick}
                        disabled={disable}>
                        {statusSelect.map(status => (
                            <Option value={status}>{status}</Option>
                        ))}
                    </Select>
                </Form.Item>
                <Form.Item wrapperCol={{ span: 12, offset: 6 }}>
                    {!disable ? (<Link to="/usermanagement">
                        <Button type="primary" htmlType="submit" style={{ marginRight: '15px' }}>
                            Submit
                        </Button>
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


export default ViewEditUser
