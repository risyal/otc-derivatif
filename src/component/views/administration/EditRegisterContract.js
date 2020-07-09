import React from 'react'
import {
    Form,
    Input,
    Button,
    Typography
} from 'antd';
import {
    CaretLeftOutlined,
} from '@ant-design/icons';
import { Link } from "react-router-dom";

const { Title } = Typography;

const EditRegisterContract = (props) => {
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
    const dataRegister = [
        {
            key: '1',
            no: '1',
            currency: 'IDR',
            legType: 'X,L',
            effective: 'DDMMYYYY',
            contractTerm: '07-07-2020',
        },
        {
            key: '2',
            no: '2',
            currency: 'drachma',
            legType: 'X,L',
            effective: 'DDMMYYYY',
            contractTerm: '07-07-2020',
        },
        {
            key: '3',
            no: '3',
            currency: 'usd',
            legType: 'X,L',
            effective: 'DDMMYYYY',
            contractTerm: '07-07-2020',
        },
    ];
    const dataRegisterById = dataRegister.find((register) => {
        return register.key === props.location.state.id

    })

    const action = props.location.state.action
    //const disable = props.location.state.disable
    var editForm;
    if (props.location.state.id > 0) {
        if (props.location.state.id === '1') {
            editForm = <div>
                <Form.Item label="Currency">
                    <Input defaultValue={dataRegisterById.currency} />
                </Form.Item>
            </div>;
        }
        if (props.location.state.id === '2') {
            editForm = <div>
                <Form.Item label="Currency">
                    <Input defaultValue={dataRegisterById.currency} />
                </Form.Item>
            </div>;
        }
        if (props.location.state.id === '3') {
            editForm = <div>
                <Form.Item label="Currency">
                    <Input defaultValue={dataRegisterById.currency} />
                </Form.Item>
            </div>;
        }
    } else {
        editForm = <div>Belum ada</div>;
    }
    return (
        <div>
            <div className="head-content">
                <Title level={4}><Link to="/registercontract">
                    <CaretLeftOutlined />
                </Link>{action} Register Contract</Title>
            </div>
            <Form
                {...formItemLayout}
                size={componentSize}
                layout="horizontal"
                initialValues={{ size: componentSize }}
                labelAlign="left"
                style={{ marginBottom: '80px' }}
            >
                {editForm}
                <Link to="/registercontract">
                    <Button type="primary" htmlType="submit" style={{ marginRight: '15px' }}>
                        Submit
                    </Button>
                    <Button htmlType="submit" style={{ marginRight: '15px' }}>
                        Back
                    </Button>
                </Link>
            </Form>
        </div>
    )
}


export default EditRegisterContract