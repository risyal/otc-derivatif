import React from 'react';
import {
    UserOutlined,
    FundOutlined,
    DollarCircleOutlined,
    FormOutlined,
    FlagOutlined,
    FileDoneOutlined,
    SolutionOutlined
} from '@ant-design/icons';

const Menu = [
    {
        name: 'Trade Management',
        key: 'trade management',
        icon: <FundOutlined />,
        subMenus: [{
            name: 'Input Trade',
            key: 'newtrade',
            linkTo: '/newtrade'
        }, {
            name: 'Cancel Trade',
            key: 'canceltrade',
            linkTo: '/canceltrade'
        }, {
            name: 'Inquiry Input Trade',
            key: 'inquerytrade',
            linkTo: '/inquerytrade'
        }, {
            name: 'Monitoring Trade',
            key: 'monitoringtrade',
            linkTo: '/monitoringtrade'
        }, {
            name: 'Trade summary',
            key: 'tradesummary',
            linkTo: '/tradesummary'
        }]
    },
    {
        name: 'Clearing Management',
        key: 'clearingmanagement',
        icon: <DollarCircleOutlined />,
        subMenus: [{
            name: 'Clearing Position',
            key: 'clearingPosition',
            linkTo: '/clearingManagement/clearingPosition'
        }, {
            name: 'Inquiry Position',
            key: 'inquiryPostition',
            linkTo: '/clearingManagement/inquiryPostition'
        }, {
            name: 'Settlement Position',
            key: 'settlementPostion',
            linkTo: '/clearingManagement/settlementPostion'
        }, {
            name: 'Status Settlement',
            key: 'statussettlement',
            linkTo: '/statussettlement'
        }, {
            name: 'Cash Flow IRS Calculation',
            key: 'cashFlowIrs',
            linkTo: '/clearingManagement/cashFlowIrs'
        }]
    },
    {
        name: 'Account Management',
        key: 'accountmanagement',
        icon: <UserOutlined />,
        subMenus: [{
            name: 'Account Detail Information',
            key: 'detailinformation',
            linkTo: '/detailinformation'
        }, {
            name: 'Detail Blocked Collateral - Member',
            key: 'detailmember',
            linkTo: '/detailmember'
        }, {
            name: 'Detail Blocked Collateral - Client',
            key: 'detailclient',
            linkTo: '/detailclient'
        }, {
            name: 'Detail Default Fund',
            key: 'detailfund',
            linkTo: '/detailfund'
        }, {
            name: 'Register Beneficiaries',
            key: 'registerbeneficiaries',
            linkTo: '/registerbeneficiaries'
        }, {
            name: 'Inquiry Beneficiaries',
            key: 'inquirybeneficiaries',
            linkTo: '/inquirybeneficiaries'
        }]
    },
    {
        name: 'Settlement Management',
        key: 'settlementmanagement',
        icon: <FormOutlined />,
        subMenus: [{
            name: 'Inquiry Settlement Instruction',
            key: 'inquirysettlement',
            linkTo: '/inquirysettlement'
        }, {
            name: 'Settlement Job Execution',
            key: 'settlementexecution',
            linkTo: '/settlementexecution'
        }, {
            name: 'Monitoring Clearing Pos vs Balance',
            key: 'monitoringclearing',
            linkTo: '/monitoringclearing'
        }]
    },
    {
        name: 'Instruction Management',
        key: 'instructionmanagement',
        icon: <FlagOutlined />,
        subMenus: [{
            name: 'Security Management',
            key: 'securitymanagement',
            linkTo: '/securitymanagement'
        }, {
            name: 'Cash Management',
            key: 'cashmanagement',
            linkTo: '/cashmanagement'
        }]
    },
    {
        name: 'Collateral Management',
        key: 'collateralmanagement',
        icon: <FlagOutlined />,
        subMenus: [{
            name: 'Inquiry',
            key: 'inquiry',
            linkTo: '/inquiry'
        }, {
            name: 'Instruction - COLDP',
            key: 'instructioncoldp',
            linkTo: '/instructioncoldp'
        }, {
            name: 'Instruction - COLW',
            key: 'instructioncolw',
            linkTo: '/instructioncolw'
        }]
    },
    {
        name: 'Member and Client Management',
        key: 'memberandclientmanagement',
        icon: <SolutionOutlined />,
        subMenus: [{
            name: 'Register client',
            key: 'registerclient',
            linkTo: '/registerclient'
        }, {
            name: 'Inquiry Client',
            key: 'inquiryclient',
            linkTo: '/inquiryclient'
        }, {
            name: 'Edit Client',
            key: 'editclient',
            linkTo: '/editclient'
        }, {
            name: 'Register Member',
            key: 'registermember',
            linkTo: '/registermember'
        }, {
            name: 'Inquiry Member',
            key: 'inquirymember',
            linkTo: '/inquirymember'
        }, {
            name: 'Edit Member',
            key: 'editmember',
            linkTo: '/editmember'
        }]
    },
    {
        name: 'Reporting',
        key: 'reporting',
        icon: <FlagOutlined />,
        subMenus: [{
            name: 'DHK Member and Client',
            key: 'dhkmemberclient',
            linkTo: '/dhkmemberclient'
        }, {
            name: 'Obligation Accomplishment',
            key: 'obligationaccomplishment',
            linkTo: '/obligationaccomplishment'
        }, {
            name: 'Daily Transaction Report',
            key: 'dailytransaction',
            linkTo: '/dailytransaction'
        }, {
            name: 'Novation Report',
            key: 'novationreport',
            linkTo: '/novationreport'
        }, {
            name: 'Movement Balance',
            key: 'movementbalance',
            linkTo: '/movementbalance'
        }, {
            name: 'Default Fund Report',
            key: 'fundreport',
            linkTo: '/fundreport'
        }, {
            name: 'Report Bank Indonesia',
            key: 'reportbankid',
            linkTo: '/reportbankid'
        }, {
            name: 'Fee Report',
            key: 'freereport',
            linkTo: '/freereport'
        }]
    },
    {
        name: 'Rekonsiliasi Rekening',
        key: 'rekonsiliasirekening',
        icon: <FileDoneOutlined />,
        linkTo: '/rekonsiliasi'
    }
]

export default Menu;