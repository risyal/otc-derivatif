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

const ViewDeleteSCMgt = (props) => {
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
        instrumentCode: "test",
        instrumentName: null,
        instrumentType: null,
        eligibility: null,
        haircut: null,
        maturityDate: null,
    });

    const setSecCollMgt = async (q) => {
        setLoading(true);
        const req = await API("GET", "administration", "securitiescollateralmanagements/" + q);
        const resJSON = await req.data
        setFieldsValue({
            instrumentCode: resJSON.instrumentCode,
            instrumentName: resJSON.instrumentName,
            instrumentType: resJSON.instrumentType,
            eligibility: resJSON.eligibility,
            haircut: resJSON.haircut,
            maturityDate: resJSON.maturityDate,
        })
        setLoading(false);
    };

    const submitDelete = () => {
        API("DELETE", "administration", "securitiescollateralmanagements/" + idx)
            .then(res => {
                console.log(res);
                console.log(res.data);
                history.goBack()
            })
    };
    useEffect(() => {
        if (idx > 0) {
            setSecCollMgt(idx);
        }
    }, [idx]);

    return (
        <div>
            <div className="head-content viewDelete">
                <Title level={4}>
                    <span className="icon-back">  
                            <ArrowLeftOutlined onClick={goBack} />
                    </span>
                {action} Instrument</Title>
            </div>

            {loading ? (
                <div style={{ textAlign: "center" }}> <Space size="large" >
                    <Spin size="large" tip="Loading..." />
                </Space>
                </div>
            ) : (
                    <div>
                        <Descriptions column={1} bordered
                            extra={<Button type="primary"><DownloadOutlined /> Edit</Button>}>
                            <Descriptions.Item label="Instrument Code">{fieldsValue.instrumentCode}</Descriptions.Item>
                            <Descriptions.Item label="Instrument Name">{fieldsValue.instrumentName}</Descriptions.Item>
                            <Descriptions.Item label="Instrument Type">{fieldsValue.instrumentType}</Descriptions.Item>
                            <Descriptions.Item label="Eligibility">{fieldsValue.eligibility}</Descriptions.Item>
                            <Descriptions.Item label="Haircut">{fieldsValue.haircut}</Descriptions.Item>
                            <Descriptions.Item label="Maturity Date">{fieldsValue.maturityDate}</Descriptions.Item>
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
                            
                            <Button onClick={goBack} tyle={{ marginTop: '15px' }}>
                                    <div>Back</div>
                            </Button>
                </Form.Item>
            </Form>
            </div>
            )}

        </div>
    )
}

export default ViewDeleteSCMgt
