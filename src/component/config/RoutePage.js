import React from 'react'
import { Typography } from 'antd';
import LoginPage from '../views/Login';
import NewTradePage from '../views/trade/NewTrade';
import InquiryTradePage from '../views/trade/InquiryTrade';
import CancelTradePage from '../views/trade/CancelTrade';
import {
    Route
} from "react-router-dom";
import MonitoringTrade from '../views/trade/MonitoringTrade';
import TradeSummary from '../views/trade/TradeSummary';
import ClearingPostition from '../views/clearing/ClearingPostition';
import InquiryPosition from '../views/clearing/InquiryPosition';
import SettlementPosition from '../views/clearing/SettlementPosition';
import CashFlowIrs from '../views/clearing/CashFlowIrs';
import ObligationAccomplishment from '../views/reporting/ObligationAccomplishment';
import DHKLevel from '../views/reporting/DHKLevel';
import DailyTransactionReport from '../views/reporting/DailyTransactionReport';
import NovationReport from '../views/reporting/NovationReport';
import MovementBalance from '../views/reporting/MovementBalance';
import DefaultFundReport from '../views/reporting/DefaultFundReport';
import ReportBI from '../views/reporting/ReportBI';
import FeeReport from '../views/reporting/FeeReport';
import RegisterClient from '../views/member-client/RegisterClient';
import RegisterMember from '../views/member-client/RegisterMember';
import AccountDetail from '../views/account/AccountDetail';
import BlockCollateralMember from '../views/account/BlockCollateralMember';
import BlockCollateralClient from '../views/account/BlockCollateralClient';
import DefaultFund from '../views/account/DefaultFund';
import RegisterBeneficiaries from '../views/account/RegisterBeneficiaries';
import InquiryBeneficiaries from '../views/account/InquiryBeneficiaries';
import RegisterContract from '../views/administration/RegisterContract';
import EditAccount from '../views/administration/EditAccount';
import SecuritiesCollMgt from '../views/administration/SecuritiesCollMgt';
import CashCollMgt from '../views/administration/CashCollMgt';
import EditReferenceRate from '../views/administration/EditReferenceRate';
import EditParameter from '../views/administration/EditParameter';
import AuditTrail from '../views/administration/AuditTrail';
import UserManagement from '../views/administration/UserManagement';
import SystemParameter from '../views/administration/SystemParameter';
import Calendar from '../views/administration/Calendar';
import Approval from '../views/administration/Approval';
import RegisterAts from '../views/administration/RegisterAts';
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
import ViewEditMember from '../views/member-client/ViewEditMember';
import ViewEditClient from '../views/member-client/ViewEditClient';
import ViewDeleteMember from '../views/member-client/ViewDeleteMember';
import ViewDeleteClient from '../views/member-client/ViewDeleteClient';
import ApprovalMemberClient from '../views/member-client/ApprovalMemberClient';
import EditRegisterContract from '../views/administration/EditRegisterContract';

function RoutePage() {
    const { Title } = Typography;

    return (
        <div>
            <Route path="/inquerytrade">
                <div className="head-content">
                    <Title level={4}>Inquiry Input Trade</Title>
                </div>
                <InquiryTradePage />
            </Route>
            <Route path="/newtrade">
                <div className="head-content">
                    <Title level={4}>Input Trade</Title>
                </div>
                <NewTradePage />
            </Route>
            <Route path="/canceltrade">
                <div className="head-content">
                    <Title level={4}>Cancel Trade Input Trade</Title>
                </div>
                <CancelTradePage />
            </Route>
            <Route path="/monitoringtrade">
                <div className="head-content">
                    <Title level={4}>Monitoring Trade</Title>
                </div>
                <MonitoringTrade />
            </Route>
            <Route path="/tradesummary">
                <div className="head-content">
                    <Title level={4}>Trade Summary</Title>
                </div>
                <TradeSummary />
            </Route>
            <Route path="/tradeConfirmation">
                <div className="head-content">
                    <Title level={4}>Trade Confirmation</Title>
                </div>
                <TradeConfirmation />
            </Route>
            <Route path="/clearingManagement/clearingPosition">
                <div className="head-content">
                    <Title level={4}>Clearing Position</Title>
                </div>
                <ClearingPostition />
            </Route>
            <Route path="/clearingManagement/inquiryPostition">
                <div className="head-content">
                    <Title level={4}>Inquiry Position</Title>
                </div>
                <InquiryPosition />
            </Route>
            <Route path="/clearingManagement/statusSettlement">
                <div className="head-content">
                    <Title level={4}>Status Settlement</Title>
                </div>
                <SettlementStatus />
            </Route>
            <Route path="/clearingManagement/settlementPostion">
                <div className="head-content">
                    <Title level={4}>Settlement Position</Title>
                </div>
                <SettlementPosition />
            </Route>
            <Route path="/clearingManagement/cashFlowIrs">
                <div className="head-content">
                    <Title level={4}>Cash Flow IRS Calculation</Title>
                </div>
                <CashFlowIrs />
            </Route>
            <Route path="/accountManagement/detailinformation">
                <div className="head-content">
                    <Title level={4}>Account Detail Information</Title>
                </div>
                <AccountDetail />
            </Route>
            <Route path="/accountManagement/collateralMember">
                <div className="head-content">
                    <Title level={4}>Detail Blocked Collateral - Member</Title>
                </div>
                <BlockCollateralMember />
            </Route>
            <Route path="/accountManagement/collateralClient">
                <div className="head-content">
                    <Title level={4}>Detail Blocked Collateral - Client</Title>
                </div>
                <BlockCollateralClient />
            </Route>
            <Route path="/accountManagement/detailFund">
                <div className="head-content">
                    <Title level={4}>Detail Default Fund</Title>
                </div>
                <DefaultFund />
            </Route>
            <Route path="/accountManagement/registerBeneficiaries">
                <div className="head-content">
                    <Title level={4}>Register Beneficiaries</Title>
                </div>
                <RegisterBeneficiaries />
            </Route>
            <Route path="/accountManagement/inquiryBeneficiaries">
                <div className="head-content">
                    <Title level={4}>Inquiry Beneficiaries</Title>
                </div>
                <InquiryBeneficiaries />
            </Route>
            <Route path="/settlement/inquirySettlement">
                <div className="head-content">
                    <Title level={4}>Inquiry Settlement Instruction</Title>
                </div>
                <SettlementInstruction />
            </Route>
            <Route path="/settlement/settlementExecution">
                <div className="head-content">
                    <Title level={4}>Settlement Job Execution</Title>
                </div>
                <SettlementJobExecution />
            </Route>
            <Route path="/settlement/monitoringClearing">
                <div className="head-content">
                    <Title level={4}>Monitoring Clearing Pos vs Balance</Title>
                </div>
                <SettlementMonitoring />
            </Route>
            <Route path="/instructionManagement/securityManagement">
                <div className="head-content">
                    <Title level={4}>Security Management (Instruction, Request for cancel)</Title>
                </div>
                <SecurityManagement />
            </Route>
            <Route path="/instructionManagement/inquirySecManagement">
                <div className="head-content">
                    <Title level={4}>Inquiry Sec Management</Title>
                </div>
                <InquirySecManagement />
            </Route>
            <Route path="/instructionManagement/cashManagement">
                <div className="head-content">
                    <Title level={4}>Cash Management (Instruction, Request for cancel)</Title>
                </div>
                <CashInquiryManagement />
            </Route>
            <Route path="/instructionManagement/inquiryCashManagement">
                <div className="head-content">
                    <Title level={4}>Inquiry Cash Management</Title>
                </div>
                <InquiryCashManagement />
            </Route>
            <Route path="/collateralManagement/inquiry">
                <div className="head-content">
                    <Title level={4}>Inquiry</Title>
                </div>
                <Inquiry />
            </Route>
            <Route path="/collateralManagement/instructionColdp">
                <div className="head-content">
                    <Title level={4}>Instruction - COLDP (Create, Check, Accept, Request for cancel)</Title>
                </div>
                <InstructionCOLDP />
            </Route>
            <Route path="/collateralManagement/instructionColw">
                <div className="head-content">
                    <Title level={4}>Instruction - COLW (Create, Check, Accept, Request for cancel)</Title>
                </div>
                <InstructionCOLW />
            </Route>
            <Route path="/login">
                <div className="head-content">
                    <h1>Header Content</h1>
                </div>
                <LoginPage />
            </Route>
            <Route path="/obligationaccomplishment">
                <div className="head-content">
                    <Title level={4}>Obligation Accomplishment</Title>
                </div>
                <ObligationAccomplishment />
            </Route>
            <Route path="/dailytransaction">
                <div className="head-content">
                    <Title level={4}>Daily Transaction Report</Title>
                </div>
                <DailyTransactionReport />
            </Route>
            <Route path="/novationreport">
                <div className="head-content">
                    <Title level={4}>Novation Report</Title>
                </div>
                <NovationReport />
            </Route>
            <Route path="/movementbalance">
                <div className="head-content">
                    <Title level={4}>Movement Balance</Title>
                </div>
                <MovementBalance />
            </Route>
            <Route path="/fundreport">
                <div className="head-content">
                    <Title level={4}>Default Fund Report</Title>
                </div>
                <DefaultFundReport />
            </Route>
            <Route path="/reportbankid">
                <div className="head-content">
                    <Title level={4}>Report Bank Indonesia</Title>
                </div>
                <ReportBI />
            </Route>
            <Route path="/feereport">
                <div className="head-content">
                    <Title level={4}>Fee Report</Title>
                </div>
                <FeeReport />
            </Route>
            <Route path="/dhkmemberclient">
                <div className="head-content">
                    <Title level={4}>DHK level member dan client</Title>
                </div>
                <DHKLevel />
            </Route>
            <Route path="/memberandclientmanagement/registerclient">
                <div className="head-content">
                    <Title level={4}>Register Client</Title>
                </div>
                <RegisterClient />
            </Route>
            <Route path="/memberandclientmanagement/registermember">
                <div className="head-content">
                    <Title level={4}>Register Member</Title>
                </div>
                <RegisterMember />
            </Route>
            <Route path="/memberandclientmanagement/approval">
                <div className="head-content">
                    <Title level={4}>Approval</Title>
                </div>
                <ApprovalMemberClient />
            </Route>
            <Route path="/registercontract">
                <div className="head-content">
                    <Title level={4}>Register Contract (KPEI)</Title>
                </div>
                <RegisterContract />
            </Route>
            <Route path="/editaccount">
                <div className="head-content">
                    <Title level={4}>Edit Account (Status)</Title>
                </div>
                <EditAccount />
            </Route>
            <Route path="/securitiescollmgt">
                <div className="head-content">
                    <Title level={4}>Securities Coll Management (Register Inst, Eligibility, Haircut)</Title>
                </div>
                <SecuritiesCollMgt />
            </Route>
            <Route path="/cashcollmgt">
                <div className="head-content">
                    <Title level={4}>Cash Coll Management (Register Mata Uang, Eligibility, Haircut)</Title>
                </div>
                <CashCollMgt />
            </Route>
            <Route path="/editreferencerate">
                <div className="head-content">
                    <Title level={4}>Edit Reference Rate (JIBOR, JISDOR, INDONIA, LIBOR)</Title>
                </div>
                <EditReferenceRate />
            </Route>
            <Route path="/editparameter">
                <div className="head-content">
                    <Title level={4}>Edit Parameter</Title>
                </div>
                <EditParameter />
            </Route>
            <Route path="/audittrail">
                <div className="head-content">
                    <Title level={4}>Audit trail</Title>
                </div>
                <AuditTrail />
            </Route>
            <Route path="/usermanagement">
                <div className="head-content">
                    <Title level={4}>User Management</Title>
                </div>
                <UserManagement />
            </Route>
            <Route path="/systemparameter">
                <div className="head-content">
                    <Title level={4}>System Parameter</Title>
                </div>
                <SystemParameter />
            </Route>
            <Route path="/calendar">
                <div className="head-content">
                    <Title level={4}>Calender (Hari Libur/BI Calender)</Title>
                </div>
                <Calendar />
            </Route>
            <Route path="/approval">
                <div className="head-content">
                    <Title level={4}>Approval</Title>
                </div>
                <Approval />
            </Route>
            <Route path="/registerats">
                <div className="head-content">
                    <Title level={4}>Register ATS</Title>
                </div>
                <RegisterAts />
            </Route>
            <Route exact path="/registerClient/viewMember" component={ViewEditMember}>
            </Route>
            <Route exact path="/registerClient/viewClient" component={ViewEditClient}>
            </Route>
            <Route exact path="/registerClient/ViewDeleteMember" component={ViewDeleteMember}>
            </Route>
            <Route exact path="/registerClient/ViewDeleteClient" component={ViewDeleteClient}>
            </Route>
            <Route path="/editRegisterContract" component={EditRegisterContract}>
            </Route>
        </div>
    )
}

export default RoutePage;
