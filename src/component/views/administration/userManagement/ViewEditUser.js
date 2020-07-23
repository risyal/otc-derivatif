import React, { useState, useMemo } from 'react'
import {
    Form,
    Input,
    Button,
    Select,
    Radio,
    Typography
} from 'antd';
import {
    ArrowLeftOutlined
} from '@ant-design/icons';
import { Link } from "react-router-dom";

const { Title } = Typography;
const { Option } = Select;


const ViewEditUser = (props) => {
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
            userId: 'User1',
            memberId: 'Member1',
            status: 'Active',
            lastLogin: '23-07-2020 10:04',
            roleUser: 'Maker'
        },
        {
            key: '2',
            userId: 'User2',
            memberId: 'Member2',
            status: 'Blocked',
            lastLogin: '23-07-2020 10:04',
            roleUser: 'Maker'
        },
        {
            key: '3',
            userId: 'User3',
            memberId: 'Member3',
            status: 'Active',
            lastLogin: '23-07-2020 10:04',
            roleUser: 'Checker'
        }
    ]);

    const dataUserById = data.find((user) => {
        return user.key === props.location.state.id
    })

    const statusSelect = ['Active', 'Blocked'];
    const typeRole = ['Maker', 'Checker'];
    const [selectedStatus, setSelectedStatus] = useState(statusSelect[0]);
    const [selectedRole, setRoleType] = useState(typeRole[0]);
    const statusClick = (e) => {
        setSelectedStatus(e);
    };
    const RoleClick = (e) => {
        setRoleType(e);
    }
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
                        <Link to="/usermanagement">
                            <ArrowLeftOutlined />
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
                
                <Form.Item label="User ID">
                    <Input disabled={disable} defaultValue={dataUserById.userId} />
                </Form.Item>
                <Form.Item label="Member ID">
                    <Input disabled={disable} defaultValue={dataUserById.memberId} />
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
                <Form.Item label="Role User">
                    <Select
                        value={selectedRole}
                        onChange={RoleClick}
                        disabled={disable}>
                        {typeRole.map(role => (
                            <Option value={role}>{role}</Option>
                        ))}
                    </Select>
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
