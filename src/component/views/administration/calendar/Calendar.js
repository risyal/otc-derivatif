import React from 'react';
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
import API from "../../../config/Api";
import OtherLink from "../../../config/OtherLink";

const { Title } = Typography;

const ListLink = OtherLink.filter((otherMenu) => {
    return otherMenu.useFor === "calendar"
});
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
                                pathname: ListLink.find((pathLink) => {
                                    return pathLink.useIn === 'editcalendar'
                                }).linkTo,
                                state: {
                                    id: record.id,
                                    action: "Edit",
                                    disable: true,
                                }
                            }} style={{ marginRight: '20px' }}>Edit
                            </Link>
                        </Menu.Item>
                        <Menu.Item>
                            <Link to={{
                                pathname: ListLink.find((pathLink) => {
                                    return pathLink.useIn === 'deletecalendar'
                                }).linkTo,
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

const exportButtton = <Button
    type="primary"
    style={{
        marginBottom: '15px',
        paddingBottom: '15px',
        float: 'right',
        height: '35px'
    }}
    icon={<DownloadOutlined />}>Export File</Button>;

class Calendar extends React.Component {
    formRef = React.createRef();
    state = {
        data: [],
        pagination: {
            current: 1,
            pageSize: 5,
        },
        search: {
    
        },
        loading: true,
        cobadata: "test",
    }
    componentDidMount() {
        const { pagination } = this.state;
        this.fetch({ pagination });
    }
    handleTableChange = (pagination, filters, sorter, extra) => {
        this.fetch({
            pagination,
        });
    };
    fetch = async (params = {}) => {
        this.setState({ loading: true });
        await API("GET", "administration", "calendarmarketholidays")
            .then(res => {
                const data = res.data.content;
                this.setState({
                    loading: false,
                    data,
                    pagination: {
                        ...params.pagination,
                    },
                })
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
        this.fetch({ pagination });
    };
    render() {
        const { data, pagination, loading } = this.state;
        return (
            <div style={{ margin: '15px 20px' }}>
                <div className="head-content">
                    <Title level={4}>Calendar</Title>
                </div>
                <Link to={{
                    pathname: ListLink.find((pathLink) => {
                                    return pathLink.useIn === 'addcalendar'
                                }).linkTo,
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