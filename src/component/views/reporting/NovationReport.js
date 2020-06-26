import React from 'react';
import { Form, DatePicker, Button, Table } from 'antd';

function NovationReport(){
    const columns = [
        {
            title: 'Member ID I',
            dataIndex: 'memberIdI',
            key: 'memberIdI',
        },
        {
            title: 'Member ID II',
            dataIndex: 'memberIdII',
            key: 'memberIdII',
        },
        {
            title: 'Tanggal dan Jam Novasi',
            dataIndex: 'tanggalDanJamNovasi',
            key: 'tanggalDanJamNovasi',
        },
        {
            title: 'First Trading ID',
            dataIndex: 'firstTradingId',
            key: 'firstTradingId',
        },
        {
            title: 'Previous Position',
            dataIndex: 'previousPosition',
            key: 'previousPosition',
        },
        {
            title: 'New UTI',
            dataIndex: 'newUti',
            key: 'newUti',
            render: () => <a>Detail</a>,
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

export default NovationReport