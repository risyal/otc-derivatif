import React, { useState } from 'react'
import {
    Form,
    Input,
    Button,
} from 'antd';
import { Typography } from 'antd';
import { Link } from "react-router-dom";

const { Title } = Typography;

const ViewEditMember = (props) => {
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
            namaPerusahaan: ' ',
            alamat: ' ',
            pic: ' ',
            noTelp: ' ',
            email: ' ',
            status: ' ',
        }, {
            key: '1',
            memberID: 'Member123',
            namaPerusahaan: 'PT Jaya Abadi',
            alamat: 'New York No. 1 Lake Park',
            pic: 'John Brown',
            noTelp: '085112345227',
            email: 'john@gmail.com',
            status: 'status1',
        },
        {
            key: '2',
            memberID: 'Member345',
            namaPerusahaan: 'PT Citra Utama',
            alamat: 'New York No. 1 Lake Park',
            pic: 'Jim Green',
            noTelp: '085112345227',
            email: 'jim@gmail.com',
            status: 'status3',
        },
        {
            key: '3',
            memberID: 'Member567',
            namaPerusahaan: 'PT Abadi Makmur',
            alamat: 'New York No. 1 Lake Park',
            pic: 'John Black',
            noTelp: '085112345227',
            email: 'black@gmail.com',
            status: 'status2',
        },
    ];
    console.log(props.location.state)
    const dataMemberById = data.find((member) => {
        return member.key === props.location.state.id
    })
    const action = props.location.state.action
    const disable = props.location.state.disable
    return (
        <div>
            <div className="head-content">
                <Title level={4}>{action} Member</Title>
            </div>
            <Form
                {...formItemLayout}
                size={componentSize}
                layout="horizontal"
                initialValues={{ size: componentSize }}
                labelAlign="left"
                style={{ marginBottom: '80px' }}
            > <Form.Item label="Member ID">
                    <Input disabled={disable} value={dataMemberById.memberID} />
                </Form.Item>
                <Form.Item label="Nama Perusahaan">
                    <Input disabled={disable} value={dataMemberById.namaPerusahaan} />
                </Form.Item>
                <Form.Item label="Alamat">
                    <Input disabled={disable} value={dataMemberById.alamat} />
                </Form.Item>
                <Form.Item label="PIC">
                    <Input disabled={disable} value={dataMemberById.pic} />
                </Form.Item>
                <Form.Item label="No Telepon">
                    <Input disabled={disable} value={dataMemberById.noTelp} />
                </Form.Item>
                <Form.Item label="Email">
                    <Input disabled={disable} value={dataMemberById.email} />
                </Form.Item>
                <Form.Item label="Status">
                    <Input disabled={disable} value={dataMemberById.status} />
                </Form.Item>
                <Form.Item wrapperCol={{ span: 12, offset: 6 }}>
                    {!disable ? (<Link to="/registermember">
                        <Button type="primary" htmlType="submit" style={{ marginRight: '15px' }}>
                            {action}
                        </Button>
                    </Link>
                    ) : (
                            <div></div>
                        )}
                    <Link to="/registermember">
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
