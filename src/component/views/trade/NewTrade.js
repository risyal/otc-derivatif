import React, { useState, useMemo } from 'react';
import {
    Form,
    Input,
    Button,
    Select,
    DatePicker,
    InputNumber,
    Radio,
} from 'antd';

import moment from 'moment';
const dateFormat = 'YYYY/MM/DD';



function NewTrade() {
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
    const [productSelect] = useState(['OIS', 'IRS', 'DNDF']);
    const [paymentFrequency] = useState(['1W', '1M', '3M', '6M', '1Y']);
    const [countFraction] = useState(['ACT/360', 'ACT/ACT', 'ACT/365', '30/360']);
    const [businessDay] = useState(['Mod Following', 'Following', 'Preceeding']);

    const [productPosition] = useState({
        OIS: ['Fixed', 'Payer'],
        IRS: ['Fixed', 'Receive'],
        DNDF: ['Buy', 'Sell'],
    });
    const [productRate] = useState({
        OIS: ['IndONIA'],
        IRS: ['JIBOR 1W', 'JIBOR 1M', 'JIBOR 3M', 'JIBOR 6M', 'JIBOR 12M'],
        DNDF: ['JISDOR'],
    });
    const [floatingRate] = useState({
        OIS: ['INDONIA'],
        IRS: ['JIBOR'],
        DNDF: [''],
    });
    const [productContract] = useState({
        OIS: ['1W', '1M', '3M', '6M', '9M', '12M '],
        IRS: ['1W', '1M', '3M', '6M', '9M', '12M '],
        DNDF: ['3D', '1W', '1M', '3M', '6M', '9M', '1Y'],
    });
    const [resetFrequency] = useState({
        OIS: ['1D'],
        IRS: ['1W', '1M', '3M', '6M', '1Y'],
        DNDF: ['1W', '1M', '3M', '6M', '1Y'],
    });
    const [jenisProduct, SetJenisProduct] = useState();
    const [postitionSelect, setPositionSelect] = useState(productPosition[productSelect[0]]);
    const [position, setPosition] = useState(productPosition[productSelect[0]][0]);
    const [rateSelect, setRateSelect] = useState(productRate[productSelect[0]]);
    const [selectedRate, setSelectedRate] = useState(productRate[productSelect[0]][0]);
    const [selectedfloatingRate, setSelectedfloatingRate] = useState(floatingRate[productSelect[2]][0]);
    const [contractSelect, setContractSelect] = useState(productContract[productSelect[0]]);
    const [selectedContract, setSelectedContract] = useState(productContract[productSelect[0]][0]);
    const [resetSelect, setResetSelect] = useState(resetFrequency[productSelect[0]]);
    const [selectedReset, setSelectedReset] = useState(resetFrequency[productSelect[0]][0]);
    const [selectedTenor, setSelectedTenor] = useState(resetFrequency[productSelect[0]][0]);
    const productClick = (e) => {
        SetJenisProduct(e);
        setPositionSelect(productPosition[e]);
        setPosition(productPosition[e][0])
        setRateSelect(productRate[e]);
        setSelectedRate(productRate[e][0]);
        setSelectedfloatingRate(floatingRate[e][0]);
        setContractSelect(productContract[e]);
        setSelectedContract(productContract[e][0]);
        setResetSelect(resetFrequency[e]);
        setSelectedReset(resetFrequency[e][0]);
    };
    const positionClick = (e) => {
        setPosition(e);
    };
    const rateClick = (e) => {
        setSelectedRate(e);
    };
    const contractClick = (e) => {
        setSelectedContract(e);
    };
    const resetClick = (e) => {
        setSelectedReset(e);
    };
    const tenorClick = (e) => {
        setSelectedTenor(e);
    };
    const [disableFR, setDisableFR] = useState(false);
    const [dates, setDates] = useState(moment('2020/01/23', dateFormat));
    const [effectiveDates, setEffectiveDates] = useState(moment('2020/01/25', dateFormat));
    function disabledDate(current) {
        // Can not select days before today and after two today
        if (!dates || dates.length === 0) {
            return false;
        }
        const batasMaxDate = dates && current.diff(dates, 'days') != 2;
        //const batasMinDate = dates && dates.diff(current, 'days') == 0;
        return batasMaxDate;
    }
    const tradeDateClick = (e) => {
        setDates(e);
        setEffectiveDates(moment(e).add(2, 'days'));
    }
    const effectiveDateClick = (e) => {
        setEffectiveDates(e);
    }
    const frdisableClick = (e) => {
        if (e === "float") {
            setDisableFR(true);
        }
        else {

            setDisableFR(false);
        }
    }
    const [showFSDate, setShowFSDate] = useState(true);
    const forwardStartingClick = (e) => {
        if (e === "eligible") {
            setShowFSDate(true);
        }
        else {

            setShowFSDate(false);
        }
    }
    const [selectedPayFreq, setSelectedPayFreq] = useState('');
    const payFrequencyClick = (e) => {
        setSelectedPayFreq(e);
        setSelectedReset(e);
        setSelectedTenor(e);
    }
    const [showClientId, setShowClientId] = useState(false);
    const typeClick = (e) => {
        if (e === "client") {
            setShowClientId(true);
        }
        else {

            setShowClientId(false);
        }
    }
    const [sixEyes, setSixEyes] = useState(1);
    const radioOnChange = e => {
        setSixEyes(e.target.value);
    };


    return (
        <div style={{ margin: '15px 20px' }}>
            <Form
                {...formItemLayout}
                size={componentSize}
                layout="horizontal"
                initialValues={{ size: componentSize }}
                labelAlign="left"
            >
                <Form.Item label="UTI">
                    <Input disabled='true' defaultValue='Auto Generate' />
                </Form.Item>
                <Form.Item label="Reference Number">
                    <Input />
                </Form.Item>
                <Form.Item label="Member ID">
                    <Input />
                </Form.Item>
                <Form.Item label="Transaction Type">
                    <Select defaultValue="house" onChange={typeClick}>
                        <Select.Option value="house">House</Select.Option>
                        <Select.Option value="client">Client</Select.Option>
                    </Select>
                </Form.Item>
                {showClientId ?
                    <Form.Item label="Client ID">
                        <Select defaultValue="house">
                            <Select.Option value="house">clientid1</Select.Option>
                            <Select.Option value="client">clientid2</Select.Option>
                        </Select>
                    </Form.Item>
                    : null}
                <Form.Item label="Counterparty">
                    <Input />
                </Form.Item>
                <Form.Item label="Product ">
                    <Select onChange={productClick}>
                        {productSelect.map(product => (
                            <Select.Option key={product}>{product}</Select.Option>
                        ))}
                    </Select>
                </Form.Item>
                {jenisProduct == null ? (
                    <div>Select a Product</div>
                ) : jenisProduct === productSelect[0]
                    || jenisProduct === productSelect[1] ? (
                            <div>
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
                                    {jenisProduct === productSelect[1] ? <Select
                                        value={selectedRate}
                                        onChange={rateClick} >
                                        {rateSelect.map(rate => (
                                            <Select.Option key={rate}>{rate}</Select.Option>
                                        ))}
                                    </Select> : selectedRate}
                                </Form.Item>
                                <Form.Item label="Market Side ">
                                    <Select defaultValue="Receive">
                                        <Select.Option value="Receive">Receive</Select.Option>
                                        <Select.Option value="Pay">Pay</Select.Option>
                                    </Select>
                                </Form.Item>
                                <Form.Item label="Currency">
                                    <Input />
                                </Form.Item>
                                <Form.Item label="Leg Type ">
                                    <Select defaultValue="fix" onChange={frdisableClick}>
                                        <Select.Option value="fix">Fix</Select.Option>
                                        <Select.Option value="float">Float</Select.Option>
                                    </Select>
                                </Form.Item>
                                <Form.Item label="Floating Rate Index">
                                    {disableFR ?
                                        (selectedfloatingRate) : (<Input />)}
                                </Form.Item>
                                {/* <Form.Item label="Trade Date">
                                    <DatePicker style={{ width: '100%' }}
                                        onChange={tradeDateClick}
                                        defaultValue={moment('2020/01/23', dateFormat)} />
                                </Form.Item> */}
                                <Form.Item label="Forward Starting">
                                    <Select defaultValue="Eligible"
                                        onChange={forwardStartingClick}>
                                        <Select.Option value="eligible">Eligible</Select.Option>
                                        <Select.Option value="notEligible">Not Eligible</Select.Option>
                                    </Select>
                                </Form.Item>
                                {showFSDate ?
                                    <Form.Item label="Forward Starting Date">
                                        <DatePicker style={{ width: '100%' }}
                                            defaultValue={moment('2020/01/23', dateFormat)} />
                                    </Form.Item>
                                    : null}
                                <Form.Item label="Effective Date">
                                    <DatePicker
                                        style={{ width: '100%' }}
                                        disabledDate={disabledDate}
                                        onChange={effectiveDateClick}
                                        value={effectiveDates} />
                                </Form.Item>
                                <Form.Item label="Maturity Date">
                                    <DatePicker style={{ width: '100%' }}
                                        defaultValue={moment('2020/01/23', dateFormat)} />
                                </Form.Item>
                                <Form.Item label="Settlement Type">
                                    <Input value="Cash" />
                                </Form.Item>
                                <Form.Item label="Contract Term">
                                    <Select value={selectedContract}
                                        onChange={contractClick} >
                                        {contractSelect.map(contract => (
                                            <Select.Option key={contract}>{contract}</Select.Option>
                                        ))}
                                    </Select>
                                </Form.Item>
                                <Form.Item label="Notional Amount">
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
                                </Form.Item>
                                <Form.Item label="Payment Frequency">
                                    <Select value={selectedPayFreq}
                                        onChange={payFrequencyClick} >
                                        {paymentFrequency.map(payment => (
                                            <Select.Option key={payment}>{payment}</Select.Option>
                                        ))}
                                    </Select>
                                </Form.Item>
                                <Form.Item label="Next Fixing Date">
                                    <DatePicker style={{ width: '100%' }}
                                        defaultValue={moment('2020/01/23', dateFormat)} />
                                </Form.Item>
                                {disableFR ? null : (<Form.Item label="Fixed Rate  ">
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
                                </Form.Item>)}
                                <Form.Item label="Spread">
                                    <InputNumber style={{ width: '100%' }} />
                                </Form.Item>
                                <Form.Item label="Leverage">
                                    <InputNumber style={{ width: '100%' }} />
                                </Form.Item>
                                <Form.Item label="Day Count Fraction">
                                    <Select defaultValue={countFraction[0]}>
                                        {countFraction.map(fraction => (
                                            <Select.Option key={fraction}>{fraction}</Select.Option>
                                        ))}
                                    </Select>
                                </Form.Item>
                                {jenisProduct !== productSelect[0] ? (<div>

                                    <Form.Item label="Floating Rate Reset Frequency">
                                        <Select value={selectedReset}
                                            onChange={resetClick}
                                            disabled={!disableFR}>
                                            {resetSelect.map(reset => (
                                                <Select.Option key={reset}>{reset}</Select.Option>
                                            ))}
                                        </Select>
                                    </Form.Item>
                                    <Form.Item label="Floating Rate Index Tenor">
                                        <Select value={selectedTenor}
                                            onChange={tenorClick}
                                            disabled={!disableFR}>
                                            {resetSelect.map(reset => (
                                                <Select.Option key={reset}>{reset}</Select.Option>
                                            ))}
                                        </Select>
                                    </Form.Item>
                                </div>) : (<div>
                                    {/* <Form.Item label="Floating Rate Index Tenor">
                                        <Select >
                                            <Select.Option key="O">Overnight</Select.Option>
                                        </Select>
                                    </Form.Item> */}
                                    <Form.Item label="Floating Rate Compounding ">
                                        <Select >
                                            <Select.Option key="D">Daily Compounding </Select.Option>
                                        </Select>
                                    </Form.Item>
                                </div>)
                                }
                                <Form.Item label="Business Day Convention">
                                    <Select defaultValue={businessDay[0]}>
                                        {businessDay.map(bday => (
                                            <Select.Option key={bday}>{bday}</Select.Option>
                                        ))}
                                    </Select>
                                </Form.Item>
                                {/* calendar ????? */}
                                {/* <Form.Item label="Rounding Payment">
                                    <InputNumber style={{ width: '100%' }} />
                                </Form.Item> */}
                                {jenisProduct === productSelect[0] ? null : (<div>
                                    <Form.Item label="Stub Payment">
                                        <Select defaultValue="Initial">
                                            <Select.Option value="Initial">Initial</Select.Option>
                                            <Select.Option value="Final">Final</Select.Option>
                                        </Select>
                                    </Form.Item>
                                </div>)
                                }
                                {/* Cash Payment Compounding ????? */}
                                <Form.Item label="Role">
                                    <Radio.Group onChange={radioOnChange} value={sixEyes}>
                                        <Radio value={1}>Maker</Radio>
                                        <Radio value={2}>Direct Checker</Radio>
                                        <Radio value={3}>Direct Approver</Radio>
                                    </Radio.Group>
                                </Form.Item>
                                <Form.Item wrapperCol={{ span: 12, offset: 6 }}>
                                    <Button type="primary" htmlType="submit">
                                        Submit</Button>
                                </Form.Item>
                            </div>
                        ) : jenisProduct === productSelect[2] ? (
                            <div>
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
                                    {selectedRate}
                                </Form.Item>
                                <Form.Item label="Market Side ">
                                    <Select defaultValue="buy">
                                        <Select.Option value="buy">Buy</Select.Option>
                                        <Select.Option value="sell">Pay</Select.Option>
                                    </Select>
                                </Form.Item>
                                <Form.Item label="Currency">
                                    <Select value="IDR">
                                        <Select.Option value="IDR">IDR</Select.Option>
                                    </Select>
                                </Form.Item>
                                <Form.Item label="Notional Foreign Currency ">
                                    <Select defaultValue="USD">
                                        <Select.Option value="USD">USD</Select.Option>
                                    </Select>
                                </Form.Item>
                                {/* <Form.Item label="Forward">
                                    <Select defaultValue="IDR">
                                        <Select.Option value="IDR">IDR</Select.Option>
                                    </Select>
                                </Form.Item> */}
                                <Form.Item label="Deal Rate  ">
                                    <Input
                                        addonBefore="Rp"
                                    />
                                </Form.Item>
                                {/* <Form.Item label="Settlement Date">
                                    <DatePicker style={{ width: '100%' }}
                                        onChange={tradeDateClick}
                                        defaultValue={moment('2020/01/23', dateFormat)} />
                                </Form.Item> */}
                                <Form.Item label="Fixing Date">
                                    <DatePicker
                                        style={{ width: '100%' }}
                                        disabledDate={disabledDate}
                                        onChange={effectiveDateClick}
                                        value={effectiveDates} />
                                </Form.Item>
                                <Form.Item label="Settlement Currency ">
                                    <Select defaultValue="IDR">
                                        <Select.Option value="IDR">IDR</Select.Option>
                                    </Select>
                                </Form.Item>
                                <Form.Item label="Settlement Type">
                                    <Input value="Non Deliverable" />
                                </Form.Item>
                                <Form.Item label="Contract Term">
                                    <Select value={selectedContract}
                                        onChange={contractClick} >
                                        {contractSelect.map(contract => (
                                            <Select.Option key={contract}>{contract}</Select.Option>
                                        ))}
                                    </Select>
                                </Form.Item>
                                {/* <Form.Item label="Rounding">
                                    <Input />
                                </Form.Item> */}
                                {/* <Form.Item label="Price Source Disruption">
                                    <Input />
                                </Form.Item> */}
                                <Form.Item label="Notional Amount">
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
                                </Form.Item>
                                <Form.Item label="Role ">
                                    <Radio.Group onChange={radioOnChange} value={sixEyes}>
                                        <Radio value={1}>Maker</Radio>
                                        <Radio value={2}>Direct Checker</Radio>
                                        <Radio value={3}>Direct Approver</Radio>
                                    </Radio.Group>
                                </Form.Item>
                                <Form.Item wrapperCol={{ span: 12, offset: 6 }}>
                                    <Button type="primary" htmlType="submit">
                                        Submit</Button>
                                </Form.Item>
                            </div>
                        ) : null
                }
            </Form>
        </div>
    )
}
export default NewTrade;