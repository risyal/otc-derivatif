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
    Typography
} from 'antd';
import { Link } from "react-router-dom";
import { DownOutlined, UpOutlined, DownloadOutlined } from '@ant-design/icons';
import OtherLink from '../../config/OtherLink';
import axios from 'axios';

const { Title } = Typography;

const ListLink = OtherLink.filter((otherMenu) => {
    return otherMenu.useFor === "memberclient"
});

const componentSize = () => 'middle';

const columns = [
    {
        title: 'No',
        dataIndex: 'no',
        key: 'no',
        width: 50,
    },
    {
        title: 'Member ID',
        dataIndex: 'memberCode',
        key: 'memberCode',
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
        dataIndex: 'companyName',
        key: 'companyName',
        width: 200,
    },
    {
        title: 'Address',
        width: 200,
        render: (_, record) => {
            return record.memberInfo?.address;
        }
    },
    {
        title: 'PIC',
        width: 100,
        render: (data) => {
            return data?.pic;
        }
    },
    {
        title: 'Telephone Number',
        width: 150,
        render: (_, record) => {
            return record.memberInfo?.address;
        }
    },
    {
        title: 'Email',
        width: 200,
        render: (_, record) => {
            return record.memberInfo?.address;
        }
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
                                pathname: ListLink.find((pathLink) => {
                                    return pathLink.useIn === 'viewmember'
                                }).linkTo,
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
                                pathname: ListLink.find((pathLink) => {
                                    return pathLink.useIn === 'editmember'
                                }).linkTo,
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
                                pathname: ListLink.find((pathLink) => {
                                    return pathLink.useIn === 'deletemember'
                                }).linkTo,
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
];

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

const exportButtton = <Button
    type="primary"
    style={{
        marginBottom: '15px',
        paddingBottom: '15px',
        float: 'right',
        height: '35px'
    }}
    icon={<DownloadOutlined />}>
    Export File
    </Button>;

const statusSelect = ['Active', 'Suspend', 'Closed'];

const { Option } = Select;

class RegisterMember extends React.Component {
    formRef = React.createRef();
    state = {
        data: [],
        pagination: {
            current: 1,
            pageSize: 5,
        },
        search: {
            memberId: null,
            sid: null,
            lei: null,
            rtgsAccount: null,
            ssssAccount: null,
            status: null,
        },
        loading: true,
        cobadata: "test",
        expand: true,
        selectedStatus: statusSelect[0],
    }

    statusClick = (e) => {
        this.setState({
            selectedStatus: e
        });
    };

    componentDidMount = () => {
        this.fetch();
    };

    handleTableChange = () => {

    };

    fetch = () => {

        this.setState({ loading: true });

        axios.get(`http://localhost:8080/members`, {
            params: {
                // param: this.formRef.current.getFieldValue("keyword"),
                // value: this.formRef.current.getFieldValue("keyword"),
            }
        })
            .then(res => {
                const data = res.data.content;
                this.setState({
                    loading: false,
                    data,
                });
            });
    };

    onReset = () => {

    };

    handleSearch = () => {

    };

    render = () => {
        const { data, expand, selectedStatus } = this.state;
        return (
            <div style={{ margin: '15px 20px' }}>
                <div className="head-content">
                    <Title level={4}>Register Member</Title>
                </div>
                <Form
                    {...formItemLayout}
                    size={componentSize}
                    name="advanced_search"
                    layout="horizontal"
                    initialValues={{ size: componentSize }}
                    labelAlign="left"
                >

                    {expand ? (
                        <div>
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
                                        onChange={this.statusClick}>
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
                                this.formRef.resetFields();
                            }}>
                            Clear
                            </Button>
                        <Button
                            htmlType="submit"
                            onClick={() => {
                                this.setState({
                                    expand: !this.state.expand
                                });
                                // setExpand(!expand);
                            }}>
                            {expand ? (<div><DownOutlined /> Advance Search</div>) :
                                (<div><UpOutlined /> Simple Search</div>)}
                        </Button>
                    </Form.Item>
                </Form>

                { <div style={{ margin: '15px 20px' }} scroll={{ x: 1300 }}>
                    <Row justify="end">
                        <Col span={8}>
                            <Link to={{
                                pathname: ListLink.find((pathLink) => {
                                    return pathLink.useIn === 'addmember'
                                }).linkTo,
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
                </div>}
            </div>

        )
    }
}



export default RegisterMember
