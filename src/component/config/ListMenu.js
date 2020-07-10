import React from 'react';
import {
    UserOutlined,
    FundOutlined,
    DollarCircleOutlined,
    FormOutlined,
    FlagOutlined,
    FileDoneOutlined,
    SolutionOutlined,
    UsergroupAddOutlined,
    FundProjectionScreenOutlined
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
            name: 'Inquiry Input Trade',
            key: 'inquerytrade',
            linkTo: '/inquerytrade'
        }, {
            name: 'Trade Confirmation',
            key: 'tradeConfirmation',
            linkTo: '/tradeConfirmation'
        }, {
            name: 'Cancel Trade',
            key: 'canceltrade',
            linkTo: '/canceltrade'
        }, {
            name: 'Monitoring Trade',
            key: 'monitoringtrade',
            linkTo: '/monitoringtrade'
        }, {
            name: 'Trade Summary',
            key: 'tradesummary',
            linkTo: '/tradesummary'
        }, {
            name: 'Approval',
            key: 'tradeApproval',
            linkTo: '/trade/approval'
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
            key: 'statusSettlement',
            linkTo: '/clearingManagement/statusSettlement'
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
            key: 'inquirySettlement',
            linkTo: '/settlement/inquirySettlement'
        }, {
            name: 'Settlement Job Execution',
            key: 'settlementExecution',
            linkTo: '/settlement/settlementExecution'
        }, {
            name: 'Monitoring Clearing Pos vs Balance',
            key: 'monitoringClearing',
            linkTo: '/settlement/monitoringClearing'
        }]
    },
    {
        name: 'Instruction Management',
        key: 'instructionmanagement',
        icon: <FlagOutlined />,
        subMenus: [{
            name: 'Security Management',
            key: 'securityManagement',
            linkTo: '/instructionManagement/securityManagement'
        }, {
            name: 'Inquiry Sec Management',
            key: 'inquirySecManagement',
            linkTo: '/instructionManagement/inquirySecManagement'
        }, {
            name: 'Cash Management',
            key: 'cashManagement',
            linkTo: '/instructionManagement/cashManagement'
        }, {
            name: 'Inquiry Cash Management',
            key: 'inquiryCashManagement',
            linkTo: '/instructionManagement/inquiryCashManagement'
        }]
    },
    {
        name: 'Collateral Management',
        key: 'collateralManagement',
        icon: <FlagOutlined />,
        subMenus: [{
            name: 'Inquiry',
            key: 'inquiry',
            linkTo: '/collateralManagement/inquiry'
        }, {
            name: 'Instruction - COLDP',
            key: 'instructionColdp',
            linkTo: '/collateralManagement/instructionColdp'
        }, {
            name: 'Instruction - COLW',
            key: 'instructionColw',
            linkTo: '/collateralManagement/instructionColw'
        }]
    },
    {
        name: 'Member and Client Management',
        key: 'memberandclientmanagement',
        icon: <UsergroupAddOutlined />,
        subMenus: [{
            name: 'Register Member',
            key: 'registermember',
            linkTo: '/memberandclientmanagement/registermember'
        }, {
            name: 'Register Client',
            key: 'registerclient',
            linkTo: '/memberandclientmanagement/registerclient'
        }, {
            name: 'Approval',
            key: 'memberclientapproval',
            linkTo: '/memberandclientmanagement/approval'
        }]
    },
    {
        name: 'Administration',
        key: 'administration',
        icon: <SolutionOutlined />,
        subMenus: [{
            name: 'Register Contract',
            key: 'registerContract',
            linkTo: '/registercontract'
        }, {
            name: 'Edit Account',
            key: 'editAccount',
            linkTo: '/editaccount'
        }, {
            name: 'Securities Coll Mgt',
            key: 'securitiesCollMgt',
            linkTo: '/securitiescollmgt'
        }, {
            name: 'Cash Coll Mgt',
            key: 'cashCollMgt',
            linkTo: '/cashcollmgt'
        }, {
            name: 'Edit Reference Rate',
            key: 'editReferenceRate',
            linkTo: '/editreferencerate'
        }, {
            name: 'Edit Parameter',
            key: 'editParameter',
            linkTo: '/editparameter'
        }, {
            name: 'Audit Trail',
            key: 'auditTrail',
            linkTo: '/audittrail'
        }, {
            name: 'User Management',
            key: 'userManagement',
            linkTo: '/usermanagement'
        }, {
            name: 'System Parameter',
            key: 'systemParameter',
            linkTo: '/systemparameter'
        }, {
            name: 'Calendar',
            key: 'calendar',
            linkTo: '/calendar'
        }, {
            name: 'Approval',
            key: 'administrationApproval',
            linkTo: '/approval'
        }, {
            name: 'Register ATS',
            key: 'registerAts',
            linkTo: '/registerats'
        }]
    },
    {
        name: 'Reporting',
        key: 'reporting',
        icon: <FundProjectionScreenOutlined />,
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