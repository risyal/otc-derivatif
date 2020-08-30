import React, { useState, useMemo } from 'react';
import {
    Form,
    Input,
    Button,
    Select,
    Table,
    Dropdown,
    Menu,
    Row,
    Col,
} from 'antd';
import { Link } from "react-router-dom";

import axios from 'axios';
import { DownOutlined, UpOutlined, DownloadOutlined } from '@ant-design/icons';

const RegisterMember = () => {
    const [expand, setExpand] = useState(true);
    const [form] = Form.useForm();
    const [statusSelect] = useState(['Active', 'Suspend', 'Closed']);
    const [selectedStatus, setSelectedStatus] = useState(statusSelect[0]);
    const statusClick = (e) => {
        setSelectedStatus(e);
    };
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

    const { Option } = Select;

    const [columns] = useState([
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
            title: 'SID',
            dataIndex: 'sid',
            key: 'sid',
            width: 100,
        },
        {
            title: 'LEI',
            dataIndex: 'lei',
            key: 'lei',
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
                                    pathname: `/registerClient/ViewDeleteMember`,
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
                                <Link to={{
                                    pathname: `/registerClient/ViewDeleteMember`,
                                    state: {
                                        id: record.key,
                                        action: "Delete",
                                        disable: false,
                                    }
                                }} style={{ marginRight: '20px' }}>Delete
                                </Link>
                            </Menu.Item>
                        </Menu>
                    }
                    placement="bottomLeft"
                    trigger={['click']}>
                    <Button>Action</Button>
                </Dropdown>
            )
        }
    ]);
    let [member, setMember] = useState('');

    let getSchemaFromApiAsync = () => {
        console.log("teststs");
        return new Promise((resolve, reject) => {
            fetch('http://localhost:8080/sysparams')
                .then(response => resolve(response.json()))
                .catch(error => {
                    console.error(error);
                    reject(error);
                });
        })
    }

    let main = async () => {
        let res = await getSchemaFromApiAsync();
        console.log("res", res);
    };
    main();
    const [data] = useState([
        {
            key: '1',
            no: '1',
            memberID: 'Member123',
            sid: 'ID12',
            lei: 'lei1',
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
            sid: 'ID23',
            lei: 'lei2',
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
            sid: 'ID34',
            lei: 'lei3',
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
    ]);
    const [exportButtton] = useState(<Button
        type="primary"
        style={{
            marginBottom: '15px',
            paddingBottom: '15px',
            float: 'right',
            height: '35px'
        }}
        icon={<DownloadOutlined />}>Export File</Button>);

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
                            <Form.Item label="SID">
                                <Input />
                            </Form.Item>
                            <Form.Item label="LEI">
                                <Input />
                            </Form.Item>
                            <Form.Item label="Company Name">
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
                <Row justify="end">
                    <Col span={8}>
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
                    </Col>
                    <Col span={8} offset={8}>
                        {exportButtton}
                    </Col>
                </Row>

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
