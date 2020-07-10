import React from 'react';
import { 
    Button,
    Table,
    Dropdown,
    Menu
 } from 'antd';
 import { Link } from "react-router-dom";

function Calendar(){
    const columns = [
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
    ];
    const data = [
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
    ];

    return(
        <div>
            <Link to={{
                    pathname: `/administration/ViewEditCalendar`,
                    state: {
                        id: '0',
                        action: "Add New",
                        disable: false,
                    }
                }}>
                    <Button type="primary" htmlType="submit" style={{ marginBottom: '15px' , marginRight: '15px'}}>
                        Add New
                    </Button>
            </Link>
            <Button type="primary">Import</Button>

            <div style={{ marginTop: '15px' }}>
                <Table
                    columns={columns}
                    dataSource={data}
                    bordered
                    size="middle"
                />
            </div>
        </div>
    )

}

export default Calendar