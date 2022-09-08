import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './Routers/App';
import reportWebVitals from './reportWebVitals';
import {BrowserRouter} from 'react-router-dom';

// CSS
import "./assets/libs/admin-resources/jquery.vectormap/jquery-jvectormap-1.2.2.css";
import "./assets/css/preloader.min.css";
import 'bootstrap/dist/css/bootstrap.css';
import "./assets/css/icons.min.css";
import "./assets/libs/select2/select2.min.css";
import "./assets/libs/flatpickr/flatpickr.min.css";
import "./assets/libs/daterangepicker/daterangepicker.css";
import "./assets/css/custom.css";
import "./assets/css/app.min.css";

// JS
import "./assets/libs/jquery/jquery.min.js";
import 'bootstrap';
import 'bootstrap/dist/js/bootstrap.min.js';
import 'bootstrap/dist/js/bootstrap.js';
// import "./assets/js/app.js"

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>
);

reportWebVitals();
