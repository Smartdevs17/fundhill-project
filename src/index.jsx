// STYLES
import "./index.css";

import { StrictMode } from "react";
import { render } from "react-dom";
import reportWebVitals from './reportWebVitals';

// APP
import App from './App';


render(
  <StrictMode>
    <App />
  </StrictMode>,
  document.getElementById('root')
);

const isDev = process.env.NODE_ENV === "development";
isDev && reportWebVitals(console.log);
