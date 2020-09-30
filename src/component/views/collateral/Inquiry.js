import React, { useState, useMemo } from 'react';
import {
    Form,
    Input,
    Button,
    Table,
    DatePicker,
    Row,
    Col,
    Typography
} from 'antd';
import moment from 'moment';
import { DownOutlined, UpOutlined, DownloadOutlined } from '@ant-design/icons';

const { RangePicker } = DatePicker;
const { Title } = Typography;

function Inquiry() {
    const [expand, setExpand] = useState(true);
    const [form] = Form.useForm();
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
            title: 'Instruction Type',
            dataIndex: 'instructionType',
            key: 'instructionType',
            width: 100,
        }, {
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
            title: 'Instrument Code',
            dataIndex: 'instrumentCode',
            key: 'instrumentCode',
            width: 100,
            defaultSortOrder: 'descend',
            sorter: (a, b) => a.instrumentCode - b.instrumentCode,
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
            <div className="head-content">
                <Title level={4}>Inquiry</Title>
            </div>
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
                        <Form.Item label="Participant Code" >
                            <Input />
                        </Form.Item>
                        <Form.Item label="Source Acc" >
                            <Input />
                        </Form.Item>
                        <Form.Item label="Dest Account" >
                            <Input />
                        </Form.Item>
                        <Form.Item label="Instrument Code" >
                            <Input />
                        </Form.Item>
                        <Form.Item label="Settlement Period" >
                            <RangePicker style={{ width: '100%' }}
                                defaultValue={[moment('2020/01/01', dateFormat), moment('2020/01/01', dateFormat)]}
                                format={dateFormat}
                            />
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
            />
        </div>

    )

}

export default Inquiry
