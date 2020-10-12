import React from 'react';
import {
    Form,
    Input,
    Button,
    Table,
    DatePicker,
    Row,
    Col,
    Typography
} from 'antd';
import { DownOutlined, UpOutlined, DownloadOutlined } from '@ant-design/icons';
import API from "../../config/Api";

const { RangePicker } = DatePicker;
const { Title } = Typography;

const columns = [
    {
        title: 'Instruction Type',
        dataIndex: 'transactionType',
        width: 100,
    }, {
        title: 'Participant Code',
        dataIndex: 'memberId',
        width: 100,
    }, {
        title: 'Source Account',
        dataIndex: 'sourceAccount',
        width: 100,
    }, {
        title: 'Destination Account',
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
        title: 'Status',
        dataIndex: 'status',
        width: 100,
    }, {
        title: 'Remark',
        dataIndex: 'remark',
        width: 100,
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

class Inquiry extends React.Component {
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
            settlementPeriod: null,
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
        })

        this.setState({ loading: true });
        await API("GET", "administration", "collateraltransactions", paramsSearch)
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
                    <Title level={4}>Inquiry</Title>
                </div>
                <Form
                    {...formItemLayout}
                    size={componentSize}
                    layout="horizontal"
                    ref={this.formRef} name="control-ref"
                    initialValues={{ size: componentSize }}
                    labelAlign="left"
                > {this.state.expand ? (<div>
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
                            <Form.Item label="Settlement Period" >
                                <RangePicker style={{ width: '100%' }}/>
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
export default Inquiry
