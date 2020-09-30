import React, { useState } from 'react';
import { 
    Form,  
    Button, 
    Table,
    Input,
	DatePicker,
	Row,
    Col,
    Typography
} from 'antd';
import { DownOutlined, UpOutlined, DownloadOutlined } from '@ant-design/icons';
const { Title } = Typography;

function DailyTransactionReport(){
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
            title: 'UTI',
            dataIndex: 'uti',
        },
        {
            title: 'CM Code',
            dataIndex: 'cMCode',
        },
        {
            title: 'Counterparty Code',
            dataIndex: 'counterpartyCode',
        },
        {
            title: 'Product',
            dataIndex: 'product',
        },
        {
            title: 'Position',
            dataIndex: 'position',
        },
        {
            title: 'Rate',
            dataIndex: 'rate',
        },
        {
            title: 'Value',
            dataIndex: 'value',
        },
        {
            title: 'Tenor',
            dataIndex: 'tenor',
        },
        {
            title: 'Effective Date',
            dataIndex: 'effectiveDate',
        },
        {
            title: 'Payment Frequency',
            dataIndex: 'effectiveDate',
        },
        {
            title: 'Maturity Date',
            dataIndex: 'maturityDate',
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
            <div className="head-content">
                <Title level={4}>Daily Transaction Report</Title>
            </div>
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
						<Form.Item label="Company Name">
							<Input />
						</Form.Item>
						<Form.Item label="Trade Contract">
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
						{expand ? (<div><DownOutlined /> Advance Search</div>) :
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

			<div style={{ margin: '15px 0px 0px 0px' }} scroll={{ x: 1300 }}>
				<Table
					columns={columns}
					dataSource={data}
					bordered
					size="middle"
                    scroll={{ x: 'calc(700px + 50%)' }}
				/>
			</div>
        </div>
    )
}

export default DailyTransactionReport