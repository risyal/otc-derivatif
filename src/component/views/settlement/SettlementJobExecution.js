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

function SettlementJobExecution() {
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
            title: 'Settlement Date',
            dataIndex: 'settlementDate',
            key: 'settlementDate',
            width: 70,
        }, {
            title: 'Run',
            dataIndex: 'run',
            key: 'run',
            width: 70,
        }, {
            title: 'Status',
            dataIndex: 'status ',
            key: 'status ',
            width: 100,
            render: () => < Progress
                strokeColor={{
                    '0%': '#108ee9',
                    '100%': '#87d068',
                }}
                percent={99.9}
            />,

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
                <Form.Item label="Settlement Date" >
                    <DatePicker style={{ width: '100%' }}
                        defaultValue={moment('2020/01/23', dateFormat)} />
                </Form.Item>
                <Form.Item label="Run" >
                    <Input.Group compact >
                        <Input />
                    </Input.Group>
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

export default SettlementJobExecution
