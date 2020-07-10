import React, { useState } from 'react';
import {
    Form,
    Input,
    Button,
    Select,
    Table,
    Dropdown,
    Menu,
	DatePicker
} from 'antd';
import { Link } from "react-router-dom";
import { DownOutlined, UpOutlined } from '@ant-design/icons';

function EditReferenceRate(){
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
          title: 'Ref. Code',
          dataIndex: 'code',
          key: 'code',
      },
      {
          title: 'Ref. Type',
          dataIndex: 'type',
          key: 'type',
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
								pathname: `/administration/ViewDeleteRRate`,
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
								pathname: `/administration/ViewEditRRate`,
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
								pathname: `/administration/ViewDeleteRRate`,
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
    ];
    
    const data = [
      {
        key: '1',
        code: 'JIBOR1',
        type: 'JIBOR',
        date: '24-03-2020',
        value: 'Value',
      },
      {
        key: '2',
        code: 'JIBOR1',
        type: 'INDONIA',
        date: '24-03-2020',
        value: 'Value2',        },
      {
        key: '3',
        code: 'JIBOR2',
        type: 'JISDOR',
        date: '24-03-2020',
        value: 'Value3',        },
      {
        key: '4',
        code: 'JIBOR3',
        type: 'LIBOR',
        date: '24-03-2020',
        value: 'Value4',
      },
    ];
    
    const { Option } = Select;

  	return(
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
					<Form.Item label="Date">
						<DatePicker style={{ width: '100%' }} />
					</Form.Item>
					<Form.Item label="Ref. Code">
						<Input />
					</Form.Item>
					<Form.Item label="Ref. Type">
						<Select placeholder="Select Type">
							<Option value="jibor">JIBOR</Option>
							<Option value="indonia">INDONIA</Option>
							<Option value="jisdor">JISDOR</Option>
							<Option value="libor">LIBOR</Option>
                        </Select>
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
			</div>
		</div>
	)

}

export default EditReferenceRate