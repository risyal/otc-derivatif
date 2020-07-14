import React, { useState } from 'react'
import {
    Form,
    Input,
    Button,
    Select,
    Radio,
    Typography
} from 'antd';
import {
    CaretLeftOutlined,
    ArrowLeftOutlined
} from '@ant-design/icons';
import { Link } from "react-router-dom";

const { Title } = Typography;
const { Option } = Select;


const ViewEditAccount = (props) => {
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
            currency: 'Rp',
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
            currency: 'Rp',
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
            currency: 'Rp',
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

    const statusSelect = ['Active', 'Frozen', 'Closed'];
    const [selectedStatus, setSelectedStatus] = useState(statusSelect[0]);
    const statusClick = (e) => {
        setSelectedStatus(e);
    };
    const action = props.location.state.action
    const disable = props.location.state.disable
    const [sixEyes, setSixEyes] = useState(1);
    const radioOnChange = e => {
        setSixEyes(e.target.value);
    };

    return (
        <div>
            <div className="head-content viewEdit">
                <Title level={4}>
                    <span className="icon-back">
                        <Link to="/editaccount">
                            <ArrowLeftOutlined />
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
            
                <Form.Item label="Member ID">
                    <Input.Group compact >
                        <Input 
                            style={{ width: '45%', textAlign: 'center' }} 
                            placeholder="Code" 
                            defaultValue={dataMemberById.code}/>
                        <Input
                            className="site-input-split"
                            style={{
                                width: '10%',
                                borderLeft: 0,
                                borderRight: 0,
                                pointerEvents: 'none', textAlign: 'center'
                            }}
                            placeholder="|"
                            disabled
                        />
                        <Input
                            className="site-input-right"
                            style={{
                                width: '45%',
                                textAlign: 'center',
                            }}
                            placeholder="SID/LEI"
                            defaultValue={dataMemberById.sidLei}
                        />
                    </Input.Group>
                </Form.Item>
                <Form.Item label="Name">
                    <Input disabled={disable} defaultValue={dataMemberById.name} />
                </Form.Item>
                <Form.Item label="Currency">
                    <Input disabled={disable} defaultValue={dataMemberById.currency} />
                </Form.Item>                
                <Form.Item label="Cash Collateral">
                    <Input.Group compact >
                        <Input 
                            style={{ width: '45%', textAlign: 'center' }} 
                            placeholder="Acc No" 
                            defaultValue={dataMemberById.accNo}/>
                        <Input
                            className="site-input-split"
                            style={{
                                width: '10%',
                                borderLeft: 0,
                                borderRight: 0,
                                pointerEvents: 'none', textAlign: 'center'
                            }}
                            placeholder="|"
                            disabled
                        />
                        <Select
                            defaultValue={dataMemberById.status}
                            onChange={statusClick}
                            disabled={disable}
                            style={{
                                width: '45%',
                                textAlign: 'center',
                            }}>
                        {statusSelect.map(status => (
                            <Option value={status}>{status}</Option>
                        ))}
                    </Select>
                    </Input.Group>
                </Form.Item>
                <Form.Item label="Non-Cash Collateral">
                    <Input.Group compact >
                        <Input 
                            style={{ width: '45%', textAlign: 'center' }} 
                            placeholder="Acc No" 
                            defaultValue={dataMemberById.accNo2}/>
                        <Input
                            className="site-input-split"
                            style={{
                                width: '10%',
                                borderLeft: 0,
                                borderRight: 0,
                                pointerEvents: 'none', textAlign: 'center'
                            }}
                            placeholder="|"
                            disabled
                        />
                        <Select
                            defaultValue={dataMemberById.status2}
                            onChange={statusClick}
                            disabled={disable}
                            style={{
                                width: '45%',
                                textAlign: 'center',
                            }}>
                        {statusSelect.map(status => (
                            <Option value={status}>{status}</Option>
                        ))}
                    </Select>
                    </Input.Group>
                </Form.Item>
                <Form.Item label="Default fund">
                    <Input.Group compact >
                        <Input 
                            style={{ width: '45%', textAlign: 'center' }} 
                            placeholder="Acc No" 
                            defaultValue={dataMemberById.accNo3}/>
                        <Input
                            className="site-input-split"
                            style={{
                                width: '10%',
                                borderLeft: 0,
                                borderRight: 0,
                                pointerEvents: 'none', textAlign: 'center'
                            }}
                            placeholder="|"
                            disabled
                        />
                        <Select
                            defaultValue={dataMemberById.status3}
                            onChange={statusClick}
                            disabled={disable}
                            style={{
                                width: '45%',
                                textAlign: 'center',
                            }}>
                        {statusSelect.map(status => (
                            <Option value={status}>{status}</Option>
                        ))}
                    </Select>
                    </Input.Group>
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
                    {!disable ? (<Link to="/editaccount">
                        <Button type="primary" htmlType="submit" style={{ marginRight: '15px' }}>
                            Submit
                        </Button>
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


export default ViewEditAccount
