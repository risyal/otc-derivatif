import React, { useState, useMemo, useEffect } from 'react'
import {
    Form,
    Popconfirm,
    Button,
    Radio,
    Typography,
    Table,
    Row,
    Col,
    Descriptions
} from 'antd';
import {
    ArrowLeftOutlined,
    DownloadOutlined
} from '@ant-design/icons';
import { Link } from "react-router-dom";

import axios from 'axios';

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

    const [loading, setLoading] = useState(false);
    const [idx] = useState(props.location.state.id);
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

    const [fieldsValue, setFieldsValue] = useState({
        companyName: null,
        applicationName: null,
        address: null,
        picName: null,
        phoneNumber: null,
        email: null,
    });
    const setRegAts = async (q) => {
        if (q > 0) {
            console.log("edit" + q)
            setLoading(true);
            const apiRes = await fetch(
                `http://localhost:8080/registeratss/${q}`
            );
            const resJSON = await apiRes.json();
            console.log(resJSON);
            setFieldsValue({
                companyName: resJSON.companyName,
                applicationName: resJSON.applicationName,
                address: resJSON.companyInfo.address,
                picName: resJSON.companyInfo.picName,
                phoneNumber: resJSON.companyInfo.phoneNumber,
                email: resJSON.companyInfo.email,
            })
            setLoading(false);
        }

    };

    const submitDelete = () => {
        axios.delete(`http://localhost:8080/registeratss/${idx}`, {
        })
            .then(res => {
                console.log(res);
                console.log(res.data);
            })
    };
    useEffect(() => {
        setRegAts(props.location.state.id);
    }, []);
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
            <Descriptions column={1} bordered
                extra={<Button type="primary"><DownloadOutlined /> Edit</Button>}>
                <Descriptions.Item label="Company Name">{fieldsValue.companyName}</Descriptions.Item>
                <Descriptions.Item label="Application Name">{fieldsValue.applicationName}</Descriptions.Item>
                <Descriptions.Item label="Address">{fieldsValue.address}</Descriptions.Item>
                <Descriptions.Item label="PicName">{fieldsValue.picName}</Descriptions.Item>
                <Descriptions.Item label="PhoneNumber">{fieldsValue.phoneNumber}</Descriptions.Item>
                <Descriptions.Item label="Email">{fieldsValue.email}</Descriptions.Item>
            </Descriptions>

            <Form
                {...formItemLayout}
                size={componentSize}
                layout="horizontal"
                initialValues={{ size: componentSize }}
                labelAlign="left"
                style={{ marginBottom: '80px' }}
            >
                {!disable ? (<Form.Item label="Role" className="roleViewDel">
                    <Radio.Group onChange={radioOnChange} value={sixEyes}>
                        <Radio value={1}>Maker</Radio>
                        <Radio value={2}>Direct Checker</Radio>
                        <Radio value={3}>Direct Approver</Radio>
                    </Radio.Group>
                </Form.Item>
                ) : null}
                <Form.Item wrapperCol={{ span: 12, offset: 6 }}>
                    {!disable ? (<Link to="/registerats">
                        <Popconfirm placement="leftTop"
                            title={text}
                            okText="Yes"
                            cancelText="No">
                            <Button type="primary"
                                onClick={submitDelete}
                                style={{ marginRight: '15px' }}>Delete</Button>
                        </Popconfirm>
                    </Link>
                    ) : (
                            <div></div>
                        )}
                    <Link to="/registerats">
                        <Button style={{ marginTop: '15px' }}>
                            <div>Back</div>
                        </Button>
                    </Link>
                </Form.Item>
            </Form>

        </div>
    )
}

export default ViewDeleteRegAts