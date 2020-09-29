import React, { useState, useMemo } from 'react'
import {
    Form,
    Input,
    Button,
    Radio,
    Typography,
    DatePicker,
} from 'antd';
import {
    ArrowLeftOutlined
} from '@ant-design/icons';
import { Link } from "react-router-dom";
import moment from 'moment';

const { Title } = Typography;

const ViewEditCalendar = (props) => {
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
            date: '',
            information: '',
            update: '',
        },
        {
            key: '1',
            date: '01-01-2020',
            information: 'New Years Day',
            update: '01-07-2020',
        },
        {
            key: '2',
            date: '25-01-2020',
            information: 'Chinese Lunar',
            update: '01-08-2020',
        },
        {
            key: '3',
            date: '23-03-2020',
            information: 'Ascension of The Prophet Muhammad',
            update: '01-08-2020',
        },{
            key: '4',
            date: '25-03-2020',
            information: 'Bali Day of Silence and Hindu New Year',
            update: '01-08-2020',
        },
        {
            key: '5',
            date: '10-04-2020',
            information: 'Good Friday',
            update: '01-08-2020',
        },
        {
            key: '6',
            date: '12-04-2020',
            information: 'Easter Sunday',
            update: '01-08-2020',
        }
    ]);
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
