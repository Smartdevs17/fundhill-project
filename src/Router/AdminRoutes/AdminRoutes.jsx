import {Route} from 'react-router-dom'
import {AdminLayout} from "../../layouts"
import {Dashboard,NewCustomer,AllCustomers,Saving,FixedSavings,Withdrawal,
NewStaff,AllStaff,CreditStaff,Branch,AllBranch,Ledger,AllLedger,History,
Group,AllLoan,AddLoan,AllBorrowers,PendLoan,OngoingLoan,MissedLoan,DayReport,
TransHistory,BulkSms,SingleSms,DisbursedLoan,Deposit,Withdraw,BranchTrans,
PayrollReport,CustomersTrans} from '../../pages/adminDashboard'

function AdminRoutes() {
  return (
    <Route path="admin" element={<AdminLayout />}>
        <Route path="dashboard" element={<Dashboard />} />
        <Route path="dashboard/newcustomer" element={<NewCustomer />} />
        <Route path="dashboard/allcustomer" element={<AllCustomers />} />
        <Route path="dashboard/savings" element={<Saving />} />
        <Route path="dashboard/fixedsavings" element={<FixedSavings />} />
        <Route path="dashboard/withdrawal" element={<Withdrawal />} />
        <Route path="dashboard/trans-history" element={<TransHistory />} />
        <Route path="dashboard/newstaff" element={<NewStaff />} />
        <Route path="dashboard/allstaff" element={<AllStaff />} />
        <Route path="dashboard/creditstaff" element={<CreditStaff />} />
        <Route path="dashboard/branch" element={<Branch />} />
        <Route path="dashboard/allbranch" element={<AllBranch />} />
        <Route path="dashboard/ledger" element={<Ledger />} />
        <Route path="dashboard/allledger" element={<AllLedger />} />
        <Route path="dashboard/history" element={<History />} />
        <Route path="dashboard/group-loan" element={<Group />} />
        <Route path="dashboard/all-loan" element={<AllLoan />} />
        <Route path="dashboard/add-loan" element={<AddLoan />} />
        <Route path="dashboard/view-loan" element={<AllBorrowers />} />
        <Route path="dashboard/pending-loan" element={<PendLoan />} />
        <Route path="dashboard/ongoing-loan" element={<OngoingLoan />} />
        <Route path="dashboard/missed-loan" element={<MissedLoan />} />
        <Route path="dashboard/bulk-sms" element={<BulkSms />} />
        <Route path="dashboard/single-sms" element={<SingleSms />} />
        <Route path="dashboard/disburse-loan" element={<DisbursedLoan />} />
        <Route path="dashboard/all-deposit" element={<Deposit />} />
        <Route path="dashboard/all-withdrawals" element={<Withdraw />} />
        <Route path="dashboard/branch-trans" element={<BranchTrans />} />
        <Route path="dashboard/customers-trans" element={<CustomersTrans />} />
        <Route path="dashboard/daily-report" element={<DayReport />} />
        <Route path="dashboard/payroll-report" element={<PayrollReport />} />


    </Route>
    )
}

export default AdminRoutes