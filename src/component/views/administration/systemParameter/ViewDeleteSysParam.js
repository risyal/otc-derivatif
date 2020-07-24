import React, { useState, useMemo } from 'react'
import {
    Form,
    Popconfirm,
    Button,
    Radio,
    Typography,
    Table,
    Row,
    Col,
} from 'antd';
import {
    ArrowLeftOutlined,
    DownloadOutlined
} from '@ant-design/icons';
import { Link } from "react-router-dom";

const { Title } = Typography;

const ViewDeleteSysParam = (props) => {
    const [text] = useState('Are you sure to delete this task?');
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
            key: '0',
            settlement: '',
            tvTime: '',
            initialMp: '',
            ipChart: '',
            feeType: '',
            product: '',
            objectFee: '',
            variables: '',
            cycle: '',
        },
        {
            key: '1',
            settlement: 'SettlementWindow1',
            tvTime: 'TradeValidationTime1',
            initialMp: 'InitialMarginPercentage1',
            ipChart: 'IndicatorPercentageChart1',
            feeType: 'Type1',
            product: 'Product1',
            objectFee: 'Object1',
            variables: 'Variables1',
            cycle: 'SettlementCycle1',
        },
        {
            key: '2',
            settlement: 'SettlementWindow2',
            tvTime: 'TradeValidationTime2',
            initialMp: 'InitialMarginPercentage2',
            ipChart: 'IndicatorPercentageChart2',
            feeType: 'Type2',
            product: 'Product2',
            objectFee: 'Object2',
            variables: 'Variables2',
            cycle: 'SettlementCycle2',
        },
        {
            key: '3',
            settlement: 'SettlementWindow3',
            tvTime: 'TradeValidationTime3',
            initialMp: 'InitialMarginPercentage3',
            ipChart: 'IndicatorPercentageChart3',
            feeType: 'Type3',
            product: 'Product3',
            objectFee: 'Object3',
            variables: 'Variables3',
            cycle: 'SettlementCycle3',
        },
    ]);
    const dataParamById = data.find((param) => {
        return param.key === props.location.state.id

    })

    const [dataForView] = useState([
        {
            title: "Settlement Window :",
            paramData: dataParamById.settlement
        },
        {
            title: "Trade Validation Time :",
            paramData: dataParamById.tvTime
        },
        {
            title: "Initial Margin Percentage :",
            paramData: dataParamById.initialMp
        },
        {
            title: "Indicator Percentage Chart :",
            paramData: dataParamById.ipChart
        },
        {
            title: "Fee Type :",
            paramData: dataParamById.feeType
        },
        {
            title: "Product :",
            paramData: dataParamById.product
        },
        {
            title: "Object Fee :",
            paramData: dataParamById.objectFee
        },
        {
            title: "Variables :",
            paramData: dataParamById.variables
        },
        {
            title: "Settlement Cycle :",
            paramData: dataParamById.cycle
        },
    ]);

    const action = props.location.state.action
    const disable = props.location.state.disable
    const [sixEyes, setSixEyes] = useState(1);
    const radioOnChange = e => {
        setSixEyes(e.target.value);
    };
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
                        <Link to="/systemparameter">
                            <ArrowLeftOutlined />
                        </Link>
                    </span>
                {action} System Parameter</Title>
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

                <Form.Item wrapperCol={{ span: 12, offset: 6 }}>
                    {!disable ? (<Link to="/systemparameter">
                        <Popconfirm placement="leftTop" title={text} okText="Yes" cancelText="No">
                            <Button type="primary" style={{ marginRight: '15px' }}>Delete</Button>
                        </Popconfirm>
                    </Link>
                    ) : (
                            <div></div>
                        )}
                    <Link to="/systemparameter">
                        <Button style={{ marginTop: '15px' }}>
                            {!disable ? (
                                <div>Cancel</div>
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

export default ViewDeleteSysParam
