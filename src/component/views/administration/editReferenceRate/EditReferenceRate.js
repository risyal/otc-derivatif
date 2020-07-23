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

function EditReferenceRate(){   
	const [componentSize] = useMemo(() => 'middle');
    const [formItemLayout] = useState({
        labelCol: {
            xs: { span: 24 },
            sm: { span: 6 },
        },
        wrapperCol: {
            xs: { span: 24 },
            sm: { span: 16 },
        },
	});
	const { TabPane } = Tabs;
	function callback(key) {
        console.log(key);
    }

	const [columnsJibor] = useState([
		{
			title: 'No.',
			dataIndex: 'no',
			key: 'no',
		},
		{
			title: 'Date',
			dataIndex: 'date',
			key: 'date',
		},
		{
			title: '1 Week',
			dataIndex: 'week1',
			key: 'week1',
		},
		{
			title: '1 Month',
			dataIndex: 'month1',
			key: 'month1',
		},
		{
			title: '3 Months',
			dataIndex: 'months3',
			key: 'months3',
		},
		{
			title: '6 Months',
			dataIndex: 'months6',
			key: 'months6',
		},
		{
			title: '12 Months',
			dataIndex: 'months12',
			key: 'months12',
		},
		{
			title: 'Action',
			key: 'action',
			fixed: 'right',
			render: (text, record) => (
				<Dropdown
					overlay={
						<Menu>
							<Menu.Item>
								<Link to={{
									pathname: `/administration/ViewEditJibor`,
									state: {
										id: record.key,
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
										id: record.key,
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
	]);
    const [dataJibor] = useState([
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
	]);
	
	const [columnsJisdor] = useState([
		{
			title: 'No.',
			dataIndex: 'no',
			key: 'no',
		},
		{
			title: 'Date',
			dataIndex: 'date',
			key: 'date',
		},
		{
			title: 'Value',
			dataIndex: 'value',
			key: 'value',
		},
		{
			title: 'Action',
			key: 'action',
			fixed: 'right',
			render: (text, record) => (
				<Dropdown
					overlay={
						<Menu>
							<Menu.Item>
								<Link to={{
									pathname: `/administration/ViewEditJisdor`,
									state: {
										id: record.key,
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
										id: record.key,
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
	]);
    const [dataJisdor] = useState([
		{
			key: '1',
			no: '1',
			date: '20-07-2020',
			value: '14,832.00',
		},
		{
			key: '2',
			no: '2',
			date: '19-07-2020',
			value: '14,780.00',     
		},
		{
			key: '3',
			no: '3',
			date: '18-07-2020',
			value: '14,632.00',       
		},			
	]);
	
	const [columnsIndonia] = useState([
		{
			title: 'No.',
			dataIndex: 'no',
			key: 'no',
		},
		{
			title: 'Date',
			dataIndex: 'date',
			key: 'date',
		},
		{
			title: 'IndONIA (%)',
			dataIndex: 'indonia',
			key: 'indonia',
		},
		{
			title: 'Action',
			key: 'action',
			fixed: 'right',
			render: (text, record) => (
				<Dropdown
					overlay={
						<Menu>
							<Menu.Item>
								<Link to={{
									pathname: `/administration/ViewEditIndonia`,
									state: {
										id: record.key,
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
										id: record.key,
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
	]);
    const [dataIndonia] = useState([
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
	]);
	
	const [exportButtton] = useState(<Button
        type="primary"
        style={{
            marginBottom: '15px',
            paddingBottom: '15px',
            float: 'right',
            height: '35px'
        }}
        icon={<DownloadOutlined />}>Export File</Button>);

  	return(
		<div style={{ margin: '15px 20px' }} scroll={{ x: 1300 }}>
            <Tabs onChange={callback} type="card">
                <TabPane tab="JIBOR" key="1" >
                    <Form
						{...formItemLayout}
						size={componentSize}
						layout="horizontal"
						initialValues={{ size: componentSize }}
						labelAlign="left"
					>
						<Form.Item label="Date" >
							<DatePicker style={{ width: '100%' }}/>
						</Form.Item>
						<Form.Item wrapperCol={{ span: 12, offset: 6 }}>
							<Button
								type="primary"
								htmlType="submit"
								tyle={{ marginRight: '15px' }}>
								Search
							</Button>
						</Form.Item>
					</Form>

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
                        pagination={false}
                        columns={columnsJibor}
                        dataSource={dataJibor}
                        bordered
                        size="middle"
                    />
                </TabPane>

                <TabPane tab="JISDOR" key="2">
					<Form
						{...formItemLayout}
						size={componentSize}
						layout="horizontal"
						initialValues={{ size: componentSize }}
						labelAlign="left"
					>
						<Form.Item label="Date" >
							<DatePicker style={{ width: '100%' }}/>
						</Form.Item>
						<Form.Item wrapperCol={{ span: 12, offset: 6 }}>
							<Button
								type="primary"
								htmlType="submit"
								tyle={{ marginRight: '15px' }}>
								Search
							</Button>
						</Form.Item>
					</Form>

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
						pagination={false}
						columns={columnsJisdor}
						dataSource={dataJisdor}
						bordered
						size="middle"
					/>
                </TabPane>

                <TabPane tab="INDONIA" key="3">
					<Form
						{...formItemLayout}
						size={componentSize}
						layout="horizontal"
						initialValues={{ size: componentSize }}
						labelAlign="left"
					>
						<Form.Item label="Date" >
							<DatePicker style={{ width: '100%' }}/>
						</Form.Item>
						<Form.Item wrapperCol={{ span: 12, offset: 6 }}>
							<Button
								type="primary"
								htmlType="submit"
								tyle={{ marginRight: '15px' }}>
								Search
							</Button>
						</Form.Item>
					</Form>

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
						pagination={false}
						columns={columnsIndonia}
						dataSource={dataIndonia}
						bordered
						size="middle"
					/>
                </TabPane>
            </Tabs>
			
		</div>
	)

}

export default EditReferenceRate