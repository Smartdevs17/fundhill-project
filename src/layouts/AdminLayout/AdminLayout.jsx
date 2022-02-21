import {Fragment} from 'react'
import {Footer, Navbar,Sidebar} from "../components/index"



function AdminLayout() {
  return (
    <Fragment>
        <div id="wrapper">
            <Navbar />
            <Sidebar />
            <Footer />
        </div>
    </Fragment>
    )
}

export default AdminLayout