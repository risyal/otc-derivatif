import React from 'react'
import {
    Form,
    Input,
    Button,
    Table
} from 'antd';

function InquiryBeneficiaries() {
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
            title: 'Participant ID',
            dataIndex: 'participantId',
            key: 'participantId',
            width: 50,
        }, {
            title: 'RTGS Acc Number',
            dataIndex: 'rtgsAccNumber',
            key: 'rtgsAccNumber',
            width: 50,
        }, {
            title: 'SSSS Acc Number',
            dataIndex: 'ssssAccNumber',
            key: 'ssssAccNumber',
            width: 50,
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
                <Form.Item label="Participant ID " >
                    <Input.Group compact >
                        <Input />
                    </Input.Group>
                </Form.Item>
                <Form.Item label="RTGS Acc Number" >
                    <Input.Group compact >
                        <Input />
                    </Input.Group>
                </Form.Item>
                <Form.Item label="SSSS Acc Number" >
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

export default InquiryBeneficiaries
