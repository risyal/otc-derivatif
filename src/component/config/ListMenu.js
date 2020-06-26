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
            linkTo: '/accountManagement/detailinformation'
        }, {
            name: 'Detail Blocked Collateral - Member',
            key: 'detailMember',
            linkTo: '/accountManagement/collateralMember'
        }, {
            name: 'Detail Blocked Collateral - Client',
            key: 'detailClient',
            linkTo: '/accountManagement/collateralClient'
        }, {
            name: 'Detail Default Fund',
            key: 'detailFund',
            linkTo: '/accountManagement/detailFund'
        }, {
            name: 'Register Beneficiaries',
            key: 'registerBeneficiaries',
            linkTo: '/accountManagement/registerBeneficiaries'
        }, {
            name: 'Inquiry Beneficiaries',
            key: 'inquiryBeneficiaries',
            linkTo: '/accountManagement/inquiryBeneficiaries'
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
            name: 'Register Client',
            key: 'registerclient',
            linkTo: '/registerclient'
        }, {
            name: 'Register Member',
            key: 'registermember',
            linkTo: '/registermember'
        }]
    },
    {
        name: 'Administration',
        key: 'administration',
        icon: <SolutionOutlined />,
        subMenus: [{
            name: 'Register Contract',
            key: 'registerContract',
            linkTo: '/registerContract'
        }, {
            name: 'Edit Account',
            key: 'editAccount',
            linkTo: '/editAccount'
        }, {
            name: 'Securities Coll Mgt',
            key: 'securitiesCollMgt',
            linkTo: '/securitiesCollMgt'
        }, {
            name: 'Cash Coll Mgt',
            key: 'cashCollMgt',
            linkTo: '/cashCollMgt'
        }, {
            name: 'Edit Reference Rate',
            key: 'editReferenceRate',
            linkTo: '/editReferenceRate'
        }, {
            name: 'Edit Parameter',
            key: 'editParameter',
            linkTo: '/editParameter'
        }, {
            name: 'Audit Trail',
            key: 'auditTrail',
            linkTo: '/auditTrail'
        }, {
            name: 'User Management',
            key: 'userManagement',
            linkTo: '/userManagement'
        }, {
            name: 'System Parameter',
            key: 'systemParameter',
            linkTo: '/systemParameter'
        }, {
            name: 'Calendar',
            key: 'calendar',
            linkTo: '/calendar'
        }, {
            name: 'Approval',
            key: 'approval',
            linkTo: '/approval'
        }, {
            name: 'Register ATS',
            key: 'registerAts',
            linkTo: '/registerAts'
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
            key: 'feereport',
            linkTo: '/feereport'
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