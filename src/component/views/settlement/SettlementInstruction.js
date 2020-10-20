import React from 'react'
import {
    Form,
    Input,
    Button,
    Table,
    DatePicker,
    Row,
    Col,
    Typography,
    Select
} from 'antd';
import moment from 'moment';
import { DownOutlined, UpOutlined, DownloadOutlined } from '@ant-design/icons';
import API from "../../config/Api";
const { Title } = Typography;
const { Option } = Select;

const columns = [
    {
        title: 'Reference',
        dataIndex: 'reference',
        key: 'reference',
        width: 100,
        fixed: 'left',
    }, {
        title: 'Member ID',
        children: [
            {
                title: 'SID',
                width: 100,
                dataIndex: 'sid',
                key: 'sid',
            }, {
                title: 'LEI',
                width: 100,
                dataIndex: 'lei',
                key: 'lei',
            }
        ]
    }, {
        title: 'Participant Code',
        dataIndex: 'clientId',
        width: 100,
    },{
        title: 'Instruction Type',
        dataIndex: 'instructionType',
        key: 'instructionType',
        width: 100,
    }, 
    // {
    //     title: 'Instruction Name',
    //     dataIndex: 'instructionName',
    //     key: 'instructionName',
    //     width: 100,
    // }, 
    {
        title: 'Instruction Date',
        dataIndex: 'instructionDate',
        key: 'instructionDate',
        width: 100,
    }, 
    {
        title: 'Settlement Date',
        dataIndex: 'settlementDate',
        key: 'settlementDate',
        width: 100,
    },
    {
        title: 'Source Account',
        dataIndex: 'sourceAccount',
        key: 'sourceAccount',
        width: 100,
    }, {
        title: 'Destination Account',
        dataIndex: 'targetAccount',
        key: 'destinationAccount',
        width: 100,
    }, {
        title: 'Value',
        dataIndex: 'value',
        key: 'value',
        width: 100,
    }, {
        title: 'Status',
        dataIndex: 'status',
        key: 'status',
        width: 100,
    }
]

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

const dateFormat = 'YYYY/MM/DD';

class SettlementInstruction extends React.Component {
	formRef = React.createRef();
	state = {
		data: [],
		pagination: {
			current: 1,
			pageSize: 5,
		},
		search: {
			instructionType: null,
			status: null,
            settlementDate: null,
            sid: null,
            lei: null,
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
            // instructionType: this.formRef.current.getFieldValue("keyword"),
			// status: this.formRef.current.getFieldValue("keyword"),
            // settlementDate: this.formRef.current.getFieldValue("keyword"),
            // sid: this.formRef.current.getFieldValue("keyword"),
            // lei: this.formRef.current.getFieldValue("keyword")
        })

        this.setState({ loading: true });
        await API("GET", "settlement", "inquirysettlementinstructions", paramsSearch)
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
				// instructionType: this.formRef.current.getFieldValue("keyword"),
				// status: this.formRef.current.getFieldValue("keyword"),
                // settlementDate: this.formRef.current.getFieldValue("keyword"),
                // sid: this.formRef.current.getFieldValue("keyword"),
				// lei: this.formRef.current.getFieldValue("keyword"),
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
                    <Title level={4}>Inquiry Settlement Instruction</Title>
                </div>
                <Form
                    {...formItemLayout}
                    size={componentSize}
                    layout="horizontal"
                    initialValues={{ size: componentSize }}
                    labelAlign="left"
                > {this.state.expand ? (<div>
                    <Form.Item label="Keyword">
                        <Input />
                    </Form.Item>
                </div>
                ) : (
                        <div>
                            <Form.Item label="Settlement Instruction Type" >
                                <Select placeholder="Select an Instruction Type">
                                    <Option value="type1">Type1</Option>
                                    <Option value="type2">Type2</Option>
                                    <Option value="type3">Type3</Option>
                                </Select>
                            </Form.Item>
                            <Form.Item label="Status" >
                                <Select placeholder="Select Status">
                                    <Option value="status1">Status1</Option>
                                    <Option value="status2">Status2</Option>
                                    <Option value="status3">Status3</Option>
                                </Select>
                            </Form.Item>
                            <Form.Item label="Settlement Date" >
                                <DatePicker style={{ width: '100%' }}
                                    defaultValue={moment('2020/01/23', dateFormat)} />
                            </Form.Item>
                            <Form.Item label="SID">
                                <Input />
                            </Form.Item>
                            <Form.Item label="LEI">
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
                scroll={{ x: 'calc(700px + 100%)' }}
            />
            </div>
        )
    }



}




// function SettlementInstruction() {

    
//     const [expand, setExpand] = useState(true);
//     const [form] = Form.useForm();
//     const [exportButtton] = useState(<Button
//         type="primary"
//         style={{
//             marginBottom: '15px',
//             paddingBottom: '15px',
//             float: 'right',
//             height: '35px'
//         }}
//         icon={<DownloadOutlined />}>Export File</Button>);

//     return (
//         <div style={{ margin: '15px 20px' }}>
//             <div className="head-content">
//                 <Title level={4}>Inquiry Settlement Instruction</Title>
//             </div>
//             <Form
//                 {...formItemLayout}
//                 size={componentSize}
//                 layout="horizontal"
//                 initialValues={{ size: componentSize }}
//                 labelAlign="left"
//             > {expand ? (<div>
//                 <Form.Item label="Keyword">
//                     <Input />
//                 </Form.Item>
//             </div>
//             ) : (
//                     <div>
//                         <Form.Item label="Settlement Instruction Type" >
//                             <Select placeholder="Select an Instruction Type">
//                                 <Option value="type1">Type1</Option>
//                                 <Option value="type2">Type2</Option>
//                                 <Option value="type3">Type3</Option>
//                             </Select>
//                         </Form.Item>
//                         <Form.Item label="Status" >
//                             <Select placeholder="Select Status">
//                                 <Option value="status1">Status1</Option>
//                                 <Option value="status2">Status2</Option>
//                                 <Option value="status3">Status3</Option>
//                             </Select>
//                         </Form.Item>
//                         <Form.Item label="Settlement Date" >
//                             <DatePicker style={{ width: '100%' }}
//                                 defaultValue={moment('2020/01/23', dateFormat)} />
//                         </Form.Item>
//                         <Form.Item label="SID">
//                             <Input />
//                         </Form.Item>
//                         <Form.Item label="LEI">
//                             <Input />
//                         </Form.Item>
//                     </div>
//                 )}
//                 <Form.Item wrapperCol={{ span: 12, offset: 6 }}>
//                     <Button
//                         type="primary"
//                         htmlType="submit"
//                         tyle={{ marginRight: '15px' }}>
//                         Search
//                                 </Button>
//                     <Button
//                         style={{ margin: '0 8px' }}
//                         onClick={() => {
//                             form.resetFields();
//                         }}>
//                         Clear
//                         </Button>
//                     <Button
//                         htmlType="submit"
//                         onClick={() => {
//                             setExpand(!expand);
//                         }}>
//                         {expand ? (<div><DownOutlined /> Advance Search</div>) :
//                             (<div><UpOutlined /> Simple Search</div>)}
//                     </Button>
//                 </Form.Item>
//             </Form>

//             <Row justify="end">
//                 <Col span={4}>
//                     {/* <Link to={{
//                         pathname: `#`,
//                         state: {
//                             id: '1',
//                             action: "Edit",
//                             disable: false,
//                         }
//                     }} > */}
//                     {exportButtton}
//                     {/* </Link> */}
//                 </Col>
//             </Row>

//             <Table
//                 columns={columns}
//                 dataSource={data}
//                 bordered
//                 size="middle"
//                 scroll={{ x: 'calc(700px + 100%)' }}
//             />
//         </div>

//     )

// }

export default SettlementInstruction
