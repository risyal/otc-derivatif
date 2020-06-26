import React from 'react'
import {
    Form,
    Input,
    Button,
    Select,
    Table,
    InputNumber
} from 'antd';

function AccountDetail() {
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

    const { Option } = Select;

    const columns = [
        {
            title: 'Member / Client ID',
            children: [
                {
                    title: 'Code',
                    width: 100,
                    dataIndex: 'code',
                    key: 'code',
                }, {
                    title: 'SID/LEI',
                    width: 100,
                    dataIndex: 'sidLei',
                    key: 'sidLei',
                }]
        },
        {
            title: 'Currency',
            dataIndex: 'currency',
            key: 'currency',
            width: 100,
        },
        {
            title: 'Cash Collateral',
            children: [
                {
                    title: 'Acc No',
                    width: 100,
                    dataIndex: 'accNo',
                    key: 'accNo',
                }, {
                    title: 'Balance',
                    width: 100,
                    dataIndex: 'balance',
                    key: 'balance',
                }]
        },
        {
            title: 'Non-cash Collateral',
            children: [
                {
                    title: 'Acc No',
                    width: 100,
                    dataIndex: 'accNoNon',
                    key: 'accNoNon',
                }, {
                    title: 'Instrument',
                    width: 100,
                    dataIndex: 'instrument',
                    key: 'instrument',
                }, {
                    title: 'Balance',
                    width: 100,
                    dataIndex: 'balanceNon',
                    key: 'balanceNon',
                }]
        },
        {
            title: 'Default Fund',
            children: [
                {
                    title: 'Acc No',
                    width: 100,
                    dataIndex: 'accNoDef',
                    key: 'accNoDef',
                }, {
                    title: 'Balance',
                    width: 100,
                    dataIndex: 'balanceDef',
                    key: 'balanceDef',
                }]
        },
        {
            title: 'Perubahan Saldo',
            children: [
                {
                    title: 'Debit',
                    width: 100,
                    dataIndex: 'debit',
                    key: 'debit',
                    fixed: 'right',
                }, {
                    title: 'Kredit',
                    width: 100,
                    dataIndex: 'kredit',
                    key: 'kredit',
                    fixed: 'right',
                }, {
                    title: 'Value',
                    width: 100,
                    dataIndex: 'value',
                    key: 'value',
                    fixed: 'right',
                }, {
                    title: 'Instruksi',
                    width: 100,
                    dataIndex: 'instruksi',
                    key: 'instruksi',
                    fixed: 'right',
                    render: () => <a>Instruksi</a>,
                }]
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
                <Form.Item label="Member/Client ID" >
                    <Input.Group compact >
                        <Input style={{ width: '45%', textAlign: 'center' }} placeholder="Code" />
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
                            placeholder="SID/LEI"
                        />
                    </Input.Group>
                </Form.Item>
                <Form.Item label="Currency">
                    <Input.Group compact>
                        <Select defaultValue="Rp" style={{ width: '15%' }}>
                            <Select.Option value="Rp">Rp</Select.Option>
                        </Select>
                        <InputNumber
                            defaultValue={0}
                            formatter={value => `${value}`.replace(/\B(?=(\d{3})+(?!\d))/g, ',')}
                            parser={value => value.replace(/\$\s?|(,*)/g, '')}
                            style={{ width: '85%' }} />
                    </Input.Group>
                </Form.Item>
                <Form.Item label="Cash Collateral">
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
                            placeholder="Balance"
                        />
                    </Input.Group>
                </Form.Item>
                <Form.Item label="Non-cash Collateral">
                    <Input.Group compact >
                        <Input style={{ width: '30%', textAlign: 'center' }} placeholder="Acc No" />
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
                        <Input style={{ width: '30%', textAlign: 'center' }} placeholder="Instrument" />
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
                            placeholder="Balance"
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
                            placeholder="Balance"
                        />
                    </Input.Group>
                </Form.Item>
                <Form.Item wrapperCol={{ span: 12, offset: 6 }}>
                    <Button type="primary" htmlType="submit">
                        Search
                    </Button>
                </Form.Item>
            </Form>

            {/*  <Form
                size={componentSize}
                layout="horizontal"
                initialValues={{ size: componentSize }}
                style={{ marginTop: '80px' }}
            >
                <Form.Item label="Search">
                    <Input.Group compact>
                        <Form.Item
                            name={['address', 'province']}
                        >
                            <Select placeholder="Select filter">
                                <Option value="memberID">Member ID</Option>
                                <Option value="sid/lei">SID/LEI</Option>
                                <Option value="rtgsAccount">RTGS Account</Option>
                                <Option value="ssssAccount">SSSS Account</Option>
                            </Select>
                        </Form.Item>
                        <Form.Item
                            name={['address', 'street']}
                        >
                            <Input style={{ width: '100%' }} />
                        </Form.Item>
                        <Form.Item>
                            <Button type="primary" htmlType="submit">
                                Go
                                </Button>
                        </Form.Item>
                    </Input.Group>
                </Form.Item>
            </Form> */}

            <Table
                columns={columns}
                dataSource={data}
                bordered
                size="middle"
                scroll={{ x: 'calc(700px + 50%)' }}
            />
        </div>

    )

}

export default AccountDetail
