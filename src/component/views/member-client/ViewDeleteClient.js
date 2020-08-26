import React, { useState } from 'react'
import {
    Form,
    Popconfirm,
    Button,
    Radio,
    Typography,
    Table,
    Row,
    Col,
} from 'antd';
import {
    DownloadOutlined,
    ArrowLeftOutlined
} from '@ant-design/icons';
import { Link } from "react-router-dom";

const { Title } = Typography;

const ViewDeleteClient = (props) => {
    const text = 'Are you sure to delete this task?';
    const componentSize = 'middle';
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
            memberID: 'CENAIDJA',
            sid: 'SID1',
            lei: 'LEI1',
            namaNasabah: 'Nas abah',
            rtgsAccount: 'rtgs Account1',
            ssssAccount: 'ssss Account1',
            status: 'Active',
        },
        {
            key: '2',
            memberID: 'CENAIDJA',
            sid: 'SID2',
            lei: 'LEI2',
            namaNasabah: 'fulan bin fulan',
            rtgsAccount: 'rtgs Account2',
            ssssAccount: 'ssss Account2',
            status: 'Active',
        },
        {
            key: '3',
            memberID: 'CENAIDJA',
            sid: 'SID3',
            lei: 'LEI3',
            namaNasabah: 'fulanah bin fulan',
            rtgsAccount: 'rtgs Account3',
            ssssAccount: 'ssss Account3',
            status: 'Active',
        },
    ]);

    const dataMemberById = data.find((member) => {
        return member.key === props.location.state.id

    })

    const [dataForView] = useState([
        {
            title: "Member ID :",
            paramData: dataMemberById.memberID
        },
        {
            title: "SID :",
            paramData: dataMemberById.sid
        },
        {
            title: "LEI :",
            paramData: dataMemberById.lei
        },
        {
            title: "Client Name :",
            paramData: dataMemberById.namaNasabah
        },
        {
            title: "Collateral Account :",
            paramData: dataMemberById.rtgsAccount
        },
        {
            title: "Status :",
            paramData: dataMemberById.status
        },
    ]);

    const action = props.location.state.action
    const disable = props.location.state.disable
    const [sixEyes, setSixEyes] = useState(1);
    const radioOnChange = e => {
        setSixEyes(e.target.value);
    };
    const [exportButtton] = useState(<Button
        type="primary"
        style={{
            marginBottom: '15px',
            paddingBottom: '15px',
            float: 'right',
            height: '35px'
        }}
        icon={<DownloadOutlined />}>Export File</Button>);

    return (
        <div>
            <div className="head-content viewDelete">
                <Title level={4}>
                    <span className="icon-back">
                        <Link to="/memberandclientmanagement/registerclient">
                            <ArrowLeftOutlined />
                        </Link>
                    </span>
                    {action} Client</Title>
            </div>
            <Form
                {...formItemLayout}
                size={componentSize}
                layout="horizontal"
                initialValues={{ size: componentSize }}
                labelAlign="left"
                style={{ marginBottom: '80px' }}
            >

                <Row justify="end">
                    <Col span={4}>
                        {exportButtton}
                    </Col>
                </Row>
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
                    {!disable ? (<Link to="/memberandclientmanagement/registerclient">
                        <Popconfirm placement="leftTop" title={text} okText="Yes" cancelText="No">
                            <Button type="primary" style={{ marginRight: '15px' }}>Delete</Button>
                        </Popconfirm>
                    </Link>
                    ) : (
                            <div></div>
                        )}
                    <Link to="/memberandclientmanagement/registerclient">
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

export default ViewDeleteClient
