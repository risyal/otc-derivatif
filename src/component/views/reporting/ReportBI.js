import React from 'react';
import { Table } from 'antd';

function ReportBI(){
    const columns = [
        {
            title: 'Member ID',
            dataIndex: 'memberID',
            key: 'memberID',
          },
          {
            title: 'Nama Perusahaan',
            dataIndex: 'namaPerusahaan',
            key: 'namaPerusahaan',
          },
          {
            title: 'Kontrak yang diperdagangkan',
            dataIndex: 'kontrakYangDiperdagangkan',
            key: 'kontrakYangDiperdagangkan',
          },
          {
            title: 'Detail of Economic Term',
            dataIndex: 'detailOfEconomicTerm',
            key: 'detailOfEconomicTerm',
          },
          {
            title: 'Notional Value',
            dataIndex: 'notionalValue',
            key: 'notionalValue',
          },
          {
            title: 'Netting of New Contracts',
            dataIndex: 'nettingOfNewContracts',
            key: 'nettingOfNewContracts',
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

export default ReportBI