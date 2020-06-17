import React from 'react';
import {
    UserOutlined,
    VideoCameraOutlined,
    UploadOutlined,
    MailOutlined
} from '@ant-design/icons';

const Menu = [
    {
        name: 'ATS',
        key: 'ats',
        icon: <UserOutlined />,
        subMenus: [{
            name: 'New Trade',
            key: 'newtrade',
        }, {
            name: 'Inquiry Trade',
            key: 'inquirytrade',
        }]
    },
    {
        name: 'Transaction',
        key: 'transaction',
        icon: <VideoCameraOutlined />,
        subMenus: [{
            name: 'Net Position',
            key: 'netposition',
        }, {
            name: 'Trade Inquiry',
            key: 'tradeinquiry',
        }, {
            name: 'Novation Report',
            key: 'novationreport',
        }, {
            name: 'Clearing Calculation',
            key: 'clearingcalculation',
        }]
    },
    {
        name: 'Account',
        key: 'account',
        icon: <UploadOutlined />,
        subMenus: [{
            name: 'Detail Information',
            key: 'detailinformation',
        }, {
            name: 'Widthrawall',
            key: 'widthrawall',
        }, {
            name: 'Movement Journal',
            key: 'movementjournal',
        }, {
            name: 'Manual Settlement',
            key: 'manualsettlement',
        }]
    },
    {
        name: 'Settlement',
        key: 'settlement',
        icon: <MailOutlined />,
        subMenus: [{
            name: 'Clearing Report',
            key: 'clearingreport',
        }, {
            name: 'Daily Transaction',
            key: 'dailytransaction',
        }, {
            name: 'Settlement',
            key: 'settlement',
        }]
    },
    {
        name: 'Administration',
        key: 'Administration',
        icon: <MailOutlined />,
        subMenus: [{
            name: 'Audit Trail',
            key: 'Audit Trail',
        }, {
            name: 'User Management',
            key: 'User Management',
        }]
    },
    {
        name: 'Product',
        key: 'Product',
        icon: <MailOutlined />,
        subMenus: [{
            name: 'Members',
            key: 'Members',
        }, {
            name: 'Clients',
            key: 'Clients',
        }, {
            name: 'System Parameter',
            key: 'System Parameter',
        }, {
            name: 'Calender',
            key: 'Calender',
        }]
    },
    {
        name: 'Approval',
        key: 'Approval',
        icon: <MailOutlined />
    }
]

export default Menu;