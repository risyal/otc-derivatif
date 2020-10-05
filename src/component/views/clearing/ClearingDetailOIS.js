import React, { useState, useMemo } from 'react'
import {
    Button,
    Checkbox,
    Form,
    Radio,
    Typography,
    Row,
    Col,
    Table
} from 'antd';
import { ArrowLeftOutlined, DownloadOutlined } from '@ant-design/icons';
import { useHistory } from "react-router-dom";

const { Title } = Typography;

function ClearingDetailOIS() {
    let history = useHistory()

    function goBack() {
        history.goBack()
    }
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
    const [exportButtton] = useState(<Button
        type="primary"
        style={{
            marginBottom: '15px',
            paddingBottom: '15px',
            float: 'right',
            height: '35px'
        }}
        icon={<DownloadOutlined />}>Export File</Button>);


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
            title: "Trade ID : ",
            paramData: "UTI2"
        },
        {
            title: "Product : ",
            paramData: "OIS"
        },
        {
            title: "Code : ",
            paramData: "Code2"
        },
        {
            title: "SID : ",
            paramData: "SID2"
        },
        {
            title: "LEI : ",
            paramData: "LEI2"
        },
        {
            title: "Role : ",
            paramData: "Role2"
        },
        {
            title: "Market Position : ",
            paramData: "MarketPosition2"
        },
        {
            title: "Rate : ",
            paramData: "Rate2"
        },
        {
            title: "Effective Date : ",
            paramData: "20-01-2020"
        },
        {
            title: "Notional Value : ",
            paramData: "Value2"
        },
        {
            title: "Tenor : ",
            paramData: "Tenor2"
        },
        {
            title: "Maturity Date : ",
            paramData: "23-01-2020"
        },
        {
            title: "Business Day Convention : ",
            paramData: "BusinessDayConvention2"
        },
        {
            title: "Day Count Fraction : ",
            paramData: "DayCountFraction2"
        },
    ]);

    return (
        <div>
            <div className="head-content viewEdit">
                <Title level={4}>
                    <span className="icon-back">
                        <ArrowLeftOutlined onClick={goBack} />
                    </span>
                   Detail Trade </Title>
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
                    dataSource={data}
                    showHeader={false}
                    rowClassName={(record, index) => index % 2 === 0 ? 'table-row-light' : 'table-row-dark'}
                    size="middle"
                    pagination={false}
                />

                <Form.Item wrapperCol={{ span: 12, offset: 6 }}>
                    <Button onClick={goBack} style={{ marginTop: '15px' }}>
                        <div>Back</div>
                    </Button>
                </Form.Item>
            </Form>
        </div>
    )
}

export default ClearingDetailOIS