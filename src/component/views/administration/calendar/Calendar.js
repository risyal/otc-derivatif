import React, { useState, useMemo } from 'react';
import {
    Button,
    Table,
    Dropdown,
    Menu,
    Row,
    Col,
    Select,
    Typography
} from 'antd';
import { Link } from "react-router-dom";
import { DownloadOutlined } from '@ant-design/icons';

import axios from 'axios';
const { Title } = Typography;

const { Option } = Select;
const columns = [
    {
        title: 'Date',
        dataIndex: 'date',
    },
    {
        title: 'Information',
        dataIndex: 'information',
    },
    {
        title: 'Action',
        dataIndex: 'action',
        render: (text, record) => (
            <Dropdown
                overlay={
                    <Menu>
                        <Menu.Item>
                            <Link to={{
                                pathname: `/administration/ViewEditCalendar`,
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
                                pathname: `/administration/ViewDeleteCalendar`,
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
    {
        title: 'Last Update Calendar',
        dataIndex: 'lastUpdate',
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
        offset: 8,
        span: 16,
    },
};

class Calendar extends React.Component {
    formRef = React.createRef();
    state = {
        data: [],
        pagination: {
            current: 1,
            pageSize: 5,
        },
        search: {
            date: null,
            information: null,
            lastUpdate: null,
            note: null,
        },
        loading: true,
        cobadata: "test",
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
        axios.get(`http://localhost:8080/calendarmarketholidays`)
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
           
        });
        const { pagination } = this.state;
        this.setState({ cobadata: "asdasdas test" });
        console.log("valuecoba " + this.state.cobadata);
        this.fetch({ pagination });
    };
    render() {
        const { data, pagination, loading } = this.state;
        return (
            <div>
                <div className="head-content">
                    <Title level={4}>Calendar</Title>
                </div>
                <Link to={{
                    pathname: `/administration/ViewEditCalendar`,
                    state: {
                        id: '0',
                        action: "Add New",
                        disable: false,
                    }
                }}>
                    <Button type="primary" htmlType="submit" style={{ marginBottom: '15px', marginRight: '15px' }}>
                        Add New
                        </Button>
                </Link>
                <Button type="primary">Import</Button>
                <Select style= {{ float: 'right', width: '15%' }} placeholder="Select a year">
                    <Option value="2020">2020</Option>
                    <Option value="2019">2019</Option>
                    <Option value="2018">2018</Option>
                </Select>
                
    
                <Row justify="end">
                    <Col span={4}>
                        {exportButtton}
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
        )  
    }
}

export default Calendar