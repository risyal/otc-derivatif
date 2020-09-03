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
import { DownOutlined, UpOutlined, DownloadOutlined } from '@ant-design/icons';

function RegisterClient() {
    const [expand, setExpand] = useState(true);
    const [form] = Form.useForm();
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
            memberID: 'CENAIDJA',
            sid: 'SID1',
            lei: 'LEI1',
            namaNasabah: 'Nas abah',
            rtgsAccount: 'rtgs Account1',
            ssssAccount: 'ssss Account1',
            status: 'Active',
        },
        {
            key: '2',
            memberID: 'CENAIDJA',
            sid: 'SID2',
            lei: 'LEI2',
            namaNasabah: 'fulan bin fulan',
            rtgsAccount: 'rtgs Account2',
            ssssAccount: 'ssss Account2',
            status: 'Active',
        },
        {
            key: '3',
            memberID: 'CENAIDJA',
            sid: 'SID3',
            lei: 'LEI3',
            namaNasabah: 'fulanah bin fulan',
            rtgsAccount: 'rtgs Account3',
            ssssAccount: 'ssss Account3',
            status: 'Active',
        },
    ]);
    const { Option } = Select;

    const [columns] = useState([
        {
            title: 'Member ID',
            dataIndex: 'memberID',
            key: 'memberID',
            width: 100,
        },
        {
            title: 'SID',
            dataIndex: 'sid',
            key: 'sidLei',
            width: 100,
        },
        {
            title: 'LEI',
            dataIndex: 'lei',
            key: 'sidLei',
            width: 100,
        },
        {
            title: 'Client Name',
            dataIndex: 'namaNasabah',
            key: 'namaNasabah',
            width: 200,
        },
        {
            title: 'Collateral Account',
            dataIndex: 'rtgsAccount',
            key: 'rtgsAccount',
            width: 100,
        },
        {
            title: 'Action',
            key: 'operation',
            width: 100,
            render: (text, record) => (
                <Dropdown
                    overlay={
                        <Menu>
                            <Menu.Item>
                                <Link to={{
                                    pathname: `/registerClient/ViewDeleteClient`,
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
                                    pathname: `/registerClient/viewClient`,
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
                                    pathname: `/registerClient/ViewDeleteClient`,
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
                size={componentSize}
                layout="horizontal"
                initialValues={{ size: componentSize }}
                labelAlign="left"
            > {expand ? (<div>
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
                        <Form.Item label="Client Name">
                            <Input />
                        </Form.Item>
                        <Form.Item label="Collateral Account">
                            <Input />
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
                        {expand ? (<div><DownOutlined /> Advance Search</div>) :
                            (<div><UpOutlined /> Simple Search</div>)}
                    </Button>
                </Form.Item>
            </Form>

            <div style={{ margin: '15px 20px' }} scroll={{ x: 1300 }}>
                <Row justify="end">
                    <Col span={8}>
                        <Link to={{
                            pathname: `/registerClient/viewClient`,
                            state: {
                                id: '0',
                                action: "Add New",
                                disable: false,
                            }
                        }}><Button type="primary" htmlType="submit" style={{ marginBottom: '15px' }}>
                                Add New Client
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


export default RegisterClient