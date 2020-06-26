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

function RoutePage() {
    return (
        <div>
            <Route path="/inquerytrade">
                <InquiryTradePage />
            </Route>
            <Route path="/newtrade">
                <NewTradePage />
            </Route>
            <Route path="/canceltrade">
                <CancelTradePage />
            </Route>
            <Route path="/monitoringtrade">
                <MonitoringTrade />
            </Route>
            <Route path="/tradesummary">
                <TradeSummary />
            </Route>
            <Route path="/clearingManagement/clearingPosition">
                <ClearingPostition />
            </Route>
            <Route path="/clearingManagement/inquiryPostition">
                <InquiryPosition />
            </Route>
            <Route path="/clearingManagement/settlementPostion">
                <SettlementPosition />
            </Route>
            <Route path="/clearingManagement/cashFlowIrs">
                <CashFlowIrs />
            </Route>
            <Route path="/accountManagement/detailinformation">
                <AccountDetail />
            </Route>
            <Route path="/accountManagement/collateralMember">
                <BlockCollateralMember />
            </Route>
            <Route path="/accountManagement/collateralClient">
                <BlockCollateralClient />
            </Route>
            <Route path="/accountManagement/detailFund">
                <DefaultFund />
            </Route>
            <Route path="/accountManagement/registerBeneficiaries">
                <RegisterBeneficiaries />
            </Route>
            <Route path="/accountManagement/inquiryBeneficiaries">
                <InquiryBeneficiaries />
            </Route>
            <Route path="/settlement/inquirySettlement">
                <SettlementInstruction />
            </Route>
            <Route path="/settlement/settlementExecution">
                <SettlementJobExecution />
            </Route>
            <Route path="/settlement/monitoringClearing">
                <SettlementMonitoring />
            </Route>
            <Route path="/login">
                <LoginPage />
            </Route>
            <Route path="/obligationaccomplishment">
                <ObligationAccomplishment />
            </Route>
            <Route path="/dailytransaction">
                <DailyTransactionReport />
            </Route>
            <Route path="/novationreport">
                <NovationReport />
            </Route>
            <Route path="/movementbalance">
                <MovementBalance />
            </Route>
            <Route path="/fundreport">
                <DefaultFundReport />
            </Route>
            <Route path="/reportbankid">
                <ReportBI />
            </Route>
            <Route path="/feereport">
                <FeeReport />
            </Route>
            <Route path="/dhkmemberclient">
                <DHKLevel />
            </Route>
            <Route path="/registerclient">
                <RegisterClient />
            </Route>
            <Route path="/registermember">
                <RegisterMember />
            </Route>
            <Route path="/registercontract">
                <RegisterContract />
            </Route>
            <Route path="/editaccount">
                <EditAccount />
            </Route>
            <Route path="/securitiescollmgt">
                <SecuritiesCollMgt />
            </Route>
            <Route path="/cashcollmgt">
                <CashCollMgt />
            </Route>
            <Route path="/editreferencerate">
                <EditReferenceRate />
            </Route>
            <Route path="/editparameter">
                <EditParameter />
            </Route>
            <Route path="/audittrail">
                <AuditTrail />
            </Route>
            <Route path="/usermanagement">
                <UserManagement />
            </Route>
            <Route path="/systemparameter">
                <SystemParameter />
            </Route>
            <Route path="/calendar">
                <Calendar />
            </Route>
            <Route path="/approval">
                <Approval />
            </Route>
            <Route path="/registerats">
                <RegisterAts />
            </Route>

        </div>
    )
}
export default RoutePage;
