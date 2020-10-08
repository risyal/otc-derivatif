import React, { useState, useMemo, useEffect } from 'react'
import {
    Form,
    Popconfirm,
    Button,
    Radio,
    Typography,
    Spin,
    Space,
    Descriptions,
} from 'antd';
import {
    ArrowLeftOutlined,
    DownloadOutlined
} from '@ant-design/icons';
import { useHistory } from "react-router-dom";
import API from "../../../config/Api";

const { Title } = Typography;
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
const ViewDeleteSysParam = (props) => {
    let history = useHistory()

    function goBack() {
        history.goBack()
    }
    const [text] = useState('Are you sure to delete this task?');
    const [loading, setLoading] = useState(false);
    const [idx] = useState(props.location.state.id);
    const action = props.location.state.action
    const disable = props.location.state.disable
    const [sixEyes, setSixEyes] = useState(1);
    const radioOnChange = e => {
        setSixEyes(e.target.value);
    };
    const [params, setParams] = useState({
        param: null,
        value: null,
        valueType: null,
        note: null,
    });
    const setSysParams = async (q) => {
        setLoading(true);
        const req = await API("GET", "administration", "sysparams/" + q);
        const resJSON = await req.data
        setParams({
            param: resJSON.param,
            value: resJSON.value,
            valueType: resJSON.valueType,
            note: resJSON.note,
        })
        setLoading(false);

    };
    const submitDelete = () => {
        API("DELETE", "administration", "sysparams/" + idx)
            .then(res => {
                console.log(res);
                console.log(res.data);
                history.goBack()
            })
    };
    useEffect(() => {
        if (idx > 0) {
            setSysParams(idx);
        }
    }, [idx]);

    return (
        <div>
            <div className="head-content viewDelete">
                <Title level={4}>
                    <span className="icon-back">
                        <ArrowLeftOutlined onClick={goBack} />

                    </span>
                    {action} System Parameter</Title>
            </div>
            {loading ? (
                <div style={{ textAlign: "center" }}> <Space size="large" >
                    <Spin size="large" tip="Loading..." />
                </Space>
                </div>
            ) : (
                    <div>

                        <Descriptions column={1} bordered
                            extra={<Button type="primary"> <DownloadOutlined /> Export File</Button>}>
                            <Descriptions.Item label="Parameter">{params.param}</Descriptions.Item>
                            <Descriptions.Item label="Value">{params.value}</Descriptions.Item>
                            <Descriptions.Item label="Value Type">{params.valueType}</Descriptions.Item>
                            <Descriptions.Item label="Note">{params.note}</Descriptions.Item>
                        </Descriptions>

                        <Form
                            {...formItemLayout}
                            size={componentSize}
                            layout="horizontal"
                            initialValues={{ size: componentSize }}
                            labelAlign="left"
                            style={{ marginBottom: '80px' }}
                        >
                            {!disable ? (<Form.Item label="Role" className="roleViewDel" style={{ paddingLeft: '25px' }}>
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
                                <Button onClick={goBack} style={{ marginTop: '15px' }}>

                                    <div>Back</div>
                                </Button>
                            </Form.Item>
                        </Form>
                    </div>
                )}
        </div>
    )
}

export default ViewDeleteSysParam
