import React, { useState, useEffect } from 'react'
import {
    Form,
    Popconfirm,
    Button,
    Radio,
    Typography,
    Row,
    Col,
    Descriptions,
    Spin,
    Space,
} from 'antd';
import {
    ArrowLeftOutlined, DownloadOutlined
} from '@ant-design/icons';
import { useHistory } from "react-router-dom";
import API from "../../config/Api";

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

const DetailCancelCOLW = (props) => {
    let history = useHistory()

    function goBack() {
        history.goBack()
    }
    const [text] = useState('Are you sure to Cancel this ?');
    const [loading, setLoading] = useState(false);
    const [idx] = useState(props.location.state.id);
    const action = props.location.state.action
    const disable = props.location.state.disable
    const [sixEyes, setSixEyes] = useState(1);
    const radioOnChange = e => {
        setSixEyes(e.target.value);
    };

    // const [exportButtton] = useState(<Button
    //     type="primary"
    //     style={{
    //         marginBottom: '15px',
    //         paddingBottom: '15px',
    //         float: 'right',
    //         height: '35px'
    //     }}
    //     icon={<DownloadOutlined />}>Export File</Button>);
    const [fieldsValue, setFieldsValue] = useState({
        memberId: null,
        sourceAccount: null,
        sourceTarget: null,
        instrumentCode: null,
        value: null,
        settlementDate: null,
        remark: null,
    });
    // const dataForView = [];

    // const setParams = async (q) => {
    //     if (q > 0) {
    //         console.log("edit" + q)
    //         setLoading(true);
    //         const apiRes = await fetch(
    //             `http://localhost:8080/collateraltransactions/${q}`
    //         );
    //         const resJSON = await apiRes.json();
    //         console.log(resJSON);
    //         /* form.setFieldsValue({
    //             param: resJSON.param,
    //             value: resJSON.value,
    //             valueType: resJSON.valueType,
    //             note: resJSON.note,
    //         }); */
    //         setColw({
    //             memberId: resJSON.memberId,
    //             sourceAccount: resJSON.sourceAccount,
    //             sourceTarget: resJSON.sourceTarget,
    //             instrumentCode: resJSON.instrumentCode,
    //             value: resJSON.value,
    //             settlementDate: resJSON.settlementDate,
    //             remark: resJSON.remark,
    //         })
    //         dataForView.push({

    //             title: "Email :",
    //             paramData: "asdas"
    //         })
    //         console.log(data);
    //         console.log(dataForView);
    //         setLoading(false);
    //     }

    // };
    const setColw = async (q) => {
        setLoading(true);
        const req = await API("GET", "administration", "collateraltransactions/" + q);
        const resJSON = await req.data
        setFieldsValue({
            memberId: resJSON.memberId,
            sourceAccount: resJSON.sourceAccount,
            sourceTarget: resJSON.sourceTarget,
            instrumentCode: resJSON.instrumentCode,
            value: resJSON.value,
            settlementDate: resJSON.settlementDate,
            remark: resJSON.remark,
        })
        setLoading(false);

    };

    const submitDelete = () => {
        API("DELETE", "administration", "collateraltransactions/" + idx)
        .then(res => {
            console.log(res);
            console.log(res.data);
            history.goBack()
        })
    };
    useEffect(() => {
        if (idx > 0) {
            setColw(idx);
        }
    }, [idx]);
    
    return (
        <div>
            <div className="head-content viewDelete">
                <Title level={4}>
                    <span className="icon-back">
                        <ArrowLeftOutlined onClick={goBack} />
                    </span>
                    {action} Instruction COLW</Title>
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
                        <Descriptions.Item label="Participant Code">{fieldsValue.memberId}</Descriptions.Item>
                        <Descriptions.Item label="Source Account">{fieldsValue.sourceAccount}</Descriptions.Item>
                        <Descriptions.Item label="Dest Account">{fieldsValue.sourceTarget}</Descriptions.Item>
                        <Descriptions.Item label="Instrument Code">{fieldsValue.instrumentCode}</Descriptions.Item>
                        <Descriptions.Item label="Value">{fieldsValue.value}</Descriptions.Item>
                        <Descriptions.Item label="Settlement Date">{fieldsValue.settlementDate}</Descriptions.Item>
                        <Descriptions.Item label="Remark">{fieldsValue.remark}</Descriptions.Item>
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
                    ) : (null)}
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

export default DetailCancelCOLW
