import React, { useState, useMemo } from 'react'
import {
    Form,
    Input,
    Button,
    Radio,
    Typography,
    TimePicker, 
} from 'antd';
import {
    ArrowLeftOutlined
} from '@ant-design/icons';
import { Link } from "react-router-dom";
import moment from 'moment';

const { Title } = Typography;

const ViewEditParam = (props) => {
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
			key: '1',
			parameter: 'ARMS Sends Reference/Master Data to SKD and Risk',
			startTime: '06:30',
			endTime: '',
		},
		{
			key: '2',
			parameter: 'Window Time for Trade Gateway',
			startTime: '06:30',
			endTime: '24:00',
		},
		{
			key: '3',
			parameter: 'Manual Trade Submission from SKD',
			startTime: '09:00',
			endTime: '16:00',
		},
		{
			key: '4',
			parameter: 'Trade Validation Gateway',
			startTime: '08:00',
			endTime: '16:00',
		},
		{
			key: '5',
			parameter: 'Trade Validation in SKD',
			startTime: '08:00',
			endTime: '16:00',
		},
		{
			key: '6',
			parameter: 'Collateral Blocking',
			startTime: '08:00',
			endTime: '16:00',
		},
		{
			key: '7',
			parameter: 'Trade Acceptance',
			startTime: '08:00',
			endTime: '16:00',
		},
		{
			key: '8',
			parameter: 'Trade Novation (and Basic Netting)',
			startTime: '08:00',
			endTime: '16:00',
		},
		{
			key: '9',
			parameter: 'IM Computation for new Trade',
			startTime: '08:00',
			endTime: '16:00',
		},
		{
			key: '10',
			parameter: 'MTM Computation',
			startTime: '08:00',
			endTime: '16:00',
		},
		{
			key: '11',
			parameter: 'Margin Call in Sufficient Collateral SKD',
			startTime: '06:30',
			endTime: '24:00',
		},
		{
			key: '12',
			parameter: 'Collateral Deposit by CM',
			startTime: '06:30',
			endTime: '17:00',
		},
		{
			key: '13',
			parameter: 'Net of MTM Margin',
			startTime: '19:00',
			endTime: '19:30',
		},
		{
			key: '14',
			parameter: 'Receipt JIBOR Benchmark Interest Rate',
			startTime: '11:00',
			endTime: '19:30',
		},
		{
			key: '15',
			parameter: 'Receipt JISDOR Benchmark FX Spot Rate',
			startTime: '10:00',
			endTime: '',
		},
		{
			key: '16',
			parameter: 'Obligation Crystallization',
			startTime: '18:00',
			endTime: '19:30',
		},
		{
			key: '17',
			parameter: 'Debit CM Settement Acc. to KPEI Settlement Acc.',
			startTime: '12:00',
			endTime: '13:00',
		},
		{
			key: '18',
			parameter: 'Reconciliatiion of Settlement Receipts',
			startTime: '13:00',
			endTime: '',
		},
		{
			key: '19',
			parameter: 'Credit CM Settement Acc. to KPEI Settlement Acc.',
			startTime: '13:30',
			endTime: '14:30',
		},
		{
			key: '20',
			parameter: 'Reconciliation of Settlement Receipts',
			startTime: '14:30',
			endTime: '',
		},
		{
			key: '21',
			parameter: 'Settlement of Exceptions (Settlement Failures in Normal Course)',
			startTime: '15:00',
			endTime: '17:00',
		},
		{
			key: '22',
			parameter: 'Default Mangement Process Initiated in Case of Default of CM',
			startTime: '17:30',
			endTime: '18:30',
		},
		{
			key: '23',
			parameter: 'Window for Trade Submission Closes',
			startTime: '16:00',
			endTime: '',
		},
		{
			key: '24',
			parameter: 'IM EOD Computation MTM Margin Computation',
			startTime: '16:00',
			endTime: '',
		},
		{
			key: '25',
			parameter: 'Stress Testing by RMS',
			startTime: '17:00',
			endTime: '19:00',
		},
		{
			key: '26',
			parameter: 'Reverse Stress Testing by RMS',
			startTime: '17:00',
			endTime: '19:00',
		},
		{
			key: '27',
			parameter: 'Back Testing by RMS',
			startTime: '17:00',
			endTime: '19:00',
		},
		{
			key: '28',
			parameter: 'Receipt Indonia Reference Rate',
			startTime: '19:30',
			endTime: '',
		},
		{
			key: '29',
			parameter: 'MTM Computation for OIS',
			startTime: '19:30',
			endTime: '',
		},
		{
			key: '30',
			parameter: 'Obligation Crystallization',
			startTime: '20:00',
			endTime: '',
		},
		{
			key: '31',
			parameter: 'EOD Reports Generation for member',
			startTime: '20:30',
			endTime: '',
		},
		{
			key: '32',
			parameter: 'EOD Reporst Generation for Regulatpr/Internal KPEI)',
			startTime: '20:30',
			endTime: '',
		},
		{
			key: '33',
			parameter: 'End of Day Process for Close of Business',
			startTime: '21:00',
			endTime: '',
		}
    ]);

    const dataMemberById = data.find((member) => {
        return member.key === props.location.state.id
    })

    const action = props.location.state.action
    const disable = props.location.state.disable
    const [sixEyes, setSixEyes] = useState(1);
    const radioOnChange = e => {
        setSixEyes(e.target.value);
    };
    const format = 'HH:mm';

    return (
        <div>
            <div className="head-content viewEdit">
                <Title level={4}>
                    <span className="icon-back">
                        <Link to="/editparameter">
                            <ArrowLeftOutlined />
                        </Link>
                    </span>
                    {action} Time Parameter</Title>
            </div>
            <Form
                {...formItemLayout}
                size={componentSize}
                layout="horizontal"
                initialValues={{ size: componentSize }}
                labelAlign="left"
                style={{ marginBottom: '80px' }}
            >
                <Form.Item label="Parameter">
                    <Input disabled defaultValue={dataMemberById.parameter} style={{ color: '#000000' }} />
                </Form.Item>
                <Form.Item label="Start Time">
                    <TimePicker
                        defaultValue={moment('12:08', format)}
                        format={format}
                        style={{ width: '100%' }}
                    />
                </Form.Item>
                <Form.Item label="End Time">
                    <TimePicker
                        defaultValue={moment('15:08', format)}
                        format={format}
                        style={{ width: '100%' }}
                    />
                </Form.Item>

                {!disable ? (<Form.Item label="Role">
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
                    {!disable ? (<Link to="/editparameter">
                        <Button type="primary" htmlType="submit" style={{ marginRight: '15px' }}>
                            Submit
                        </Button>
                    </Link>
                    ) : (
                            <div></div>
                        )}
                    <Link to="/editparameter">
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


export default ViewEditParam
