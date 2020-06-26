import React from 'react';
import {
    Form,
    Input,
    Button,
    Select, 
    Table
} from 'antd';

function RegisterMember(){
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
            title: 'Nama Perusahaan',
            dataIndex: 'namaPerusahaan',
            key: 'namaPerusahaan',
            width: 200,
          },
          {
            title: 'Alamat',
            dataIndex: 'alamat',
            key: 'alamat',
            width: 200,
          },
          {
            title: 'PIC',
            dataIndex: 'pic',
            key: 'pic',
            width: 100,
          },
          {
            title: 'No Telp',
            dataIndex: 'noTelp',
            key: 'noTelp',
            width: 100,
          },
          {
            title: 'Email',
            dataIndex: 'email',
            key: 'email',
            width: 200,
          },
          {
            title: 'Status',
            dataIndex: 'status',
            key: 'status',
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
                <Form.Item label="Nama Perusahaan">
                    <Input />
                </Form.Item>
                <Form.Item label="Kode BIC">
                    <Input />
                </Form.Item>
                <Form.Item label="RTGS Account">
                    <Select
                        placeholder="Select an option RTGS Account"
                    >
                        <Option value="male">Collateral</Option>
                        <Option value="female">Settlement</Option>
                        <Option value="other">Default Fund</Option>
                    </Select>
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
                                    <Option value="namaPerusahaan">Nama Perusahaan</Option>
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


export default RegisterMember