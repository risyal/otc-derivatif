import React, { useState } from 'react';
import {
    Form,
    Input,
    Button,
    Radio,
    Typography,
    DatePicker
} from 'antd';
import {
    CaretLeftOutlined
} from '@ant-design/icons';
import { Link } from "react-router-dom";

const { Title } = Typography;

const ViewEditCCMgt = (props) => {
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
            code: '',
            name: '',
            eligibility: '',
            haircut: '',
        },
        {
            key: '1',
            code: 'CENAIDJA',
            name: 'Instrument1',
            eligibility: 'Eligibility1',
            haircut: 'Haircut1',
        },
        {
            key: '2',
            code: 'CENAIDJA',
            name: 'Instrument2',
            eligibility: 'Eligibility2',
            haircut: 'Haircut2',
        },
        {
            key: '3',
            code: 'CENAIDJA',
            name: 'Instrument3',
            eligibility: 'Eligibility3',
            haircut: 'Haircut3',
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

    return(
        <div>
            <div className="head-content viewEdit">
                <Title level={4}>
                    <span className="icon-back">
                        <Link to="/cashcollmgt">
                            <CaretLeftOutlined />
                        </Link>
                    </span>
                {action} Data</Title>
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
                <Form.Item label="Currency Code">
                    <Input disabled={disable} defaultValue={dataMemberById.code} />
                </Form.Item>
                <Form.Item label="Currency Name">
                    <Input disabled={disable} defaultValue={dataMemberById.name} />
                </Form.Item>
                <Form.Item label="Eligibity">
                    <Input disabled={disable} defaultValue={dataMemberById.eligibility} />
                </Form.Item>
                <Form.Item label="Haircut">
                    <Input disabled={disable} defaultValue={dataMemberById.haircut} />
                </Form.Item>
                <Form.Item wrapperCol={{ span: 12, offset: 6 }}>
                    {!disable ? (<Link to="/cashcollmgt">
                        <Button type="primary" htmlType="submit" style={{ marginRight: '15px' }}>
                            Submit
                        </Button>
                    </Link>
                    ) : (
                            <div></div>
                        )}
                    <Link to="/cashcollmgt">
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


export default ViewEditCCMgt
