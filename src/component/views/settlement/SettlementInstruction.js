import React, { useState, useMemo } from 'react'
import {
    Form,
    Input,
    Button,
    Table,
    DatePicker,
    Row,
    Col
} from 'antd';
import moment from 'moment';
import { DownOutlined, UpOutlined, DownloadOutlined } from '@ant-design/icons';

function SettlementInstruction() {
    const [componentSize] = useMemo(() => 'middle');
    const [formItemLayout] = useState({
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
            title: 'Reference',
            dataIndex: 'reference',
            key: 'reference',
            width: 100,
            fixed: 'left',
        }, {
            title: 'Member ID',
            // dataIndex: 'memberId',
            // key: 'memberId',
            children: [
                {
                    title: 'SID',
                    width: 100,
                    dataIndex: 'sid',
                    key: 'sid',
                }, {
                    title: 'LEI',
                    width: 100,
                    dataIndex: 'lei',
                    key: 'lei',
                }
            ]
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
    ]);
    const [data] = useState([
        {
        },
        {
        },
        {
        },
    ]);

    const dateFormat = 'YYYY/MM/DD';
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
        <div style={{ margin: '15px 20px' }}>
            <Form
                {...formItemLayout}
                size={componentSize}
                layout="horizontal"
                initialValues={{ size: componentSize }}
                labelAlign="left"
            > {expand ? (<div>
                <Form.Item label="Keyword">
                    <Input />
                </Form.Item>
            </div>
            ) : (
                    <div>
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
                        <Form.Item label="SID">
                            <Input />
                        </Form.Item>
                        <Form.Item label="LEI">
                            <Input />
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
                    {/* <Link to={{
                        pathname: `#`,
                        state: {
                            id: '1',
                            action: "Edit",
                            disable: false,
                        }
                    }} > */}
                    {exportButtton}
                    {/* </Link> */}
                </Col>
            </Row>

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
