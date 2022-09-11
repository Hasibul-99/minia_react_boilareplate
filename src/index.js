import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './Routers/App';
import reportWebVitals from './reportWebVitals';
import {BrowserRouter} from 'react-router-dom';

import 'bootstrap';
import 'bootstrap/dist/js/bootstrap.min.js';
import 'bootstrap/dist/js/bootstrap.js';

// CSS
import "./assets/libs/admin-resources/jquery.vectormap/jquery-jvectormap-1.2.2.css";
import "./assets/css/preloader.min.css";
import "bootstrap/scss/bootstrap.scss";
import './assets/css/bootstrap.min.css';
import "./assets/css/icons.min.css";
import 'antd/dist/antd.css';
import "./assets/css/custom.css";
import "./assets/css/app.min.css";
import "./assets/scss/main.scss";


// JS
// import "./assets/libs/jquery/jquery.min.js";
// import 'jquery/dist/jquery.min.js';
// import './assets/libs/metismenu/metisMenu.min.js';
// import './assets/libs/simplebar/simplebar.min.js';
// import 'bootstrap';
// import 'bootstrap/dist/js/bootstrap.min.js';
// import 'bootstrap/dist/js/bootstrap.js';
// import "./assets/js/app.js"


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>
);

reportWebVitals();
