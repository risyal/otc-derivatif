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

const ViewDeleteJibor = (props) => {
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
			no: '',
			date: '',
			week1: '',
			month1: '',
			months3: '',
			months6: '',
			months12: '',
		},
        {
			key: '1',
			no: '1',
			date: '20-07-2020',
			week1: '4.35000',
			month1: '4.55769',
			months3: '4.65000',
			months6: '4.85577',
			months12: '5.05769',
		},
		{
			key: '2',
			no: '2',
			date: '19-07-2020',
			week1: '0.00000',
			month1: '0.00000',
			months3: '0.00000',
			months6: '0.00000',
			months12: '0.00000',      
		},
		{
			key: '3',
			no: '3',
			date: '18-07-2020',
			week1: '4.10000',
			month1: '4.30385',
			months3: '4.39798',
			months6: '4.57981',
			months12: '4.10000',        
		},
    ]);
    const dataJiborById = data.find((jibor) => {
        return jibor.key === props.location.state.id
    })

    const [dataForView] = useState([
        {
            title: "No :",
            paramData: dataJiborById.no
        },
        {
            title: "Date :",
            paramData: dataJiborById.date
        },
        {
            title: "1 Week :",
            paramData: dataJiborById.week1
        },
        {
            title: "1 Month :",
            paramData: dataJiborById.month1
        },
        {
            title: "3 Months :",
            paramData: dataJiborById.months3
        },
        {
            title: "6 Months :",
            paramData: dataJiborById.months6
        },
        {
            title: "12 Months :",
            paramData: dataJiborById.months12
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
                        <Link to="/editreferencerate">
                            <ArrowLeftOutlined />
                        </Link>
                    </span>
                {action} Reference Rate - Jibor </Title>
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
                    {!disable ? (<Link to="/editreferencerate">
                        <Popconfirm placement="leftTop" title={text} okText="Yes" cancelText="No">
                            <Button type="primary" style={{ marginRight: '15px' }}>Delete</Button>
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

export default ViewDeleteJibor
