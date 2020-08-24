import React from 'react'
import {
    Form,
    Input,
    Button,
    Table,
} from 'antd';

function DefaultFund() {
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
            title: 'Member / Client ID',
            children: [
                {
                    title: 'Code',
                    width: 100,
                    dataIndex: 'code',
                    key: 'code',
                    fixed: 'left',
                }, {
                    title: 'SID',
                    width: 100,
                    dataIndex: 'sid',
                    key: 'sid',
                    fixed: 'left',
                }, {
                    title: 'LEI',
                    width: 100,
                    dataIndex: 'lei',
                    key: 'lei',
                    fixed: 'left',
                }]
        },
        {
            title: 'Currency',
            dataIndex: 'currency',
            key: 'currency',
            width: 50,
        },
        {
            title: 'Default Fund',
            children: [
                {
                    title: 'Acc No',
                    width: 50,
                    dataIndex: 'accNo',
                    key: 'accNo',
                }, {
                    title: 'Value',
                    width: 50,
                    dataIndex: 'value',
                    key: 'value',
                }]
        }, {
            title: 'Excess Requirement',
            width: 50,
            dataIndex: 'excessReq',
            key: 'excessReq',
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
        <div style={{ margin: '15px 20px' }}>
            <Form
                {...formItemLayout}
                size={componentSize}
                layout="horizontal"
                initialValues={{ size: componentSize }}
                labelAlign="left"
            >
                <Form.Item label="Member / Client ID" >
                    <Input.Group compact >
                    <Input style={{ width: '30%', textAlign: 'center' }} placeholder="Code" />
                        <Input
                            className="site-input-split"
                            style={{
                                width: '5%',
                                borderLeft: 0,
                                borderRight: 0,
                                pointerEvents: 'none', textAlign: 'center'
                            }}
                            placeholder="|"
                            disabled
                        />
                        <Input style={{ width: '30%', textAlign: 'center' }} placeholder="SID" />
                        <Input
                            className="site-input-split"
                            style={{
                                width: '5%',
                                borderLeft: 0,
                                borderRight: 0,
                                pointerEvents: 'none', textAlign: 'center'
                            }}
                            placeholder="|"
                            disabled
                        />
                        <Input
                            className="site-input-right"
                            style={{
                                width: '30%',
                                textAlign: 'center',
                            }}
                            placeholder="LEI"
                        />
                    </Input.Group>
                </Form.Item>
                <Form.Item label="Default Fund">
                    <Input.Group compact >
                        <Input style={{ width: '45%', textAlign: 'center' }} placeholder="Acc No" />
                        <Input
                            className="site-input-split"
                            style={{
                                width: '10%',
                                borderLeft: 0,
                                borderRight: 0,
                                pointerEvents: 'none', textAlign: 'center'
                            }}
                            placeholder="|"
                            disabled
                        />
                        <Input
                            className="site-input-right"
                            style={{
                                width: '45%',
                                textAlign: 'center',
                            }}
                            placeholder="Value"
                        />
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

export default DefaultFund
