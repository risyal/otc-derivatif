import React, { useState, useEffect } from 'react'
import {
    Form,
    Popconfirm,
    Button,
    Radio,
    Typography,
    Descriptions,
    Space,
    Spin
} from 'antd';
import {
    ArrowLeftOutlined,
    DownloadOutlined
} from '@ant-design/icons';
import { useHistory } from "react-router-dom";
import API from "../../../config/Api";

const { Title } = Typography;

const ViewDeleteIndonia = (props) => {
    let history = useHistory()

    function goBack() {
        history.goBack()
    }

    const [text] = useState('Are you sure to delete this task?');
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

    const [loading, setLoading] = useState(false);
    const [idx] = useState(props.location.state.id);
    const action = props.location.state.action
    const disable = props.location.state.disable
    const [sixEyes, setSixEyes] = useState(1);
    const radioOnChange = e => {
        setSixEyes(e.target.value);
    };
    const [fieldsValue, setFieldsValue] = useState({
        date: "test",
        value: null,
        update: null,
        note: null,
    });

    const setIndonia = async (q) => {
        // if (q > 0) {
        //     console.log("edit" + q)
        //     setLoading(true);
        //     const apiRes = await fetch(
        //         `http://localhost:8080/referenceindonias/${q}`
        //     );
        //     const resJSON = await apiRes.json();
        //     console.log(resJSON);
        //     /* form.setFieldsValue({
        //         param: resJSON.param,
        //         value: resJSON.value,
        //         valueType: resJSON.valueType,
        //         note: resJSON.note,
        //     }); */
        //     setIndonia({
        //         date: resJSON.date,
        //         value: resJSON.value,
        //         // status: resJSON.status,
        //         // lastUpdate: resJSON.lastUpdate,
        //     })
        //     // dataForView.push({
        //     //     title: "Email :",
        //     //     paramData: "asdas"
        //     // })
        //     // console.log(data);
        //     // console.log(dataForView);
        //     setLoading(false);
        // }
        setLoading(true);
        const req = await API("GET", "administration", "referenceindonias/" + q);
        const resJSON = await req.data
        setFieldsValue({
            date: resJSON.date,
            value: resJSON.value,
        })
        setLoading(false);
    };
    const submitDelete = () => {
        API("DELETE", "administration", "referenceindonias/" + idx)
        .then(res => {
            console.log(res);
            console.log(res.data);
            history.goBack()
        })
    };
    useEffect(() => {
        if (idx > 0) {
            setIndonia(idx);
        }
    }, [idx]);

    return (
        <div>
            <div className="head-content viewDelete">
                <Title level={4}>
                    <span className="icon-back"> 
                        <ArrowLeftOutlined  onClick={goBack}/>
                    </span>
                {action} Reference Rate - Indonia </Title>
            </div>

            {loading ? (
                <div style={{ textAlign: "center" }}> <Space size="large" >
                    <Spin size="large" tip="Loading..." />
                </Space>
                </div>
            ) : (
                    <div>
                        <Descriptions column={1} bordered
                            extra={<Button type="primary"> <DownloadOutlined /> Edit</Button>}>
                            <Descriptions.Item label="Date">{fieldsValue.date}</Descriptions.Item>
                            <Descriptions.Item label="indONIA">{fieldsValue.value}</Descriptions.Item>
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
                            ) : null}

                            <Form.Item wrapperCol={{ span: 12, offset: 6 }}
                                        style={{ marginLeft: '20px' }}>
                                {!disable ? (
                                    <Popconfirm placement="leftTop" 
                                                title={text} 
                                                okText="Yes" 
                                                cancelText="No"
                                                onConfirm={submitDelete}>
                                        <Button type="primary" 
                                                style={{ marginRight: '15px' }}>Delete</Button>
                                    </Popconfirm>
                                ) : (
                                        null
                                    )}
                                <Button style={{ marginTop: '15px' }}>
                                    <div>Back</div>
                                </Button>
                            </Form.Item>
                        </Form>
                    </div>
                )}
        </div>
    )
}

export default ViewDeleteIndonia
