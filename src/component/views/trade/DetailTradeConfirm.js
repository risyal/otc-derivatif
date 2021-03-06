import React from 'react'

export const DetailTradeConfirm = (props) => {
    const [text] = useState('Are you sure to Cancel this ?');
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
            title: '',
            dataIndex: 'title',
            key: 'title',
            width: 280,
        },
        {
            title: '',
            dataIndex: 'paramData',
            key: 'paramData',
        },
    ]);
    const [data] = useState([
        {
            key: '1',
            uti: 'UTI001002',
            memberId: 'CENAIDJA',
            clientId: 'CENAIDJA001',
            referenceNumber: 'MCM200709.0001',
            sid: 'SID/LEI001',
            product: 'IRS',
            position: 'Receive',
            referenceRate: 'IndONIA',
            counterparty: 'Counterparty',
            currency: '14000',
            legType: 'Float',
            tradeDate: '23-02-2020',
            effectiveDate: '25-02-2020',
            maturityDate: '23-02-2020',
            settlementType: 'Settlement Type',
            contractTerm: '1W',
            notionalAmount: 'Rp. 100.000.000 ',
            paymentFrequency: '6M',
            nextFixingDate: '6M',
            fixedRate: '10%',
            floatingRateIndex: '1',
            spread: 'Spread',
            leverage: 'Leverage',
            dayCountFraction: 'ACT/360',
            resetFrequency: '6M',
            indexTenor: 'Overnight',
            rateCompounding: 'Daily Compounding',
            businessDayConvention: 'Following',
            roundingPayment: 'Rounding Payment',
            forwardStarting: 'Eligible',
        },
    ]);
    const dataParamById = data.find((param) => {
        return param.key === props.location.state.id
    })

    const [dataForView] = useState([
        {
            title: "UTI :",
            paramData: dataParamById.uti
        },
        {
            title: "Member ID :",
            paramData: dataParamById.memberId
        },
        {
            title: "Client ID :",
            paramData: dataParamById.clientId
        },
        {
            title: "Reference Number :",
            paramData: dataParamById.referenceNumber
        },
        {
            title: "SID/LEI :",
            paramData: dataParamById.sid
        },
        {
            title: "Product :",
            paramData: dataParamById.product
        },
        {
            title: "Position :",
            paramData: dataParamById.position
        },
        {
            title: "Reference Rate :",
            paramData: dataParamById.referenceRate
        },
        {
            title: "Counterparty :",
            paramData: dataParamById.counterparty
        },
        {
            title: "Currency :",
            paramData: dataParamById.currency
        },
        {
            title: "Leg Type :",
            paramData: dataParamById.legType
        },
        {
            title: "Trade Date :",
            paramData: dataParamById.tradeDate
        },
        {
            title: "Effective Date :",
            paramData: dataParamById.effectiveDate
        },
        {
            title: "Maturity Date :",
            paramData: dataParamById.maturityDate
        },
        {
            title: "Settlement Type :",
            paramData: dataParamById.settlementType
        },
        {
            title: "Contract Term :",
            paramData: dataParamById.contractTerm
        },
        {
            title: "Notional Amount :",
            paramData: dataParamById.notionalAmount
        },
        {
            title: "Payment Frequency :",
            paramData: dataParamById.paymentFrequency
        },
        {
            title: "Next Fixing Date :",
            paramData: dataParamById.nextFixingDate
        },
        {
            title: "Fixed Rate :",
            paramData: dataParamById.fixedRate
        },
        {
            title: "Floating Rate Index :",
            paramData: dataParamById.floatingRateIndex
        },
        {
            title: "Spread :",
            paramData: dataParamById.spread
        },
        {
            title: "Leverage :",
            paramData: dataParamById.leverage
        },
        {
            title: "Day Count Fraction :",
            paramData: dataParamById.dayCountFraction
        },
        {
            title: "Reset Frequency :",
            paramData: dataParamById.resetFrequency
        },
        {
            title: "Floating Rate Index Tenor :",
            paramData: dataParamById.indexTenor
        },
        {
            title: "Floating Rate Compounding :",
            paramData: dataParamById.rateCompounding
        },
        {
            title: "Business Day Convention :",
            paramData: dataParamById.businessDayConvention
        },
        {
            title: "Rounding Payment :",
            paramData: dataParamById.roundingPayment
        },
        {
            title: "Forward Starting :",
            paramData: dataParamById.forwardStarting
        },
        {
            title: "Transaction Status :",
            paramData: "Status Transaksi"
        },

    ]);

    const action = props.location.state.action
    const disable = props.location.state.disable
    const linkBack = props.location.state.linkBack
    const [sixEyes, setSixEyes] = useState(1);
    const radioOnChange = e => {
        setSixEyes(e.target.value);
    };

    return (
        <div>
            <div className="head-content viewDelete">
                <Title level={4}>
                    <span className="icon-back">
                        <Link to={linkBack}>
                            <ArrowLeftOutlined />
                        </Link>
                    </span>
                    {action} Parameter</Title>
            </div>
            <Form
                {...formItemLayout}
                size={componentSize}
                layout="horizontal"
                initialValues={{ size: componentSize }}
                labelAlign="left"
                style={{ marginBottom: '80px' }}
            >
                {!disable ? (<Form.Item label="Role" className="roleViewDel">
                    <Radio.Group onChange={radioOnChange} value={sixEyes}>
                        <Radio value={1}>Maker</Radio>
                        <Radio value={2}>Direct Checker</Radio>
                        <Radio value={3}>Direct Approver</Radio>
                    </Radio.Group>
                </Form.Item>
                ) : (
                        <div></div>
                    )}
                <Table
                    className="viewDelTable"
                    columns={columns}
                    dataSource={dataForView}
                    showHeader={false}
                    rowClassName={(record, index) => index % 2 === 0 ? 'table-row-light' : 'table-row-dark'}
                    size="middle"
                    pagination={false}
                />
                <Form.Item wrapperCol={{ span: 12, offset: 6 }}>
                    {!disable ? (<Link to={linkBack}>
                        <Popconfirm placement="leftTop" title={action === "Cancel" ? text : null} okText="Yes" cancelText="No">
                            <Button type="primary" style={{ marginRight: '15px' }}>{action === "Cancel" ? action + " Trade" : "Delete"}</Button>
                        </Popconfirm>
                    </Link>
                    ) : (
                            <div></div>
                        )}
                    <Link to={linkBack}>
                        <Button style={{ marginTop: '15px' }}>
                            {!disable ? (
                                <div>Back</div>
                            ) : (
                                    <div>Back</div>
                                )}
                        </Button>
                    </Link>
                </Form.Item>
            </Form>
        </div>
    )
}