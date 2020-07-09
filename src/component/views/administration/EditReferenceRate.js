import React from 'react';
import { 
  Form,
  Button,
  Select, 
  Table 
} from 'antd';

function EditReferenceRate(){
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
          render: () => <a>Edit</a>,
      },
    ];
    
    const data = [
      {
        key: '1',
        code: 'JIBOR1',
        type: 'JIBOR',
        date: '30-02-2020',
        value: '',
      },
      {
        key: '2',
        code: 'JIBOR1',
        type: 'JIBOR',
        date: '30-02-2020',
        value: '',        },
      {
        key: '3',
        code: 'JIBOR2',
        type: 'JISDOR',
        date: '24-03-2020',
        value: '',        },
      {
        key: '4',
        code: 'JIBOR3',
        type: 'LIBOR',
        date: '24-03-2020',
        value: '',
      },
    ];
    
    function onChange(pagination, filters, sorter, extra) {
      console.log('params', pagination, filters, sorter, extra);
    }


  return(
      <div style={{ margin: '15px 20px' }}>
          <Form
              {...formItemLayout}
              size={componentSize}
              layout="horizontal"
              initialValues={{ size: componentSize }}
              labelAlign="left"
          >
              <Form.Item label="Type">
                  <Select
                      placeholder="Select a Type"
                  >
                      <Option value="jibor">JIBOR</Option>
                      <Option value="jisdor">JISDOR</Option>
                      <Option value="libor">LIBOR</Option>
                      <Option value="indonia">INDONIA</Option>
                  </Select>
              </Form.Item>
              <Form.Item label="Value">
                  <Select
                      placeholder="Select a Value"
                  >
                      <Option value="value1">Value1</Option>
                      <Option value="value2">Value2</Option>
                      <Option value="value3">Value3</Option>
                  </Select>
              </Form.Item>
              <Form.Item wrapperCol={{ span: 12, offset: 6 }}>
                  <Button type="primary">
                      Search
                  </Button>
              </Form.Item>
          </Form>
        
            <Table
              columns={columns}
              dataSource={data}
              bordered
              size="middle"
              onChange={onChange}
          />
      </div>
  )

}

export default EditReferenceRate