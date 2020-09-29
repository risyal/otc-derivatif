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
function callback(key) {
	console.log(key);
}

const columnsJibor = [
	{
		title: 'No.',
		dataIndex: 'no',
	},
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

const columnsJisdor= [
	{
		title: 'No.',
		dataIndex: 'no',
	},
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
		title: 'No.',
		dataIndex: 'no',
	},
	{
		title: 'Date',
		dataIndex: 'date',
	},
	{
		title: 'IndONIA (%)',
		dataIndex: 'indonia',
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

const dataJibor = [
	{
		key: '1',
		no: '1',
		date: '20-07-2020',
		week1: '4.35000',
		month1: '4.55769',
		months3: '4.65000',
		months6: '4.85577',
		months12: '5.05769',
	},
	{
		key: '2',
		no: '2',
		date: '19-07-2020',
		week1: '0.00000',
		month1: '0.00000',
		months3: '0.00000',
		months6: '0.00000',
		months12: '0.00000',      
	},
	{
		key: '3',
		no: '3',
		date: '18-07-2020',
		week1: '4.10000',
		month1: '4.30385',
		months3: '4.39798',
		months6: '4.57981',
		months12: '4.10000',        
	},			
];

const dataIndonia = [
	{
		key: '1',
		no: '1',
		date: '20-07-2020',
		indonia: '0.00000',
	},
	{
		key: '2',
		no: '2',
		date: '19-07-2020',
		indonia: '1.08760',     
	},
	{
		key: '3',
		no: '3',
		date: '18-07-2020',
		indonia: '4.63200',       
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
		dataJibor: [],
		dataJisdor: [],
		dataIndonia: [],
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
        axios.get(`http://localhost:8080/referencejisdors`)
            .then(res => {
                const dataJisdor = res.data.content;
                this.setState({
                    loading: false,
                    dataJisdor,
                    pagination: {
                        ...params.pagination,
                    },
                })
                console.log(dataJisdor)
		})
		//,
		// axios.get(`http://localhost:8080/referencejidors`)
		// 	.then(res => {
		// 		const dataJidor = res.data.content;
		// 		this.setState({
		// 			loading: false,
		// 			dataJidor,
		// 			pagination: {
		// 				...params.pagination,
		// 			},
		// 		})
		// 		console.log(dataJidor)
		// 	}),
		// axios.get(`http://localhost:8080/referenceindonias`)
        //     .then(res => {
        //         const dataIndonia = res.data.content;
        //         this.setState({
        //             loading: false,
        //             dataIndonia,
        //             pagination: {
        //                 ...params.pagination,
        //             },
        //         })
        //         console.log(dataIndonia)
        //     })
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
		const { dataJibor, dataJisdor, dataIndonia, pagination, loading } = this.state;
        return (
			<div style={{ margin: '15px 20px' }} scroll={{ x: 1300 }}>
				<Tabs onChange={callback} type="card">
                 <TabPane tab="JIBOR" key="1" >
                     <Form
						{...formItemLayout}
						size={componentSize}
						layout="horizontal"
						ref={this.formRef} name="control-ref"
						initialValues={{ size: componentSize }}
						labelAlign="left"
					>
						<Form.Item label="Date" name="keyword">
							<DatePicker style={{ width: '100%' }}/>
						</Form.Item>
						<Form.Item {...tailLayout}>
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
								pathname: `/administration/ViewEditJibor`,
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
                        pagination={pagination}
                        columns={columnsJibor}
                        dataSource={dataJibor}
						onChange={this.handleTableChange}
                        bordered
                        size="middle"
                    />
                </TabPane>

                <TabPane tab="JISDOR" key="2">
					<Form
						{...formItemLayout}
						size={componentSize}
						layout="horizontal"
						ref={this.formRef} name="control-ref"
						initialValues={{ size: componentSize }}
						labelAlign="left"
					>
						<Form.Item label="Date" name="keyword">
							<DatePicker style={{ width: '100%' }}/>
						</Form.Item>
						<Form.Item {...tailLayout}>
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
								pathname: `/administration/ViewEditJisdor`,
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
						pagination={pagination}
						columns={columnsJisdor}
						dataSource={dataJisdor}
						loading={loading}
                        onChange={this.handleTableChange}
						bordered
						size="middle"
					/>
                </TabPane>

                <TabPane tab="INDONIA" key="3">
					<Form
						{...formItemLayout}
						size={componentSize}
						layout="horizontal"
						ref={this.formRef} name="control-ref"
						initialValues={{ size: componentSize }}
						labelAlign="left"
					>
						<Form.Item label="Date" name="keyword">
							<DatePicker style={{ width: '100%' }}/>
						</Form.Item>
						<Form.Item {...tailLayout}>
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
								pathname: `/administration/ViewEditIndonia`,
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
						pagination={pagination}
						columns={columnsIndonia}
						dataSource={dataIndonia}
						loading={loading}
                        onChange={this.handleTableChange}
						bordered
						size="middle"
					/>
                </TabPane>
            </Tabs>
			</div>
		)
	}

}

export default EditReferenceRate