import React from 'react';
import {
    Form,
    Input,
    Button,
    Select,
    Table,
    Popconfirm
} from 'antd';
import { Link } from "react-router-dom";

function RegisterMember() {
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
            title: 'No',
            dataIndex: 'no',
            key: 'no',
            width: 50,
            fixed: 'left',
        },
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
            title: 'Kode BIC',
            dataIndex: 'bic',
            key: 'bic',
            width: 100,
        },
        {
            title: 'RTGS Account',
            children: [
                {
                    title: 'Collateral',
                    width: 100,
                    dataIndex: 'collateral',
                    key: 'collateral',
                }, {
                    title: 'Settlement',
                    width: 100,
                    dataIndex: 'settlement',
                    key: 'settlement',
                }, {
                    title: 'Default Fund',
                    width: 100,
                    dataIndex: 'dFund',
                    key: 'dFund',
                }
            ]
        },
        {
            title: 'SSSS Account (Collateral)',
            dataIndex: 'ssss',
            key: 'ssss',
            width: 100,
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
            render: (text, record) => (
                <span>
                    <Link to={{
                        pathname: `/viewMember`,
                        state: {
                            id: record.key,
                            action: "View",
                            disable: true,
                        }
                    }} style={{ marginRight: '20px'}}>View
                    </Link>
                    <Link to={{
                        pathname: `/viewMember`,
                        state: {
                            id: record.key,
                            action: "Edit",
                            disable: false,
                        }
                    }} style={{ marginRight: '20px'}}>Edit
                    </Link>
                    <Popconfirm title="Sure to delete?" onConfirm={() => this.handleDelete(record.key)}>
                        <a>Delete</a>
                    </Popconfirm>
                </span>
            )
        },
    ];
    const data = [
        {
            key: '1',
            no: '1',
            memberID: 'Member123',
            sidLei: 'ID12',
            namaPerusahaan: 'PT Jaya Abadi',
            alamat: 'New York No. 1 Lake Park',
            pic: 'John Brown',
            noTelp: '085112345227',
            email: 'john@gmail.com',
            bic: 'BIC01',
            collateral: 'Collateral1',
            settlement: 'Settlement1',
            dFund: 'Def-Fund1',
            ssss: 'SSSS1',
            status: 'status1',
        },
        {
            key: '2',
            no: '2',
            memberID: 'Member345',
            sidLei: 'ID23',
            namaPerusahaan: 'PT Citra Utama',
            alamat: 'New York No. 1 Lake Park',
            pic: 'Jim Green',
            noTelp: '085112345227',
            email: 'jim@gmail.com',
            bic: 'BIC02',
            collateral: 'Collateral2',
            settlement: 'Settlement2',
            dFund: 'Def-Fund2',
            ssss: 'SSSS2',
            status: 'status3',
        },
        {
            key: '3',
            no: '3',
            memberID: 'Member567',
            sidLei: 'ID34',
            namaPerusahaan: 'PT Abadi Makmur',
            alamat: 'New York No. 1 Lake Park',
            pic: 'John Black',
            noTelp: '085112345227',
            email: 'black@gmail.com',
            bic: 'BIC03',
            collateral: 'Collateral3',
            settlement: 'Settlement3',
            dFund: 'Def-Fund3',
            ssss: 'SSSS3',
            status: 'status2',
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
                style={{ marginBottom: '80px' }}
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
                    <Input placeholder="Collateral" style={{ marginBottom: '15px'}}/>
                    <Input placeholder="Settlement" style={{ marginBottom: '15px'}}/>
                    <Input placeholder="Default Fund"/>
                </Form.Item>
                <Form.Item label="SSSS Account">
                    <Input />
                </Form.Item>
                <Form.Item wrapperCol={{ span: 12, offset: 6 }}>
                    <Button type="primary" htmlType="submit" style={{ marginRight: '15px' }}>
                        Search
                    </Button>
                    <Button type="primary" htmlType="submit">
                        Clear
                    </Button>
                </Form.Item>
            </Form>

            <div style={{ margin: '15px 20px' }} scroll={{ x: 1300 }}>
                <Link to={{
                    pathname: `/viewMember`,
                    state: {
                        id: '0',
                        action: "Add New Member",
                        disable: false,
                    }
                }}><Button type="primary" htmlType="submit" style={{ marginBottom: '15px' }}>
                        Add New Data
                </Button>
                </Link>
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
