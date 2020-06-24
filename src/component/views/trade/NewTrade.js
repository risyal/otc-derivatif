import React, { useState } from 'react';
import {
    Form,
    Input,
    Button,
    Select,
    DatePicker,
    InputNumber,
} from 'antd';

import moment from 'moment';



function NewTrade() {
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
    const productSelect = ['OIS', 'IRS', 'DNDF'];
    const paymentFrequency = ['1W', '1M', '3M', '6M', '1Y'];
    const countFraction = ['ACT/360', 'ACT/ACT', 'ACT/365', '30/360'];
    const businessDay = ['Mod Following', 'Following', 'Preeceding'];

    const productPosition = {
        OIS: ['Fixed', 'Payer'],
        IRS: ['Fixed', 'Receive'],
        DNDF: ['Buy', 'Sell'],
    };
    const productRate = {
        OIS: ['IndONIA', 'JIBOR'],
        IRS: ['IndONIA', 'JIBOR'],
        DNDF: ['JISDOR'],
    };
    const productContract = {
        OIS: ['1W', '1M', '3M', '6M', '9M', '12M '],
        IRS: ['1W', '1M', '3M', '6M', '9M', '12M '],
        DNDF: ['3D', '1W', '1M', '3M', '6M', '9M', '1Y'],
    };
    const resetFrequency = {
        OIS: ['1D'],
        IRS: ['1W', '1M', '3M', '6M', '1Y'],
        DNDF: ['1W', '1M', '3M', '6M', '1Y'],
    };
    const [jenisProduct, SetJenisProduct] = useState(productSelect[0]);
    const [postitionSelect, setPositionSelect] = useState(productPosition[productSelect[0]]);
    const [position, setPosition] = useState(productPosition[productSelect[0]][0]);
    const [rateSelect, setRateSelect] = useState(productRate[productSelect[0]]);
    const [selectedRate, setSelectedRate] = useState(productRate[productSelect[0]][0]);
    const [contractSelect, setContractSelect] = useState(productContract[productSelect[0]]);
    const [selectedContract, setSelectedContract] = useState(productContract[productSelect[0]][0]);
    const [resetSelect, setResetSelect] = useState(resetFrequency[productSelect[0]]);
    const [selectedReset, setSelectedReset] = useState(resetFrequency[productSelect[0]][0]);
    const productClick = (e) => {
        SetJenisProduct(e);
        setPositionSelect(productPosition[e]);
        setPosition(productPosition[e][0])
        setRateSelect(productRate[e]);
        setSelectedRate(productRate[e][0]);
        setContractSelect(productContract[e]);
        setSelectedContract(productContract[e][0]);
        setResetSelect(resetFrequency[e]);
        setSelectedReset(resetFrequency[e][0]);
    };
    const positionClick = (e) => {
        setPosition(e);
    };
    const rateClick = (e) => {
        selectedRate(e);
    };
    const contractClick = (e) => {
        setSelectedContract(e);
    };
    const resetClick = (e) => {
        setSelectedReset(e);
    };

    const dateFormat = 'YYYY/MM/DD';
    return (
        <div style={{ margin: '15px 20px' }}>
            <Form
                {...formItemLayout}
                size={componentSize}
                layout="horizontal"
                initialValues={{ size: componentSize }}
                labelAlign="left"
            >
                {/*                     <Form.Item label="Form Size" name="size">
                        <Radio.Group>
                            <Radio.Button value="small">Small</Radio.Button>
                            <Radio.Button value="middle">Middle</Radio.Button>
                            <Radio.Button value="large">Large</Radio.Button>
                        </Radio.Group>
                    </Form.Item> */}
                <Form.Item label="UTI">
                    <Input />
                </Form.Item>
                <Form.Item label="Reference Number">
                    <Input />
                </Form.Item>
                <Form.Item label="Product ">
                    <Select defaultValue={jenisProduct} onChange={productClick}>
                        {productSelect.map(product => (
                            <Select.Option key={product}>{product}</Select.Option>
                        ))}
                    </Select>
                </Form.Item>
                <Form.Item label="Counterparty">
                    <Input />
                </Form.Item>
                <Form.Item label="Position">
                    <Select
                        value={position}
                        onChange={positionClick} >
                        {postitionSelect.map(pos => (
                            <Select.Option key={pos}>{pos}</Select.Option>
                        ))}
                    </Select>
                </Form.Item>
                <Form.Item label="Reference Rate">
                    <Select
                        value={selectedRate}
                        onChange={rateClick} >
                        {rateSelect.map(rate => (
                            <Select.Option key={rate}>{rate}</Select.Option>
                        ))}
                    </Select>
                </Form.Item>
                {jenisProduct === productSelect[2] ?

                    <Form.Item label="Deal Rate  ">
                        <Input.Group compact>
                            <Select defaultValue="Rp" style={{ width: '15%' }}>
                                <Select.Option value="Rp">Rp</Select.Option>
                                <Select.Option value="dollar">$</Select.Option>
                            </Select>
                            <InputNumber
                                defaultValue={0}
                                formatter={value => `${value}`.replace(/\B(?=(\d{3})+(?!\d))/g, ',')}
                                parser={value => value.replace(/\$\s?|(,*)/g, '')}
                                style={{ width: '85%' }} />
                        </Input.Group>
                    </Form.Item>
                    :
                    <Form.Item label="Fixed Rate  ">
                        <Input.Group compact>
                            <InputNumber
                                defaultValue={0}
                                min={0}
                                max={100}
                                style={{ width: '85%' }}
                            /><Select defaultValue="%" style={{ width: '15%' }}>
                                <Select.Option value="%">%</Select.Option>
                            </Select>
                        </Input.Group>

                    </Form.Item>
                }
                <Form.Item label="Currency">
                    <InputNumber
                        defaultValue={0}
                        formatter={value => `${value}`.replace(/\B(?=(\d{3})+(?!\d))/g, ',')}
                        parser={value => value.replace(/\$\s?|(,*)/g, '')}
                        style={{ width: '100%' }} />
                </Form.Item>
                <Form.Item label="Effective Date">
                    <DatePicker style={{ width: '100%' }}
                        defaultValue={moment('2020/01/23', dateFormat)} />
                </Form.Item>
                <Form.Item label="Contract Term">
                    <Select value={selectedContract}
                        onChange={contractClick} >
                        {contractSelect.map(contract => (
                            <Select.Option key={contract}>{contract}</Select.Option>
                        ))}
                    </Select>
                </Form.Item>
                <Form.Item label="Maturity Date">
                    <DatePicker style={{ width: '100%' }}
                        defaultValue={moment('2020/01/23', dateFormat)} />
                </Form.Item>
                <Form.Item label="Next Fixing Date">
                    <DatePicker style={{ width: '100%' }}
                        defaultValue={moment('2020/01/23', dateFormat)} />
                </Form.Item>
                <Form.Item label="Payment Frequency">
                    <Select >
                        {paymentFrequency.map(payment => (
                            <Select.Option key={payment}>{payment}</Select.Option>
                        ))}
                    </Select>
                </Form.Item>
                <Form.Item label="Reset Frequency">
                    <Select value={selectedReset}
                        onChange={resetClick} >
                        {resetSelect.map(reset => (
                            <Select.Option key={reset}>{reset}</Select.Option>
                        ))}
                    </Select>
                </Form.Item>
                <Form.Item label="Notional Ammount">
                    {jenisProduct === productSelect[2] ?
                        <Input.Group compact>
                            <Select defaultValue="$" style={{ width: '15%' }}>
                                <Select.Option value="$">$</Select.Option>
                            </Select>
                            <InputNumber
                                defaultValue={0}
                                formatter={value => `${value}`.replace(/\B(?=(\d{3})+(?!\d))/g, ',')}
                                parser={value => value.replace(/\$\s?|(,*)/g, '')}
                                style={{ width: '85%' }} />
                        </Input.Group>
                        :
                        <Input.Group compact>
                            <Select defaultValue="Rp" style={{ width: '15%' }}>
                                <Select.Option value="Rp">Rp</Select.Option>
                            </Select>
                            <InputNumber
                                min={1000000000}
                                formatter={value => `${value}`.replace(/\B(?=(\d{3})+(?!\d))/g, ',')}
                                parser={value => value.replace(/\$\s?|(,*)/g, '')}
                                style={{ width: '85%' }} />
                        </Input.Group>
                    }
                </Form.Item>
                <Form.Item label="Spread">
                    <InputNumber style={{ width: '100%' }} />
                </Form.Item>
                <Form.Item label="Leverate">
                    <InputNumber style={{ width: '100%' }} />
                </Form.Item>
                <Form.Item label="Day Count Fraction">
                    <Select defaultValue={countFraction[0]}>
                        {countFraction.map(fraction => (
                            <Select.Option key={fraction}>{fraction}</Select.Option>
                        ))}
                    </Select>
                </Form.Item>
                <Form.Item label="Business Day Convention">
                    <Select defaultValue={businessDay[0]}>
                        {businessDay.map(bday => (
                            <Select.Option key={bday}>{bday}</Select.Option>
                        ))}
                    </Select>
                </Form.Item>
                <Form.Item label="Stub Payment">
                    <Select defaultValue="Initial">
                        <Select.Option value="Initial">Initial</Select.Option>
                        <Select.Option value="Final">Final</Select.Option>
                    </Select>
                </Form.Item>
                <Form.Item wrapperCol={{ span: 12, offset: 6 }}>
                    <Button type="primary" htmlType="submit">
                        Submit
                        </Button>
                </Form.Item>
            </Form>
        </div>
    )
}
export default NewTrade;