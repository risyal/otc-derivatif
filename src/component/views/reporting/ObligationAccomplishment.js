import React from 'react';
import { Form, DatePicker, Button, Table } from 'antd';

function ObligationAccomplishment(){
    const columns = [
        {
            title: 'AK Code',
            dataIndex: 'akCode',
            key: 'akCode',
          },
          {
            title: 'Settlement Date',
            dataIndex: 'settlementDate',
            key: 'settlementDate',
          },
          {
            title: 'Accomplished Value',
            dataIndex: 'accomplishValue',
            key: 'accomplishValue',
          },
    ];
    const data = [
        {
        },
        {
        },
        {
        },
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

export default ObligationAccomplishment