import React from 'react';
import { Table } from 'antd';

function DefaultFundReport(){
    const columns = [
        {
            title: 'Member ID',
            dataIndex: 'memberID',
            key: 'memberID',
          },
          {
            title: 'Generate Date',
            dataIndex: 'generateDate',
            key: 'generateDate',
          },
          {
            title: 'Settlement Date',
            dataIndex: 'settlementDate',
            key: 'settlementDate',
          },
          {
            title: 'DF Usage Value',
            dataIndex: 'dfUsageValue',
            key: 'dfUsageValue',
          },
          {
            title: 'Remaining Balance',
            dataIndex: 'remainingBalance',
            key: 'remainingBalance',
          },
          {
            title: 'Accomplishment Value',
            dataIndex: 'accomplishmentValue',
            key: 'accomplishmentValue',
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

export default DefaultFundReport