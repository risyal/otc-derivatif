import React, { useState } from 'react';
import {
	Form,
	Input,
	Button,
	Table,
	Dropdown,
	Menu,
	TimePicker,
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
		title: 'Parameter',
		dataIndex: 'parameter',
		key: 'parameter',
	},
	{
		title: 'Start Time',
		dataIndex: 'startTime',
		key: 'startTime',
	},
	{
		title: 'End Time',
		dataIndex: 'endTime',
		key: 'endTime',
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


class EditParameter extends React.Component {
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
		this.fetch({
			pagination,
		});
	}; fetch = (params = {}) => {
		const paramSearch = new URLSearchParams([['param', 'ical']]);
		/*  {
			 param: this.formRef.current.getFieldValue("keyword"),
			 value: this.formRef.current.getFieldValue("keyword"),
			 valueType: this.formRef.current.getFieldValue("keyword"),
			 note: this.formRef.current.getFieldValue("keyword")
		 }; */
		this.setState({ loading: true });
		axios.get(`http://localhost:8080/timeparameters`, {
			params: {
				//code: this.formRef.current.getFieldValue("keyword"),
				//name: this.formRef.current.getFieldValue("keyword"),
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
			})
	};
	onReset = () => {
		this.formRef.current.resetFields();
	};
	handleSearch = (e) => {
		e.preventDefault();
		this.setState({
			search: {
				//code: this.formRef.current.getFieldValue("keyword"),
				//name: this.formRef.current.getFieldValue("keyword"),
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
                	<Title level={4}>Time Parameter</Title>
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
							<Form.Item label="Parameter">
								<Input />
							</Form.Item>
							<Form.Item label="Start Time">
								<TimePicker style={{ width: '100%' }} />
							</Form.Item>
							<Form.Item label="End Time">
								<TimePicker style={{ width: '100%' }} />
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
						{/* <Col span={8}>
							<Link to={{
								pathname: `/administration/ViewEditParam`,
								state: {
									id: '0',
									action: "Add New",
									disable: false,
								}
							}}><Button type="primary" htmlType="submit" style={{ marginBottom: '15px' }}>
									Add New Data
                            </Button>
							</Link>
						</Col> */}
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

export default EditParameter