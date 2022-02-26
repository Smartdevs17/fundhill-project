import {Route} from 'react-router-dom'
import {AdminLayout} from "../../layouts"
import {Dashboard,NewCustomer} from '../../pages/adminDashboard'

function AdminRoutes() {
  return (
    <Route path="admin" element={<AdminLayout />}>
        <Route path="dashboard" element={<Dashboard />} />
        <Route path="dashboard/newcustomer" element={<NewCustomer />} />

    </Route>
    )
}

export default AdminRoutes