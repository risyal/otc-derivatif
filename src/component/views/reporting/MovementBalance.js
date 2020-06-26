import React from 'react';
import { Form, DatePicker, Button, Table } from 'antd';

function MovementBalance(){
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
        <div style={{ margin: '15px 20px' }} scroll={{ x: 1300 }}>
          <Form layout="horizontal">
            <Form.Item label="Date">
                <DatePicker /> <Button type="primary" htmlType="submit">Go</Button>
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

export default MovementBalance