import React, { useState } from 'react';
import {
    Form,
    Input,
    Button,
    Table,
    Dropdown,
    Menu,
    DatePicker
} from 'antd';
import { DownOutlined, UpOutlined } from '@ant-design/icons';
import { Link } from "react-router-dom";
import moment from 'moment';

function CashInquiryManagement() {
    const [expand, setExpand] = useState(true);
    const [form] = Form.useForm();
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


    const columns = [
        {
            title: 'Participant Code',
            dataIndex: 'participantCode',
            key: 'participantCode',
            width: 100,
        }, {
            title: 'Source Acc',
            dataIndex: 'sourceAcc',
            key: 'sourceAcc',
            width: 100,
        }, {
            title: 'Dest Account',
            dataIndex: 'destAccount',
            key: 'destAccount',
            width: 100,
        }, {
            title: 'Currency Code',
            dataIndex: 'currencyCode',
            key: 'currencyCode',
            width: 100,
        }, {
            title: 'Value',
            dataIndex: 'value',
            key: 'value',
            width: 100,
        }, {
            title: 'Settlement Date',
            dataIndex: 'settlementDate',
            key: 'settlementDate',
            width: 100,
        }, {
            title: 'Action',
            key: 'operation',
            fixed: 'right',
            width: 100,
            render: (text, record) => (
                <Dropdown
                    overlay={
                        <Menu>
                            <Menu.Item>
                                <Link to={{
                                    pathname: `/instructionManagement/detailCancelCM`,
                                    state: {
                                        id: "1",
                                        action: "View",
                                        disable: true,
                                        linkBack: "/instructionManagement/cashManagement",
                                    }
                                }} style={{ marginRight: '20px' }}>View
                    </Link>
                            </Menu.Item>
                            <Menu.Item>
                                <Link to={{
                                    pathname: `/instructionManagement/detailCancelCM`,
                                    state: {
                                        id: "1",
                                        action: "Cancel",
                                        disable: false,
                                        linkBack: "/instructionManagement/cashManagement",
                                    }
                                }} style={{ marginRight: '20px' }}>Cancel
                    </Link>
                            </Menu.Item>
                        </Menu>
                    }
                    placement="bottomLeft"
                    trigger={['click']}>
                    <Button>Action</Button>
                </Dropdown>
            ),
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
    const dateFormat = 'YYYY/MM/DD';

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
                        <Form.Item label="Participant Code" >
                            <Input />
                        </Form.Item>
                        <Form.Item label="Source Acc" >
                            <Input />
                        </Form.Item>
                        <Form.Item label="Dest Account" >
                            <Input />
                        </Form.Item>
                        <Form.Item label="Currency Code" >
                            <Input />
                        </Form.Item>
                        <Form.Item label="Settlement Date" >
                            <DatePicker style={{ width: '100%' }}
                                defaultValue={moment('2020/01/23', dateFormat)} />
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
                    pathname: `/instructionManagement/ViewAddCM`,
                }}><Button type="primary" htmlType="submit" style={{ marginBottom: '15px' }}>
                        Add New Instruction
                </Button>
                </Link>

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

export default CashInquiryManagement
