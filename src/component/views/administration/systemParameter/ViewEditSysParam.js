import React, { useState, useMemo } from 'react';
import {
    Form,
    Input,
    Button,
    Radio,
    Typography
} from 'antd';
import {
    ArrowLeftOutlined
} from '@ant-design/icons';
import { Link } from "react-router-dom";
import moment from 'moment';

const { Title } = Typography;   

const ViewEditSysParam = (props) => {
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

    const action = props.location.state.action
    const disable = props.location.state.disable
    const [sixEyes, setSixEyes] = useState(1);
    const radioOnChange = e => {
        setSixEyes(e.target.value);
    };

    return(
        <div>
            <div className="head-content viewEdit">
                <Title level={4}>
                    <span className="icon-back">
                        <Link to="/systemparameter">
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
                <Form.Item label="Settlement Window">
                    <Input disabled={disable} defaultValue={dataParamById.settlement} />
                </Form.Item>
                <Form.Item label="Trade Validation Time">
                    <Input disabled={disable} defaultValue={dataParamById.tvTime} />
                </Form.Item>
                <Form.Item label="Initial Margin Percentage">
                    <Input disabled={disable} defaultValue={dataParamById.initialMp} />
                </Form.Item>
                <Form.Item label="Indicator Percentage Chart">
                    <Input disabled={disable} defaultValue={dataParamById.ipChart} />
                </Form.Item>
                <Form.Item label="Fee Type">
                    <Input disabled={disable} defaultValue={dataParamById.feeType} />
                </Form.Item>
                <Form.Item label="Product">
                    <Input disabled={disable} defaultValue={dataParamById.product} />
                </Form.Item>
                <Form.Item label="Object Fee">
                    <Input disabled={disable} defaultValue={dataParamById.objectFee} />
                </Form.Item>
                <Form.Item label="Variables">
                    <Input disabled={disable} defaultValue={dataParamById.variables} />
                </Form.Item>
                <Form.Item label="Settlement Cycle">
                    <Input disabled={disable} defaultValue={dataParamById.cycle} />
                </Form.Item>

                {!disable ? (<Form.Item label="Role" >
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
                        <Button type="primary" htmlType="submit" style={{ marginRight: '15px' }}>
                            Submit
                        </Button>
                    </Link>
                    ) : (
                            <div></div>
                        )}
                    <Link to="/systemparameter">
                        <Button >
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


export default ViewEditSysParam