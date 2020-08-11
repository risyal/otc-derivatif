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

function EditAccount(){
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
            title: 'Member/Client ID',
            children: [
                {
                    title: 'Code',
                    width: 100,
                    dataIndex: 'code',
                    key: 'code',
                }, {
                    title: 'SID/LEI',
                    width: 100,
                    dataIndex: 'sidLei',
                    key: 'sidLei',
                }
            ]
        },
        {
            title: 'Name',
            width: 100,
            dataIndex: 'name',
            key: 'name',
        },
        {
            title: 'Cash Collateral',
            children: [
                {
                    title: 'Account No',
                    width: 100,
                    dataIndex: 'accNo',
                    key: 'accNo',
                }, {
                    title: 'Status',
                    width: 100,
                    dataIndex: 'status',
                    key: 'status',
                }
            ]
        },
        {
            title: 'Non-cash Collateral',
            children: [
                {
                    title: 'Account No',
                    width: 100,
                    dataIndex: 'accNo2',
                    key: 'accNo',
                }, {
                    title: 'Status',
                    width: 100,
                    dataIndex: 'status2',
                    key: 'status',
                }
            ]
        },
        {
            title: 'Default Fund',
            children: [
                {
                    title: 'Account No',
                    width: 100,
                    dataIndex: 'accNo3',
                    key: 'accNo',
                }, {
                    title: 'Status',
                    width: 100,
                    dataIndex: 'status3',
                    key: 'status',
                }
            ]
        },
        {
            title: 'Settlement Account',
            // width: 100,
            // dataIndex: 'settlementAcc',
            // key: 'settlementAcc',
            children: [
                {
                    title: 'Account No',
                    width: 100,
                    dataIndex: 'accNo4',
                    key: 'accNo',
                }, {
                    title: 'Status',
                    width: 100,
                    dataIndex: 'status4',
                    key: 'status',
                }
            ]
        },
        {
            title: 'Action',
            key: 'action',
            width: 100,
            render: (text, record) => (
                <Dropdown
                    overlay={
                        <Menu>
                            <Menu.Item>
                                <Link to={{
                                    pathname: `/administration/ViewDeleteAccount`,
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
                                    pathname: `/administration/ViewEditAccount`,
                                    state: {
                                        id: record.key,
                                        action: "Edit",
                                        disable: false,
                                    }
                                }} style={{ marginRight: '20px' }}>Edit
                                </Link>
                            </Menu.Item>
                        </Menu>
                    }
                    placement="bottomLeft"
                    trigger={['click']}>
                    <Button>Actions</Button>
                </Dropdown>
            )
        },
    ]);
    const [data] = useState([
        {
            key: '1',
            code: 'CENAIDJA',
            sidLei: 'SID1LEI1',
            name: 'Nas abah',
            currency: '',
            accNo: 'D4211',
            status: 'Active',
            accNo2: 'D4211',
            status2: 'Active',
            accNo3: 'D4211',
            status3: 'Active',
            accNo4: 'D4211',
            status4: 'Active',
        },
        {
            key: '2',
            code: 'CENAIDJA',
            sidLei: 'SID1LEI2',
            name: 'Mega',
            currency: '',
            accNo: 'D4212',
            status: 'Frozen',
            accNo2: 'D4212',
            status2: 'Frozen',
            accNo3: 'D4212',
            status3: 'Frozen',
            accNo4: 'D4211',
            status4: 'Frozen',
        },
        {
            key: '3',
            code: 'CENAIDJA',
            sidLei: 'SID1LEI3',
            name: 'Tera',
            currency: '',
            accNo: 'D4212',
            status: 'Close',
            accNo2: 'D4212',
            status2: 'Close',
            accNo3: 'D4212',
            status3: 'Close',
            accNo4: 'D4211',
            status4: 'Close',
        },
    ]);

    const { Option } = Select;
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
                            <Input.Group compact >
                                <Input style={{ width: '45%', textAlign: 'center' }} placeholder="Code" />
                                <Input
                                    className="site-input-split"
                                    style={{
                                        width: '10%',
                                        borderLeft: 0,
                                        borderRight: 0,
                                        pointerEvents: 'none', textAlign: 'center'
                                    }}
                                    placeholder="|"
                                    disabled
                                />
                                <Input
                                    className="site-input-right"
                                    style={{
                                        width: '45%',
                                        textAlign: 'center',
                                    }}
                                    placeholder="SID/LEI"
                                />
                            </Input.Group> 
                        </Form.Item>
                        <Form.Item label="Name">
                            <Input />
                        </Form.Item>
                        <Form.Item label="Account No">
                            <Input />
                        </Form.Item>
                        <Form.Item label="Status">
                            <Select placeholder="Select Status">
                                <Option value="active">Active</Option>
                                <Option value="frozen">Frozen</Option>
                                <Option value="closed">Closed</Option>
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

            <Row justify="end">
                <Col span={4}>
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

            <div style={{ margin: '15px 0px 0px 0px' }} scroll={{ x: 1300 }}>
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

export default EditAccount