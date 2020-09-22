import React, { useState, useMemo } from 'react'
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
    ArrowLeftOutlined,
    DownloadOutlined
} from '@ant-design/icons';
import { Link } from "react-router-dom";

const { Title } = Typography;

const ViewDeleteRegAts = (props) => {
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
            name: '',
            applicationName: ' ',
            address: '',
            pic: '',
            telp: '',
            email: '',
        },
        {
            key: '1',
            name: 'PT 123',
            applicationName: 'App Name',
            address: 'Jl. Kenanga',
            pic: 'Jihan',
            telp: '082221829',
            email: '123@gmail.com',
        },
        {
            key: '2',
            name: 'PT 123',
            applicationName: 'App Name',
            address: 'Jl. Kenanga',
            pic: 'Jihan',
            telp: '082221829',
            email: '123@gmail.com',
        },
        {
            key: '3',
            name: 'PT 123',
            applicationName: 'App Name',
            address: 'Jl. Kenanga',
            pic: 'Jihan',
            telp: '082221829',
            email: '123@gmail.com',
        },
    ]);
    const dataAtsById = data.find((ats) => {
        return ats.key === props.location.state.id

    })

    const [dataForView] = useState([
        {
            title: "Company Name :",
            paramData: dataAtsById.name
        },
        {
            title: "Application Name :",
            paramData: dataAtsById.applicationName
        },
        {
            title: "Address :",
            paramData: dataAtsById.address
        },
        {
            title: "PIC Name :",
            paramData: dataAtsById.pic
        },
        {
            title: "Telephone Number :",
            paramData: dataAtsById.telp
        },
        {
            title: "Email :",
            paramData: dataAtsById.email
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
                        <Link to="/registerats">
                            <ArrowLeftOutlined />
                        </Link>
                    </span>
                    {action} ATS</Title>
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
                        {/* <Link to={{
                            pathname: `#`,
                            state: {
                                id: '1',
                                action: "Edit",
                                disable: false,
                            }
                        }} > */}
                        {exportButtton}
                        {/* </Link> */}
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

                {!disable ? (<Form.Item label="Role" className="roleViewDel">
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
                        <Popconfirm placement="leftTop" title={text} okText="Yes" cancelText="No">
                            <Button type="primary" style={{ marginRight: '15px' }}>Delete</Button>
                        </Popconfirm>
                    </Link>
                    ) : (
                            <div></div>
                        )}
                    <Link to="/registerats">
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

export default ViewDeleteRegAts
