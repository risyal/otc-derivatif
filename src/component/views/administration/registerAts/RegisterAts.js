import React, { useState, useMemo } from 'react';
import {
    Form,
    Input,
    Button,
    Table,
    Dropdown,
    Menu,
    Row,
    Col,
} from 'antd';
import { Link } from "react-router-dom";
import { DownOutlined, UpOutlined, DownloadOutlined } from '@ant-design/icons';

function RegisterAts() {
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

    const [columns] = useState([
        {
            title: 'Company Name',
            dataIndex: 'name',
            key: 'name',
        },
        {
            title: 'Application Name',
            dataIndex: 'appName',
            key: 'appName',
        },
        {
            title: 'Address',
            dataIndex: 'address',
            key: 'address',
        },
        {
            title: 'PIC Name',
            dataIndex: 'pic',
            key: 'pic',
        },
        {
            title: 'Telephone Number',
            dataIndex: 'telp',
            key: 'telp',
        },
        {
            title: 'Email',
            dataIndex: 'email',
            key: 'email',
        },
        {
            title: 'Action',
            key: 'action',
            fixed: 'right',
            render: (text, record) => (
                <Dropdown
                    overlay={
                        <Menu>
                            <Menu.Item>
                                <Link to={{
                                    pathname: `/administration/ViewDeleteRegAts`,
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
                                    pathname: `/administration/ViewEditRegAts`,
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
                                    pathname: `/administration/ViewDeleteRegAts`,
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
    const [data] = useState([
        {
            key: '1',
            name: 'PT 123',
            appName: 'App Name',
            address: 'Jl. Kenanga',
            pic: 'Jihan',
            telp: '082221829',
            email: '123@gmail.com',
        },
        {
            key: '2',
            name: 'PT 123',
            appName: 'App Name',
            address: 'Jl. Kenanga',
            pic: 'Jihan',
            telp: '082221829',
            email: '123@gmail.com',
        },
        {
            key: '3',
            name: 'PT 123',
            appName: 'App Name',
            address: 'Jl. Kenanga',
            pic: 'Jihan',
            telp: '082221829',
            email: '123@gmail.com',
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
                        <Form.Item label="Company name">
                            <Input />
                        </Form.Item>
                        <Form.Item label="Address">
                            <Input />
                        </Form.Item>
                        <Form.Item label="PIC Name">
                            <Input />
                        </Form.Item>
                        <Form.Item label="Telephone Number">
                            <Input />
                        </Form.Item>
                        <Form.Item label="Email">
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
                            pathname: `/administration/ViewEditRegAts`,
                            state: {
                                id: '0',
                                action: "Add New",
                                disable: false,
                            }
                        }}><Button type="primary" htmlType="submit" style={{ marginBottom: '15px' }}>
                                Add New Data
                            </Button>
                        </Link>
                    </Col>

                    <Col span={8} offset={8}>
                        {/* <Link to={{
                            pathname: `#`,
                            state: {
                                id: '1',
                                action: "Edit",
                                disable: false,
                            }
                        }} > */}
                        {exportButtton}
                        {/* </Link> */}
                    </Col>
                </Row>

                <Table
                    columns={columns}
                    dataSource={data}
                    bordered
                    size="middle"
                />
            </div>
        </div>

    )

}


export default RegisterAts