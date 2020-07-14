import React, { useState } from 'react';
import { 
    Form,  
    Button, 
    Table,
    Input,
    DatePicker,
} from 'antd';
import { DownOutlined, UpOutlined, DownloadOutlined } from '@ant-design/icons';

function MovementBalance(){
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
            title: 'Member ID',
            dataIndex: 'memberID',
            key: 'memberID',
          },
          {
            title: 'Source Acc',
            dataIndex: 'sourceAcc',
            key: 'sourceAcc',
          },
          {
            title: 'Dest Acc',
            dataIndex: 'destAcc',
            key: 'destAcc',
          },
          {
            title: 'Value',
            dataIndex: 'value',
            key: 'value',
          },
          {
            title: 'Settlement Date',
            dataIndex: 'settlementDate',
            key: 'settlementDate',
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
						<Form.Item label="Value">
							<Input />
						</Form.Item>
						<Form.Item label="Settlement Date">
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

export default MovementBalance