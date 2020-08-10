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

function SecuritiesCollMgt(){
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
            title: 'Instrument Code',
            dataIndex: 'code',
            key:'code',
        },
        {
            title: 'Instrument Name',
            dataIndex: 'name',
            key: 'name',
        },
        {
            title: 'Instrument Type',
            dataIndex: 'type',
            key: 'type',
        },
        {
            title: 'Eligibility',
            dataIndex: 'eligibility',
            key: 'eligibility',
        },
        {
            title: 'Haircut',
            dataIndex: 'haircut',
            key: 'haircut',
        },
        {
            title: 'Maturity Date',
            dataIndex: 'maturityDate',
            key: 'maturityDate',
        },
        {
            title: 'Action',
            key: 'action',
            render: (text, record) => (
                <Dropdown
                    overlay={
                        <Menu>
                            <Menu.Item>
                                <Link to={{
                                    pathname: `/administration/ViewDeleteSCMgt`,
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
                                    pathname: `/administration/ViewEditSCMgt`,
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
                                    pathname: `/administration/ViewDeleteSCMgt`,
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
            code: 'CENAIDJA',
            name: 'Instrument1',
            type: 'Type1',
            eligibility: 'Yes',
            haircut: 'Haircut1',
            maturityDate: '09-07-2020',
        },
        {
            key: '2',
            code: 'CENAIDJA',
            name: 'Instrument2',
            type: 'Type2',
            eligibility: 'No',
            haircut: 'Haircut2',
            maturityDate: '09-07-2020',
        },
        {
            key: '3',
            code: 'CENAIDJA',
            name: 'Instrument3',
            type: 'Type3',
            eligibility: 'Yes',
            haircut: 'Haircut3',
            maturityDate: '09-07-2020',
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

    return(
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
                        <Form.Item label="Instrument Code">
                            <Input />
                        </Form.Item>
                        <Form.Item label="Instrument Type">
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
                        {expand ? (<div><DownOutlined />Advance Search</div>) :
                            (<div><UpOutlined />Simple Search</div>)}
                    </Button>
                </Form.Item>
            </Form>

            <div style={{ margin: '15px 20px' }} scroll={{ x: 1300 }}>
                <Row justify="end">
                    <Col span={8}>
                        <Link to={{
                                pathname: `/administration/ViewEditSCMgt`,
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

export default SecuritiesCollMgt