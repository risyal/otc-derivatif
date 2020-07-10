import React, { useState } from 'react'
import {
    Form,
    Popconfirm,
    Button,
    Radio,
    Typography,
    Table,
} from 'antd';
import {
    CaretLeftOutlined,
    ArrowLeftOutlined
} from '@ant-design/icons';
import { Link } from "react-router-dom";

const { Title } = Typography;

const ViewDeleteSCMgt = (props) => {
    const text = 'Are you sure to delete this task?';
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
    const columns = [
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
    ];
    const [data] = useState([
        {
            key: '0',
            code: '',
            name: '',
            type: '',
            eligibility: '',
            haircut: '',
            maturityDate: '',
        },
        {
            key: '1',
            code: 'CENAIDJA',
            name: 'Instrument1',
            type: 'Type1',
            eligibility: 'Eligibility1',
            haircut: 'Haircut1',
            maturityDate: '09-07-2020',
        },
        {
            key: '2',
            code: 'CENAIDJA',
            name: 'Instrument2',
            type: 'Type2',
            eligibility: 'Eligibility2',
            haircut: 'Haircut2',
            maturityDate: '09-07-2020',
        },
        {
            key: '3',
            code: 'CENAIDJA',
            name: 'Instrument3',
            type: 'Type3',
            eligibility: 'Eligibility3',
            haircut: 'Haircut3',
            maturityDate: '09-07-2020',
        },
    ]);
    const dataInstrumentById = data.find((instrument) => {
        return instrument.key === props.location.state.id

    })

    const [dataForView] = useState([
        {
            title: "Instrument Code :",
            paramData: dataInstrumentById.code
        },
        {
            title: "Instrument Name :",
            paramData: dataInstrumentById.name
        },
        {
            title: "Instrument Type :",
            paramData: dataInstrumentById.type
        },
        {
            title: "Eligibility :",
            paramData: dataInstrumentById.eligibility
        },
        {
            title: "Haircut :",
            paramData: dataInstrumentById.haircut
        },
        {
            title: "Maturity Date :",
            paramData: dataInstrumentById.maturityDate
        },
    ]);

    const action = props.location.state.action
    const disable = props.location.state.disable
    const [sixEyes, setSixEyes] = useState(1);
    const radioOnChange = e => {
        setSixEyes(e.target.value);
    };

    return (
        <div>
            <div className="head-content viewDelete">
                <Title level={4}>
                    <span className="icon-back">   
                        <Link to="/securitiescollmgt">
                            <ArrowLeftOutlined />
                        </Link>
                    </span>
                {action} Instrument</Title>
            </div>
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
                ) : (
                        <div></div>
                    )}
                <Table
                    className="viewDelTable"
                    columns={columns}
                    dataSource={dataForView}
                    showHeader={false}
                    rowClassName={(record, index) => index % 2 === 0 ? 'table-row-light' : 'table-row-dark'}
                    size="middle"
                    pagination={false}
                />
                <Form.Item wrapperCol={{ span: 12, offset: 6 }}>
                    {!disable ? (<Link to="/securitiescollmgt">
                        <Popconfirm placement="leftTop" title={text} okText="Yes" cancelText="No">
                            <Button type="primary" style={{ marginRight: '15px' }}>Delete</Button>
                        </Popconfirm>
                    </Link>
                    ) : (
                            <div></div>
                        )}
                    <Link to="/securitiescollmgt">
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

export default ViewDeleteSCMgt
