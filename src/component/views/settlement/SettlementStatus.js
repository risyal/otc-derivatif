import React, { useState } from 'react'
import {
    Form,
    Input,
    Button,
    Table,
} from 'antd';

function SettlementStatus() {
    const columns = [
        {
            title: 'Jenis Settlement',
            width: 100,
            dataIndex: 'jenisSettlement',
            key: 'jenisSettlement',
        },
        {
            title: 'Status',
            width: 100,
            dataIndex: 'status',
            key: 'status',
        },
    ];
    const data = [
        {
            key: '1',
            jenisSettlement: 'Position Settlement',
            status: 'Status',
        },
        {
            key: '2',
            jenisSettlement: 'Penalti Settlement',
            status: 'Status',
        },
        {
            key: '3',
            jenisSettlement: 'Charges Settlement',
            status: 'Status',
        },
        {
            key: '4',
            jenisSettlement: 'Clearing Fee',
            status: 'Status',
        },
        {
            key: '5',
            jenisSettlement: 'Default Fund Settlement',
            status: 'Status',
        },
        {
            key: '6',
            jenisSettlement: 'Initial Margin Settlement',
            status: 'Status',
        },
    ];
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

    return (
        <div style={{ margin: '15px 20px' }} scroll={{ x: 1300 }}>
            <Form
                {...formItemLayout}
                size={componentSize}
                layout="horizontal"
                initialValues={{ size: componentSize }}
                labelAlign="left"
            >
                <Form.Item label="Jenis Settlement" >
                    <Input />
                </Form.Item>
                <Form.Item wrapperCol={{ span: 12, offset: 6 }}>
                    <Button type="primary" htmlType="submit">
                        Search
                    </Button>
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

export default SettlementStatus
