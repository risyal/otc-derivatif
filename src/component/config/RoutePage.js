import React from 'react'
import LoginPage from '../views/Login';
import NewTradePage from '../views/trade/NewTrade';
import InquiryTradePage from '../views/trade/InquiryTrade';
import CancelTradePage from '../views/trade/CancelTrade';
import {
    Switch,
    Route
} from "react-router-dom";
import MonitoringTrade from '../views/trade/MonitoringTrade';
import TradeSummary from '../views/trade/TradeSummary';
import ClearingPostition from '../views/clearing/ClearingPostition';
import InquiryPosition from '../views/clearing/InquiryPosition';
import SettlementPosition from '../views/clearing/SettlementPosition';
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

        </div>
    )
}
export default RoutePage;
