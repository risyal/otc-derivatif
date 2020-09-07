import React, { useState, useMemo } from 'react';
import {
    Button,
    Table,
    Dropdown,
    Menu,
    Row,
    Col,
    Select,
} from 'antd';
import { Link } from "react-router-dom";
import { DownloadOutlined } from '@ant-design/icons';

function Calendar() {
    const productSelect = ['2020', '2019', '2018'];
    const [jenisProduct, SetJenisProduct] = useState(productSelect[0]);
    const productClick = (e) => {
        SetJenisProduct(e);
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

    const [columns] = useState([
        {
            title: 'Date',
            dataIndex: 'date',
            key: 'date',
            width: 100,
        },
        {
            title: 'Information',
            dataIndex: 'information',
            key: 'information',
            width: 100,
        },
        {
            title: 'Action',
            key: 'action',
            width: 100,
            render: (text, record) => (
                <Dropdown
                    overlay={
                        <Menu>
                            <Menu.Item>
                                <Link to={{
                                    pathname: `/administration/ViewEditCalendar`,
                                    state: {
                                        id: record.key,
                                        action: "Edit",
                                        disable: false,
                                    }
                                }} style={{ marginRight: '20px' }}>Edit
                                </Link>
                            </Menu.Item>
                            <Menu.Item>
                                <Link to={{
                                    pathname: `/administration/ViewDeleteCalendar`,
                                    state: {
                                        id: record.key,
                                        action: "Delete",
                                        disable: false,
                                    }
                                }} style={{ marginRight: '20px' }}>Delete
                                </Link>
                            </Menu.Item>
                        </Menu>
                    }
                    placement="bottomLeft"
                    trigger={['click']}>
                    <Button>Action</Button>
                </Dropdown>
            )
        },
        {
            title: 'Last Update Calendar',
            dataIndex: 'update',
            key: 'update',
            width: 100,
        },
    ]);
    const [data] = useState([
        {
            key: '1',
            date: '01-01-2020',
            information: 'New Years Day',
            update: '01-07-2020',
        },
        {
            key: '2',
            date: '25-01-2020',
            information: 'Chinese Lunar',
            update: '01-08-2020',
        },
        {
            key: '3',
            date: '23-03-2020',
            information: 'Ascension of The Prophet Muhammad',
            update: '01-08-2020',
        },{
            key: '4',
            date: '25-03-2020',
            information: 'Bali Day of Silence and Hindu New Year',
            update: '01-08-2020',
        },
        {
            key: '5',
            date: '10-04-2020',
            information: 'Good Friday',
            update: '01-08-2020',
        },
        {
            key: '6',
            date: '12-04-2020',
            information: 'Easter Sunday',
            update: '01-08-2020',
        },
    ]);
    const [data19] = useState([
        {
            key: '1',
            date: '11-08-2019',
            information: 'Eid Al-Adha',
            update: '01-07-2019',
        },
        {
            key: '2',
            date: '17-08-2019',
            information: 'Hari Proklamasi Indonesia',
            update: '01-08-2019',
        },
        {
            key: '3',
            date: '01-09-2019',
            information: 'Muharram/Islamic New Year',
            update: '01-08-2019',
        },
        {
            key: '4',
            date: '27-10-2019',
            information: 'Diwali',
            update: '01-08-2019',
        },
        {
            key: '5',
            date: '09-11-2019',
            information: 'The Prophet Muhammad Birthday',
            update: '01-08-2019',
        },
        {
            key: '6',
            date: '24-12-2019',
            information: 'Christmas Eve',
            update: '01-08-2019',
        },
    ]);
    const [data18] = useState([
        {
            key: '1',
            date: '01-01-2018',
            information: 'New Years Day',
            update: '01-07-2018',
        },
        {
            key: '2',
            date: '25-01-2018',
            information: 'Chinese Lunar',
            update: '01-08-2018',
        },
        {
            key: '3',
            date: '23-03-2018',
            information: 'Ascension of The Prophet Muhammad',
            update: '01-08-2018',
        },{
            key: '4',
            date: '25-03-2018',
            information: 'Bali Day of Silence and Hindu New Year',
            update: '01-08-2018',
        },
        {
            key: '5',
            date: '10-04-2018',
            information: 'Good Friday',
            update: '01-08-2018',
        },
        {
            key: '6',
            date: '12-04-2018',
            information: 'Easter Sunday',
            update: '01-08-2018',
        },
    ]);
    
    return (
        <div style={{ margin: '15px 20px' }}>
            <Link to={{
                pathname: `/administration/ViewEditCalendar`,
                state: {
                    id: '0',
                    action: "Add New",
                    disable: false,
                }
            }}>
                <Button type="primary" htmlType="submit" style={{ marginBottom: '15px', marginRight: '15px' }}>
                    Add New
                    </Button>
            </Link>
            <Button type="primary">Import</Button>
            <Select defaultValue={jenisProduct} 
                    onChange={productClick}
                    style= {{ float: 'right', width: '15%' }}>
                {productSelect.map(product => (
                    <Select.Option key={product}>{product}</Select.Option>
                ))}
            </Select>

            <Row justify="end">
                <Col span={4}>
                    {exportButtton}
                </Col>
            </Row>

            {jenisProduct == productSelect[0] ? (
                <div>
                    <Table
                        columns={columns}
                        dataSource={data}
                        bordered
                        size="middle"
                    />
                </div>
            ) : jenisProduct === productSelect[1] ? (
                <div>
                    <Table
                        columns={columns}
                        dataSource={data19}
                        bordered
                        size="middle"
                    />
                </div>
            ) : jenisProduct === productSelect[2] ? (
                <div>
                    <Table
                        columns={columns}
                        dataSource={data18}
                        bordered
                        size="middle"
                    />
                </div>
            ) : null }
        </div>
    )

}

export default Calendar