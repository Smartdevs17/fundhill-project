import { Fragment } from "react";
import { LoadScripts } from "../Hooks";

// ROUTER
import Router from "../Router";

const App = () => {

  // SCRIPTS
  LoadScripts("/assets/js/vendor.min.js");
  LoadScripts("/assets/libs/morris-js/morris.min.js");
  LoadScripts("/assets/libs/raphael/raphael.min.js");
  LoadScripts("/assets/js/pages/dashboard.init.js");
  LoadScripts("/assets/js/app.min.js");
  // LoadScripts("/assets/js/app.min.js.map");


  LoadScripts("/asset/js/jquery.min.js");
  LoadScripts("/asset/js/popper.min.js");
  LoadScripts("/asset/js/bootstrap.bundle.min.js");
  LoadScripts("/asset/js/plugin.js");
  LoadScripts("/asset/js/jquery.mCustomScrollbar.concat.min.js");
  LoadScripts("/asset/js/custom.js");
 
  return (
    <Fragment>
      <Router />
    </Fragment>
  );
}

export default App;