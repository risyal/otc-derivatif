import React, { useState, useMemo } from 'react'
import {
    Form,
    Input,
    Button,
    Table,
    Row,
    Col,
    Typography,
    Select
} from 'antd';
import { DownOutlined, UpOutlined, DownloadOutlined } from '@ant-design/icons';
const { Title } = Typography;
const { Option } = Select;

function SettlementMonitoring() {
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

    const [form] = Form.useForm();
    const [columns] = useState([
        {
            title: 'Member ID',
            dataIndex: 'memberId',
            key: 'memberId',
            width: 100,
            fixed: 'left',
        }, {
            title: 'Net Settlement',
            dataIndex: 'netSettlement',
            key: 'netSettlement',
            width: 100,
        }, {
            title: 'Balance Account Settlement',
            dataIndex: 'balanceSettlement',
            key: 'balanceSettlement',
            width: 100,
        }, {
            title: 'Shortage',
            dataIndex: 'shortage',
            key: 'shortage',
            width: 100,
        },
        {
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

    const [expand, setExpand] = useState(true);
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
                <Title level={4}>Monitoring Clearing Position vs Balance</Title>
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
                        <Form.Item label="Member ID" >
                            <Input.Group compact >
                                <Input />
                            </Input.Group>
                        </Form.Item>
                        <Form.Item label="Status" >
                            <Select placeholder="Select Status">
                                <Option value="status1">Status1</Option>
                                <Option value="status2">Status2</Option>
                                <Option value="status3">Status3</Option>
                            </Select>
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

export default SettlementMonitoring
