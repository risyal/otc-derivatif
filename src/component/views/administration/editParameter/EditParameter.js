import React, { useState, useMemo } from 'react';
import {
	Form,
	Input,
	Button,
	Table,
	Dropdown,
	Menu,
	TimePicker, 
	Row,
	Col
} from 'antd';
import { Link } from "react-router-dom";
import { DownOutlined, UpOutlined, DownloadOutlined } from '@ant-design/icons';

function EditParameter() {
	const [expand, setExpand] = useState(true);
	const [form] = Form.useForm();
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
	
	const [columns] = useState([
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
									pathname: `/administration/ViewDeleteParam`,
									state: {
										id: record.key,
										action: "View",
										disable: true,
									}
								}} style={{ marginRight: '20px' }}>View
					</Link>
							</Menu.Item>
							<Menu.Item>
								<Link to={{
									pathname: `/administration/ViewEditParam`,
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
									pathname: `/administration/ViewDeleteParam`,
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
	
	const [data] = useState([
		{
			key: '1',
			parameter: 'ARMS Sends Reference/Master Data to SKD and Risk',
			startTime: '06:30',
			endTime: '',
		},
		{
			key: '2',
			parameter: 'Window Time for Trade Gateway',
			startTime: '06:30',
			endTime: '24:00',
		},
		{
			key: '3',
			parameter: 'Manual Trade Submission from SKD',
			startTime: '09:00',
			endTime: '16:00',
		},
		{
			key: '4',
			parameter: 'Trade Validation Gateway',
			startTime: '08:00',
			endTime: '16:00',
		},
		{
			key: '5',
			parameter: 'Trade Validation in SKD',
			startTime: '08:00',
			endTime: '16:00',
		},
		{
			key: '6',
			parameter: 'Collateral Blocking',
			startTime: '08:00',
			endTime: '16:00',
		},
		{
			key: '7',
			parameter: 'Trade Acceptance',
			startTime: '08:00',
			endTime: '16:00',
		},
		{
			key: '8',
			parameter: 'Trade Novation (and Basic Netting)',
			startTime: '08:00',
			endTime: '16:00',
		},
		{
			key: '9',
			parameter: 'IM Computation for new Trade',
			startTime: '08:00',
			endTime: '16:00',
		},
		{
			key: '10',
			parameter: 'MTM Computation',
			startTime: '08:00',
			endTime: '16:00',
		},
		{
			key: '11',
			parameter: 'Margin Call in Sufficient Collateral SKD',
			startTime: '06:30',
			endTime: '24:00',
		},
		{
			key: '12',
			parameter: 'Collateral Deposit by CM',
			startTime: '06:30',
			endTime: '17:00',
		},
		{
			key: '13',
			parameter: 'Net of MTM Margin',
			startTime: '19:00',
			endTime: '19:30',
		},
		{
			key: '14',
			parameter: 'Receipt JIBOR Benchmark Interest Rate',
			startTime: '11:00',
			endTime: '19:30',
		},
		{
			key: '15',
			parameter: 'Receipt JISDOR Benchmark FX Spot Rate',
			startTime: '10:00',
			endTime: '',
		},
		{
			key: '16',
			parameter: 'Obligation Crystallization',
			startTime: '18:00',
			endTime: '19:30',
		},
		{
			key: '17',
			parameter: 'Debit CM Settement Acc. to KPEI Settlement Acc.',
			startTime: '12:00',
			endTime: '13:00',
		},
		{
			key: '18',
			parameter: 'Reconciliatiion of Settlement Receipts',
			startTime: '13:00',
			endTime: '',
		},
		{
			key: '19',
			parameter: 'Credit CM Settement Acc. to KPEI Settlement Acc.',
			startTime: '13:30',
			endTime: '14:30',
		},
		{
			key: '20',
			parameter: 'Reconciliation of Settlement Receipts',
			startTime: '14:30',
			endTime: '',
		},
		{
			key: '21',
			parameter: 'Settlement of Exceptions (Settlement Failures in Normal Course)',
			startTime: '15:00',
			endTime: '17:00',
		},
		{
			key: '22',
			parameter: 'Default Mangement Process Initiated in Case of Default of CM',
			startTime: '17:30',
			endTime: '18:30',
		},
		{
			key: '23',
			parameter: 'Window for Trade Submission Closes',
			startTime: '16:00',
			endTime: '',
		},
		{
			key: '24',
			parameter: 'IM EOD Computation MTM Margin Computation',
			startTime: '16:00',
			endTime: '',
		},
		{
			key: '25',
			parameter: 'Stress Testing by RMS',
			startTime: '17:00',
			endTime: '19:00',
		},
		{
			key: '26',
			parameter: 'Reverse Stress Testing by RMS',
			startTime: '17:00',
			endTime: '19:00',
		},
		{
			key: '27',
			parameter: 'Back Testing by RMS',
			startTime: '17:00',
			endTime: '19:00',
		},
		{
			key: '28',
			parameter: 'Receipt Indonia Reference Rate',
			startTime: '19:30',
			endTime: '',
		},
		{
			key: '29',
			parameter: 'MTM Computation for OIS',
			startTime: '19:30',
			endTime: '',
		},
		{
			key: '30',
			parameter: 'Obligation Crystallization',
			startTime: '20:00',
			endTime: '',
		},
		{
			key: '31',
			parameter: 'EOD Reports Generation for member',
			startTime: '20:30',
			endTime: '',
		},
		{
			key: '32',
			parameter: 'EOD Reporst Generation for Regulatpr/Internal KPEI)',
			startTime: '20:30',
			endTime: '',
		},
		{
			key: '33',
			parameter: 'End of Day Process for Close of Business',
			startTime: '21:00',
			endTime: '',
		}
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

	return (
		<div style={{ margin: '15px 20px' }}>
			<Form
				{...formItemLayout}
				size={componentSize}
				layout="horizontal"
				initialValues={{ size: componentSize }}
				labelAlign="left"
			> {expand ? (<div>
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
							<TimePicker style={{width:'100%'}}	/>
						</Form.Item>
						<Form.Item label="End Time">
							<TimePicker style={{width:'100%'}}	/>
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
						onClick={() => {
							form.resetFields();
						}}>
							Clear
                    </Button>
					<Button
						htmlType="submit"
						onClick={() => {
							setExpand(!expand);
						}}>
						{expand ? (<div><DownOutlined /> Advance Search</div>) :
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
					bordered
					size="middle"
				/>
			</div>
		</div>
	)
}

export default EditParameter