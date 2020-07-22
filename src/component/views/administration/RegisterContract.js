import React, { useState } from 'react';
import {
    Table,
    Tabs,
    Button,
    Row, Col,
} from 'antd';
import { Link } from "react-router-dom";
import { DownloadOutlined } from '@ant-design/icons';

function RegisterContract() {
    const { TabPane } = Tabs;

    function callback(key) {
        console.log(key);
    }

    const columns = [
        {
            title: 'Parameters',
            dataIndex: 'parameters',
            key: 'parameters',
            width: 200,
        },
        {
            title: 'Values',
            dataIndex: 'values',
            key: 'values',
            width: 100,
        },
        {
            title: 'Action',
            dataIndex: 'action',
            key: 'action',
            width: 50,
            render: text => <a>{text}</a>,
        },
    ];

    const dataIrs = [
        {
            key: '1',
            parameters: 'Currency',
            values: 'IDR',
            action: 
                <Link to={{ pathname: `/administration/irsEditCurrency` }}>
                    Edit
                </Link>
        },
        {
            key: '2',
            parameters: 'Leg Type/Sub-Product',
            values: 'Fix/Float',
            action: 
                <Link to={{ pathname: `/administration/irsEditLegType` }}>
                    Edit
                </Link>
        },
        {
            key: '3',
            parameters: 'Effective/Commencement Date',
            values: '2',
            action: 
                <Link to={{ pathname: `/administration/irsEffectiveDate` }}>
                    Edit
                </Link>
        },
        {
            key: '4',
            parameters: 'Contract Term',
            values: '1W, 1M, 3M, 6M, 9M, 12M',
            action: 
                <Link to={{ pathname: `/administration/irsEditContractTerm` }}>
                    Edit
                </Link>
        },
        {
            key: '5',
            parameters: 'Notional Amount',
            values: '1.000.000.000',
            action: 
                <Link to={{ pathname: `/administration/irsEditNotionalAmount` }}>
                    Edit
                </Link>
        },
        {
            key: '6',
            parameters: 'Payment Frequency',
            values: '1W, 1M, 3M, 6M, 12M',
            action: 
                <Link to={{ pathname: `/administration/irsEditPaymentFreq` }}>
                    Edit
                </Link>
        },
        {
            key: '7',
            parameters: 'Valuation/Fixing Date',
            values: '-2',
            action: 
                <Link to={{ pathname: `/administration/irsEditFixingDate` }}>
                    Edit
                </Link>
        },
        {
            key: '8',
            parameters: 'Floating Rate Index',
            values: 'JIBOR',
            // action: 
            //     <Link to={{ pathname: `/administration/irsFloatingRateindex` }}>
            //         View
            //     </Link>
        },
        {
            key: '9',
            parameters: 'Spread',
            values: '0.12301',
            action: 
                <Link to={{ pathname: `/administration/irsEditSpread` }}>
                    Edit
                </Link>
        },
        {
            key: '10',
            parameters: 'Day Count Fraction',
            values: 'Act/360',
            action: 
                <Link to={{ pathname: `/administration/irsEditDayCountF` }}>
                    Edit
                </Link>
        },
        {
            key: '11',
            parameters: 'Floating Rate Reset Frequency',
            values: '1W, 1M, 3M, 6M, 12M',
            action: 
                <Link to={{ pathname: `/administration/irsFloatingRRFreq` }}>
                    Edit
                </Link>
        },
        {
            key: '12',
            parameters: 'Floating Rate Index Tenor',
            values: '1W, 1M, 3M, 6M, 12M',
            action: 
                <Link to={{ pathname: `/administration/irsFloatingRIndex` }}>
                    Edit
                </Link>
        },
        {
            key: '13',
            parameters: 'Business Day Convention',
            values: 'Modified Following',
            action: 
                <Link to={{ pathname: `/administration/irsBDC` }}>
                    Edit
                </Link>
        },
        {
            key: '14',
            parameters: 'Calendar',
            values: 'BI Business Calendar',
            // action: 
            //     <Link to={{ pathname: `/administration/` }}>
            //         Edit
            //     </Link>
        },
        {
            key: '15',
            parameters: 'Rounding Payment',
            values: 'IDR 1; 0.00001',
            action: 
                <Link to={{ pathname: `/administration/irsRoundingPayment` }}>
                    Edit
                </Link>
        },
        {
            key: '16',
            parameters: 'Stub Payment',
            values: 'Initial/Front',
            action: 
                <Link to={{ pathname: `/administration/irsEditStubP` }}>
                    Edit
                </Link>
        },
        {
            key: '17',
            parameters: 'Forward Starting',
            values: 'Eligible',
            action: 
                <Link to={{ pathname: `/administration/irsforwardS` }}>
                    Edit
                </Link>
        },
        {
            key: '18',
            parameters: 'Cash Payment Compounding',
            values: 'Compounding',
            action: 
                <Link to={{ pathname: `/administration/irsEditCashPC` }}>
                    Edit
                </Link>
        },
    ];

    const dataOis = [
        {
            key: '1',
            parameters: 'Currency',
            values: 'IDR',
            action: 
                <Link to={{ pathname: `/administration/oisEditCurrency` }}>
                    Edit
                </Link>
        },
        {
            key: '2',
            parameters: 'Leg Type/Sub-Product',
            values: 'Fix/Float',
            action: 
                <Link to={{ pathname: `/administration/oisEditLegType` }}>
                    Edit
                </Link>
        },
        {
            key: '3',
            parameters: 'Effective/Commencement Date',
            values: '2',
            action: 
                <Link to={{ pathname: `/administration/oisEffectiveDate` }}>
                    Edit
                </Link>
        },
        {
            key: '4',
            parameters: 'Contract Term',
            values: '1W, 1M, 3M, 6M, 9M, 12M',
            action: 
                <Link to={{ pathname: `/administration/oisEditContractTerm` }}>
                    Edit
                </Link>
        },
        {
            key: '5',
            parameters: 'Notional Amount',
            values: '1.000.000.000',
            action: 
                <Link to={{ pathname: `/administration/oisEditNotionalAmount` }}>
                    Edit
                </Link>
        },
        {
            key: '6',
            parameters: 'Payment Frequency',
            values: 'On Maturity Date',
            // action: 
            //     <Link to={{ pathname: `/administration/oisFloatingRateindex` }}>
            //         Edit
            //     </Link>
        },
        {
            key: '7',
            parameters: 'Valuation/Fixing Date',
            values: 'Daily',
            // action: 
            //     <Link to={{ pathname: `/administration/` }}>
            //         Edit
            //     </Link>
        },
        {
            key: '8',
            parameters: 'Floating Rate Index',
            values: 'INDONIA',
            // action: 
            //     <Link to={{ pathname: `/administration/oisFloatingRateindex` }}>
            //         Edit
            //     </Link>
        },
        {
            key: '9',
            parameters: 'Spread',
            values: '0.12301',
            action: 
                <Link to={{ pathname: `/administration/oisEditSpread` }}>
                    Edit
                </Link>
        },
        {
            key: '10',
            parameters: 'Day Count Fraction',
            values: 'Act/360',
            action: 
                <Link to={{ pathname: `/administration/oisEditDayCountF` }}>
                    Edit
                </Link>
        },
        {
            key: '11',
            parameters: 'Floating Rate Reset Frequency ',
            values: 'Daily',
            // action: 
            //     <Link to={{ pathname: `/administration/` }}>
            //         Edit
            //     </Link>
        },
        {
            key: '12',
            parameters: 'Floating Rate Index Tenor ',
            values: 'Overnight',
            // action: 
            //     <Link to={{ pathname: `/administration/` }}>
            //         Edit
            //     </Link>
        },
        {
            key: '13',
            parameters: 'Floating Rate Compounding',
            values: 'Daily Compounding',
            // action: 
            //     <Link to={{ pathname: `/administration/` }}>
            //         Edit
            //     </Link>
        },
        {
            key: '14',
            parameters: 'Business Day Convention',
            values: 'Modified Following',
            action: 
                <Link to={{ pathname: `/administration/oisBDC` }}>
                    Edit
                </Link>
        },
        {
            key: '15',
            parameters: 'Calendar',
            values: 'BI Business Calendar',
            // action: 
            //     <Link to={{ pathname: `/administration/` }}>
            //         Edit
            //     </Link>
        },
        {
            key: '16',
            parameters: 'Rounding Payment',
            values: 'IDR 1; 0.00001',
            action: 
                <Link to={{ pathname: `/administration/oisRoundingPayment` }}>
                    Edit
                </Link>
        },
        {
            key: '17',
            parameters: 'Forward Starting',
            values: 'Eligible',
            action: 
                <Link to={{ pathname: `/administration/oisforwardS` }}>
                    Edit
                </Link>
        },
        
    ];

    const dataDndf = [
        {
            key: '1',
            parameters: 'Currency',
            values: 'USD,IDR',
            action: 
                <Link to={{ pathname: `/administration/dndfEditCurrency` }}>
                    Edit
                </Link>
        },
        {
            key: '2',
            parameters: 'Notional Foreign Currency',
            values: 'USD',
            // action: 
            //     <Link to={{ pathname: `/administration/` }}>
            //         Edit
            //     </Link>
        },
        {
            key: '3',
            parameters: 'Fixing Date',
            values: '-2',
            action: 
                <Link to={{ pathname: `/administration/dndfEditFixingDate` }}>
                    Edit
                </Link>
        },
        {
            key: '4',
            parameters: 'Reference Rate',
            values: 'JISDOR',
            // action: 
            //     <Link to={{ pathname: `/administration/` }}>
            //         Edit
            //     </Link>
        },
        {
            key: '5',
            parameters: 'Tenor',
            values: '3D, 1W, 1M, 3M, 6M, 9M, 12M',
            action: 
                <Link to={{ pathname: `/administration/dndfTenor` }}>
                    Edit
                </Link>
        },
        {
            key: '6',
            parameters: 'Notional Amount',
            values: '1.000.000.000',
            action: 
                <Link to={{ pathname: `/administration/dndfEditNotionalAmount` }}>
                    Edit
                </Link>
        },
    ];

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
            <Tabs onChange={callback} type="card">
                <TabPane tab="Interest Rate Swap (IRS)" key="1" >
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
                        pagination={false}
                        columns={columns}
                        dataSource={dataIrs}
                        bordered
                        size="middle"
                    />
                </TabPane>

                <TabPane tab="Overnight Index Swap (OIS)" key="2">
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
                        pagination={false}
                        columns={columns}
                        dataSource={dataOis}
                        bordered
                        size="middle"
                    />
                </TabPane>

                <TabPane tab="Domestic Non Deliverable Forward (DNDF)" key="3">
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
                        pagination={false}
                        columns={columns}
                        dataSource={dataDndf}
                        bordered
                        size="middle"
                    />
                </TabPane>
            </Tabs>
        </div>
    )
}

export default RegisterContract