import React from 'react';
import {
    Table,
    Tabs,
    Button,
    Row, Col,
} from 'antd';
import { Link } from "react-router-dom";

function RegisterContract() {
    const { TabPane } = Tabs;

    function callback(key) {
        console.log(key);
    }

    const columns = [
        {
            title: 'Attribut',
            dataIndex: 'attribut',
            key: 'attribut',
            width: 100,
        },
        {
            title: 'Interest Rate Swap',
            dataIndex: 'irs',
            key: 'irs',
            width: 200,
        },
    ];
    const data = [
        {
            key: '1',
            attribut: 'Currency',
            irs: 'IDR',
        },
        {
            key: '2',
            attribut: 'Leg type/sub-product',
            irs: 'X,L',
        },
        {
            key: '3',
            attribut: 'Effective/commencement date',
            irs: 'DDMMYYYY',
        },
        {
            key: '4',
            attribut: 'Contract term',
            irs: '1W, 1M, 3M, 6,M, 9 M, 12M',
        },
        {
            key: '5',
            attribut: 'Notional amount',
            irs: '',
        },
        {
            key: '6',
            attribut: 'Payment frequency (fix and float)',
            irs: '1W, 1M, 3M, 6M, 12M',
        },
        {
            key: '7',
            attribut: 'Valuation/Fixing Date',
            irs: '-2',
        },
        {
            key: '8',
            attribut: 'Floating rate index',
            irs: '',
        },
        {
            key: '9',
            attribut: 'Spread',
            irs: '',
        },
        {
            key: '10',
            attribut: 'Day count fraction (fix and float)',
            irs: '',
        },
        {
            key: '11',
            attribut: 'Floating rate reset frequency',
            irs: '1W, 1M, 3M, 6M, 12M',
        },
        {
            key: '12',
            attribut: 'Floating rate index tenor',
            irs: '1W, 1M, 3M, 6M, 12M',
        },
        {
            key: '13',
            attribut: 'Business day convention',
            irs: '',
        },
        {
            key: '14',
            attribut: 'Calendar (payment, fixing, holiday)',
            irs: '',
        },
        {
            key: '15',
            attribut: 'Rounding payment',
            irs: '',
        },
        {
            key: '16',
            attribut: 'Stub Payment',
            irs: '',
        },
        {
            key: '17',
            attribut: 'Forward starting',
            irs: '',
        },
        {
            key: '18',
            attribut: 'Cash Payment Compounding',
            irs: '',
        },
    ];

    const columns2 = [
        {
            title: 'Attribut',
            dataIndex: 'attribut',
            key: 'attribut',
            width: 100,
        },
        {
            title: 'Interest Rate Swap',
            dataIndex: 'irs',
            key: 'irs',
            width: 200,
        },
    ];
    const data2 = [
        {
            key: '1',
            attribut: 'Currency',
            irs: 'IDR',
        },
        {
            key: '2',
            attribut: 'Leg type/sub-product',
            irs: 'X,L',
        },
        {
            key: '3',
            attribut: 'Effective/commencement date',
            irs: 'DDMMYYYY',
        },
        {
            key: '4',
            attribut: 'Contract term',
            irs: '1W, 1M, 3M, 6,M, 9 M, 12M',
        },
        {
            key: '5',
            attribut: 'Notional amount',
            irs: '',
        },
        {
            key: '6',
            attribut: 'Floating rate index',
            irs: '',
        },
        {
            key: '7',
            attribut: 'Spread',
            irs: '',
        },
        {
            key: '8',
            attribut: 'Day count fraction (fix and float)',
            irs: '',
        },
        {
            key: '9',
            attribut: 'Spread',
            irs: '',
        },
        {
            key: '10',
            attribut: 'Day count fraction (fix and float)',
            irs: '',
        },
        {
            key: '11',
            attribut: 'Business day convention',
            irs: 'M, F, P',
        },
        {
            key: '12',
            attribut: 'Calendar (payment, fixing, holiday)',
            irs: '',
        },
        {
            key: '13',
            attribut: 'Rounding',
            irs: '',
        },
        {
            key: '14',
            attribut: 'Forward starting',
            irs: '',
        },
    ];

    const columns3 = [
        {
            title: 'Attribut',
            dataIndex: 'attribut',
            key: 'attribut',
            width: 100,
        },
        {
            title: 'Interest Rate Swap',
            dataIndex: 'irs',
            key: 'irs',
            width: 200,
        },
    ];
    const data3 = [
        {
            key: '1',
            attribut: 'Currency Pair',
            irs: 'USD/IDR',
        },
        {
            key: '2',
            attribut: 'Notional Foreign Currency',
            irs: 'USD',
        },
        {
            key: '3',
            attribut: 'Fixing Date',
            irs: '-2',
        },
        {
            key: '4',
            attribut: 'Reference Rate',
            irs: '',
        },
        {
            key: '5',
            attribut: 'Tenor',
            irs: '1W, 1M, 3M, 6,M, 9 M, 12M',
        },
        {
            key: '6',
            attribut: 'Notional Amount',
            irs: '',
        },
    ];
    const editButton = <Button
        type="primary"
        style={{
            marginBottom: '15px',
            paddingBottom: '15px',
            float: 'right',
            width: '80px',
            height: '35px'
        }}>Edit</Button>;
    return (
        <div style={{ margin: '15px 20px' }} scroll={{ x: 1300 }}>
            <Tabs onChange={callback} type="card">
                <TabPane tab="IRS" key="1" >
                    <Row justify="end">
                        <Col span={4}>
                            <Link to={{
                                pathname: `/editRegisterContract`,
                                state: {
                                    id: '1',
                                    action: "Edit",
                                    disable: false,
                                }
                            }} >
                                {editButton}
                            </Link>
                        </Col>
                    </Row>
                    <Table
                        pagination={false}
                        columns={columns}
                        dataSource={data}
                        bordered
                        size="middle"
                    />
                </TabPane>
                <TabPane tab="OIS" key="2">
                    <Row justify="end">
                        <Col span={4}>
                            <Link to={{
                                pathname: `/editRegisterContract`,
                                state: {
                                    id: '2',
                                    action: "Edit",
                                    disable: false,
                                }
                            }} >
                                {editButton}
                            </Link>
                        </Col>
                    </Row>
                    <Table
                        pagination={false}
                        columns={columns2}
                        dataSource={data2}
                        bordered
                        size="middle"
                    />
                </TabPane>
                <TabPane tab="DNDF" key="3">
                    <Row justify="end">
                        <Col span={4}>
                            <Link to={{
                                pathname: `/editRegisterContract`,
                                state: {
                                    id: '3',
                                    action: "Edit",
                                    disable: false,
                                }
                            }} >
                                {editButton}
                            </Link>
                        </Col>
                    </Row>
                    <Table
                        pagination={false}
                        columns={columns3}
                        dataSource={data3}
                        bordered
                        size="middle"
                    />
                </TabPane>
            </Tabs>
        </div>

    )

}


export default RegisterContract