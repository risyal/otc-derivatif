import React, { useState, useMemo } from 'react'
import {
    Form,
    Input,
    Button,
    Table,
    Row,
    Col,
} from 'antd';
import { DownOutlined, UpOutlined, DownloadOutlined } from '@ant-design/icons';

function InquiryBeneficiaries() {
    const [componentSize] = useMemo(() => 'middle');
    const [formItemLayout] = useState ({
        labelCol: {
            xs: { span: 24 },
            sm: { span: 6 },
        },
        wrapperCol: {
            xs: { span: 24 },
            sm: { span: 16 },
        },
    });

    const [columns] = useState([
        {
            title: 'Beneficiary Name',
            dataIndex: 'beneficiaryName',
            key: 'beneficiaryName',
            width: 50,
        }, {
            title: 'RTGS Account Number',
            dataIndex: 'rtgsAccNumber',
            key: 'rtgsAccNumber',
            width: 50,
        }, {
            title: 'SSSS Account Number',
            dataIndex: 'ssssAccNumber',
            key: 'ssssAccNumber',
            width: 50,
        },
    ]);
    const [data] = useState([
        {
            key: '1',
            beneficiaryName: 'Name1',
            rtgsAccNumber: 'I001002',
            ssssAccNumber: 'I001002',
        },
        {
            key: '2',
            beneficiaryName: 'Name2',
            rtgsAccNumber: 'I001005',
            ssssAccNumber: 'I001005',
        },
        {
            key: '3',
            beneficiaryName: 'Name3',
            rtgsAccNumber: 'I001009',
            ssssAccNumber: 'I001009',
        },
    ]);

    const [expand, setExpand] = useState(true);
    const [form] = Form.useForm();
    
    const [exportButtton] = useState(<Button
        type="primary"
        style={{
            marginBottom: '15px',
            paddingBottom: '15px',
            float: 'right',
            height: '35px'
        }}
        icon={<DownloadOutlined />}>Export File</Button>);

    return (
        <div style={{ margin: '15px 20px' }} scroll={{ x: 1300 }}>
            <Form
                {...formItemLayout}
                size={componentSize}
                layout="horizontal"
                initialValues={{ size: componentSize }}
                labelAlign="left"
            >
                {expand ? (<div>
                    <Form.Item label="Keyword">
                        <Input />
                    </Form.Item>
                </div>
                ) : (
                        <div>
                            <Form.Item label="Beneficiary Name " >
                                <Input.Group compact >
                                    <Input />
                                </Input.Group>
                            </Form.Item>
                            <Form.Item label="RTGS Account Number" >
                                <Input.Group compact >
                                    <Input />
                                </Input.Group>
                            </Form.Item>
                            <Form.Item label="SSSS Account Number" >
                                <Input.Group compact >
                                    <Input />
                                </Input.Group>
                            </Form.Item>
                        </div>
                    )}

                <Form.Item wrapperCol={{ span: 12, offset: 6 }}>
                    <Button
                        type="primary"
                        htmlType="submit"
                        tyle={{ marginRight: '15px' }}>
                        Search
                                </Button>
                    <Button
                        style={{ margin: '0 8px' }}
                        onClick={() => {
                            form.resetFields();
                        }}>
                        Clear
                        </Button>
                    <Button
                        htmlType="submit"
                        onClick={() => {
                            setExpand(!expand);
                        }}>
                        {expand ? (<div><DownOutlined /> Advance Search</div>) :
                            (<div><UpOutlined /> Simple Search</div>)}
                    </Button>
                </Form.Item>
            </Form>

            <Row justify="end">
                <Col span={4}>
                    {exportButtton}
                </Col>
            </Row>

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
