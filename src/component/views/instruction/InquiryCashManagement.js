import React from 'react'
import {
    Form,
    Input,
    Button,
    Table,
    DatePicker,
} from 'antd';
import moment from 'moment';

function InquiryCashManagement() {
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


    const columns = [
        {
            title: 'Participant Code',
            dataIndex: 'participantCode',
            key: 'participantCode',
            width: 100,
            defaultSortOrder: 'descend',
            sorter: (a, b) => a.participantCode - b.participantCode,
            sortDirections: ['ascend'],
        }, {
            title: 'Source Acc',
            dataIndex: 'sourceAcc',
            key: 'sourceAcc',
            width: 100,
            defaultSortOrder: 'descend',
            sorter: (a, b) => a.sourceAcc - b.sourceAcc,
        }, {
            title: 'Dest Account',
            dataIndex: 'destAccount',
            key: 'destAccount',
            width: 100,
            defaultSortOrder: 'descend',
            sorter: (a, b) => a.destAccount - b.destAccount,
        }, {
            title: 'Currency Code',
            dataIndex: 'currencyCode',
            key: 'currencyCode',
            width: 100,
            defaultSortOrder: 'descend',
            sorter: (a, b) => a.securityCode - b.securityCode,
        }, {
            title: 'Value',
            dataIndex: 'value',
            key: 'value',
            width: 100,
        }, {
            title: 'Settlement Date',
            dataIndex: 'settlementDate',
            key: 'settlementDate',
            width: 100,
            defaultSortOrder: 'descend',
            sorter: (a, b) => a.settlementDate - b.settlementDate,
        }, {
            title: 'Status',
            dataIndex: 'status',
            key: 'status',
            width: 100,
            defaultSortOrder: 'descend',
            sorter: (a, b) => a.settlementDate - b.settlementDate,
        }, {
            title: 'Remark',
            dataIndex: 'remark',
            key: 'remark',
            width: 100,
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
    const dateFormat = 'YYYY/MM/DD';

    return (
        <div style={{ margin: '15px 20px' }}>
            <Form
                {...formItemLayout}
                size={componentSize}
                layout="horizontal"
                initialValues={{ size: componentSize }}
                labelAlign="left"
            >

                <Form.Item label="Participant Code" >
                    <Input />
                </Form.Item>
                <Form.Item label="Source Acc" >
                    <Input />
                </Form.Item>
                <Form.Item label="Dest Account" >
                    <Input />
                </Form.Item>
                <Form.Item label="Currency Code" >
                    <Input />
                </Form.Item>
                <Form.Item label="Settlement Date" >
                    <DatePicker style={{ width: '100%' }}
                        defaultValue={moment('2020/01/23', dateFormat)} />
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

export default InquiryCashManagement
