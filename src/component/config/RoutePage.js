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

        </div>
    )
}
export default RoutePage;
