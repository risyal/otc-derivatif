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
            width: 150,
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
            title: 'Actions',
            key: 'actions',
            dataIndex: 'actions',
            fixed: 'right',
            width: 150,
            render: () => (
                <span>
                    <a style={{ marginRight: 16 }}>View</a>
                    <a style={{ marginRight: 16 }}>Edit</a>
                    <a>Delete</a>
                </span>
            )
        },
    ];
    const data = [
        {
            key: '1',
            memberID: 'Member123',
            namaPerusahaan: 'PT Jaya Abadi',
            alamat: 'New York No. 1 Lake Park',
            pic: 'John Brown',
            noTelp: '085112345227',
            email: 'john@gmail.com',    
            status: 'status1', 
        },
        {
            key: '2',
            memberID: 'Member345',
            namaPerusahaan: 'PT Citra Utama',
            alamat: 'New York No. 1 Lake Park',
            pic: 'Jim Green',
            noTelp: '085112345227',
            email: 'jim@gmail.com',    
            status: 'status3',
        },
        {
            key: '3',
            memberID: 'Member567',
            namaPerusahaan: 'PT Abadi Makmur',
            alamat: 'New York No. 1 Lake Park',
            pic: 'John Black',
            noTelp: '085112345227',
            email: 'black@gmail.com',    
            status: 'status2',
        },
    ];

    return (
        <div style={{ margin: '15px 20px' }}>
            {/* <Form
                size={componentSize}
                layout="horizontal"
                initialValues={{ size: componentSize }}
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
                            <Button type="primary" htmlType="submit">Search</Button>
                        </Form.Item>
                    </Input.Group>
                </Form.Item>
            </Form> */}

            <Form
                {...formItemLayout}
                size={componentSize}
                layout="horizontal"
                initialValues={{ size: componentSize }}
                labelAlign="left"
                style={{ marginBottom: '80px'}}
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
                    <Button type="primary" htmlType="submit" style={{ marginRight: '15px'}}>
                        Search
                    </Button>
                    <Button type="primary" htmlType="submit">
                        Clear
                    </Button>
                </Form.Item>
            </Form>

            <div style={{ margin: '15px 20px' }} scroll={{ x: 1300 }}>
                <Button type="primary" htmlType="submit" style={{ marginBottom: '15px' }}>
                    Add New Data
                </Button>
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
