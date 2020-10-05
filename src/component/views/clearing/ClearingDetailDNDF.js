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

function ClearingDetailDNDF() {
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
            paramData: "UTI3"
        },
        {
            title: "Product : ",
            paramData: "DNDF"
        },
        {
            title: "Code : ",
            paramData: "Code3"
        },
        {
            title: "SID : ",
            paramData: "SID3"
        },
        {
            title: "LEI : ",
            paramData: "LEI3"
        },
        {
            title: "Role : ",
            paramData: "Role3"
        },
        {
            title: "Market Position : ",
            paramData: "MarketPosition3"
        },
        {
            title: "DNDF Rate : ",
            paramData: "DNDFRate"
        },
        {
            title: "Reference Rate : ",
            paramData: "ReferenceRate"
        },
        {
            title: "Effective Date : ",
            paramData: "20-01-2020"
        },
        {
            title: "Notional Value : ",
            paramData: "Value3"
        },
        {
            title: "Tenor : ",
            paramData: "Tenor3"
        },
        {
            title: "Maturity Date : ",
            paramData: "23-01-2020"
        },
        {
            title: "Fixing Date : ",
            paramData: "23-01-2020"
        },
        {
            title: "Business Day Convention : ",
            paramData: "BusinessDayConvention3"
        },
        {
            title: "Day Count Fraction : ",
            paramData: "DayCountFraction3"
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

export default ClearingDetailDNDF