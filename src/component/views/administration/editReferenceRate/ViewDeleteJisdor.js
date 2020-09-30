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

const ViewDeleteJisdor = (props) => {
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
            title: "Telephone Number :",
            paramData: "asd"
        },
        {
            title: "Email :",
            paramData: "asdas"
        },
    ]);

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
    const [jisdor, setJisdor] = useState({
        date: "test",
        value: null,
        update: null,
        note: null,
    });

    const dataForView = [];

    const setParams = async (q) => {
        if (q > 0) {
            console.log("edit" + q)
            setLoading(true);
            const apiRes = await fetch(
                `http://localhost:8080/referencejisdors/${q}`
            );
            const resJSON = await apiRes.json();
            console.log(resJSON);
            /* form.setFieldsValue({
                param: resJSON.param,
                value: resJSON.value,
                valueType: resJSON.valueType,
                note: resJSON.note,
            }); */
            setJisdor({
                date: resJSON.date,
                value: resJSON.value,
                // status: resJSON.status,
                // lastUpdate: resJSON.lastUpdate,
            })
            // dataForView.push({
            //     title: "Email :",
            //     paramData: "asdas"
            // })
            // console.log(data);
            // console.log(dataForView);
            setLoading(false);
        }

    };
    const submitDelete = () => {
        axios.delete(`http://localhost:8080/referencejisdors/${idx}`, {
        })
            .then(res => {
                console.log(res);
                console.log(res.data);
            })
    };
    useEffect(() => {
        setParams(props.location.state.id);
    }, []);


    return (
        <div>
            <div className="head-content viewDelete">
                <Title level={4}>
                    <span className="icon-back">   
                        <Link to="/editreferencerate">
                            <ArrowLeftOutlined />
                        </Link>
                    </span>
                {action} Reference Rate - Jisdor </Title>
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
                extra={<Button type="primary"> <DownloadOutlined /> Edit</Button>}>
                <Descriptions.Item label="Date">{jisdor.date}</Descriptions.Item>
                <Descriptions.Item label="Value">{jisdor.value}</Descriptions.Item>
            </Descriptions>

            <Form
                {...formItemLayout}
                size={componentSize}
                layout="horizontal"
                initialValues={{ size: componentSize }}
                labelAlign="left"
                style={{ marginBottom: '80px' }}
            >
                {!disable ? (<Form.Item label="Role" className="roleViewDel" style={{ paddingLeft: '25px'}}>
                    <Radio.Group onChange={radioOnChange} value={sixEyes}>
                        <Radio value={1}>Maker</Radio>
                        <Radio value={2}>Direct Checker</Radio>
                        <Radio value={3}>Direct Approver</Radio>
                    </Radio.Group>
                </Form.Item>
                ) : (
                        <div></div>
                    )}

                    <Form.Item wrapperCol={{ span: 12, offset: 6 }}
                                style={{ marginLeft: '20px' }}>
                    {!disable ? (<Link to="/editreferencerate">
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
                    <Link to="/editreferencerate">
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

export default ViewDeleteJisdor
