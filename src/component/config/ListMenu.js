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

import MonitoringTrade from '../views/trade/MonitoringTrade';
import TradeSummary from '../views/trade/TradeSummary';
import ClearingPostition from '../views/clearing/ClearingPostition';
import InquiryPosition from '../views/clearing/InquiryPosition';
import SettlementPosition from '../views/clearing/SettlementPosition';
import CashFlowIrs from '../views/clearing/CashFlowIrs';
import ObligationAccomplishment from '../views/reporting/ObligationAccomplishment';
import DHKLevelMember from '../views/reporting/DHKLevelMember';
import DailyTransactionReport from '../views/reporting/DailyTransactionReport';
import NovationReport from '../views/reporting/NovationReport';
import MovementBalance from '../views/reporting/MovementBalance';
import DefaultFundReport from '../views/reporting/DefaultFundReport';
import FeeReport from '../views/reporting/FeeReport';
import RegisterClient from '../views/member-client/RegisterClient';
import RegisterMember from '../views/member-client/RegisterMember';
import AccountDetail from '../views/account/AccountDetail';
import BlockCollateralMember from '../views/account/BlockCollateralMember';
import BlockCollateralClient from '../views/account/BlockCollateralClient';
import DefaultFund from '../views/account/DefaultFund';
import RegisterBeneficiaries from '../views/account/RegisterBeneficiaries';
import InquiryBeneficiaries from '../views/account/InquiryBeneficiaries';
import RegisterContract from '../views/administration/registerContract/RegisterContract';
import EditAccount from '../views/administration/editAccountStatus/EditAccount';
import SecuritiesCollMgt from '../views/administration/securitiesCollMgt/SecuritiesCollMgt';
import CashCollMgt from '../views/administration/cashCollMgt/CashCollMgt';
import EditReferenceRate from '../views/administration/editReferenceRate/EditReferenceRate';
import EditParameter from '../views/administration/editParameter/EditParameter';
import AuditTrail from '../views/administration/AuditTrail';
import UserManagement from '../views/administration/userManagement/UserManagement';
import SystemParameter from '../views/administration/systemParameter/SystemParameter';
import Calendar from '../views/administration/calendar/Calendar';
import ApprovalAdministration from '../views/administration/Approval';
import RegisterAts from '../views/administration/registerAts/RegisterAts';
import SettlementInstruction from '../views/settlement/SettlementInstruction';
import SettlementJobExecution from '../views/settlement/SettlementJobExecution';
import SettlementMonitoring from '../views/settlement/SettlementMonitoring';
import SecurityManagement from '../views/instruction/SecurityManagement';
import InquirySecManagement from '../views/instruction/InquirySecManagement';
import CashInquiryManagement from '../views/instruction/CashInquiryManagement';
import InquiryCashManagement from '../views/instruction/InquiryCashManagement';
import Inquiry from '../views/collateral/Inquiry';
import InstructionCOLDP from '../views/collateral/InstructionCOLDP';
import InstructionCOLW from '../views/collateral/InstructionCOLW';
import TradeConfirmation from '../views/trade/TradeConfirmation';
import SettlementStatus from '../views/settlement/SettlementStatus';
import ApprovalCollateral from '../views/collateral/ApprovalCollateral';
import DHKLevelClient from '../views/reporting/DHKLevelClient';
import RegulatorReport from '../views/reporting/RegulatorReport';
import ClearingSummary from '../views/reporting/ClearingSummary';
import ClientAccomplishment from '../views/reporting/ClientAccomplishment';
import MarginReport from '../views/reporting/MarginReport';
import DefaultReport from '../views/reporting/DefaultReport';
import NewTrade from '../views/trade/NewTrade';
import InquiryTrade from '../views/trade/InquiryTrade';
import CancelTrade from '../views/trade/CancelTrade';
import ApprovalMemberClient from '../views/member-client/ApprovalMemberClient';
import ApprovalTrade from '../views/trade/ApprovalTrade';
import ApprovalAccount from '../views/account/ApprovalAccount';
import ApprovalInstruction from '../views/instruction/ApprovalInstruction';


const Menu = [
    {
        name: 'Trade Management',
        key: 'trademanagement',
        icon: <FundOutlined />,
        subMenus: [{
            name: 'Input Trade',
            key: 'newtrade',
            linkTo: '/trade/new-trade',
            component: NewTrade,
        }, {
            name: 'Inquiry Input Trade',
            key: 'inquerytrade',
            linkTo: '/trade/inquery-trade',
            component: InquiryTrade,
        }, {
            name: 'Trade Confirmation',
            key: 'tradeConfirmation',
            linkTo: '/trade/trade-confirmation',
            component: TradeConfirmation,
        }, {
            name: 'Cancel Trade',
            key: 'canceltrade',
            linkTo: '/trade/cancel-trade',
            component: CancelTrade,
        }, {
            name: 'Monitoring Trade',
            key: 'monitoringtrade',
            linkTo: '/trade/monitoring-trade',
            component: MonitoringTrade,
        }, {
            name: 'Trade Summary',
            key: 'tradesummary',
            linkTo: '/trade/trade-summary',
            component: TradeSummary,
        }, {
            name: 'Approval',
            key: 'tradeApproval',
            linkTo: '/trade/approval',
            component: ApprovalTrade,
        }]
    },
    {
        name: 'Clearing Management',
        key: 'clearingmanagement',
        icon: <DollarCircleOutlined />,
        subMenus: [{
            name: 'Clearing Position',
            key: 'clearingPosition',
            linkTo: '/clearingManagement/clearingposition',
            component: ClearingPostition,
        }, {
            name: 'Inquiry Position',
            key: 'inquiryPostition',
            linkTo: '/clearingManagement/inquiryPostition',
            component: InquiryPosition,
        }, {
            name: 'Settlement Position',
            key: 'settlementPostion',
            linkTo: '/clearingManagement/settlementPostion',
            component: SettlementPosition,
        }, {
            name: 'Settlement Status',
            key: 'statusSettlement',
            linkTo: '/clearingManagement/statusSettlement',
            component: SettlementStatus,
        }, {
            name: 'Cash Flow IRS Calculation',
            key: 'cashFlowIrs',
            linkTo: '/clearingManagement/cashFlowIrs',
            component: CashFlowIrs,
        }]
    },
    {
        name: 'Account Management',
        key: 'accountmanagement',
        icon: <UserOutlined />,
        subMenus: [{
            name: 'Account Detail Information',
            key: 'detailinformation',
            linkTo: '/accountManagement/detailinformation',
            component: AccountDetail,
        }, {
            name: 'Detail Blocked Collateral - Member',
            key: 'detailMember',
            linkTo: '/accountManagement/collateralMember',
            component: BlockCollateralMember,
        }, {
            name: 'Detail Blocked Collateral - Client',
            key: 'detailClient',
            linkTo: '/accountManagement/collateralClient',
            component: BlockCollateralClient,
        }, {
            name: 'Detail Default Fund',
            key: 'detailFund',
            linkTo: '/accountManagement/detailFund',
            component: DefaultFund,
        }, {
            name: 'Register Beneficiaries',
            key: 'registerBeneficiaries',
            linkTo: '/accountManagement/registerBeneficiaries',
            component: RegisterBeneficiaries,
        }, {
            name: 'Inquiry Beneficiaries',
            key: 'inquiryBeneficiaries',
            linkTo: '/accountManagement/inquiryBeneficiaries',
            component: InquiryBeneficiaries,
        }, {
            name: 'Approval',
            key: 'accountApproval',
            linkTo: '/accountManagement/approval',
            component: ApprovalAccount,
        }]
    },
    {
        name: 'Settlement Management',
        key: 'settlementmanagement',
        icon: <FormOutlined />,
        subMenus: [{
            name: 'Inquiry Settlement Instruction',
            key: 'inquirySettlement',
            linkTo: '/settlement/inquirySettlement',
            component: SettlementInstruction,
        }, {
            name: 'Settlement Job Execution',
            key: 'settlementExecution',
            linkTo: '/settlement/settlementExecution',
            component: SettlementJobExecution,
        }, {
            name: 'Monitoring Clearing Pos vs Balance',
            key: 'monitoringClearing',
            linkTo: '/settlement/monitoringClearing',
            component: SettlementMonitoring,
        }]
    },
    {
        name: 'Instruction Management',
        key: 'instructionmanagement',
        icon: <FlagOutlined />,
        subMenus: [{
            name: 'Security Management',
            key: 'securityManagement',
            linkTo: '/instructionManagement/securityManagement',
            component: SecurityManagement,
        }, {
            name: 'Inquiry Security Management',
            key: 'inquirySecManagement',
            linkTo: '/instructionManagement/inquirySecManagement',
            component: InquirySecManagement,
        }, {
            name: 'Cash Management',
            key: 'cashManagement',
            linkTo: '/instructionManagement/cashManagement',
            component: CashInquiryManagement,
        }, {
            name: 'Inquiry Cash Management',
            key: 'inquiryCashManagement',
            linkTo: '/instructionManagement/inquiryCashManagement',
            component: InquiryCashManagement,
        }, {
            name: 'Approval',
            key: 'instructionApproval',
            linkTo: '/instructionManagement/approval',
            component: ApprovalInstruction,
        }]
    },
    {
        name: 'Collateral Management',
        key: 'collateralManagement',
        icon: <FlagOutlined />,
        subMenus: [{
            name: 'Inquiry',
            key: 'inquiry',
            linkTo: '/collateralManagement/inquiry',
            component: Inquiry,
        }, {
            name: 'Instruction - COLDP',
            key: 'instructionColdp',
            linkTo: '/collateralManagement/instructionColdp',
            component: InstructionCOLDP,
        }, {
            name: 'Instruction - COLW',
            key: 'instructionColw',
            linkTo: '/collateralManagement/instructionColw',
            component: InstructionCOLW,
        }, {
            name: 'Approval',
            key: 'collateralApproval',
            linkTo: '/collateralManagement/approval',
            component: ApprovalCollateral,
        }]
    },
    {
        name: 'Member and Client Management',
        key: 'memberandclientmanagement',
        icon: <UsergroupAddOutlined />,
        subMenus: [{
            name: 'Register Member',
            key: 'registermember',
            linkTo: '/memberandclientmanagement/registermember',
            component: RegisterMember,
        }, {
            name: 'Register Client',
            key: 'registerclient',
            linkTo: '/memberandclientmanagement/registerclient',
            component: RegisterClient,
        }, {
            name: 'Approval',
            key: 'memberclientapproval',
            linkTo: '/memberandclientmanagement/approval',
            component: ApprovalMemberClient,
        }]
    },
    {
        name: 'Administration',
        key: 'administration',
        icon: <SolutionOutlined />,
        subMenus: [{
            name: 'Register Contract',
            key: 'registerContract',
            linkTo: '/administration/registercontract',
            component: RegisterContract,
        }, {
            name: 'Edit Account Status',
            key: 'editAccount',
            linkTo: '/administration/editaccount',
            component: EditAccount,
        }, {
            name: 'Securities Collateral Management',
            key: 'securitiesCollMgt',
            linkTo: '/administration/securitiescollmgt',
            component: SecuritiesCollMgt,
        }, {
            name: 'Cash Collateral Management',
            key: 'cashCollMgt',
            linkTo: '/administration/cashcollmgt',
            component: CashCollMgt,
        }, {
            name: 'Edit Reference Rate',
            key: 'editReferenceRate',
            linkTo: '/administration/editreferencerate',
            component: EditReferenceRate,
        }, {
            name: 'Edit Time Parameter',
            key: 'editParameter',
            linkTo: '/administration/editparameter',
            component: EditParameter,
        }, {
            name: 'Audit Trail',
            key: 'auditTrail',
            linkTo: '/administration/audittrail',
            component: AuditTrail,
        }, {
            name: 'User Management',
            key: 'userManagement',
            linkTo: '/administration/usermanagement',
            component: UserManagement,
        }, {
            name: 'System Parameter',
            key: 'systemParameter',
            linkTo: '/administration/systemparameter',
            component: SystemParameter,
        }, {
            name: 'Calendar',
            key: 'calendar',
            linkTo: '/administration/calendar',
            component: Calendar,
        }, {
            name: 'Register ATS',
            key: 'registerAts',
            linkTo: '/administration/registerats',
            component: RegisterAts,
        }, {
            name: 'Approval',
            key: 'administrationApproval',
            linkTo: '/administration/approval',
            component: ApprovalAdministration,
        }]
    },
    {
        name: 'Reporting',
        key: 'reporting',
        icon: <FundProjectionScreenOutlined />,
        subMenus: [{
            name: 'DHK Level Member',
            key: 'dhkmember',
            linkTo: '/reporting/dhkmember',
            component: DHKLevelMember,
        }, {
            name: 'DHK Level Client',
            key: 'dhkclient',
            linkTo: '/reporting/dhkclient',
            component: DHKLevelClient,
        }, {
            name: 'OAR (Obligation Accomplishment Report)',
            key: 'obligationaccomplishment',
            linkTo: '/reporting/obligationaccomplishment',
            component: ObligationAccomplishment,
        }, {
            name: 'Regulator Report',
            key: 'regulatorreport',
            linkTo: '/reporting/regulatorreport',
            component: RegulatorReport,
        }, {
            name: 'Novation Report',
            key: 'novationreport',
            linkTo: '/reporting/novationreport',
            component: NovationReport,
        }, {
            name: 'Movement Balance Report',
            key: 'movementbalance',
            linkTo: '/reporting/movementbalance',
            component: MovementBalance,
        }, {
            name: 'Default Fund Report',
            key: 'fundreport',
            linkTo: '/reporting/fundreport',
            component: DefaultFundReport,
        },
        {
            name: 'Fee Report',
            key: 'feereport',
            linkTo: '/reporting/feereport',
            component: FeeReport,
        },
        // {
        //     name: 'Report Bank Indonesia',
        //     key: 'reportbankid',
        //     linkTo: '/reportbankid'
        // }, 
        {
            name: 'Margin Report',
            key: 'marginreport',
            linkTo: '/reporting/marginreport',
            component: MarginReport,
        }, {
            name: 'Default Report',
            key: 'defaultreport',
            linkTo: '/reporting/defaultreport',
            component: DefaultReport,
        }, {
            name: 'Client Accomplishment Report',
            key: 'clientaccomplishment',
            linkTo: '/reporting/clientaccomplishment',
            component: ClientAccomplishment,
        }, {
            name: 'Daily Transaction Report',
            key: 'dailytransaction',
            linkTo: '/reporting/dailytransaction',
            component: DailyTransactionReport,
        }, {
            name: 'Clearing Summary',
            key: 'clearingsummary',
            linkTo: '/reporting/clearingsummary',
            component: ClearingSummary,
        }]
    },
    {
        name: 'Rekonsiliasi Rekening',
        key: 'rekonsiliasirekening',
        icon: <FileDoneOutlined />,
        linkTo: '/rekonsiliasi',
    },
]

export default Menu;