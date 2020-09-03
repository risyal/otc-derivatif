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
import Approval from '../views/administration/Approval';
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
import ViewEditMember from '../views/member-client/ViewEditMember';
import ViewEditClient from '../views/member-client/ViewEditClient';
import ViewDeleteMember from '../views/member-client/ViewDeleteMember';
import ViewDeleteClient from '../views/member-client/ViewDeleteClient';
import ApprovalMemberClient from '../views/member-client/ApprovalMemberClient';
import EditRegisterContract from '../views/administration/EditRegisterContract';
import ApprovalTrade from '../views/trade/ApprovalTrade';
import ViewDeleteAccount from '../views/administration/editAccountStatus/ViewDeleteAccount';
import ViewEditAccount from '../views/administration/editAccountStatus/ViewEditAccount';
import ViewEditSCMgt from '../views/administration/securitiesCollMgt/ViewEditSCMgt';
import ViewDeleteSCMgt from '../views/administration/securitiesCollMgt/ViewDeleteSCMgt';
import ViewEditCCMgt from '../views/administration/cashCollMgt/ViewEditCCMgt';
import ViewDeleteCCMgt from '../views/administration/cashCollMgt/ViewDeleteCCMgt';
import ViewDeleteJibor from '../views/administration/editReferenceRate/ViewDeleteJibor';
import ViewEditJibor from '../views/administration/editReferenceRate/ViewEditJibor';
import ViewDeleteParam from '../views/administration/editParameter/ViewDeleteParam';
import ViewEditParam from '../views/administration/editParameter/ViewEditParam';
import ViewEditUser from '../views/administration/userManagement/ViewEditUser';
import ViewDeleteUser from '../views/administration/userManagement/ViewDeleteUser';
import AddUser from '../views/administration/userManagement/AddUser';
import ViewEditCalendar from '../views/administration/calendar/ViewEditCalendar';
import ViewDeleteCalendar from '../views/administration/calendar/ViewDeleteCalendar';
import DetailViewTrade from '../views/trade/DetailView';
import ViewEditRegAts from '../views/administration/registerAts/ViewEditRegAts';
import ViewDeleteRegAts from '../views/administration/registerAts/ViewDeleteRegAts';
import ViewAdd from '../views/collateral/ViewAdd';
import ViewAddColw from '../views/collateral/ViewAddColw';
import DetailCancelCOLDP from '../views/collateral/DetailCancelCOLDP';
import DetailCancelCOLW from '../views/collateral/DetailCancelCOLW';
import ViewAddSM from '../views/instruction/ViewAddSM';
import DetailCancelSM from '../views/instruction/DetailCancelSM';
import ViewAddCM from '../views/instruction/ViewAddCM';
import DetailCancelCM from '../views/instruction/DetailCancelCM';
import ClearingDetailView from '../views/clearing/ClearingDetail';
import IrsEditCurrency from '../views/administration/registerContract/IrsEditCurrency';
import IrsEditLegType from '../views/administration/registerContract/IrsEditLegType';
import IrsEffectiveDate from '../views/administration/registerContract/IrsEffectiveDate';
import IrsEditContractTerm from '../views/administration/registerContract/IrsEditContractTerm';
import IrsEditNotionalAmount from '../views/administration/registerContract/IrsEditNotionalAmount';
import IrsEditPaymentFreq from '../views/administration/registerContract/IrsEditPaymentFreq';
import IrsEditFixingDate from '../views/administration/registerContract/IrsEditFixingDate';
import IrsEditSpread from '../views/administration/registerContract/IrsEditSpread';
import IrsEditDayCountF from '../views/administration/registerContract/IrsEditDayCountF';
import IrsFloatingRatrRFreq from '../views/administration/registerContract/IrsFloatingRateRFreq';
import IrsFloatingRIndex from '../views/administration/registerContract/IrsFloatingRIndex';
import IrsBDC from '../views/administration/registerContract/IrsBDC';
import IrsEditRoundingP from '../views/administration/registerContract/IrsEditRoundingP';
import IrsEditStubPayment from '../views/administration/registerContract/IrsEditStubPayment';
import IrsEditForwardStart from '../views/administration/registerContract/IrsEditForwardStart';
import IrsEditCashPaymentC from '../views/administration/registerContract/IrsEditCashPaymentC';
import OisEditCurrency from '../views/administration/registerContract/OisEditCurrenct';
import OisEditLegType from '../views/administration/registerContract/OisEditLegType';
import OisEffectiveDate from '../views/administration/registerContract/OisEffectiveDate';
import OisEditContractTerm from '../views/administration/registerContract/OisEditContractTerm';
import OisEditNotionalAmount from '../views/administration/registerContract/OisEditNotionalAmount';
import OisEditDayCountF from '../views/administration/registerContract/OisEditDayCountF';
import OisBDC from '../views/administration/registerContract/OisBDC';
import OisEditRoundingP from '../views/administration/registerContract/OisEditRoundingP';
import OisEditForwardStart from '../views/administration/registerContract/OisEditForwardS';
import OisEditSpread from '../views/administration/registerContract/OisEditSpread';
import DndfEditCurrency from '../views/administration/registerContract/DndfEditCurrency';
import DndfEditFixingDate from '../views/administration/registerContract/DndfEditFixingDate';
import DndfTenor from '../views/administration/registerContract/DndfTenor';
import DndfEditNotionalAmount from '../views/administration/registerContract/DndfEditNotionalAmount';
import ViewDeleteJisdor from '../views/administration/editReferenceRate/ViewDeleteJisdor';
import ViewEditJisdor from '../views/administration/editReferenceRate/ViewEditJisdor';
import ViewDeleteIndonia from '../views/administration/editReferenceRate/ViewDeleteIndonia';
import ViewEditIndonia from '../views/administration/editReferenceRate/ViewEditIndonia';
import ViewDeleteSysParam from '../views/administration/systemParameter/ViewDeleteSysParam';
import ViewEditSysParam from '../views/administration/systemParameter/ViewEditSysParam';
import DetailApproval from '../views/administration/DetailApproval';
import AccDetailView from '../views/account/AccDetailView';
import ClearingDetailIRS from '../views/clearing/ClearingDetailIRS';
import ClearingDetailOIS from '../views/clearing/ClearingDetailOIS';
import ClearingDetailDNDF from '../views/clearing/ClearingDetailDNDF';

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
                    <Title level={4}>Cancel Trade</Title>
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
            <Route path="/trade/approval">
                <div className="head-content">
                    <Title level={4}>Approval</Title>
                </div>
                <ApprovalTrade />
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
                    <Title level={4}>Settlement Status</Title>
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
                    <Title level={4}>Register Contract</Title>
                </div>
                <RegisterContract />
            </Route>
            <Route path="/editaccount">
                <div className="head-content">
                    <Title level={4}>Edit Account Status</Title>
                </div>
                <EditAccount />
            </Route>
            <Route path="/securitiescollmgt">
                <div className="head-content">
                    <Title level={4}>Securities Collateral Management</Title>
                </div>
                <SecuritiesCollMgt />
            </Route>
            <Route path="/cashcollmgt">
                <div className="head-content">
                    <Title level={4}>Cash Collateral Management</Title>
                </div>
                <CashCollMgt />
            </Route>
            <Route path="/editreferencerate">
                <div className="head-content">
                    <Title level={4}>Edit Reference Rate</Title>
                </div>
                <EditReferenceRate />
            </Route>
            <Route path="/editparameter">
                <div className="head-content">
                    <Title level={4}>Time Parameter</Title>
                </div>
                <EditParameter />
            </Route>
            <Route path="/audittrail">
                <div className="head-content">
                    <Title level={4}>Audit Trail</Title>
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
                    <Title level={4}>Calendar - Market Holidays</Title>
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
            <Route path="/administration/approvaldetail"
                component={DetailApproval}>
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
            <Route exact path="/administration/ViewDeleteAccount" component={ViewDeleteAccount}>
            </Route>
            <Route exact path="/administration/ViewEditAccount" component={ViewEditAccount}>
            </Route>
            <Route exact path="/administration/ViewEditSCMgt" component={ViewEditSCMgt}>
            </Route>
            <Route exact path="/administration/ViewDeleteSCMgt" component={ViewDeleteSCMgt}>
            </Route>
            <Route exact path="/administration/ViewEditCCMgt" component={ViewEditCCMgt}>
            </Route>
            <Route exact path="/administration/ViewDeleteCCMgt" component={ViewDeleteCCMgt}>
            </Route>
            <Route exact path="/administration/ViewDeleteJibor" component={ViewDeleteJibor}>
            </Route>
            <Route exact path="/administration/ViewEditJibor" component={ViewEditJibor}>
            </Route>
            <Route exact path="/administration/ViewDeleteParam" component={ViewDeleteParam}>
            </Route>
            <Route exact path="/administration/ViewEditParam" component={ViewEditParam}>
            </Route>
            <Route exact path="/administration/ViewEditUser" component={ViewEditUser}>
            </Route>
            <Route exact path="/administration/ViewDeleteUser" component={ViewDeleteUser}>
            </Route>
            <Route path="/administration/AddUser">
                <AddUser />
            </Route>
            <Route exact path="/administration/ViewEditCalendar" component={ViewEditCalendar}>
            </Route>
            <Route exact path="/administration/ViewDeleteCalendar" component={ViewDeleteCalendar}>
            </Route>
            <Route exact path="/trade/detailView" component={DetailViewTrade}>
            </Route>
            <Route exact path="/administration/ViewEditRegAts" component={ViewEditRegAts}>
            </Route>
            <Route exact path="/administration/ViewDeleteRegAts" component={ViewDeleteRegAts}>
            </Route>
            <Route path="/collateralManagement/ViewAdd">
                <div className="head-content">
                    <Title level={4}>Add New Instruction</Title>
                </div>
                <ViewAdd />
            </Route>
            <Route path="/collateralManagement/ViewAddColw">
                <div className="head-content">
                    <Title level={4}>Add New Instruction</Title>
                </div>
                <ViewAddColw />
            </Route>
            <Route exact path="/collateralManagement/detailCancel" component={DetailCancelCOLDP}>
            </Route>
            <Route exact path="/collateralManagement/detailCancelColw" component={DetailCancelCOLW}>
            </Route>
            <Route path="/instructionManagement/ViewAddSM">
                <div className="head-content">
                    <Title level={4}>Add New Instruction</Title>
                </div>
                <ViewAddSM />
            </Route>
            <Route exact path="/instructionManagement/detailCancelSM" component={DetailCancelSM}>
            </Route>
            <Route path="/instructionManagement/ViewAddCM">
                <div className="head-content">
                    <Title level={4}>Add New Instruction</Title>
                </div>
                <ViewAddCM />
            </Route>
            <Route exact path="/instructionManagement/detailCancelCM" component={DetailCancelCM}>
            </Route>
            <Route exact path="/clearingManagement/clearingDetail" component={ClearingDetailView}>
            </Route>
            <Route path="/administration/irsEditCurrency">
                <IrsEditCurrency />
            </Route>
            <Route path="/administration/irsEditLegType">
                <IrsEditLegType />
            </Route>
            <Route path="/administration/irsEffectiveDate">
                <IrsEffectiveDate />
            </Route>
            <Route path="/administration/irsEditContractTerm">
                <IrsEditContractTerm />
            </Route>
            <Route path="/administration/irsEditNotionalAmount">
                <IrsEditNotionalAmount />
            </Route>
            <Route path="/administration/irsEditPaymentFreq">
                <IrsEditPaymentFreq />
            </Route>
            <Route path="/administration/irsEditFixingDate">
                <IrsEditFixingDate />
            </Route>
            <Route path="/administration/irsEditSpread">
                <IrsEditSpread />
            </Route>
            <Route path="/administration/irsEditDayCountF">
                <IrsEditDayCountF />
            </Route>
            <Route path="/administration/irsFloatingRRFreq">
                <IrsFloatingRatrRFreq />
            </Route>
            <Route path="/administration/irsFloatingRIndex">
                <IrsFloatingRIndex />
            </Route>
            <Route path="/administration/irsBDC">
                <IrsBDC />
            </Route>
            <Route path="/administration/irsRoundingPayment">
                <IrsEditRoundingP />
            </Route>
            <Route path="/administration/irsEditStubP">
                <IrsEditStubPayment />
            </Route>
            <Route path="/administration/irsforwardS">
                <IrsEditForwardStart />
            </Route>
            <Route path="/administration/irsEditCashPC">
                <IrsEditCashPaymentC />
            </Route>
            <Route path="/administration/oisEditCurrency">
                <OisEditCurrency />
            </Route>
            <Route path="/administration/oisEditLegType">
                <OisEditLegType />
            </Route>
            <Route path="/administration/oisEffectiveDate">
                <OisEffectiveDate />
            </Route>
            <Route path="/administration/oisEditContractTerm">
                <OisEditContractTerm />
            </Route>
            <Route path="/administration/oisEditNotionalAmount">
                <OisEditNotionalAmount />
            </Route>
            <Route path="/administration/oisEditDayCountF">
                <OisEditDayCountF />
            </Route>
            <Route path="/administration/oisBDC">
                <OisBDC />
            </Route>
            <Route path="/administration/oisRoundingPayment">
                <OisEditRoundingP />
            </Route>
            <Route path="/administration/oisforwardS">
                <OisEditForwardStart />
            </Route>
            <Route path="/administration/oisEditSpread">
                <OisEditSpread />
            </Route>
            <Route path="/administration/dndfEditCurrency">
                <DndfEditCurrency />
            </Route>
            <Route path="/administration/dndfEditFixingDate">
                <DndfEditFixingDate />
            </Route>
            <Route path="/administration/dndfTenor">
                <DndfTenor />
            </Route>
            <Route path="/administration/dndfEditNotionalAmount">
                <DndfEditNotionalAmount />
            </Route>
            <Route exact path="/administration/ViewDeleteJisdor" component={ViewDeleteJisdor}>
            </Route>
            <Route exact path="/administration/ViewEditJisdor" component={ViewEditJisdor}>
            </Route>
            <Route exact path="/administration/ViewDeleteIndonia" component={ViewDeleteIndonia}>
            </Route>
            <Route exact path="/administration/ViewEditIndonia" component={ViewEditIndonia}>
            </Route>
            <Route exact path="/administration/ViewDeleteSysParam" component={ViewDeleteSysParam}>
            </Route>
            <Route exact path="/administration/ViewEditSysParam" component={ViewEditSysParam}>
            </Route>
            <Route exact path="/accountManagement/accDetailView" component={AccDetailView}>
            </Route>
            <Route path="/clearingManagement/clearingDetailIrs">
                <ClearingDetailIRS />
            </Route>
            <Route path="/clearingManagement/clearingDetailOis">
                <ClearingDetailOIS />
            </Route>
            <Route path="/clearingManagement/clearingDetailDndf">
                <ClearingDetailDNDF />
            </Route>
        </div>
    )
}

export default RoutePage;
