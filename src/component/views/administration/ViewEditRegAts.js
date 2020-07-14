import React, { useState } from 'react';
import {
    Form,
    Input,
    Button,
    Radio,
    Typography,
} from 'antd';
import {
    CaretLeftOutlined,
    ArrowLeftOutlined
} from '@ant-design/icons';
import { Link } from "react-router-dom";

const { Title } = Typography;    

const ViewEditRegAts = (props) => {
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
            name: '',
            address: '',
            pic: '',
            telp: '',
            email: '',
        },
        {
            key: '1',
            name: 'PT 123',
            address: 'Jl. Kenanga',
            pic: 'Jihan',
            telp: '082221829',
            email: '123@gmail.com',
        },
        {
            key: '2',
            name: 'PT 123',
            address: 'Jl. Kenanga',
            pic: 'Jihan',
            telp: '082221829',
            email: '123@gmail.com',
        },
        {
            key: '3',
            name: 'PT 123',
            address: 'Jl. Kenanga',
            pic: 'Jihan',
            telp: '082221829',
            email: '123@gmail.com',
        },
    ];

    const dataAtsById = data.find((ats) => {
        return ats.key === props.location.state.id
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
                        <Link to="/registerats">
                            <ArrowLeftOutlined />
                        </Link>
                    </span>
                {action} Register Ats</Title>
            </div>
            <Form
                {...formItemLayout}
                size={componentSize}
                layout="horizontal"
                initialValues={{ size: componentSize }}
                labelAlign="left"
                style={{ marginBottom: '80px' }}
            >
                
                <Form.Item label="Company name">
                    <Input disabled={disable} defaultValue={dataAtsById.name}/>
                </Form.Item>
                <Form.Item label="Address">
                    <Input disabled={disable} defaultValue={dataAtsById.address}/>
                </Form.Item>
                <Form.Item label="PIC Name">
                    <Input disabled={disable} defaultValue={dataAtsById.pic}/>
                </Form.Item>
                <Form.Item label="Telephone Number">
                    <Input disabled={disable} defaultValue={dataAtsById.telp}/>
                </Form.Item>
                <Form.Item label="Email">
                    <Input disabled={disable} defaultValue={dataAtsById.email}/>
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
                    {!disable ? (<Link to="/registerats">
                        <Button type="primary" htmlType="submit" style={{ marginRight: '15px' }}>
                            Submit
                        </Button>
                    </Link>
                    ) : (
                            <div></div>
                        )}
                    <Link to="/registerats">
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


export default ViewEditRegAts
