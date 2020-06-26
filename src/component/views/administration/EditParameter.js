import React from 'react';
import { Table } from 'antd';

function EditParameter(){
    const columns = [
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
            render: () => <a>Edit</a>,
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
          <Table
              columns={columns}
              dataSource={data}
              bordered
              size="middle"
          />
        </div>
    )
}

export default EditParameter