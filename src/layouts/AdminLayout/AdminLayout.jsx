import {Fragment} from 'react'
import {Footer, Navbar,Sidebar,Content} from "../components/index"


function AdminLayout() {
  return (
    <Fragment>
        <div id="wrapper">
            <Navbar />
            <Sidebar />
            
            <Footer />
            {/* <Content /> */}
        </div>
    </Fragment>
    )
}

export default AdminLayout