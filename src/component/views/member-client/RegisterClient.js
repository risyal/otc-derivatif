import React from 'react';
import {
    Form,
    Input,
    Button,
    Select, 
    Table
} from 'antd';

function RegisterClient(){
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

    const { Option } = Select;

    const columns = [
        {
            title: 'Member ID',
            dataIndex: 'memberID',
            key: 'memberID',
            width: 100,
            fixed: 'left',
          },
          {
            title: 'SID/LEI',
            dataIndex: 'sidLei',
            key: 'sidLei',
            width: 100,
          },
          {
            title: 'Nama Nasabah',
            dataIndex: 'namaNasabah',
            key: 'namaNasabah',
            width: 200,
          },
          {
            title: 'RTGS Account',
            dataIndex: 'rtgsAccount',
            key: 'rtgsAccount',
            width: 100,
          },
          {
            title: 'SSSS Account',
            dataIndex: 'ssssAccount',
            key: 'ssssAccount',
            width: 100,
          },
          {
            title: 'Action',
            key: 'operation',
            fixed: 'right',
            width: 100,
            render: () => <a>Edit</a>,
        },
    ];
    const data = [
        {
        },
        {
        },
        {
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
                <Form.Item label="Member ID">
                    <Input />
                </Form.Item>
                <Form.Item label="SID/LEI">
                    <Input />
                </Form.Item>
                <Form.Item label="Nama Nasabah">
                    <Input />
                </Form.Item>
                <Form.Item label="RTGS Account">
                    <Input />
                </Form.Item>
                <Form.Item label="SSSS Account">
                    <Input />
                </Form.Item>
                <Form.Item wrapperCol={{ span: 12, offset: 6 }}>
                    <Button type="primary" htmlType="submit">
                        Submit
                    </Button>
                </Form.Item>
            </Form>

            <div style={{ margin: '15px 20px' }} scroll={{ x: 1300 }}>
                <Form
                    size={componentSize}
                    layout="horizontal"
                    initialValues={{ size: componentSize }}
                    style={{ marginTop: '80px'}}
                >
                    <Form.Item label="Search">
                        <Input.Group compact>
                            <Form.Item
                                name={['address', 'province']}
                            >
                                <Select placeholder="Select filter">
                                    <Option value="memberID">Member ID</Option>
                                    <Option value="sid/lei">SID/LEI</Option>
                                    <Option value="rtgsAccount">RTGS Account</Option>
                                    <Option value="ssssAccount">SSSS Account</Option>
                                </Select>
                            </Form.Item>
                            <Form.Item
                                name={['address', 'street']}
                            >
                                <Input style={{ width: '100%' }} />
                            </Form.Item>
                            <Form.Item>
                                <Button type="primary" htmlType="submit">
                                    Go
                                </Button>
                            </Form.Item>
                        </Input.Group>
                    </Form.Item>
                </Form>

                <Table
                    columns={columns}
                    dataSource={data}
                    bordered
                    size="middle"
                    scroll={{ x: 'calc(700px + 50%)' }}
                />
            </div>
        </div>
        
    )

}


export default RegisterClient