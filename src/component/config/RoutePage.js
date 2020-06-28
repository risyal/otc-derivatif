import React from 'react'
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

function RoutePage() {
    return (
        <div>
            <Route path="/inquerytrade">
                <div className="head-content">
                    Inquiry Input Trade
                </div>
                <InquiryTradePage />
            </Route>
            <Route path="/newtrade">
                <div className="head-content">
                    Input Trade
                </div>
                <NewTradePage />
            </Route>
            <Route path="/canceltrade">
                <div className="head-content">
                    Cancel Trade Input Trade
                </div>
                <CancelTradePage />
            </Route>
            <Route path="/monitoringtrade">
                <div className="head-content">
                    Monitoring Trade
                </div>
                <MonitoringTrade />
            </Route>
            <Route path="/tradesummary">
                <div className="head-content">
                    Trade summary
                </div>
                <TradeSummary />
            </Route>
            <Route path="/clearingManagement/clearingPosition">
                <div className="head-content">
                    Clearing Position
                </div>
                <ClearingPostition />
            </Route>
            <Route path="/clearingManagement/inquiryPostition">
                <div className="head-content">
                    Inquiry Position
                </div>
                <InquiryPosition />
            </Route>
            <Route path="/clearingManagement/settlementPostion">
                <div className="head-content">
                    Settlement Position
                </div>
                <SettlementPosition />
            </Route>
            <Route path="/clearingManagement/cashFlowIrs">
                <div className="head-content">
                    Cash Flow IRS Calculation
                </div>
                <CashFlowIrs />
            </Route>
            <Route path="/accountManagement/detailinformation">
                <div className="head-content">
                    Account Detail Information
                </div>
                <AccountDetail />
            </Route>
            <Route path="/accountManagement/collateralMember">
                <div className="head-content">
                    Detail Blocked Collateral - Member
                </div>
                <BlockCollateralMember />
            </Route>
            <Route path="/accountManagement/collateralClient">
                <div className="head-content">
                    Detail Blocked Collateral - Client
                </div>
                <BlockCollateralClient />
            </Route>
            <Route path="/accountManagement/detailFund">
                <div className="head-content">
                    Detail Default Fund
                </div>
                <DefaultFund />
            </Route>
            <Route path="/accountManagement/registerBeneficiaries">
                <div className="head-content">
                    Register Beneficiaries
                </div>
                <RegisterBeneficiaries />
            </Route>
            <Route path="/accountManagement/inquiryBeneficiaries">
                <div className="head-content">
                    Inquiry Beneficiaries
                </div>
                <InquiryBeneficiaries />
            </Route>
            <Route path="/settlement/inquirySettlement">
                <div className="head-content">
                    Inquiry Settlement Instruction
                </div>
                <SettlementInstruction />
            </Route>
            <Route path="/settlement/settlementExecution">
                <div className="head-content">
                    Settlement Job Execution
                </div>
                <SettlementJobExecution />
            </Route>
            <Route path="/settlement/monitoringClearing">
                <div className="head-content">
                    Monitoring Clearing Pos vs Balance
                </div>
                <SettlementMonitoring />
            </Route>
            <Route path="/instructionManagement/securityManagement">
                <div className="head-content">
                    Security Management (Instruction, Request for cancel)
                </div>
                <SecurityManagement />
            </Route>
            <Route path="/instructionManagement/inquirySecManagement">
                <div className="head-content">
                    Inquiry Sec Management
                </div>
                <InquirySecManagement />
            </Route>
            <Route path="/instructionManagement/cashManagement">
                <div className="head-content">
                    Cash Management (Instruction, Request for cancel)
                </div>
                <CashInquiryManagement />
            </Route>
            <Route path="/instructionManagement/inquiryCashManagement">
                <div className="head-content">
                    Inquiry Cash Management
                </div>
                <InquiryCashManagement />
            </Route>
            <Route path="/collateralManagement/inquiry">
                <div className="head-content">
                    Inquiry
                </div>
                <Inquiry />
            </Route>
            <Route path="/collateralManagement/instructionColdp">
                <div className="head-content">
                    Instruction - COLDP (Create, Check, Accept, Request for cancel)
                </div>
                <InstructionCOLDP />
            </Route>
            <Route path="/collateralManagement/instructionColw">
                <div className="head-content">
                    Instruction - COLW (Create, Check, Accept, Request for cancel)
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
                    Obligation Accomplishment
                </div>
                <ObligationAccomplishment />
            </Route>
            <Route path="/dailytransaction">
                <div className="head-content">
                    Daily Transaction Report
                </div>
                <DailyTransactionReport />
            </Route>
            <Route path="/novationreport">
                <div className="head-content">
                    Novation Report
                </div>
                <NovationReport />
            </Route>
            <Route path="/movementbalance">
                <div className="head-content">
                    Movement Balance
                </div>
                <MovementBalance />
            </Route>
            <Route path="/fundreport">
                <div className="head-content">
                    Default Fund Report
                </div>
                <DefaultFundReport />
            </Route>
            <Route path="/reportbankid">
                <div className="head-content">
                    <h1>Header Content</h1>
                </div>
                <ReportBI />
            </Route>
            <Route path="/feereport">
                <div className="head-content">
                    Fee Report
                </div>
                <FeeReport />
            </Route>
            <Route path="/dhkmemberclient">
                <div className="head-content">
                    DHK level member dan client
                </div>
                <DHKLevel />
            </Route>
            <Route path="/registerclient">
                <div className="head-content">
                    Register Client
                </div>
                <RegisterClient />
            </Route>
            <Route path="/registermember">
                <div className="head-content">
                    Register Member
                </div>
                <RegisterMember />
            </Route>
            <Route path="/registercontract">
                <div className="head-content">
                    Register Contract (KPEI)
                </div>
                <RegisterContract />
            </Route>
            <Route path="/editaccount">
                <div className="head-content">
                    Edit Account (Status)
                </div>
                <EditAccount />
            </Route>
            <Route path="/securitiescollmgt">
                <div className="head-content">
                    Securities Coll Management (Register Inst, Eligibility, Haircut)
                </div>
                <SecuritiesCollMgt />
            </Route>
            <Route path="/cashcollmgt">
                <div className="head-content">
                    Cash Coll Management (Register Mata Uang, Eligibility, Haircut)
                </div>
                <CashCollMgt />
            </Route>
            <Route path="/editreferencerate">
                <div className="head-content">
                    Edit Reference Rate (JIBOR, JISDOR, INDONIA, LIBOR)
                </div>
                <EditReferenceRate />
            </Route>
            <Route path="/editparameter">
                <div className="head-content">
                    Edit Parameter
                </div>
                <EditParameter />
            </Route>
            <Route path="/audittrail">
                <div className="head-content">
                    Audit trail
                </div>
                <AuditTrail />
            </Route>
            <Route path="/usermanagement">
                <div className="head-content">
                    User Management
                </div>
                <UserManagement />
            </Route>
            <Route path="/systemparameter">
                <div className="head-content">
                    System Parameter
                </div>
                <SystemParameter />
            </Route>
            <Route path="/calendar">
                <div className="head-content">
                    Calender (Hari Libur/BI Calender)
                </div>
                <Calendar />
            </Route>
            <Route path="/approval">
                <div className="head-content">
                    Approval
                </div>
                <Approval />
            </Route>
            <Route path="/registerats">
                <div className="head-content">
                    Register ATS
                </div>
                <RegisterAts />
            </Route>

        </div>
    )
}
export default RoutePage;
