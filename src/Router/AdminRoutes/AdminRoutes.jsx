import {Route} from 'react-router-dom'
import {AdminLayout} from "../../layouts"
import {Dashboard} from '../../pages/adminDashboard'

function AdminRoutes() {
  return (
    <Route path="admin" element={<AdminLayout />}>
        <Route path="dashboard" element={<Dashboard />} />
    </Route>
    )
}

export default AdminRoutes