import React, { useState } from 'react'
import {
    Form,
    Popconfirm,
    Button,
    Radio,
    Typography
} from 'antd';
import {
    CaretLeftOutlined
} from '@ant-design/icons';
import { Link } from "react-router-dom";

const { Title } = Typography;

const ViewDeleteAccount = (props) => {
    const text = 'Are you sure to delete this task?';
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
            code: 'CENAIDJA',
            sidLei: 'SID1LEI1',
            name: 'Nas abah',
            currency: '$10',
            accNo: 'D4211',
            status: 'Active',
            accNo2: 'D4211',
            status2: 'Frozen',
            accNo3: 'D4211',
            status3: 'Close',
        },
        {
            key: '2',
            code: 'CENAIDJA',
            sidLei: 'SID1LEI2',
            name: 'Mega',
            currency: '$50',
            accNo: 'D4212',
            status: 'Active',
            accNo2: 'D4212',
            status2: 'Frozen',
            accNo3: 'D4212',
            status3: 'Frozen',
        },
        {
            key: '3',
            code: 'CENAIDJA',
            sidLei: 'SID1LEI3',
            name: 'Tera',
            currency: '$25',
            accNo: 'D4212',
            status: 'Frozen',
            accNo2: 'D4212',
            status2: 'Close',
            accNo3: 'D4212',
            status3: 'Active',
        },
    ];
    const dataMemberById = data.find((member) => {
        return member.key === props.location.state.id

    })

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
                        <Link to="/editaccount">
                            <CaretLeftOutlined />
                        </Link>
                    </span>
                {action} Account</Title>
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
                <Form.Item label="Member ID">
                    <Form layout="inline">
                        <Form.Item label="Code">
                            {dataMemberById.code}
                        </Form.Item>
                        <Form.Item label="SID/LEI">
                            {dataMemberById.sidLei}
                        </Form.Item>
                    </Form>
                </Form.Item>
                <Form.Item label="Name">
                    {dataMemberById.name}
                </Form.Item>
                <Form.Item label="Currency">
                    {dataMemberById.currency}
                </Form.Item>
                <Form.Item label="Cash collateral">
                    <Form layout="inline">
                        <Form.Item label="ACC No">
                            {dataMemberById.accNo}
                        </Form.Item>
                        <Form.Item label="Status">
                            {dataMemberById.status}
                        </Form.Item>
                    </Form>
                </Form.Item>
                <Form.Item label="Non-Cash collateral">
                    <Form layout="inline">
                        <Form.Item label="ACC No">
                            {dataMemberById.accNo2}
                        </Form.Item>
                        <Form.Item label="Status">
                            {dataMemberById.status2}
                        </Form.Item>
                    </Form>
                </Form.Item>
                <Form.Item label="Default Fund">
                    <Form layout="inline">
                        <Form.Item label="ACC No">
                            {dataMemberById.accNo3}
                        </Form.Item>
                        <Form.Item label="Status">
                            {dataMemberById.status3}
                        </Form.Item>
                    </Form>
                </Form.Item>
                <Form.Item wrapperCol={{ span: 12, offset: 6 }}>
                    {!disable ? (<Link to="/editaccount">
                        <Popconfirm placement="leftTop" title={text} okText="Yes" cancelText="No">
                            <Button type="primary" style={{ marginRight: '15px' }}>Delete</Button>
                        </Popconfirm>
                    </Link>
                    ) : (
                            <div></div>
                        )}
                    <Link to="/editaccount">
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

export default ViewDeleteAccount
