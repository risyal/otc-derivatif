import React, { useState, useMemo } from 'react'
import {
    Form,
    Popconfirm,
    Button,
    Radio,
    Typography,
    Table,
    Input,
    Row,
    Col,
} from 'antd';
import {
    ArrowLeftOutlined
} from '@ant-design/icons';
import { useHistory } from "react-router-dom";
import { DownloadOutlined } from '@ant-design/icons';
const { Title } = Typography;

const ClearingDetail = (props) => {
    let history = useHistory()

    function goBack() {
        history.goBack()
    }
    // const [text] = useState('Are you sure to Cancel this ?');
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
            tradeId: 'UTI1',
            code: 'Code1',
            sid: 'SID1',
            lei: 'LEI1',
            role: 'Role1',
            product: 'Product1',
            tenor: 'Tenor1',
            paymentFrequency: 'Payment Frequency1',
            marketPosition: 'Market Position1',
            fixingDate: '23-03-2020',
            couponPaymentDate: '30-03-2020',
            maturityDate: '30-03-2020',
            notional: 'Notional1',
            cashFlow: '123',
            dayCountFraction: 'Day Count Fraction',
            businessDayConvention: 'Business Day Convention',
            fixedRate: 'Fixed Rate',
            referenceRate: 'Reference Rate',
            fixingRate: 'Fixing Rate',
        },
        {
            key: '2',
            tradeId: 'UTI2',
            code: 'Code2',
            sid: 'SID2',
            lei: 'LEI2',
            role: 'Role2',
            product: 'Product2',
            tenor: 'Tenor2',
            paymentFrequency: 'Payment Frequency2',
            marketPosition: 'Market Position2',
            fixingDate: '23-03-2020',
            couponPaymentDate: '30-03-2020',
            maturityDate: '30-03-2020',
            notional: 'Notional2',
            cashFlow: '123',
        },
        {
            key: '3',
            tradeId: 'UTI3',
            code: 'Code3',
            sid: 'SID3',
            lei: 'LEI3',
            role: 'Role3',
            product: 'Product3',
            tenor: 'Tenor3',
            paymentFrequency: 'Payment Frequency3',
            marketPosition: 'Market Position3',
            fixingDate: '23-03-2020',
            couponPaymentDate: '30-03-2020',
            maturityDate: '30-03-2020',
            notional: 'Notional3',
            cashFlow: '123',
        },
    ]);

    const dataParamById = data.find((param) => {
        return param.key === props.location.state.id
    })

    const [dataForView] = useState([
        {
            title: "Trade ID :",
            paramData: dataParamById.tradeId
        },
        {
            title: "Member Code:",
            paramData: dataParamById.code
        },
        {
            title: "SID :",
            paramData: dataParamById.sid
        },
        {
            title: "LEI :",
            paramData: dataParamById.lei
        },
        {
            title: "Role :",
            paramData: dataParamById.role
        },
        {
            title: "Product :",
            paramData: dataParamById.product
        },
        {
            title: "Tenor :",
            paramData: dataParamById.tenor
        },
        {
            title: "Payment Frequency :",
            paramData: dataParamById.paymentFrequency
        },
        {
            title: "Market Position/Leg :",
            paramData: dataParamById.marketPosition
        },
        {
            title: "Fixing Date :",
            paramData: dataParamById.fixingDate
        },
        {
            title: "Coupon payment date :",
            paramData: dataParamById.couponPaymentDate
        },
        {
            title: "Maturity Date :",
            paramData: dataParamById.maturityDate
        },
        {
            title: "Notional  :",
            paramData: dataParamById.notional
        },
        {
            title: "Cash Flow  :",
            paramData: dataParamById.cashFlow
        },
        {
            title: "Day Count Fraction  :",
            paramData: dataParamById.dayCountFraction
        },
        {
            title: "Business Day Convention  :",
            paramData: dataParamById.businessDayConvention
        },
        {
            title: "Fixed Rate  :",
            paramData: dataParamById.fixedRate
        },
        {
            title: "Reference Rate  :",
            paramData: dataParamById.referenceRate
        },
        {
            title: "Fixing Rate  :",
            paramData: dataParamById.fixingRate
        },
    ]);

    const action = props.location.state.action
    const disable = props.location.state.disable
    const linkBack = props.location.state.linkBack
    // const [sixEyes, setSixEyes] = useState(1);
    // const radioOnChange = e => {
    //     setSixEyes(e.target.value);
    // };
    // const [dataForChecker] = useState([
    //     {
    //         title: "Nama :",
    //         paramData: "Fulan"
    //     },
    //     {
    //         title: "Email :",
    //         paramData: "Fulan@gmail.com"
    //     },
    //     {
    //         title: "Date :",
    //         paramData: "07-07-2020"
    //     },
    // ]);
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
        <div>
            <div className="head-content viewDelete">
                <Title level={4}>
                    <span className="icon-back">
                        <ArrowLeftOutlined onClick={goBack} />
                    </span>
                    {action} Trade</Title>
            </div>
            <Form
                {...formItemLayout}
                size={componentSize}
                layout="horizontal"
                initialValues={{ size: componentSize }}
                labelAlign="left"
                style={{ marginBottom: '80px' }}
            >
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
                    className="viewDelTable"
                    columns={columns}
                    dataSource={dataForView}
                    showHeader={false}
                    rowClassName={(record, index) => index % 2 === 0 ? 'table-row-light' : 'table-row-dark'}
                    size="middle"
                    pagination={false}
                />
                {/* {action === "Approval" ? (
                    <div><br />
                        <h2>Checker Information :</h2>
                        <Table
                            className="viewDelTable"
                            columns={columns}
                            dataSource={dataForChecker}
                            showHeader={false}
                            rowClassName={(record, index) => index % 2 === 0 ? 'table-row-light' : 'table-row-dark'}
                            size="middle"
                            pagination={false}
                        />
                        <br />
                        <Form.Item label="Catatan">
                            <Input.TextArea rows={4} />
                        </Form.Item>
                    </div>) : null
                } */}
                {/* {!disable ? (<Form.Item label="Role" className="roleViewDel">
                    <Radio.Group onChange={radioOnChange} value={sixEyes}>
                        <Radio value={1}>Maker</Radio>
                        <Radio value={2}>Direct Checker</Radio>
                        <Radio value={3}>Direct Approver</Radio>
                    </Radio.Group>
                </Form.Item>
                ) : null} */}
                <Form.Item wrapperCol={{ span: 12, offset: 6 }}>
                    {/* {!disable ? (<Link to={linkBack}>
                        <Popconfirm placement="leftTop" title={action === "Cancel" ? text : null} okText="Yes" cancelText="No">
                            <Button type="primary" style={{ marginRight: '15px' }}>{action === "Cancel" ? action + " Trade" :
                                (action === "Confirmation" ? "Confirm" : action === "Approval" ? "Approve" : "Delete")}</Button>
                        </Popconfirm>
                    </Link>
                    ) : null} */}
                    <Button onClick={goBack} style={{ marginTop: '15px' }}>
                        {!disable ? action === "Approval" ? "Reject" : (
                            <div>Back</div>
                        ) : (
                                <div>Back</div>
                            )}

                    </Button>
                </Form.Item>
            </Form>
        </div>
    )
}

export default ClearingDetail
