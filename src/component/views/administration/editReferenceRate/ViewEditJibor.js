import React, { useState, useMemo } from 'react'
import {
    Form,
    Input,
    Button,
    Radio,
    Typography,
    DatePicker
} from 'antd';
import {
    ArrowLeftOutlined
} from '@ant-design/icons';
import { Link } from "react-router-dom";
import moment from 'moment';

const { Title } = Typography;

const ViewEditJibor = (props) => {
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
			no: '',
			date: '',
			week1: '',
			month1: '',
			months3: '',
			months6: '',
			months12: '',
		},
        {
			key: '1',
			no: '1',
			date: '20-07-2020',
			week1: '4.35000',
			month1: '4.55769',
			months3: '4.65000',
			months6: '4.85577',
			months12: '5.05769',
		},
		{
			key: '2',
			no: '2',
			date: '19-07-2020',
			week1: '0.00000',
			month1: '0.00000',
			months3: '0.00000',
			months6: '0.00000',
			months12: '0.00000',      
		},
		{
			key: '3',
			no: '3',
			date: '18-07-2020',
			week1: '4.10000',
			month1: '4.30385',
			months3: '4.39798',
			months6: '4.57981',
			months12: '4.10000',        
		},
    ]);

    const dataJiborById = data.find((jibor) => {
        return jibor.key === props.location.state.id
    })

    const action = props.location.state.action
    const disable = props.location.state.disable
    const [sixEyes, setSixEyes] = useState(1);
    const radioOnChange = e => {
        setSixEyes(e.target.value);
    };
    const dateFormat = 'YYYY/MM/DD';

    return (
        <div>
            <div className="head-content viewEdit">
                <Title level={4}>
                    <span className="icon-back">
                        <Link to="/editreferencerate">
                            <ArrowLeftOutlined />
                        </Link>
                    </span>
                {action} Reference Rate - Jibor </Title>
            </div>
            <Form
                {...formItemLayout}
                size={componentSize}
                layout="horizontal"
                initialValues={{ size: componentSize }}
                labelAlign="left"
                style={{ marginBottom: '80px' }}
            >
                <Form.Item label="Date">
                    <DatePicker style={{ width: '100%'}} 
                        defaultValue={moment('2020/07/20', dateFormat)}/>   
                </Form.Item>
                <Form.Item label="1 Week">
                    <Input disabled={disable} defaultValue={dataJiborById.week1} />
                </Form.Item>
                <Form.Item label="1 Month">
                    <Input disabled={disable} defaultValue={dataJiborById.month1} />
                </Form.Item>
                <Form.Item label="3 Months">
                    <Input disabled={disable} defaultValue={dataJiborById.months3} />
                </Form.Item>
                <Form.Item label="6 Months">
                    <Input disabled={disable} defaultValue={dataJiborById.months6} />
                </Form.Item>
                <Form.Item label="12 Months">
                    <Input disabled={disable} defaultValue={dataJiborById.months12} />
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
                    {!disable ? (<Link to="/editreferencerate">
                        <Button type="primary" htmlType="submit" style={{ marginRight: '15px' }}>
                            Submit
                        </Button>
                    </Link>
                    ) : (
                            <div></div>
                        )}
                    <Link to="/editreferencerate">
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


export default ViewEditJibor
