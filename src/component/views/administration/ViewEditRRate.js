import React, { useState } from 'react'
import {
    Form,
    Input,
    Button,
    Select,
    Radio,
    Typography,
    DatePicker
} from 'antd';
import {
    CaretLeftOutlined,
    ArrowLeftOutlined
} from '@ant-design/icons';
import { Link } from "react-router-dom";
import moment from 'moment';

const { Title } = Typography;
const { Option } = Select;


const ViewEditRRate = (props) => {
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
    const data = [
        {
            key: '1',
            code: 'JIBOR1',
            type: 'JIBOR',
            date: '24-03-2020',
            value: 'Value',
        },
        {
            key: '2',
            code: 'JIBOR1',
            type: 'INDONIA',
            date: '24-03-2020',
            value: 'Value2',        
        },
        {
            key: '3',
            code: 'JIBOR2',
            type: 'JISDOR',
            date: '24-03-2020',
            value: 'Value3',        
        },
        {
            key: '4',
            code: 'JIBOR3',
            type: 'LIBOR',
            date: '24-03-2020',
            value: 'Value4',
        },
    ];
    const dataMemberById = data.find((member) => {
        return member.key === props.location.state.id
    })

    const typeSelect = ['JIBOR', 'JISDOR', 'INDONIA', 'LIBOR'];
    const [selectedType, setSelectedType] = useState(typeSelect[0]);
    const typeClick = (e) => {
        setSelectedType(e);
    }
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
                {action} Referency Rate</Title>
            </div>
            <Form
                {...formItemLayout}
                size={componentSize}
                layout="horizontal"
                initialValues={{ size: componentSize }}
                labelAlign="left"
                style={{ marginBottom: '80px' }}
            >
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
                <Form.Item label="Ref. Code">
                    <Input disabled={disable} defaultValue={dataMemberById.code} />
                </Form.Item>
                <Form.Item label="Ref. Type">
                    <Select
                        defaultValue={dataMemberById.type}
                        onChange={typeClick}
                        disabled={disable}
                        >
                        {typeSelect.map(type => (
                            <Option value={type}>{type}</Option>
                        ))}
                    </Select>
                </Form.Item>
                <Form.Item label="Date">
                    <DatePicker style={{ width: '100%'}} 
                        defaultValue={moment('2020/03/24', dateFormat)}/>   
                </Form.Item>
                <Form.Item label="Value">
                    <Input disabled={disable} defaultValue={dataMemberById.value} />
                </Form.Item>
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


export default ViewEditRRate
