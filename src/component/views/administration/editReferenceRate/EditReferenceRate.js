import React, { useState, useMemo } from 'react';
import {
	Form,
	Button,
	Table,
	Dropdown,
	Menu,
	Tabs,
	DatePicker,
	Row,
	Col,
	Typography
} from 'antd';
import {
	DownloadOutlined
} from '@ant-design/icons';
import { Link } from "react-router-dom";

import axios from 'axios';
const { Title } = Typography;

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

const { TabPane } = Tabs;

const columnsJibor = [
	{
		title: 'Date',
		dataIndex: 'date',
	},
	{
		title: '1 Week',
		dataIndex: 'rate1w',
	},
	{
		title: '1 Month',
		dataIndex: 'rate1m',
	},
	{
		title: '3 Months',
		dataIndex: 'rate3m',
	},
	{
		title: '6 Months',
		dataIndex: 'rate6m',
	},
	{
		title: '12 Months',
		dataIndex: 'rate12m',
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
								pathname: `/administration/ViewEditJibor`,
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
								pathname: `/administration/ViewDeleteJibor`,
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

const columnsJisdor = [
	{
		title: 'Date',
		dataIndex: 'date',
	},
	{
		title: 'Value',
		dataIndex: 'value',
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
								pathname: `/administration/ViewEditJisdor`,
								state: {
									id: record.id,
									action: "Edit",
									disable: false,
									activeKeyTab: "2",
								}
							}} style={{ marginRight: '20px' }}>Edit
							</Link>
						</Menu.Item>
						<Menu.Item>
							<Link to={{
								pathname: `/administration/ViewDeleteJisdor`,
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

const columnsIndonia = [
	{
		title: 'Date',
		dataIndex: 'date',
	},
	{
		title: 'IndONIA (%)',
		dataIndex: 'value',
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
								pathname: `/administration/ViewEditIndonia`,
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
								pathname: `/administration/ViewDeleteIndonia`,
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

class EditReferenceRate extends React.Component {
	formRef = React.createRef();
	state = {
		tab: [
			{
				key: "1",
				nameTab: "JIBOR",
				tableColumn: columnsJibor,
				pathAddNew: "/administration/ViewEditJibor",
			}, {
				key: "2",
				nameTab: "JISDOR",
				tableColumn: columnsJisdor,
				pathAddNew: "/administration/ViewEditJisdor",
			}, {
				key: "3",
				nameTab: "INDONIA",
				tableColumn: columnsIndonia,
				pathAddNew: "/administration/ViewEditIndonia",
			},
		],
		pagination: {
			current: 1,
			pageSize: 10,
			showSizeChanger: true,
			pageSizeOptions: ['10', '20', '30']
		},
		search: {
			date: null,
			information: null,
			lastUpdate: null,
			note: null,
		},
		dataReference: [],
		loading: true,
		cobadata: "test",
		activeKeyTab: "1",
	}
	componentDidMount() {
		this._isMounted = true;
		const { pagination } = this.state;
		const valueTab = this.state.activeKeyTab;
		this.fetch({ pagination, valueTab });
	}

	handleChange(e) {
		this.setState({ activeKeyTab: e });
		const { pagination } = this.state;
		const valueTab = e;
		this.fetch({ pagination, valueTab });
	}
	handleTableChange = (pagination, filters, sorter, extra) => {
		console.log('paramasdasds', pagination, filters, sorter, extra);
		const valueTab = this.state.activeKeyTab;
		this.fetch({
			pagination,
			valueTab,
		});
	};

	fetch = async (params = {}) => {
		this.setState({ loading: true });
		if (params.valueTab == "1") {
			await axios.get(`http://localhost:8080/referencejibors`)
				.then(res => {
					const dataReference = res.data.content;
					if (this._isMounted) {
						this.setState({
							loading: false,
							dataReference,
							pagination: {
								...params.pagination,
							},
						})
					}
				})
		}
		if (params.valueTab == "2") {
			await axios.get(`http://localhost:8080/referencejisdors`)
				.then(res => {
					const dataReference = res.data.content;
					this.setState({
						loading: false,
						dataReference,
						pagination: {
							...params.pagination,
						},
					})
				})
		}
		if (params.valueTab == "3") {
			await axios.get(`http://localhost:8080/referenceindonias`)
				.then(res => {
					const dataReference = res.data.content;
					this.setState({
						loading: false,
						dataReference,
						pagination: {
							...params.pagination,
						},
					})
				})
		}
	};

	componentWillUnmount() {
		this._isMounted = false;
	}
	onReset = () => {
		this.formRef.current.resetFields();
	};
	handleSearch = (e) => {
		e.preventDefault();
		const { pagination } = this.state;
		const { activeKeyTab } = this.state;
		this.fetch({ pagination, activeKeyTab });
	};
	render() {
		const { pagination, loading } = this.state;
		return (
			<div style={{ margin: '15px 20px' }} scroll={{ x: 1300 }}>
				<div className="head-content">
                	<Title level={4}>Edit Reference Rate</Title>
            	</div>
				<Tabs onChange={(e) => { this.handleChange(e) }
				}
					type="card" activeKey={this.state.activeKeyTab} >
					{this.state.tab.map(
						item =>
							<TabPane tab={item.nameTab} key={item.key} >
								<Form
									{...formItemLayout}
									size={componentSize}
									layout="horizontal"
									ref={this.formRef} name="control-ref"
									initialValues={{ size: componentSize }}
									labelAlign="left">
									<Form.Item label="Date" name="keyword">
										<DatePicker style={{ width: '100%' }} />
									</Form.Item>						<Form.Item {...tailLayout}>
										<Button type="primary" onClick={(e) => this.handleSearch(e)} style={{ marginRight: '10px' }} htmlType="submit">
											Submit
										</Button>
										<Button htmlType="button" onClick={this.onReset}>
											Reset
										</Button>
									</Form.Item>
								</Form>
								<Row justify="end">
									<Col span={8}>
										<Link to={{
											pathname: item.pathAddNew,
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
										{exportButtton}
									</Col>
								</Row>
								<Table
									pagination={pagination}
									columns={item.tableColumn}
									dataSource={this.state.dataReference}
									loading={loading}
									onChange={this.handleTableChange}
									bordered
									size="middle"
									rowKey='id' />
							</TabPane>
					)
					}
				</Tabs>
			</div >
		)
	}

}

export default EditReferenceRate