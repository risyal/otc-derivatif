import React, { useState, useMemo, useEffect } from 'react'
import {
    Form,
    Popconfirm,
    Button,
    Radio,
    Typography,
    Table,
    Input,
    Row,
    Col,
    Descriptions
} from 'antd';
import {
    ArrowLeftOutlined,
    DownloadOutlined
} from '@ant-design/icons';
import { useHistory } from "react-router-dom";
import axios from 'axios';

const { Title } = Typography;

const DetailCancelCOLDP = (props) => {
    let history = useHistory()

    function goBack() {
        history.goBack()
    }
    const [text] = useState('Are you sure to Cancel this ?');
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
    const [coldp, setColdp] = useState({
        memberId: null,
        sourceAccount: null,
        sourceTarget: null,
        instrumentCode: null,
        value: null,
        settlementDate: null,
        remark: null,
    });
    const dataForView = [];

    const setParams = async (q) => {
        if (q > 0) {
            console.log("edit" + q)
            setLoading(true);
            const apiRes = await fetch(
                `http://localhost:8080/collateraltransactions/${q}`
            );
            const resJSON = await apiRes.json();
            console.log(resJSON);
            /* form.setFieldsValue({
                param: resJSON.param,
                value: resJSON.value,
                valueType: resJSON.valueType,
                note: resJSON.note,
            }); */
            setColdp({
                memberId: resJSON.memberId,
                sourceAccount: resJSON.sourceAccount,
                sourceTarget: resJSON.sourceTarget,
                instrumentCode: resJSON.instrumentCode,
                value: resJSON.value,
                settlementDate: resJSON.settlementDate,
                remark: resJSON.remark,
            })
            dataForView.push({

                title: "Email :",
                paramData: "asdas"
            })
            console.log(data);
            console.log(dataForView);
            setLoading(false);
        }

    };

    const submitDelete = () => {
        axios.delete(`http://localhost:8080/collateraltransactions/${idx}`, {
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
                        <ArrowLeftOutlined onClick={goBack} />
                    </span>
                    {action} Instruction COLDP</Title>
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
                <Descriptions.Item label="Participant Code">{coldp.memberId}</Descriptions.Item>
                <Descriptions.Item label="Source Account">{coldp.sourceAccount}</Descriptions.Item>
                <Descriptions.Item label="Dest Account">{coldp.sourceTarget}</Descriptions.Item>
                <Descriptions.Item label="Instrument Code">{coldp.instrumentCode}</Descriptions.Item>
                <Descriptions.Item label="Value">{coldp.value}</Descriptions.Item>
                <Descriptions.Item label="Settlement Date">{coldp.settlementDate}</Descriptions.Item>
                <Descriptions.Item label="Remark">{coldp.remark}</Descriptions.Item>
            </Descriptions>

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

                <Form.Item wrapperCol={{ span: 12, offset: 6 }}
                            style={{ marginLeft: '20px' }}>
                    {!disable ? (
                        <Popconfirm placement="leftTop" 
                                    title={action === "Cancel" ? text : null} 
                                    okText="Yes" 
                                    cancelText="No">
                            <Button onClick={submitDelete} 
                                    type="primary" 
                                    style={{ marginRight: '15px' }}>{action === "Cancel" ? action + " Instruction" :
                                (action === "Confirmation" ? "Confirm" : action === "Approval" ? "Approve" : "Delete")}</Button>
                        </Popconfirm>
                    ) : null}
                    <Button onClick={goBack} style={{ marginTop: '15px' }}>
                        {!disable ? action === "Approval" ? "Reject" : (
                            <div>Back</div>
                        ) : (
                                <div>Back</div>
                            )}
                    </Button>
                </Form.Item>
            </Form>
        </div>
    )
}

export default DetailCancelCOLDP
