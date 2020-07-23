import React, { useState } from 'react'
import {
    Form,
    Input,
    Button,
    Radio,
    Typography,
    DatePicker,
} from 'antd';
import {
    CaretLeftOutlined,
    ArrowLeftOutlined
} from '@ant-design/icons';
import { Link } from "react-router-dom";
import moment from 'moment';

const { Title } = Typography;

const ViewEditCalendar = (props) => {
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
            key: '0',
            date: '',
            information: '',
            update: '',
        },
        {
            key: '1',
            date: '31-07-2020',
            information: 'Eid Al-Adha',
            update: '01-07-2020',
        },
        {
            key: '2',
            date: '17-08-2020',
            information: 'Hari Proklamasi Indonesia',
            update: '01-08-2020',
        },
        {
            key: '3',
            date: '28-10-2020',
            information: 'Cuti Bersama',
            update: '01-08-2020',
        },
    ];
    const dataCalendarById = data.find((calendar) => {
        return calendar.key === props.location.state.id
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
                        <Link to="/calendar">
                            <ArrowLeftOutlined />
                        </Link>
                    </span>
                    {action} Calendar</Title>
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
                    <DatePicker style={{ width: '100%' }}
                        defaultValue={moment('2020/07/31', dateFormat)}/>
                </Form.Item>
                <Form.Item label="Information">
                    <Input disabled={disable} defaultValue={dataCalendarById.information}/>
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
                    {!disable ? (<Link to="/calendar">
                        <Button type="primary" htmlType="submit" style={{ marginRight: '15px' }}>
                            Submit
                        </Button>
                    </Link>
                    ) : (
                            <div></div>
                        )}
                    <Link to="/calendar">
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


export default ViewEditCalendar
