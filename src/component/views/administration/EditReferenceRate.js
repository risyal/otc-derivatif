import React from 'react';
import { Table } from 'antd';

function EditReferenceRate(){
    const columns = [
        {
            title: 'Ref. Code',
            dataIndex: 'code',
            filters: [
                {
                text: 'JIBOR',
                value: 'JIBOR',
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
          code: 'JIBOR',
          type: 'JIBOR',
          date: '30-02-2020',
          value: '',
        },
        {
          key: '2',
          code: 'JIBOR',
          type: 'JIBOR',
          date: '30-02-2020',
          value: '',        },
        {
          key: '3',
          code: 'JIBOR',
          type: 'JISDOR',
          date: '24-03-2020',
          value: '',        },
        {
          key: '4',
          code: 'JIBOR',
          type: 'LIBOR',
          date: '24-03-2020',
          value: '',
        },
      ];
      
      function onChange(pagination, filters, sorter, extra) {
        console.log('params', pagination, filters, sorter, extra);
      }


    return(
        <div>
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