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


const ViewEditClient = (props) => {
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
            memberID: ' ',
            sid: ' ',
            lei: ' ',
            namaNasabah: ' ',
            rtgsAccount: 'Auto Generate',
            ssssAccount: 'Auto Generate',
            status: 'Active',
        },
        {

            key: '1',
            memberID: '1',
            sid: 'SID1',
            lei: 'LEI1',
            namaNasabah: 'Nas abah',
            rtgsAccount: 'rtgs Account1',
            ssssAccount: 'ssss Account1',
            status: 'Active',
        },
        {
            key: '2',
            memberID: '2',
            sid: 'SID2',
            lei: 'LEI2',
            namaNasabah: 'fulan bin fulan',
            rtgsAccount: 'rtgs Account2',
            ssssAccount: 'ssss Account2',
            status: 'Active',
        },
        {
            key: '3',
            memberID: '3',
            sid: 'SID3',
            lei: 'LEI3',
            namaNasabah: 'fulanah bin fulan',
            rtgsAccount: 'rtgs Account3',
            ssssAccount: 'ssss Account3',
            status: 'Active',
        },
    ];
    const dataMemberById = data.find((member) => {
        return member.key === props.location.state.id

    })

    const statusSelect = ['Active', 'Suspend', 'Closed'];
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
                        <Link to="/memberandclientmanagement/registerclient">
                            <ArrowLeftOutlined />
                        </Link>
                    </span>
                    {action} Data Client</Title>
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
                    <Input disabled={disable} defaultValue={dataMemberById.memberID} />
                </Form.Item>
                <Form.Item label="SID">
                    <Input disabled={disable} defaultValue={dataMemberById.sid} />
                </Form.Item>
                <Form.Item label="LEI">
                    <Input disabled={disable} defaultValue={dataMemberById.lei} />
                </Form.Item>
                <Form.Item label="Client Name">
                    <Input disabled={disable} defaultValue={dataMemberById.namaNasabah} />
                </Form.Item>
                <Form.Item label="Collateral Account">
                    <Input disabled='true' defaultValue={dataMemberById.rtgsAccount} />
                </Form.Item>
                <Form.Item label="Status">
                    <Select
                        value={selectedStatus}
                        onChange={statusClick}
                        disabled={disable}>
                        {statusSelect.map(status => (
                            <Option value={status}>{status}</Option>
                        ))}
                    </Select>
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
                    {!disable ? (<Link to="/memberandclientmanagement/registerclient">
                        <Button type="primary" htmlType="submit" style={{ marginRight: '15px' }}>
                            Submit
                        </Button>
                    </Link>
                    ) : (
                            <div></div>
                        )}
                    <Link to="/memberandclientmanagement/registerclient">
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


export default ViewEditClient
