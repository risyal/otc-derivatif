import React from 'react'
import {
    Form,
    Input,
    Button,
    Typography,
    Select,
    DatePicker,
    Checkbox,
    InputNumber
} from 'antd';
import {
    ArrowLeftOutlined,
    PlusOutlined
} from '@ant-design/icons';
import { Link } from "react-router-dom";
import moment from 'moment';

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
    const { Option } = Select;
    const dataRegister = [
        {
            key: '1',
            no: '1',
            currency: 'IDR',
            legType: 'Fix/Float',
            effective: '07-07-2020',
            contractTerm: '1W',
            notionalAmount: '',
            paymentFrequency: '1W',
            valuationFixingDate: '-2',
            floatingRateIndex: '',
            spread: '',
            dayCountFraction: 'ACT/360',
            floatingRateResetFrequency: '1W',
            floatingRateIndexTenor: '1W',
            businessDayConvention: 'Mod Following',
            calendar: '07-07-2020',
            roundingPayment: '',
            stubPayment: '',
            forwardStarting: '',
            cashPaymentCompounding: '',
        },
        {
            key: '2',
            no: '2',
            currency: 'IDR',
            legType: 'X',
            effective: '07-07-2020',
            contractTerm: '1W',
            notionalAmount: '',
            floatingRateIndex: '',
            spread: '',
            dayCountFraction: '',
            businessDayConvention: 'M',
            calendar: '07-07-2020',
            rounding: '',
            forwardStarting: '',
        },
        {
            key: '3',
            no: '3',
            currencyPair: 'USD',
            notionalForeignCurrency: 'USD',
            fixingDate: '-2',
            referenceRate: '',
            tenor: '1M',
            notionalAmount: '',
        },
    ];
    const dataRegisterById = dataRegister.find((register) => {
        return register.key === props.location.state.id

    })

    const dateFormat = 'YYYY/MM/DD';

    function onChange(checkedValues) {
        console.log('checked = ', checkedValues);
    }
    const options = [
        { label: '1W', value: '1W' },
        { label: '1M', value: '1M' },
        { label: '3M', value: '3M' },
        { label: '6M', value: '6M' },
        { label: '9M', value: '9M' },
        { label: '12M', value: '12M' },
    ];

    function onChangeDec(value) {
        console.log('changed', value);
      }

    const action = props.location.state.action
    let editForm;
    if (props.location.state.id > 0) {
        if (props.location.state.id === '1') {
            editForm =
                <div>
                    <Form.Item label="Currency">
                        {/* <Input defaultValue={dataRegisterById.currency} /> */}
                        <Select defaultValue={dataRegisterById.currency}>
                            <Option value="idr">IDR</Option>
                            <Option value="usd">USD</Option>
                        </Select>
                    </Form.Item>
                    <Form.Item label="Leg type/sub-product">
                        <Select defaultValue={dataRegisterById.legType}>
                            <Option value="fix-float">Fix/Float</Option>
                            <Option value="float-float">Float/Float</Option>
                        </Select>
                    </Form.Item>
                    <Form.Item label="Effective/commencement date">
                        <DatePicker style={{ width: '100%' }}
                            defaultValue={moment('2020/07/07', dateFormat)}
                            disabled />
                    </Form.Item>
                    <Form.Item label="Contract term">
                        {/* <Select defaultValue={dataRegisterById.contractTerm}>
                        <Option value="1w">1W</Option>
                        <Option value="lm">1M</Option>
                        <Option value="3w">3M</Option>
                        <Option value="6m">6M</Option>
                        <Option value="9m">9M</Option>
                        <Option value="l2m">12M</Option>
                  </Select> */}
                        <Checkbox.Group
                            options={options}
                            defaultValue={['1W', '1M', '3M']}
                            onChange={onChange}
                            style={{ marginBottom: '15px' }}
                        /> <br />
                        <Button type="primary" icon={<PlusOutlined />} size="small" >
                            Add Contract Term
                    </Button>

                    </Form.Item>
                    <Form.Item label="Notional amount">
                        <Input defaultValue={dataRegisterById.notionalAmount} />
                    </Form.Item>
                    <Form.Item label="Payment frequency (fix and float)">
                        <Select defaultValue={dataRegisterById.contractTerm}>
                            <Option value="1w">1W</Option>
                            <Option value="lm">1M</Option>
                            <Option value="3w">3M</Option>
                            <Option value="6m">6M</Option>
                            <Option value="l2m">12M</Option>
                        </Select>
                    </Form.Item>
                    <Form.Item label="Valuation/Fixing Date">
                        <Input defaultValue={dataRegisterById.valuationFixingDate} />
                    </Form.Item>
                    <Form.Item label="Floating Rate Index">
                        <Input defaultValue={dataRegisterById.floatingRateIndex} />
                    </Form.Item>
                    <Form.Item label="Spread">
                        {/* <Input defaultValue={dataRegisterById.spread} /> */}
                        <InputNumber 
                            min={0}
                            step={0.1} 
                            onChange={onChangeDec} 
                            defaultValue={dataRegisterById.spread} 
                            style={{ width: '100%'}}/>
                    </Form.Item>
                    <Form.Item label="Day Count Fraction (fix and float)">
                        {/* <Input defaultValue={dataRegisterById.dayCountFraction} /> */}
                        <Select defaultValue={dataRegisterById.dayCountFraction}>
                            <Option value="act360">ACT/360</Option>
                            <Option value="actact">ACT/ACT</Option>
                            <Option value="act365">ACT/365</Option>
                            <Option value="30360">30/360</Option>
                        </Select>
                    </Form.Item>
                    <Form.Item label="Floating Rate Reset Frequency">
                        <Select defaultValue={dataRegisterById.floatingRateResetFrequency}>
                            <Option value="1w">1W</Option>
                            <Option value="lm">1M</Option>
                            <Option value="3w">3M</Option>
                            <Option value="6m">6M</Option>
                            <Option value="l2m">12M</Option>
                        </Select>
                    </Form.Item>
                    <Form.Item label="Floating Rate Index Tenor">
                        <Select defaultValue={dataRegisterById.floatingRateIndexTenor}>
                            <Option value="1w">1W</Option>
                            <Option value="lm">1M</Option>
                            <Option value="3w">3M</Option>
                            <Option value="6m">6M</Option>
                            <Option value="l2m">12M</Option>
                        </Select>
                    </Form.Item>
                    <Form.Item label="Business Day Convention">
                        <Select defaultValue={dataRegisterById.businessDayConvention}>
                            <Option value="m">Mod Following</Option>
                            <Option value="f">Following</Option>
                            <Option value="p">Preceding</Option>
                        </Select>
                    </Form.Item>
                    <Form.Item label="Calendar (payment, fixing, holiday)">
                        <DatePicker style={{ width: '100%' }} />
                    </Form.Item>
                    <Form.Item label="Rounding Paymen">
                        <Input defaultValue={dataRegisterById.roundingPayment} />
                    </Form.Item>
                    <Form.Item label="Stub Payment">
                        <Input defaultValue={dataRegisterById.stubPayment} />
                    </Form.Item>
                    <Form.Item label="Forward Starting">
                        <Input defaultValue={dataRegisterById.forwardStarting} />
                    </Form.Item>
                    <Form.Item label="Cash Payment Compounding">
                        <Input defaultValue={dataRegisterById.cashPaymentCompounding} />
                    </Form.Item>
                </div>;
        }
        if (props.location.state.id === '2') {
            editForm =
                <div>
                    <Form.Item label="Currency">
                        <Input defaultValue={dataRegisterById.currency} />
                    </Form.Item>
                    <Form.Item label="Leg type/sub-product">
                        <Select defaultValue={dataRegisterById.legType}>
                            <Option value="x">X</Option>
                            <Option value="l">L</Option>
                        </Select>
                    </Form.Item>
                    <Form.Item label="Effective/commencement date">
                        <DatePicker style={{ width: '100%' }}
                            defaultValue={moment('2020/07/07', dateFormat)}
                            disabled />
                    </Form.Item>
                    <Form.Item label="Contract term">
                        <Select defaultValue={dataRegisterById.contractTerm}>
                            <Option value="1w">1W</Option>
                            <Option value="lm">1M</Option>
                            <Option value="3w">3M</Option>
                            <Option value="6m">6M</Option>
                            <Option value="9m">9M</Option>
                            <Option value="l2m">12M</Option>
                        </Select>
                    </Form.Item>
                    <Form.Item label="Notional amount">
                        <Input defaultValue={dataRegisterById.notionalAmount} />
                    </Form.Item>
                    <Form.Item label="Floating Rate Index">
                        <Input defaultValue={dataRegisterById.floatingRateIndex} />
                    </Form.Item>
                    <Form.Item label="Spread">
                        <Input defaultValue={dataRegisterById.spread} />
                    </Form.Item>
                    <Form.Item label="Day Count Fraction (fix and float)">
                        <Input defaultValue={dataRegisterById.dayCountFraction} />
                    </Form.Item>
                    <Form.Item label="Business Day Convention">
                        <Select defaultValue={dataRegisterById.businessDayConvention}>
                            <Option value="m">Mod Following</Option>
                            <Option value="f">Following</Option>
                            <Option value="p">Preceding</Option>
                        </Select>
                    </Form.Item>
                    <Form.Item label="Calendar (payment, fixing, holiday)">
                        <DatePicker style={{ width: '100%' }} />
                    </Form.Item>
                    <Form.Item label="Rounding">
                        <Input defaultValue={dataRegisterById.rounding} />
                    </Form.Item>
                    <Form.Item label="Forward Starting">
                        <Input defaultValue={dataRegisterById.forwardStarting} />
                    </Form.Item>
                </div>;
        }
        if (props.location.state.id === '3') {
            editForm =
                <div>
                    <Form.Item label="Currency Pair">
                        <Select defaultValue={dataRegisterById.currencyPair}>
                            <Option value="usd">USD</Option>
                            <Option value="idr">IDR</Option>
                        </Select>
                    </Form.Item>
                    <Form.Item label="Notional Foreign Currency">
                        <Input defaultValue={dataRegisterById.notionalForeignCurrency} />
                    </Form.Item>
                    <Form.Item label="Fixing Date">
                        <Input defaultValue={dataRegisterById.fixingDate} />
                    </Form.Item>
                    <Form.Item label="Reference Rate">
                        <Input defaultValue={dataRegisterById.referenceRate} />
                    </Form.Item>
                    <Form.Item label="Tenor">
                        <Select defaultValue={dataRegisterById.tenor}>
                            <Option value="1w">1W</Option>
                            <Option value="lm">1M</Option>
                            <Option value="3w">3M</Option>
                            <Option value="6m">6M</Option>
                            <Option value="9m">9M</Option>
                            <Option value="l2m">12M</Option>
                        </Select>
                    </Form.Item>
                    <Form.Item label="Notional Amount">
                        <Input defaultValue={dataRegisterById.notionalAmount} />
                    </Form.Item>
                </div>;
        }
    } else {
        editForm = <div>Belum ada</div>;
    }
    return (
        <div>
            <div className="head-content viewEdit">
                <Title level={4}>
                    <span className="icon-back">
                        <Link to="/registercontract">
                            <ArrowLeftOutlined />
                        </Link>
                    </span>
                    {action} Register Contract</Title>
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
                <Form.Item wrapperCol={{ span: 12, offset: 6 }}>
                    <Link to="/registercontract">
                        <Button type="primary" htmlType="submit" style={{ marginRight: '15px' }}>
                            Submit
                        </Button>
                        <Button htmlType="submit" style={{ marginRight: '15px' }}>
                            Back
                        </Button>
                    </Link>
                </Form.Item>
            </Form>
        </div>
    )
}


export default EditRegisterContract