import React, { useState, useMemo } from 'react'
import {
    Form,
    Input,
    Button,
    Table,
    Row,
    Col
} from 'antd';
import { DownOutlined, UpOutlined, DownloadOutlined } from '@ant-design/icons';

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
            title: 'Balance Acc Settlement',
            dataIndex: 'balanceSettlement',
            key: 'balanceSettlement',
            width: 100,
        }, {
            title: 'Remaining Balance',
            dataIndex: 'remainingBalance',
            key: 'remainingBalance',
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
            >
                <Form.Item label="Member ID" >
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
