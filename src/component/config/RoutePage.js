import React from 'react'
import {
    Route
} from "react-router-dom";

import ListMenu from '../config/ListMenu';
import OtherLink from '../config/OtherLink';
import { baseUrl } from './Environtment';

const rootWithNavLink = baseUrl;

function RoutePage() {
    const routeComp = ListMenu.map(
        menuItem =>
            menuItem.subMenus !== undefined ?
                menuItem.subMenus.map(subMenu =>
                    <Route
                        exact
                        path={rootWithNavLink + subMenu.linkTo}
                        component={subMenu.component} key={subMenu.key}>
                    </Route>
                )
                :
                <Route
                    exact
                    path={rootWithNavLink + menuItem.linkTo}
                    component={menuItem.component} key={menuItem.key}>
                </Route>
    )
    const routeOther = OtherLink.map(other =>
        <Route
            exact
            path={other.linkTo}
            component={other.component} key={other.key}>
        </Route>
    )
    return (
        <div>
            {routeComp}
            {routeOther}
            {/* 
            <Route path="/otcder/newtrade">
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
            <Route path="/accountManagement/approval">
                <div className="head-content">
                    <Title level={4}>Approval</Title>
                </div>
                <ApprovalAccount />
            </Route>
            <Route path="/accountManagement/approvalDetail"
                component={ApprovalDetail}>
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
                    <Title level={4}>Inquiry Security Management</Title>
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
            <Route path="/instructionManagement/approval">
                <div className="head-content">
                    <Title level={4}>Approval</Title>
                </div>
                <ApprovalInstruction />
            </Route>
            <Route path="/instructionManagement/approvalInstructionDetail"
                component={ApprovalInstructionDetail}>
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
            <Route path="/collateralManagement/approval">
                <div className="head-content">
                    <Title level={4}>Approval</Title>
                </div>
                <ApprovalCollateral />
            </Route>
            <Route path="/collateralManagement/approvalCollateralDetail"
                component={ApprovalCollateralDetail}>
            </Route>
            <Route path="/login">
                <div className="head-content">
                    <h1>Header Content</h1>
                </div>
                <LoginPage />
            </Route>
            <Route path="/obligationaccomplishment">
                <div className="head-content">
                    <Title level={4}>Obligation Accomplishment Report</Title>
                </div>
                <ObligationAccomplishment />
            </Route>
            <Route path="/dailytransaction">
                <div className="head-content">
                    <Title level={4}>Daily Transaction Report</Title>
                </div>
                <DailyTransactionReport />
            </Route>
            <Route path="/regulatorreport">
                <div className="head-content">
                    <Title level={4}>Regulator Report</Title>
                </div>
                <RegulatorReport />
            </Route>
            <Route path="/novationreport">
                <div className="head-content">
                    <Title level={4}>Novation Report</Title>
                </div>
                <NovationReport />
            </Route>
            <Route path="/movementbalance">
                <div className="head-content">
                    <Title level={4}>Movement Balance Report</Title>
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
            <Route path="/marginreport">
                <div className="head-content">
                    <Title level={4}>Margin Report</Title>
                </div>
                <MarginReport />
            </Route>
            <Route path="/defaultreport">
                <div className="head-content">
                    <Title level={4}>Default Report</Title>
                </div>
                <DefaultReport />
            </Route>
            <Route path="/clientaccomplishment">
                <div className="head-content">
                    <Title level={4}>Client Accomplishment Report</Title>
                </div>
                <ClientAccomplishment />
            </Route>
            <Route path="/clearingsummary">
                <div className="head-content">
                    <Title level={4}>Clearing Summary Report</Title>
                </div>
                <ClearingSummary />
            </Route>
            <Route path="/dhkmember">
                <div className="head-content">
                    <Title level={4}>DHK Level Member</Title>
                </div>
                <DHKLevelMember />
            </Route>
            <Route path="/dhkclient">
                <div className="head-content">
                    <Title level={4}>DHK Level Client</Title>
                </div>
                <DHKLevelClient />
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
            </Route> */}
        </div>
    )
}

export default RoutePage;
