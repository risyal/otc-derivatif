import EditRegisterContract from '../views/administration/EditRegisterContract';
import ViewEditMember from '../views/member-client/ViewEditMember';
import ViewEditClient from '../views/member-client/ViewEditClient';
import ViewDeleteMember from '../views/member-client/ViewDeleteMember';
import ViewDeleteClient from '../views/member-client/ViewDeleteClient';
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
import ViewAddColdp from '../views/collateral/ViewAdd';
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
import ApprovalAccountDetail from '../views/account/ApprovalDetail';
import ApprovalInstructionDetail from '../views/instruction/ApprovalInstructionDetail';
import ApprovalCollateralDetail from '../views/collateral/ApprovalCollateralDetail';
import ReportBI from '../views/reporting/ReportBI';
import { baseUrl } from './Environtment';
const rootWithNavLink = baseUrl;
const OtherLink = [
    {
        useFor: 'trade',
        name: 'Detail View Trade',
        key: 'detailViewTrade',
        useIn: 'detail',
        linkTo: rootWithNavLink + '/trade/detail-trade-page',
        component: DetailViewTrade,
    },
    {
        useFor: 'trade',
        name: 'Confirmation Trade',
        key: 'confirmationTrade',
        useIn: 'confirmation',
        linkTo: rootWithNavLink + '/trade/confirmation-trade-page',
        component: DetailViewTrade,
    },
    {
        useFor: 'trade',
        name: 'Cancel Trade',
        key: 'cancelTrade',
        useIn: 'cancel',
        linkTo: rootWithNavLink + '/trade/cancel-trade-page',
        component: DetailViewTrade,
    },
    {
        useFor: 'trade',
        name: 'Monitoring Trade',
        key: 'monitoringTrade',
        useIn: 'monitoring',
        linkTo: rootWithNavLink + '/trade/monitoring-trade-page',
        component: DetailViewTrade,
    },
    {
        useFor: 'trade',
        name: 'Approval Trade',
        key: 'approvalTrade',
        useIn: 'approval',
        linkTo: rootWithNavLink + '/trade/approval-trade-page',
        component: DetailViewTrade,
    },
    {
        useFor: 'clearing',
        name: 'Detail Clearing Position IRS',
        key: 'detailClearingPositionIRS',
        useIn: 'detailirs',
        linkTo: rootWithNavLink + '/clearing-management/detail-clearing-position-irs',
        component: ClearingDetailIRS,
    },
    {
        useFor: 'clearing',
        name: 'Detail Clearing Position OIS',
        key: 'detailClearingPositionOIS',
        useIn: 'detailois',
        linkTo: rootWithNavLink + '/clearing-management/detail-clearing-position-ois',
        component: ClearingDetailOIS,
    },
    {
        useFor: 'clearing',
        name: 'Detail Clearing Position DNDF',
        key: 'detailClearingPositionDNDF',
        useIn: 'detaildndf',
        linkTo: rootWithNavLink + '/clearing-management/detail-clearing-position-dndf',
        component: ClearingDetailDNDF,
    },
    {
        useFor: 'clearing',
        name: 'Detail Clearing Cash Flow',
        key: 'detailClearingCashFlow',
        useIn: 'detailcashflow',
        linkTo: rootWithNavLink + '/clearing-management/detail-cash-flow-irs',
        component: ClearingDetailView,
    },
    {
        useFor: 'account',
        name: 'Detail Account Information',
        key: 'detailAccountInformation',
        useIn: 'detailaccount',
        linkTo: rootWithNavLink + '/account-management/detail-account-information',
        component: AccDetailView,
    },
    {
        useFor: 'account',
        name: 'Detail Approval Account',
        key: 'detailApprovalAccount',
        useIn: 'detailapproval',
        linkTo: rootWithNavLink + '/account-management/detail-approval',
        component: ApprovalAccountDetail,
    },
    {
        useFor: 'instruction',
        name: 'Add Security',
        key: 'addSecurity',
        useIn: 'addsecurity',
        linkTo: rootWithNavLink + '/instruction-management/add-security',
        component: ViewAddSM,
    },
    {
        useFor: 'instruction',
        name: 'View Security',
        key: 'viewSecurity',
        useIn: 'viewsecurity',
        linkTo: rootWithNavLink + '/instruction-management/view-security',
        component: DetailCancelSM,
    },
    {
        useFor: 'instruction',
        name: 'Cancel Security',
        key: 'cancelSecurity',
        useIn: 'cancelsecurity',
        linkTo: rootWithNavLink + '/instruction-management/cancel-security',
        component: DetailCancelSM,
    },
    {
        useFor: 'instruction',
        name: 'Add Cash',
        key: 'addCash',
        useIn: 'addcash',
        linkTo: rootWithNavLink + '/instruction-management/add-cash',
        component: ViewAddCM,
    },
    {
        useFor: 'instruction',
        name: 'View Cash',
        key: 'viewCash',
        useIn: 'viewcash',
        linkTo: rootWithNavLink + '/instruction-management/view-cash',
        component: DetailCancelCM,
    },
    {
        useFor: 'instruction',
        name: 'Cancel cash',
        key: 'cancelcash',
        useIn: 'cancelcash',
        linkTo: rootWithNavLink + '/instruction-management/cancel-cash',
        component: DetailCancelCM,
    },
    {
        useFor: 'instruction',
        name: 'Approval Instruction',
        key: 'approvalInstruction',
        useIn: 'approvalinstruction',
        linkTo: rootWithNavLink + '/instruction-management/approval-instruction',
        component: ApprovalInstructionDetail,
    },
    {
        useFor: 'collateral',
        name: 'Add Instruction COLDP',
        key: 'addInstructionCOLDP',
        useIn: 'addinstructioncoldp',
        linkTo: rootWithNavLink + '/collateral-management/add-instruction-coldp',
        component: ViewAddColdp,
    },
    {
        useFor: 'collateral',
        name: 'View Instruction COLDP',
        key: 'viewInstructionCOLDP',
        useIn: 'viewinstructioncoldp',
        linkTo: rootWithNavLink + '/collateral-management/view-instruction-coldp',
        component: DetailCancelCOLDP,
    },
    {
        useFor: 'collateral',
        name: 'Cancel Instruction COLDP',
        key: 'cancelInstructionCOLDP',
        useIn: 'cancelinstructioncoldp',
        linkTo: rootWithNavLink + '/collateral-management/cancel-instruction-coldp',
        component: DetailCancelCOLDP,
    },
    {
        useFor: 'collateral',
        name: 'Add Instruction COLW',
        key: 'addInstructionCOLW',
        useIn: 'addinstructioncolw',
        linkTo: rootWithNavLink + '/collateral-management/add-instruction-colw',
        component: ViewAddColw,
    },
    {
        useFor: 'collateral',
        name: 'View Instruction COLW',
        key: 'viewInstructionCOLW',
        useIn: 'viewinstructioncolw',
        linkTo: rootWithNavLink + '/collateral-management/view-instruction-colw',
        component: DetailCancelCOLW,
    },
    {
        useFor: 'collateral',
        name: 'Cancel Instruction COLW',
        key: 'cancelInstructionCOLW',
        useIn: 'cancelinstructioncolw',
        linkTo: rootWithNavLink + '/collateral-management/cancel-instruction-colw',
        component: DetailCancelCOLW,
    },
    {
        useFor: 'collateral',
        name: 'Detail Approval Collateral',
        key: 'detailApprovalCollateral',
        useIn: 'detailapprovalcollateral',
        linkTo: rootWithNavLink + '/collateral-management/detail-approval-collateral',
        component: ApprovalCollateralDetail,
    },
    {
        useFor: 'memberclient',
        name: 'Add Member ',
        key: 'addMember',
        useIn: 'addmember',
        linkTo: rootWithNavLink + '/member-client/add-member',
        component: ViewEditMember,
    },
    {
        useFor: 'memberclient',
        name: 'View Member ',
        key: 'viewMember',
        useIn: 'viewmember',
        linkTo: rootWithNavLink + '/member-client/view-member',
        component: ViewDeleteMember,
    },
    {
        useFor: 'memberclient',
        name: 'Edit Member ',
        key: 'editMember',
        useIn: 'editmember',
        linkTo: rootWithNavLink + '/member-client/edit-member',
        component: ViewEditMember,
    },
    {
        useFor: 'memberclient',
        name: 'Delete Member ',
        key: 'deleteMember',
        useIn: 'deletemember',
        linkTo: rootWithNavLink + '/member-client/delete-member',
        component: ViewDeleteMember,
    },
    {
        useFor: 'memberclient',
        name: 'Add Client ',
        key: 'addClient',
        useIn: 'addclient',
        linkTo: rootWithNavLink + '/member-client/add-client',
        component: ViewEditClient,
    },
    {
        useFor: 'memberclient',
        name: 'View Client ',
        key: 'viewClient',
        useIn: 'viewclient',
        linkTo: rootWithNavLink + '/member-client/view-client',
        component: ViewDeleteClient,
    },
    {
        useFor: 'memberclient',
        name: 'Edit Client ',
        key: 'editClient',
        useIn: 'editclient',
        linkTo: rootWithNavLink + '/member-client/edit-client',
        component: ViewEditClient,
    },
    {
        useFor: 'memberclient',
        name: 'Delete Client ',
        key: 'deleteClient',
        useIn: 'deleteclient',
        linkTo: rootWithNavLink + '/member-client/delete-client',
        component: ViewDeleteClient,
    },
    {
        useFor: 'administration',
        name: 'Add Register ATS ',
        key: 'addRegisterAts',
        useIn: 'addregisterats',
        linkTo: rootWithNavLink + '/administration/add-register-ats',
        component: ViewEditRegAts,
    },
    {
        useFor: 'administration',
        name: 'Edit Register ATS ',
        key: 'editRegisterAts',
        useIn: 'editregisterats',
        linkTo: rootWithNavLink + '/administration/edit-register-ats',
        component: ViewEditRegAts,
    },
    {
        useFor: 'administration',
        name: 'View Register ATS ',
        key: 'viewRegisterAts',
        useIn: 'viewregisterats',
        linkTo: rootWithNavLink + '/administration/view-register-ats',
        component: ViewDeleteRegAts,
    },
    {
        useFor: 'administration',
        name: 'Delete Register ATS ',
        key: 'deleteRegisterAts',
        useIn: 'deleteregisterats',
        linkTo: rootWithNavLink + '/administration/delete-register-ats',
        component: ViewDeleteRegAts,
    },
    {
        useFor: 'systemparameter',
        name: 'Add System Parameter',
        key: 'addSystemParameter',
        useIn: 'addsystemparameter',
        linkTo: rootWithNavLink + '/systemparameter/add-system-parameter',
        component: ViewEditSysParam,
    },
    {
        useFor: 'systemparameter',
        name: 'Edit System Parameter',
        key: 'editSystemParameter',
        useIn: 'editsystemparameter',
        linkTo: rootWithNavLink + '/systemparameter/edit-system-parameter',
        component: ViewEditSysParam,
    },
    {
        useFor: 'systemparameter',
        name: 'View System Parameter',
        key: 'viewSystemParameter',
        useIn: 'viewsystemparameter',
        linkTo: rootWithNavLink + '/systemparameter/view-system-parameter',
        component: ViewDeleteSysParam,
    },
    {
        useFor: 'systemparameter',
        name: 'Delete System Parameter',
        key: 'deleteSystemParameter',
        useIn: 'deletesystemparameter',
        linkTo: rootWithNavLink + '/systemparameter/delete-system-parameter',
        component: ViewDeleteSysParam,
    },
    {
        useFor: 'calendar',
        name: 'Add Calendar',
        key: 'addCalendar',
        useIn: 'addcalendar',
        linkTo: rootWithNavLink + '/calendar/add-calendar',
        component: ViewEditCalendar,
    },
    {
        useFor: 'calendar',
        name: 'Edit Calendar',
        key: 'editCalendar',
        useIn: 'editcalendar',
        linkTo: rootWithNavLink + '/calendar/edit-calendar',
        component: ViewEditCalendar,
    },
    {
        useFor: 'calendar',
        name: 'Delete Calendar',
        key: 'deleteCalendar',
        useIn: 'deletecalendar',
        linkTo: rootWithNavLink + '/calendar/delete-calendar',
        component: ViewDeleteCalendar,
    },
    {
        useFor: 'securitiescollmgt',
        name: 'Add Securities Collateral Management',
        key: 'addSecuritiesCollMgt',
        useIn: 'addsecuritiescollmgt',
        linkTo: rootWithNavLink + '/securitiescollmgt/add-securities-coll-mgt',
        component: ViewEditSCMgt,
    },
    {
        useFor: 'securitiescollmgt',
        name: 'Edit Securities Collateral Management',
        key: 'editSecuritiesCollMgt',
        useIn: 'editsecuritiescollmgt',
        linkTo: rootWithNavLink + '/securitiescollmgt/edit-securities-coll-mgt',
        component: ViewEditSCMgt,
    },
    {
        useFor: 'securitiescollmgt',
        name: 'View Securities Collateral Management',
        key: 'viewSecuritiesCollMgt',
        useIn: 'viewsecuritiescollmgt',
        linkTo: rootWithNavLink + '/securitiescollmgt/view-securities-coll-mgt',
        component: ViewDeleteSCMgt,
    },
    {
        useFor: 'securitiescollmgt',
        name: 'Delete Securities Collateral Management',
        key: 'deleteSecuritiesCollMgt',
        useIn: 'deletesecuritiescollmgt',
        linkTo: rootWithNavLink + '/securitiescollmgt/delete-securities-coll-mgt',
        component: ViewDeleteSCMgt,
    },
    //end
    {
        name: 'ViewEditMember',
        key: 'ViewEditMember',
        linkTo: '/ViewEditMember',
        component: ViewEditMember,
    },
    {
        useFor: 'trade',
        name: 'EditRegisterContract',
        key: 'editregistercontract',
        useIn: 'other',
        linkTo: rootWithNavLink + '/trade/edit-register-contract',
        component: EditRegisterContract,

    },
    {
        name: 'ViewEditClient',
        key: 'ViewEditClient',
        linkTo: '/ViewEditClient',
        component: ViewEditClient,
    },
    {
        name: 'ViewDeleteMember',
        key: 'ViewDeleteMember',
        linkTo: '/ViewDeleteMember',
        component: ViewDeleteMember,
    },
    {
        name: 'ViewDeleteClient',
        key: 'ViewDeleteClient',
        linkTo: '/ViewDeleteClient',
        component: ViewDeleteClient,
    },
    {
        name: 'ViewDeleteAccount',
        key: 'ViewDeleteAccount',
        linkTo: '/ViewDeleteAccount',
        component: ViewDeleteAccount,
    },
    {
        name: 'ViewEditAccount',
        key: 'ViewEditAccount',
        linkTo: '/ViewEditAccount',
        component: ViewEditAccount,
    },
    {
        name: 'ViewEditCCMgt',
        key: 'ViewEditCCMgt',
        linkTo: '/ViewEditCCMgt',
        component: ViewEditCCMgt,
    },
    {
        name: 'ViewDeleteCCMgt',
        key: 'ViewDeleteCCMgt',
        linkTo: '/ViewDeleteCCMgt',
        component: ViewDeleteCCMgt,
    },
    {
        name: 'ViewDeleteJibor',
        key: 'ViewDeleteJibor',
        linkTo: '/ViewDeleteJibor',
        component: ViewDeleteJibor,
    },
    {
        name: 'ViewEditJibor',
        key: 'ViewEditJibor',
        linkTo: '/ViewEditJibor',
        component: ViewEditJibor,
    },
    {
        name: 'ViewDeleteParam',
        key: 'ViewDeleteParam',
        linkTo: '/ViewDeleteParam',
        component: ViewDeleteParam,
    },
    {
        name: 'ViewEditParam',
        key: 'ViewEditParam',
        linkTo: '/ViewEditParam',
        component: ViewEditParam,
    },
    {
        name: 'ViewEditUser',
        key: 'ViewEditUser',
        linkTo: '/ViewEditUser',
        component: ViewEditUser,
    },
    {
        name: 'ViewDeleteUser',
        key: 'ViewDeleteUser',
        linkTo: '/ViewDeleteUser',
        component: ViewDeleteUser,
    },
    {
        name: 'AddUser',
        key: 'AddUser',
        linkTo: '/AddUser',
        component: AddUser,
    },
    {
        name: 'ViewEditRegAts',
        key: 'ViewEditRegAts',
        linkTo: '/ViewEditRegAts',
        component: ViewEditRegAts,
    },
    {
        name: 'ViewDeleteRegAts',
        key: 'ViewDeleteRegAts',
        linkTo: '/ViewDeleteRegAts',
        component: ViewDeleteRegAts,
    },
    {
        name: 'ViewAddColw',
        key: 'ViewAddColw',
        linkTo: '/ViewAddColw',
        component: ViewAddColw,
    },
    {
        name: 'DetailCancelCOLDP',
        key: 'DetailCancelCOLDP',
        linkTo: '/DetailCancelCOLDP',
        component: DetailCancelCOLDP,
    },
    {
        name: 'DetailCancelCOLW',
        key: 'DetailCancelCOLW',
        linkTo: '/DetailCancelCOLW',
        component: DetailCancelCOLW,
    },
    {
        name: 'ViewAddSM',
        key: 'ViewAddSM',
        linkTo: '/ViewAddSM',
        component: ViewAddSM,
    },
    {
        name: 'DetailCancelSM',
        key: 'DetailCancelSM',
        linkTo: '/DetailCancelSM',
        component: DetailCancelSM,
    },
    {
        name: 'ViewAddCM',
        key: 'ViewAddCM',
        linkTo: '/ViewAddCM',
        component: ViewAddCM,
    },
    {
        name: 'DetailCancelCM',
        key: 'DetailCancelCM',
        linkTo: '/DetailCancelCM',
        component: DetailCancelCM,
    },
    {
        name: 'ClearingDetailView',
        key: 'ClearingDetailView',
        linkTo: '/ClearingDetailView',
        component: ClearingDetailView,
    },
    {
        name: 'IrsEditCurrency',
        key: 'IrsEditCurrency',
        linkTo: '/IrsEditCurrency',
        component: IrsEditCurrency,
    },
    {
        name: 'IrsEditLegType',
        key: 'IrsEditLegType',
        linkTo: '/IrsEditLegType',
        component: IrsEditLegType,
    },
    {
        name: 'IrsEffectiveDate',
        key: 'IrsEffectiveDate',
        linkTo: '/IrsEffectiveDate',
        component: IrsEffectiveDate,
    },
    {
        name: 'IrsEditContractTerm',
        key: 'IrsEditContractTerm',
        linkTo: '/IrsEditContractTerm',
        component: IrsEditContractTerm,
    },
    {
        name: 'IrsEditNotionalAmount',
        key: 'IrsEditNotionalAmount',
        linkTo: '/IrsEditNotionalAmount',
        component: IrsEditNotionalAmount,
    },
    {
        name: 'IrsEditPaymentFreq',
        key: 'IrsEditPaymentFreq',
        linkTo: '/IrsEditPaymentFreq',
        component: IrsEditPaymentFreq,
    },
    {
        name: 'IrsEditFixingDate',
        key: 'IrsEditFixingDate',
        linkTo: '/IrsEditFixingDate',
        component: IrsEditFixingDate,
    },
    {
        name: 'IrsEditSpread',
        key: 'IrsEditSpread',
        linkTo: '/IrsEditSpread',
        component: IrsEditSpread,
    },
    {
        name: 'IrsEditDayCountF',
        key: 'IrsEditDayCountF',
        linkTo: '/IrsEditDayCountF',
        component: IrsEditDayCountF,
    },
    {
        name: 'IrsFloatingRatrRFreq',
        key: 'IrsFloatingRatrRFreq',
        linkTo: '/IrsFloatingRatrRFreq',
        component: IrsFloatingRatrRFreq,
    },
    {
        name: 'IrsFloatingRIndex',
        key: 'IrsFloatingRIndex',
        linkTo: '/IrsFloatingRIndex',
        component: IrsFloatingRIndex,
    },
    {
        name: 'IrsBDC',
        key: 'IrsBDC',
        linkTo: '/IrsBDC',
        component: IrsBDC,
    },
    {
        name: 'IrsEditRoundingP',
        key: 'IrsEditRoundingP',
        linkTo: '/IrsEditRoundingP',
        component: IrsEditRoundingP,
    },
    {
        name: 'IrsEditStubPayment',
        key: 'IrsEditStubPayment',
        linkTo: '/IrsEditStubPayment',
        component: IrsEditStubPayment,
    },
    {
        name: 'IrsEditForwardStart',
        key: 'IrsEditForwardStart',
        linkTo: '/IrsEditForwardStart',
        component: IrsEditForwardStart,
    },
    {
        name: 'IrsEditCashPaymentC',
        key: 'IrsEditCashPaymentC',
        linkTo: '/IrsEditCashPaymentC',
        component: IrsEditCashPaymentC,
    },
    {
        name: 'OisEditCurrency',
        key: 'OisEditCurrency',
        linkTo: '/OisEditCurrency',
        component: OisEditCurrency,
    },
    {
        name: 'OisEditLegType',
        key: 'OisEditLegType',
        linkTo: '/OisEditLegType',
        component: OisEditLegType,
    },
    {
        name: 'OisEffectiveDate',
        key: 'OisEffectiveDate',
        linkTo: '/OisEffectiveDate',
        component: OisEffectiveDate,
    },
    {
        name: 'OisEditContractTerm',
        key: 'OisEditContractTerm',
        linkTo: '/OisEditContractTerm',
        component: OisEditContractTerm,
    },
    {
        name: 'OisEditNotionalAmount',
        key: 'OisEditNotionalAmount',
        linkTo: '/OisEditNotionalAmount',
        component: OisEditNotionalAmount,
    },
    {
        name: 'OisEditDayCountF',
        key: 'OisEditDayCountF',
        linkTo: '/OisEditDayCountF',
        component: OisEditDayCountF,
    },
    {
        name: 'OisBDC',
        key: 'OisBDC',
        linkTo: '/OisBDC',
        component: OisBDC,
    },
    {
        name: 'OisEditRoundingP',
        key: 'OisEditRoundingP',
        linkTo: '/OisEditRoundingP',
        component: OisEditRoundingP,
    },
    {
        name: 'OisEditForwardStart',
        key: 'OisEditForwardStart',
        linkTo: '/OisEditForwardStart',
        component: OisEditForwardStart,
    },
    {
        name: 'OisEditSpread',
        key: 'OisEditSpread',
        linkTo: '/OisEditSpread',
        component: OisEditSpread,
    },
    {
        name: 'DndfEditCurrency',
        key: 'DndfEditCurrency',
        linkTo: '/DndfEditCurrency',
        component: DndfEditCurrency,
    },
    {
        name: 'DndfEditFixingDate',
        key: 'DndfEditFixingDate',
        linkTo: '/DndfEditFixingDate',
        component: DndfEditFixingDate,
    },
    {
        name: 'DndfTenor',
        key: 'DndfTenor',
        linkTo: '/DndfTenor',
        component: DndfTenor,
    },
    {
        name: 'DndfEditNotionalAmount',
        key: 'DndfEditNotionalAmount',
        linkTo: '/DndfEditNotionalAmount',
        component: DndfEditNotionalAmount,
    },
    {
        name: 'ViewDeleteJisdor',
        key: 'ViewDeleteJisdor',
        linkTo: '/ViewDeleteJisdor',
        component: ViewDeleteJisdor,
    },
    {
        name: 'ViewEditJisdor',
        key: 'ViewEditJisdor',
        linkTo: '/ViewEditJisdor',
        component: ViewEditJisdor,
    },
    {
        name: 'ViewDeleteIndonia',
        key: 'ViewDeleteIndonia',
        linkTo: '/ViewDeleteIndonia',
        component: ViewDeleteIndonia,
    },
    {
        name: 'ViewEditIndonia',
        key: 'ViewEditIndonia',
        linkTo: '/ViewEditIndonia',
        component: ViewEditIndonia,
    },
    {
        name: 'ViewDeleteSysParam',
        key: 'ViewDeleteSysParam',
        linkTo: '/ViewDeleteSysParam',
        component: ViewDeleteSysParam,
    },
    {
        name: 'ViewEditSysParam',
        key: 'ViewEditSysParam',
        linkTo: '/ViewEditSysParam',
        component: ViewEditSysParam,
    },
    {
        name: 'DetailApproval',
        key: 'DetailApproval',
        linkTo: '/DetailApproval',
        component: DetailApproval,
    },
    {
        name: 'AccDetailView',
        key: 'AccDetailView',
        linkTo: '/AccDetailView',
        component: AccDetailView,
    },
    {
        name: 'ClearingDetailIRS',
        key: 'ClearingDetailIRS',
        linkTo: '/ClearingDetailIRS',
        component: ClearingDetailIRS,
    },
    {
        name: 'ClearingDetailOIS',
        key: 'ClearingDetailOIS',
        linkTo: '/ClearingDetailOIS',
        component: ClearingDetailOIS,
    },
    {
        name: 'ClearingDetailDNDF',
        key: 'ClearingDetailDNDF',
        linkTo: '/ClearingDetailDNDF',
        component: ClearingDetailDNDF,
    },
    {
        name: 'ApprovalInstructionDetail',
        key: 'ApprovalInstructionDetail',
        linkTo: '/ApprovalInstructionDetail',
        component: ApprovalInstructionDetail,
    },
    {
        name: 'ApprovalCollateralDetail',
        key: 'ApprovalCollateralDetail',
        linkTo: '/ApprovalCollateralDetail',
        component: ApprovalCollateralDetail,
    },
    {
        name: 'ReportBI',
        key: 'ReportBI',
        linkTo: '/ReportBI',
        component: ReportBI,

    }
]
export default OtherLink;