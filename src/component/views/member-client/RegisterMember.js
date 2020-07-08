import React, { useState } from 'react';
import {
    Form,
    Input,
    Button,
    Select,
    Table,
    Dropdown,
    Menu
} from 'antd';
import { Link } from "react-router-dom";
import { DownOutlined, UpOutlined } from '@ant-design/icons';

const RegisterMember = () => {
    const [expand, setExpand] = useState(true);
    const [form] = Form.useForm();
    const statusSelect = ['Active', 'Suspend', 'Closed'];
    const [selectedStatus, setSelectedStatus] = useState(statusSelect[0]);
    const statusClick = (e) => {
        setSelectedStatus(e);
    };
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
        },
        {
            title: 'Member ID',
            dataIndex: 'memberID',
            key: 'memberID',
            width: 100,
        },
        {
            title: 'SID/LEI',
            dataIndex: 'sidLei',
            key: 'sidLei',
            width: 100,
        },
        {
            title: 'Company Name',
            dataIndex: 'namaPerusahaan',
            key: 'namaPerusahaan',
            width: 200,
        },
        {
            title: 'Address',
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
            title: 'Telephone Number',
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
            width: 150,
            render: (text, record) => (
                <Dropdown
                    overlay={
                        <Menu>
                            <Menu.Item>
                                <Link to={{
                                    pathname: `/registerClient/viewMember`,
                                    state: {
                                        id: record.key,
                                        action: "View",
                                        disable: true,
                                    }
                                }} style={{ marginRight: '20px' }}>View
                    </Link>
                            </Menu.Item>
                            <Menu.Item>
                                <Link to={{
                                    pathname: `/registerClient/viewMember`,
                                    state: {
                                        id: record.key,
                                        action: "Edit",
                                        disable: false,
                                    }
                                }} style={{ marginRight: '20px' }}>Edit
                    </Link>
                            </Menu.Item>
                            <Menu.Item>
                                <span onClick={(e) => { if (window.confirm('Are you sure you wish to delete this item?')) this.deleteItem(e) }}>
                                    Delete
                                </span>
                            </Menu.Item>
                        </Menu>
                    }
                    placement="bottomLeft"
                    trigger={['click']}>
                    <Button>Action</Button>
                </Dropdown>
            )
        }
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
            status: 'Active',
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
            status: 'Active',
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
            status: 'Active',
        },
    ];

    return (
        <div style={{ margin: '15px 20px' }}>
            <Form
                {...formItemLayout}
                form={form}
                size={componentSize}
                name="advanced_search"
                layout="horizontal"
                initialValues={{ size: componentSize }}
                labelAlign="left"
                style={{ marginBottom: '80px' }}
            >

                {expand ? (<div>
                    <Form.Item label="Keyword">
                        <Input />
                    </Form.Item>
                </div>
                ) : (
                        <div>
                            <Form.Item label="Member ID">
                                <Input />
                            </Form.Item>
                            <Form.Item label="SID/LEI">
                                <Input />
                            </Form.Item>
                            <Form.Item label="Nama Perusahaan">
                                <Input />
                            </Form.Item>
                            <Form.Item label="RTGS Account">
                                <Input placeholder="Collateral" style={{ marginBottom: '15px' }} />
                                <Input placeholder="Settlement" style={{ marginBottom: '15px' }} />
                                <Input placeholder="Default Fund" />
                            </Form.Item>
                            <Form.Item label="SSSS Account">
                                <Input />
                            </Form.Item>
                            <Form.Item label="Status">
                                <Select
                                    value={selectedStatus}
                                    onChange={statusClick}>
                                    {statusSelect.map(status => (
                                        <Option value={status}>{status}</Option>
                                    ))}
                                </Select>
                            </Form.Item>
                        </div>
                    )}
                <Form.Item wrapperCol={{ span: 12, offset: 6 }}>
                    <Button
                        type="primary"
                        htmlType="submit"
                        tyle={{ marginRight: '15px' }}>
                        Search
                                </Button>
                    <Button
                        style={{ margin: '0 8px' }}
                        onClick={() => {
                            form.resetFields();
                        }}>
                        Clear
                        </Button>
                    <Button
                        htmlType="submit"
                        onClick={() => {
                            setExpand(!expand);
                        }}>
                        {expand ? (<div><DownOutlined />Advance Search</div>) :
                            (<div><UpOutlined />Simple Search</div>)}
                    </Button>
                </Form.Item>
            </Form>

            <div style={{ margin: '15px 20px' }} scroll={{ x: 1300 }}>
                <Link to={{
                    pathname: `/registerClient/viewMember`,
                    state: {
                        id: '0',
                        action: "Add New",
                        disable: false,
                    }
                }}><Button type="primary" htmlType="submit" style={{ marginBottom: '15px' }}>
                        Add New Member
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
