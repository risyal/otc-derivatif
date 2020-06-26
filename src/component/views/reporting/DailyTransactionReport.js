import React from 'react';
import { Form, DatePicker, Button, Table } from 'antd';

function DailyTransactionReport(){
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
            <Form layout="horizontal">
                <Form.Item label="Date">
                    <DatePicker /> <Button>Go</Button>
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

export default DailyTransactionReport