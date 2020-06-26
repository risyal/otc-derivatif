import React from 'react'
import {
    Form,
    Input,
    Button,
    Table,
    DatePicker
} from 'antd';
import moment from 'moment';

function SettlementInstruction() {
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
            title: 'Reference',
            dataIndex: 'reference',
            key: 'reference',
            width: 100,
            fixed: 'left',
        }, {
            title: 'Member ID',
            dataIndex: 'memberId',
            key: 'memberId',
            width: 100,
        }, {
            title: 'Instruction Type',
            dataIndex: 'instructionType',
            key: 'instructionType',
            width: 100,
        }, {
            title: 'Instruction Name',
            dataIndex: 'instructionName',
            key: 'instructionName',
            width: 100,
        }, {
            title: 'Date Generated',
            dataIndex: 'dateGenerated',
            key: 'dateGenerated',
            width: 100,
        }, {
            title: 'Time Generated',
            dataIndex: 'timeGenerated',
            key: 'timeGenerated',
            width: 100,
        }, {
            title: 'Source Account',
            dataIndex: 'sourceAccount',
            key: 'sourceAccount',
            width: 100,
        }, {
            title: 'Destination Account',
            dataIndex: 'destinationAccount',
            key: 'destinationAccount',
            width: 100,
        }, {
            title: 'Value',
            dataIndex: 'value',
            key: 'value',
            width: 100,
        }, {
            title: 'Status',
            dataIndex: 'status',
            key: 'status',
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
                <Form.Item label="Settlement Instruction Type" >
                    <Input.Group compact >
                        <Input />
                    </Input.Group>
                </Form.Item>
                <Form.Item label="Status" >
                    <Input.Group compact >
                        <Input />
                    </Input.Group>
                </Form.Item>
                <Form.Item label="Date Generated" >
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
                scroll={{ x: 'calc(700px + 100%)' }}
            />
        </div>

    )

}

export default SettlementInstruction
