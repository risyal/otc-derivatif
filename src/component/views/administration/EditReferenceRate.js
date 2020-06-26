import React from 'react';
import { 
  Form,
  Input,
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
          filters: [
              {
                text: 'JIBOR1',
                value: 'JIBOR1',
              },
              {
                text: 'JIBOR2',
                value: 'JIBOR2',
              },
              {
                text: 'JIBOR3',
                value: 'JIBOR3',
              },
          ],
          onFilter: (value, record) => record.code.indexOf(value) === 0,
      },
      {
          title: 'Ref. Type',
          dataIndex: 'type',
          filters: [
              {
                  text: 'JIBOR',
                  value: 'JIBOR',
              },
              {
                  text: 'JISDOR',
                  value: 'JISDOR',
              },
              {
                  text: 'INDONIA',
                  value: 'INDONIA',
              },
              {
                  text: 'LIBOR',
                  value: 'LIBOR',
              },
          ],
          onFilter: (value, record) => record.type.indexOf(value) === 0,
      },
      {
          title: 'Date',
          dataIndex: 'date',
          defaultSortOrder: 'descend',
          sorter: (a, b) => a.date - b.date,
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
                size={componentSize}
                layout="horizontal"
                initialValues={{ size: componentSize }}
            >
                <Form.Item label="Search">
                    <Input.Group compact>
                        <Form.Item>
                            <Select placeholder="Select filter">
                                <Option value="refType">Ref. Type</Option>
                                <Option value="value">Value</Option>
                            </Select>
                        </Form.Item>
                        <Form.Item>
                            <Input style={{ width: '100%' }} />
                        </Form.Item>
                        <Form.Item>
                            <Button type="primary" htmlType="submit">
                                Go
                            </Button>
                        </Form.Item>
                    </Input.Group>
                </Form.Item>
            </Form>
        
            <Table
              columns={columns}
              dataSource={data}
              bordered
              size="middle"
              // scroll={{ x: 'calc(700px + 50%)' }}
              onChange={onChange}
          />
      </div>
  )

}

export default EditReferenceRate