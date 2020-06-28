import React from 'react';
import {
    Form,
    Input,
    Button,
    Select, 
    Table
} from 'antd';

function RegisterContract(){
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

    const { Option } = Select;

    const columns = [
        {
            title: 'Product',
            dataIndex: 'product',
            key: 'product',
            width: 100,
          },
          {
            title: 'Parameter',
            dataIndex: 'parameter',
            key: 'parameter',
            width: 200,
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
        <div style={{ margin: '15px 20px' }} scroll={{ x: 1300 }}>
            <Form
                {...formItemLayout}
                size={componentSize}
                layout="horizontal"
                initialValues={{ size: componentSize }}
                labelAlign="left"
            >
                <Form.Item label="Product">
                    <Select
                        placeholder="Select a Product"
                    >
                        <Option value="irs">IRS</Option>
                        <Option value="ois">OIS</Option>
                        <Option value="dndf">DNDF</Option>
                    </Select>
                </Form.Item>
                <Form.Item label="Parameter">
                    <Input />
                </Form.Item>
                <Form.Item wrapperCol={{ span: 12, offset: 6 }}>
                    <Button type="primary" htmlType="submit">
                        Submit
                    </Button>
                </Form.Item>
            </Form>

            <Table
                columns={columns}
                dataSource={data}
                bordered
                size="middle"
            />
        </div>
        
    )

}


export default RegisterContract