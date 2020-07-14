import React, { useState } from 'react';
import { 
    Form,  
    Button, 
    Table,
    Input,
    DatePicker,
} from 'antd';
import { DownOutlined, UpOutlined, DownloadOutlined } from '@ant-design/icons';

function FeeReport(){
	const [expand, setExpand] = useState(true);
    const [form] = Form.useForm();
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

    const columns = [
        {
            title: 'Trade Date',
            dataIndex: 'tradeDate',
            key: 'tradeDate',
            width: 100,
        },
        {
            title: 'Member ID',
            dataIndex: 'memberID',
            key: 'memberID',
            width: 100,
        },
        {
            title: 'Member Name',
            dataIndex: 'memberName',
            key: 'memberName',
            width: 100,
        },
        {
            title: 'Contract ID',
            dataIndex: 'contractID',
            key: 'contractID',
            width: 100,
        },
        {
            title: 'Contract Volume',
            children: [
                {
                    title: 'Receiver (Sell)',
                    width: 100,
                    dataIndex: 'receiver',
                    key: 'receiver',
                }, {
                    title: 'Payer (Buy)',
                    width: 100,
                    dataIndex: 'payer',
                    key: 'payer',
                }
            ]
        },
        {
            title: 'Maturity',
            dataIndex: 'maturity',
            key: 'maturity',
            width: 100,
        },
        {
            title: 'Notional Value',
            dataIndex: 'notionalValue',
            key: 'notionalValue',
            width: 100,
        },
        {
            title: 'Fee',
            children: [
                {
                    title: 'Maintenance',
                    width: 100,
                    dataIndex: 'maintenance',
                    key: 'maintenance',
                }, {
                    title: 'Registration',
                    width: 100,
                    dataIndex: 'registration',
                    key: 'registration',
                }, {
                    title: 'Ancillary Services',
                    width: 100,
                    dataIndex: 'ancillaryServices',
                    key: 'ancillaryServices',
                }
            ]
        },
        {
            title: 'Settlement Date',
            dataIndex: 'settlementDate',
            key: 'settlementDate',
            width: 100,
        },
    ];
    const data = [
        {
        },
        {
        },
        {
        },
    ];

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
						<Form.Item label="Member ID">
							<Input />
						</Form.Item>
						<Form.Item label="Member Name">
							<Input />
						</Form.Item>
						<Form.Item label="Date">
							<DatePicker style={{ width: '100%' }} />
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
						{expand ? (<div><DownOutlined />Advance Search</div>) :
							(<div><UpOutlined />Simple Search</div>)}
					</Button>
				</Form.Item>
			</Form>

			<div style={{ margin: '15px 20px' }} scroll={{ x: 1300 }}>
				<Table
					columns={columns}
					dataSource={data}
					bordered
					size="middle"
				/>
				<Button type="primary" icon={<DownloadOutlined />}>
                    Export File
                </Button>
			</div>
        </div>
    )
}

export default FeeReport