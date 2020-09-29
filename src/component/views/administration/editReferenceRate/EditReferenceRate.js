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
} from 'antd';
import {
	DownloadOutlined
} from '@ant-design/icons';
import { Link } from "react-router-dom";

import axios from 'axios';

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

const { TabPane } = Tabs;

const columnsJibor = [
	{
		title: 'Date',
		dataIndex: 'date',
	},
	{
		title: '1 Week',
		dataIndex: 'week1',
	},
	{
		title: '1 Month',
		dataIndex: 'month1',
	},
	{
		title: '3 Months',
		dataIndex: 'months3',
	},
	{
		title: '6 Months',
		dataIndex: 'months6',
	},
	{
		title: '12 Months',
		dataIndex: 'months12',
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
		offset: 8,
		span: 16,
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
			pageSize: 5,
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
		const { pagination } = this.state;
		const valueTab = this.state.activeKeyTab;
		this.fetch({ pagination, valueTab });
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

	handleChange(e) {
		this.setState({ activeKeyTab: e });
		const { pagination } = this.state;
		const valueTab = e;
		this.fetch({ pagination, valueTab });
	}
	handleTableChange = (pagination, filters, sorter, extra) => {
		console.log('paramasdasds', pagination, filters, sorter, extra);
		this.fetch({
			pagination,
		});
	};

	fetch = (params = {}) => {
		console.log("params", params);
		this.setState({ loading: true });
		if (params.valueTab == "1") {
			axios.get(`http://localhost:8080/referencejibors`)
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
		if (params.valueTab == "2") {
			axios.get(`http://localhost:8080/referencejisdors`)
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
			axios.get(`http://localhost:8080/referenceindonias`)
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
									size="middle" />
							</TabPane>
					)
					}
				</Tabs>
			</div >
		)
	}

}

export default EditReferenceRate