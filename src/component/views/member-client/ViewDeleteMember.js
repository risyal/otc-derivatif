import React, { useState } from 'react'
import {
    Form, Popconfirm,
    Button,
    Radio,
    Typography
} from 'antd';
import {
    CaretLeftOutlined
} from '@ant-design/icons';
import { Link } from "react-router-dom";

const { Title } = Typography;

const ViewDeleteMember = (props) => {
    const componentSize = 'middle';
    const text = 'Are you sure to delete this task?';

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
            sidLei: ' ',
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
            sidLei: 'ID12',
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
            sidLei: 'ID23',
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
            sidLei: 'ID34',
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
            <div className="head-content">
                <Title level={4}>
                    <Link to="/memberandclientmanagement/registermember">
                        <CaretLeftOutlined />
                    </Link>
                    {action} Member</Title>
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
                    {dataMemberById.memberID}
                </Form.Item>
                <Form.Item label="SID/LEI">
                    {dataMemberById.sidLei}
                </Form.Item>
                <Form.Item label="Company Name">
                    {dataMemberById.namaPerusahaan}
                </Form.Item>
                <Form.Item label="Address">
                    {dataMemberById.alamat}
                </Form.Item>
                <Form.Item label="PIC">
                    {dataMemberById.pic}
                </Form.Item>
                <Form.Item label="Telephone Number">
                    {dataMemberById.noTelp}
                </Form.Item>
                <Form.Item label="Email">
                    {dataMemberById.email}
                </Form.Item>
                <Form.Item label="RTGS Account">
                    <Form.Item label="Settlement" >
                        {dataMemberById.settlement}
                    </Form.Item>
                    <Form.Item label="Default Fund"
                        style={{ marginBottom: '0px' }}  >
                        {dataMemberById.dFund}
                    </Form.Item>
                </Form.Item>
                <Form.Item label="SSSS Account">
                    {dataMemberById.ssss}
                </Form.Item>
                <Form.Item label="Status">
                    {dataMemberById.status}
                </Form.Item>
                <Form.Item wrapperCol={{ span: 12, offset: 6 }}>
                    {!disable ? (<Link to="/memberandclientmanagement/registermember">
                        <Popconfirm placement="leftTop" title={text} okText="Yes" cancelText="No">
                            <Button type="primary" style={{ marginRight: '15px' }}>Delete</Button>
                        </Popconfirm>
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

export default ViewDeleteMember
