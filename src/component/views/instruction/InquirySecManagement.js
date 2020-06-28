import React from 'react'
import {
    Form,
    Input,
    Button,
    Table,
    DatePicker,
    Progress
} from 'antd';
import moment from 'moment';


function InquirySecManagement() {
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
            title: 'Instruction Type',
            dataIndex: 'instructionType',
            key: 'instructionType',
            width: 100,
        }, {
            title: 'Participant Code',
            dataIndex: 'participantCode',
            key: 'participantCode',
            width: 100,
        }, {
            title: 'Source Acc',
            dataIndex: 'sourceAcc',
            key: 'sourceAcc',
            width: 100,
        }, {
            title: 'Dest Account',
            dataIndex: 'destAccount',
            key: 'destAccount',
            width: 100,
        }, {
            title: 'Security Code',
            dataIndex: 'securityCode',
            key: 'securityCode',
            width: 100,
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
        }, {
            title: 'Status',
            dataIndex: 'status',
            key: 'status',
            width: 100,
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
                <Form.Item label="Security Code" >
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

export default InquirySecManagement
