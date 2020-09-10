import React, { useState, useMemo } from 'react'
import {
    Form,
    Popconfirm,
    Button,
    Radio,
    Typography,
    Table,
} from 'antd';
import {
    ArrowLeftOutlined
} from '@ant-design/icons';
import { Link } from "react-router-dom";

const { Title } = Typography;

const ViewDeleteCalendar= (props) => {
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
        },
    ]);
    const dataUserById = data.find((user) => {
        return user.key === props.location.state.id
    })

    const [dataForView] = useState([
        {
            title: "Date :",
            paramData: dataUserById.date
        },
        {
            title: "Information :",
            paramData: dataUserById.information
        },
    ]);

    const action = props.location.state.action
    const disable = props.location.state.disable
    const [sixEyes, setSixEyes] = useState(1);
    const radioOnChange = e => {
        setSixEyes(e.target.value);
    };

    return (
        <div>
            <div className="head-content viewDelete">
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
                
                <Table
                    className="viewDelTable"
                    columns={columns}
                    dataSource={dataForView}
                    showHeader={false}
                    rowClassName={(record, index) => index % 2 === 0 ? 'table-row-light' : 'table-row-dark'}
                    size="middle"
                    pagination={false}
                />

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
                        <Popconfirm placement="leftTop" title={text} okText="Yes" cancelText="No">
                            <Button type="primary" style={{ marginRight: '15px' }}>Delete</Button>
                        </Popconfirm>
                    </Link>
                    ) : (
                            <div></div>
                        )}
                    <Link to="/calendar">
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

export default ViewDeleteCalendar
