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
    Typography
} from 'antd';
import { Link } from "react-router-dom";
import { DownOutlined, UpOutlined, DownloadOutlined } from '@ant-design/icons';

import axios from 'axios';
const { Title } = Typography;

const columns = [
    {
        title: 'Currency Code',
        dataIndex: 'currencyCode',
    },
    {
        title: 'Currency Name',
        dataIndex: 'currencyName',
    },
    {
        title: 'Eligibility',
        dataIndex: 'eligibility',
    },
    {
        title: 'Haircut (%)',
        dataIndex: 'haircut',
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
                                pathname: `/administration/ViewDeleteCCMgt`,
                                state: {
                                    id: record.id,
                                    action: "View",
                                    disable: true,
                                }
                            }} style={{ marginRight: '20px' }}>View
                            </Link>
                        </Menu.Item>
                        <Menu.Item>
                            <Link to={{
                                pathname: `/administration/ViewEditCCMgt`,
                                state: {
                                    id: record.id,
                                    action: "Edit",
                                    disable: false,
                                }
                            }} style={{ marginRight: '20px' }}>Edit
                            </Link>
                        </Menu.Item>
                        <Menu.Item>
                            <Link to={{
                                pathname: `/administration/ViewDeleteCCMgt`,
                                state: {
                                    id: record.id,
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
];

const getRandomuserParams = params => {
    return {
        results: params.pagination.pageSize,
        page: params.pagination.current,
        ...params,
    };
};

const componentSize = () => 'middle';
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
    icon={<DownloadOutlined />}>Export File</Button>;

const tailLayout = {
    wrapperCol: {
        offset: 6,
        span: 12,
    },
};

class CashCollMgt extends React.Component {
    formRef = React.createRef();
    state = {
        data: [],
        pagination: {
            current: 1,
            pageSize: 5,
        },
        search: {
            code: null,
            name: null,
        },
        loading: true,
        cobadata: "test",
        expand: true,
    }
    componentDidMount() {
        const { pagination } = this.state;
        this.fetch({ pagination });
        /*  axios.get(`http://localhost:8080/`)
             .then(res => {
                 const data = res.data;
                 this.setState({
                     loading: false,
                     data,
 
                 });
                 console.log(data)
             }) */
    }
    handleTableChange = (pagination, filters, sorter, extra) => {
        console.log('paramasdasds', pagination, filters, sorter, extra);
        this.fetch({
            pagination,
        });
    };

    fetch = (params = {}) => {
        const paramSearch = new URLSearchParams([['param', 'ical']]);
        /*  {
             param: this.formRef.current.getFieldValue("keyword"),
             value: this.formRef.current.getFieldValue("keyword"),
             valueType: this.formRef.current.getFieldValue("keyword"),
             note: this.formRef.current.getFieldValue("keyword")
         }; */
        console.log("params " + paramSearch.get);
        this.setState({ loading: true });
        axios.get(`http://localhost:8080/cashcollateralmanagements`, {
            params: {
                code: this.formRef.current.getFieldValue("keyword"),
                name: this.formRef.current.getFieldValue("keyword"),
            }
        })
            .then(res => {
                const data = res.data.content;
                this.setState({
                    loading: false,
                    data,
                    pagination: {
                        ...params.pagination,
                    },
                })
                console.log(data)
            })
    };
    onReset = () => {
        this.formRef.current.resetFields();
    };
    handleSearch = (e) => {
        e.preventDefault();
        this.setState({
            search: {
                code: this.formRef.current.getFieldValue("keyword"),
                name: this.formRef.current.getFieldValue("keyword"),
            }
        });
        const { pagination } = this.state;
        console.log("value" + this.formRef.current.getFieldValue("keyword"));
        this.setState({ cobadata: "asdasdas test" });
        console.log("valuecoba " + this.state.cobadata);
        this.fetch({ pagination });
    };

    render() {
        const { data, pagination, loading } = this.state;
        return (
            <div style={{ margin: '15px 20px' }}>
                <div className="head-content">
                    <Title level={4}>Cash Collateral Management</Title>
                </div>
                <Form
                    {...formItemLayout}
                    size={componentSize}
                    layout="horizontal"
                    ref={this.formRef} name="control-ref"
                    initialValues={{ size: componentSize }}
                    labelAlign="left"
                >
                    {this.state.expand ? (<div>
                        <Form.Item label="Keyword">
                            <Input />
                        </Form.Item>
                    </div>
                    ) : (
                        <div>
                            <Form.Item label="Currency Code">
								<Input />
							</Form.Item>
                            <Form.Item label="Currency Name">
								<Input />
							</Form.Item>
                        </div>
                    )}

                    <Form.Item {...tailLayout}>
                        <Button
							type="primary"
							htmlType="submit"
							tyle={{ marginRight: '15px' }}>
							Search
                        </Button>
						<Button
							style={{ margin: '0 8px' }}
							onClick={this.onReset}>
							Clear
                        </Button>
						<Button
							htmlType="submit"
							onClick={() => {
								this.setState({
									expand: !this.state.expand
								});
							}}>
							{this.state.expand ? (<div><DownOutlined /> Advance Search</div>) :
								(<div><UpOutlined /> Simple Search</div>)}
						</Button>
                    </Form.Item> 
                </Form>

                <div style={{ margin: '15px 20px' }} scroll={{ x: 1300 }}>
                    <Row justify="end">
                        <Col span={8}>
                            <Link to={{
                                pathname: `/administration/ViewEditCCMgt`,
                                state: {
                                    id: '0',
                                    action: "Add New",
                                    disable: false,
                                }
                            }}>
                                <Button type="primary" htmlType="submit" style={{ marginBottom: '15px' }}>
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
                        pagination={pagination}
                        loading={loading}
                        onChange={this.handleTableChange}
                        bordered
                        size="middle"
                    />
                </div>

            </div>
        )
    }
}

export default CashCollMgt