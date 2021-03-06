import React, { useState, useMemo } from 'react'
import {
    Form,
    Input,
    Button,
    Select,
    Radio,
    Typography
} from 'antd';
import {
    ArrowLeftOutlined
} from '@ant-design/icons';
import { Link } from "react-router-dom";

const { Title } = Typography;
const { Option } = Select;

const ViewEditMember = (props) => {
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
            memberID: ' ',
            sid: ' ',
            lei: ' ',
            namaPerusahaan: ' ',
            alamat: ' ',
            pic: ' ',
            noTelp: ' ',
            email: ' ',
            bic: ' ',
            collateral: 'Auto Generate',
            settlement: 'Auto Generate',
            dFund: 'Auto Generate',
            ssss: 'Auto Generate',
            status: 'Active',
        },
        {
            key: '1',
            no: '1',
            memberID: 'Member123',
            sid: 'ID12',
            lei: 'lei1',
            namaPerusahaan: 'PT Jaya Abadi',
            alamat: 'New York No. 1 Lake Park',
            pic: 'John Brown',
            noTelp: '085112345227',
            email: 'john@gmail.com',
            bic: 'BIC01',
            collateral: 'Collateral1',
            settlement: 'Settlement1',
            dFund: 'Def-Fund1',
            ssss: 'SSSS1',
            status: 'Active',
        },
        {
            key: '2',
            no: '2',
            memberID: 'Member345',
            sid: 'ID23',
            lei: 'lei2',
            namaPerusahaan: 'PT Citra Utama',
            alamat: 'New York No. 1 Lake Park',
            pic: 'Jim Green',
            noTelp: '085112345227',
            email: 'jim@gmail.com',
            bic: 'BIC02',
            collateral: 'Collateral2',
            settlement: 'Settlement2',
            dFund: 'Def-Fund2',
            ssss: 'SSSS2',
            status: 'Closed',
        },
        {
            key: '3',
            no: '3',
            memberID: 'Member567',
            sid: 'ID34',
            lei: 'lei3',
            namaPerusahaan: 'PT Abadi Makmur',
            alamat: 'New York No. 1 Lake Park',
            pic: 'John Black',
            noTelp: '085112345227',
            email: 'black@gmail.com',
            bic: 'BIC03',
            collateral: 'Collateral3',
            settlement: 'Settlement3',
            dFund: 'Def-Fund3',
            ssss: 'SSSS3',
            status: 'Active',
        },
    ]);
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
                        <Link to="/memberandclientmanagement/registermember">
                            <ArrowLeftOutlined />
                        </Link>
                    </span>
                {action} Data Member</Title>
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
                <Form.Item label="Company Name">
                    <Input disabled={disable} defaultValue={dataMemberById.namaPerusahaan} />
                </Form.Item>
                <Form.Item label="Address">
                    <Input disabled={disable} defaultValue={dataMemberById.alamat} />
                </Form.Item>
                <Form.Item label="PIC">
                    <Input disabled={disable} defaultValue={dataMemberById.pic} />
                </Form.Item>
                <Form.Item label="Telephone Number">
                    <Input disabled={disable} defaultValue={dataMemberById.noTelp} />
                </Form.Item>
                <Form.Item label="Email">
                    <Input disabled={disable} defaultValue={dataMemberById.email} />
                </Form.Item>
                <Form.Item label="RTGS Account">
                    <Input
                        addonBefore="Collateral"
                        defaultValue={dataMemberById.collateral}
                        disabled='true'
                        style={{ marginBottom: '15px' }} />
                    <Input
                        addonBefore="Settlement"
                        defaultValue={dataMemberById.settlement}
                        disabled='true'
                        style={{ marginBottom: '15px' }} />
                    <Input
                        addonBefore="Default Fund"
                        defaultValue={dataMemberById.dFund}
                        disabled='true'
                    />
                </Form.Item>
                <Form.Item label="SSSS Account">
                    <Input disabled='true' defaultValue={dataMemberById.ssss} />
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
                    {!disable ? (<Link to="/memberandclientmanagement/registermember">
                        <Button type="primary" htmlType="submit" style={{ marginRight: '15px' }}>
                            Submit
                        </Button>
                    </Link>
                    ) : (
                            <div></div>
                        )}
                    <Link to="/memberandclientmanagement/registermember">
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

export default ViewEditMember
