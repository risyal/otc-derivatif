import React, { useState, useMemo } from 'react';
import {
    Button,
    Table,
    Dropdown,
    Menu,
    Row,
    Col,
    Tabs,
} from 'antd';
import { Link } from "react-router-dom";
import { DownloadOutlined } from '@ant-design/icons';

function Calendar() {
    const { TabPane } = Tabs;
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
            fixed: 'right',
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
            date: '31-07-2020',
            information: 'Eid Al-Adha',
            update: '01-07-2020',
        },
        {
            key: '2',
            date: '17-08-2020',
            information: 'Hari Proklamasi Indonesia',
            update: '01-08-2020',
        },
        {
            key: '3',
            date: '28-10-2020',
            information: 'Cuti Bersama',
            update: '01-08-2020',
        },
    ]);
    const [data19] = useState([
        {
            key: '1',
            date: '31-07-2019',
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
            date: '28-10-2019',
            information: 'Cuti Bersama',
            update: '01-08-2019',
        },
    ]);
    const [data18] = useState([
        {
            key: '1',
            date: '31-07-2018',
            information: 'Eid Al-Adha',
            update: '01-07-2018',
        },
        {
            key: '2',
            date: '17-08-2018',
            information: 'Hari Proklamasi Indonesia',
            update: '01-08-2018',
        },
        {
            key: '3',
            date: '28-10-2018',
            information: 'Cuti Bersama',
            update: '01-08-2018',
        },
    ]);
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
            <Tabs type="card">
                <TabPane tab="2020" key="1" >
                    <Row justify="end">
                        <Col span={4}>
                            {exportButtton}
                        </Col>
                    </Row>
                    <Table
                        pagination={false}
                        columns={columns}
                        dataSource={data19}
                        bordered
                        size="middle"
                    />
                </TabPane>

                <TabPane tab="2019" key="2">
                    <Row justify="end">
                        <Col span={4}>
                            {exportButtton}
                        </Col>
                    </Row>
                    <Table
                        pagination={false}
                        columns={columns}
                        dataSource={data18}
                        bordered
                        size="middle"
                    />
                </TabPane>

                <TabPane tab="2018" key="3">
                    <Row justify="end">
                        <Col span={4}>
                            {exportButtton}
                        </Col>
                    </Row>
                    <Table
                        pagination={false}
                        columns={columns}
                        dataSource={data}
                        bordered
                        size="middle"
                    />
                </TabPane>
            </Tabs>

        </div>
    )

}

export default Calendar