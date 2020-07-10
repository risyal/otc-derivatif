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
    CaretLeftOutlined
} from '@ant-design/icons';
import { Link } from "react-router-dom";

const { Title } = Typography;

const ViewDeleteParam = (props) => {
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
        },
        {
            title: '',
            dataIndex: 'paramData',
            key: 'paramData',
        },
    ];
    const data = [
        {
			key: '1',
			title: 'Parameter',
			paramData: 'Trade Submission & Validation',
        },
        {
			key: '2',
			title: 'Start Time',
			paramData: '23-02-2020',
        },
        {
			key: '3',
			title: 'End Time',
			paramData: '23-02-2020',
        },
        {
			key: '4',
			title: 'End Time',
			paramData: '23-02-2020',
        },
        // {
		// 	key: '1',
		// 	parameter: 'Trade Submission & Validation',
		// 	startTime: '23-02-2020',
		// 	endTime: '29-02-2020',
        // },
        // {
		// 	key: '2',
		// 	parameter: 'Settlement and Reconciliation',
		// 	startTime: '23-02-2020',
		// 	endTime: '29-02-2020',
        // },
        // {
		// 	key: '3',
		// 	parameter: 'Clearing Process',
		// 	startTime: '23-02-2020',
		// 	endTime: '29-02-2020',
        // },
    ];
    const dataMemberById = data.find((member) => {
        return member.key === props.location.state.id
    })

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
                        <Link to="/editparameter">
                            <CaretLeftOutlined />
                        </Link>
                    </span>
                {action} Parameter</Title>
            </div>
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
                {/* <Form.Item label="Parameter">
                    {dataMemberById.parameter}
                </Form.Item>
                <Form.Item label="Start Time">
                    {dataMemberById.startTime}
                </Form.Item>
                <Form.Item label="End Time">
                    {dataMemberById.endTime}
                </Form.Item> */}
                <Table
					columns={columns}
					dataSource={data}
                    showHeader={false}
                    rowClassName={(record, index) => index % 2 === 0 ? 'table-row-light' :  'table-row-dark'}
                    size="middle"
                    pagination={false}
				/>
                <Form.Item wrapperCol={{ span: 12, offset: 6 }}>
                    {!disable ? (<Link to="/editparameter">
                        <Popconfirm placement="leftTop" title={text} okText="Yes" cancelText="No">
                            <Button type="primary" style={{ marginRight: '15px' }}>Delete</Button>
                        </Popconfirm>
                    </Link>
                    ) : (
                            <div></div>
                        )}
                    <Link to="/editparameter">
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

export default ViewDeleteParam
