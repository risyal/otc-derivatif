import React from 'react';
import { 
    Form, 
    Button, 
    Input,
    Table 
} from 'antd';

function UserManagement(){
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

    const columns = [
        {
            title: 'User ID',
            dataIndex: 'userId',
            width: 100,
            key: 'userId',
        },
        {
            title: 'Member ID',
            dataIndex: 'memberId',
            width: 100,
            key: 'memberId',
        },
        {
            title: 'Status',
            dataIndex: 'status',
            width: 100,
            key: 'status',
        },
        {
            title: 'Last Login',
            dataIndex: 'lastLogin',
            width: 100,
            key: 'lastLogin',
        },
    ];
    const data = [
        {
            key: '1',
            userId: 'User1',
            memberId: 'Member1',
            status: 'Active',
            lastLogin: '10:04:34',
        },
        {
            key: '1',
            userId: 'User2',
            memberId: 'Member2',
            status: 'Block',
            lastLogin: '10:04:34',
        },
        {
            key: '1',
            userId: 'User3',
            memberId: 'Member3',
            status: 'Active',
            lastLogin: '10:04:34',
        },
        {
            key: '1',
            userId: 'User4',
            memberId: 'Member4',
            status: 'Active',
            lastLogin: '10:04:34',
        },
        {
            key: '1',
            userId: 'User5',
            memberId: 'Member5',
            status: 'Block',
            lastLogin: '10:04:34',
        },
    ];

    return (
        <div style={{ margin: '15px 20px' }}>
            <Form
                {...formItemLayout}
                size={componentSize}
                layout="horizontal"
                initialValues={{ size: componentSize }}
                labelAlign="left"
            >
                <Form.Item label="User ID">
                    <Input />
                </Form.Item>
                <Form.Item label="Member ID">
                    <Input />
                </Form.Item>
                <Form.Item label="Pincode">
                    <Input />
                </Form.Item>
                <Form.Item wrapperCol={{ span: 12, offset: 6 }}>
                    <Button type="primary" htmlType="submit">
                        Add
                    </Button>
                </Form.Item>
            </Form>

            <Table
                columns={columns}
                dataSource={data}
                bordered
                size="middle"
            />
        </div>
    )
}

export default UserManagement