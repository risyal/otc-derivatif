import React from 'react';
import {
    Form,
    Input,
    Button,
    Table,
    Row,
    Col,
    Typography
} from 'antd';
import { DownOutlined, UpOutlined, DownloadOutlined } from '@ant-design/icons';
import API from "../../config/Api";

const { Title } = Typography;
const columns = [
    {
        title: 'Event',
        dataIndex: 'event',
        width: 100,
    },
    {
        title: 'Event Date',
        dataIndex: 'eventDatetime',
        width: 100,
    },
    {
        title: 'Event Type',
        dataIndex: 'eventType',
        width: 100,
    },
    {
        title: 'Username',
        dataIndex: 'username',
        width: 100,
    },
    {
        title: 'Detail/Note',
        dataIndex: 'description',
        width: 100,
        key: 'detailNote',
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
    
class AuditTrail extends React.Component {
    formRef = React.createRef();
	state = {
		data: [],
		pagination: {
			current: 1,
			pageSize: 5,
		},
		search: {
			username: null,
			event: null,
			eventDate: null,
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
            username: this.formRef.current.getFieldValue("keyword"),
			event: this.formRef.current.getFieldValue("keyword"),
			eventDate: this.formRef.current.getFieldValue("keyword")
        })

        this.setState({ loading: true });
        await API("GET", "administration", "audittrails", paramsSearch)
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
				username: this.formRef.current.getFieldValue("keyword"),
				event: this.formRef.current.getFieldValue("keyword"),
				eventDate: this.formRef.current.getFieldValue("keyword"),
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
                	<Title level={4}>Audit Trail</Title>
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
                            <Form.Item label="Username">
                                <Input />
                            </Form.Item>
                            <Form.Item label="Event">
                                <Input />
                            </Form.Item>
                            <Form.Item label="Event Date">
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

                <div style={{ margin: '15px 20px' }} scroll={{ x: 1300 }}>
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
            </div>
        )
    }

}


// function AuditTrail() {
//     const [expand, setExpand] = useState(true);
//     const [form] = Form.useForm();
//     const [componentSize] = useMemo(() => 'middle');
//     const [formItemLayout] = useState({
//         labelCol: {
//             xs: { span: 24 },
//             sm: { span: 6 },
//         },
//         wrapperCol: {
//             xs: { span: 24 },
//             sm: { span: 16 },
//         },
//     });

//     const [columns] = useState([
//         {
//             title: 'Date',
//             dataIndex: 'date',
//             width: 100,
//             key: 'date',
//         },
//         {
//             title: 'Time',
//             dataIndex: 'time',
//             width: 100,
//             key: 'time',
//         },
//         {
//             title: 'User',
//             dataIndex: 'user',
//             width: 100,
//             key: 'user',
//         },
//         {
//             title: 'Module/Service',
//             dataIndex: 'moduleService',
//             width: 100,
//             key: 'moduleService',
//         },
//         {
//             title: 'Activity',
//             dataIndex: 'activity',
//             width: 100,
//             key: 'activity',
//         },
//         {
//             title: 'Detail/Note',
//             dataIndex: 'detailNote',
//             width: 100,
//             key: 'detailNote',
//         },
//     ]);

//     const [data] = useState([
//         {
//         },
//         {
//         },
//         {
//         },
//     ]);

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
//                 <Title level={4}>Audit Trail</Title>
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
//                         <Form.Item label="User">
//                             <Input />
//                         </Form.Item>
//                         <Form.Item label="Activity">
//                             <Input />
//                         </Form.Item>
//                         <Form.Item label="Time">
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

//             <div style={{ margin: '15px 20px' }} scroll={{ x: 1300 }}>
//                 <Row justify="end">
//                     <Col span={4}>
//                         {/* <Link to={{
//                             pathname: `#`,
//                             state: {
//                                 id: '1',
//                                 action: "Edit",
//                                 disable: false,
//                             }
//                         }} > */}
//                         {exportButtton}
//                         {/* </Link> */}
//                     </Col>
//                 </Row>

//                 <Table
//                     columns={columns}
//                     dataSource={data}
//                     bordered
//                     size="middle"
//                 />
//             </div>
//         </div>
//     )
// }

export default AuditTrail