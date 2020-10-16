import React from 'react';
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
import { DownOutlined, UpOutlined, DownloadOutlined } from '@ant-design/icons';
import { Link } from "react-router-dom";
import OtherLink from '../../config/OtherLink';
import API from "../../config/Api";

const { Title } = Typography;
const ListLink = OtherLink.filter((otherMenu) => {
    return otherMenu.useFor === "collateral"
});

const columns = [
    {
        title: 'Participant Code',
        dataIndex: 'memberId',
        width: 100,
    }, {
        title: 'Source Acc',
        dataIndex: 'sourceAccount',
        width: 100,
    }, {
        title: 'Dest Account',
        dataIndex: 'sourceTarget',
        width: 100,
    }, {
        title: 'Instrument Code',
        dataIndex: 'instrumentCode',
        width: 100,
    }, {
        title: 'Value',
        dataIndex: 'value',
        width: 100,
    }, {
        title: 'Settlement Date',
        dataIndex: 'settlementDate',
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
                                pathname: ListLink.find((pathLink) => {
                                    return pathLink.useIn === 'viewinstructioncolw'
                                }).linkTo,
                                state: {
                                    id: record.id,
                                    action: "View",
                                    disable: true,
                                    linkBack: "/collateralManagement/instructionColw",
                                }
                            }} style={{ marginRight: '20px' }}>View
                            </Link>
                        </Menu.Item>
                        <Menu.Item>
                            <Link to={{
                                pathname: ListLink.find((pathLink) => {
                                    return pathLink.useIn === 'cancelinstructioncolw'
                                }).linkTo,
                                state: {
                                    id: record.id,
                                    action: "Cancel",
                                    disable: false,
                                    linkBack: "/collateralManagement/instructionColw",
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

class InstructionCOLW extends React.Component {
    formRef = React.createRef();
    state = {
        data: [],
        pagination: {
            current: 1,
            pageSize: 5,
        },
        search: {
            participantCode: null,
            sourceAccount: null,
            destinationAccount: null,
            instrumentCode: null,
        },
        loading: true,
        cobadata: "test",
        expand: true,
    }
    componentDidMount() {
        const { pagination } = this.state;
        this.fetch({ pagination });
    }
    handleTableChange = (pagination, filters, sorter, extra) => {
        console.log('paramasdasds', pagination, filters, sorter, extra);
        this.fetch({
            pagination,
        });
    };

    fetch = async (params = {}) => {
        const paramsSearch = ({
            participantCode: this.formRef.current.getFieldValue("keyword"),
            sourceAccount: this.formRef.current.getFieldValue("keyword"),
            destinationAccount: this.formRef.current.getFieldValue("keyword"),
            instrumentCode: this.formRef.current.getFieldValue("keyword"),
            settlementPeriod: this.formRef.current.getFieldValue("keyword"),
            transactionType:'COLW'
        })

        this.setState({ loading: true });
        await API("GET", "collateral", "collateraltransactions", paramsSearch)
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
            search: {
                participantCode: this.formRef.current.getFieldValue("keyword"),
                sourceAccount: this.formRef.current.getFieldValue("keyword"),
                destinationAccount: this.formRef.current.getFieldValue("keyword"),
                instrumentCode: this.formRef.current.getFieldValue("keyword"),
                settlementPeriod: this.formRef.current.getFieldValue("keyword"),
            }
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
                    <Title level={4}>Instruction - COLW</Title>
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
                                <Form.Item label="Participant Code" >
                                    <Input />
                                </Form.Item>
                                <Form.Item label="Source Account" >
                                    <Input />
                                </Form.Item>
                                <Form.Item label="Destination Account" >
                                    <Input />
                                </Form.Item>
                                <Form.Item label="Instrument Code" >
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
                                pathname: ListLink.find((pathLink) => {
                                    return pathLink.useIn === 'addinstructioncolw'
                                }).linkTo,
                            }}><Button type="primary" htmlType="submit" style={{ marginBottom: '15px' }}>
                                    Add New Instruction
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

export default InstructionCOLW
