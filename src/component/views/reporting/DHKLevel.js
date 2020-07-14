import React, { useState } from 'react';
import { 
    Form,  
    Button, 
    Table,
    Input,
    DatePicker
} from 'antd';
import { DownOutlined, UpOutlined, DownloadOutlined } from '@ant-design/icons';

function DHKLevel(){
    const [expand, setExpand] = useState(true);
    const [form] = Form.useForm();
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
            title: 'Member ID',
            dataIndex: 'memberId',
            key: 'memberId',
            width: 100,
            fixed: 'left',
        },
        {
            title: 'SID/LEI',
            dataIndex: 'sidLei',
            key: 'sidLei',
            width: 100,
        },
        {
            title: 'Client ID',
            dataIndex: 'clientId',
            key: 'clientId',
            width: 100,
        },
        {
            title: 'Contract',
            dataIndex: 'contract',
            key: 'contract',
            width: 100,
        },
        {
            title: 'Previous Position',
            dataIndex: 'previousPosition',
            key: 'previousPosition',
            width: 150,
        },
        {
            title: 'New Position',
            dataIndex: 'newPosition',
            key: 'newPosition',
            width: 150,
        },
        {
            title: 'Net Position',
            dataIndex: 'netPosition',
            key: 'netPosition',
            width: 100,
        },
        {
            title: 'Cash Right/Obligation',
            dataIndex: 'cashRightObligation',
            key: 'cashRightObligation',
            width: 150,
        },
        {
            title: 'Fee',
            dataIndex: 'fee',
            key: 'fee',
            width: 100,
        },
        {
            title: 'DF Fund Billing',
            dataIndex: 'dfFundBilling',
            key: 'dfFundBilling',
            width: 100,
        },
        {
            title: 'Initial Margin Billing',
            dataIndex: 'initialMarginBilling',
            key: 'initialMarginBilling',
            width: 100,
        },
        {
            title: 'PAA',
            dataIndex: 'paa',
            key: 'paa',
            width: 100,
        },
        {
            title: 'Free Collateral',
            dataIndex: 'freeCollateral',
            key: 'freeCollateral',
            width: 100,
        },
        {
            title: 'Blocked Collateral',
            dataIndex: 'blockedCollateral',
            key: 'blockedCollateral',
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
            > {expand ? (<div>
                <Form.Item label="Keyword">
                    <Input />
                </Form.Item>
            </div>
            ) : (
                    <div>
                        <Form.Item label="Member ID">
                            <Input />
                        </Form.Item>
                        <Form.Item label="SID/LEI">
                            <Input />
                        </Form.Item>
                        <Form.Item label="Date">
                            <DatePicker style={{ width: '100%' }} />
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
                        {expand ? (<div><DownOutlined />Advance Search</div>) :
                            (<div><UpOutlined />Simple Search</div>)}
                    </Button>
                </Form.Item>
            </Form>

            <div style={{ margin: '15px 20px' }} scroll={{ x: 1300 }}>
                <Table
                    columns={columns}
                    dataSource={data}
                    bordered
                    size="middle"
                    scroll={{ x: 'calc(700px + 50%)' }}
                />
                <Button type="primary" icon={<DownloadOutlined />}>
                    Export File
                </Button>
            </div>
        </div>
    )
}

export default DHKLevel