import {Fragment} from 'react'
import {Footer, Navbar,Sidebar} from "../components/index"
import {Outlet} from "react-router-dom"

function AdminLayout() {
  return (
    <Fragment>
        <div id="wrapper">
            <Navbar />
            <Sidebar />

            <Outlet />        
            <Footer />
            {/* <Content /> */}
        </div>
    </Fragment>
    )
}

export default AdminLayout