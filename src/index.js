/*!

=========================================================
* Material Dashboard React - v1.9.0
=========================================================

* Product Page: https://www.creative-tim.com/product/material-dashboard-react
* Copyright 2020 Creative Tim (https://www.creative-tim.com)
* Licensed under MIT (https://github.com/creativetimofficial/material-dashboard-react/blob/master/LICENSE.md)

* Coded by Creative Tim

=========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

*/
import React from "react";
import ReactDOM from "react-dom";
import { createBrowserHistory } from "history";
import { Router, Route, Switch, Redirect } from "react-router-dom";
import firebase from 'firebase';
// core components
import Admin from "layouts/Admin.js";
import RTL from "layouts/RTL.js";
import Login from "layouts/Login.js";

import "assets/css/material-dashboard-react.css?v=1.9.0";

const hist = createBrowserHistory();
const firebaseConfig = {
  apiKey: "AIzaSyBKS6ecNzchqEYq2LJ0VdlBHJakXNSNSTI",
  authDomain: "webdesk-74f51.firebaseapp.com",
  databaseURL: "https://webdesk-74f51-default-rtdb.firebaseio.com",
  projectId: "webdesk-74f51",
  storageBucket: "webdesk-74f51.appspot.com",
  messagingSenderId: "896441490259",
  appId: "1:896441490259:web:d6b0ca1b3dfde9b1dbdfa6",
  measurementId: "G-GN1BCFYQTQ"
};
firebase.initializeApp(firebaseConfig);

ReactDOM.render(
  <Router history={hist}>
    <Switch>
      <Route path="/admin" component={Admin} />
      <Route path="/rtl" component={RTL} />
      <Route path="/login" component={Login} />
    <Redirect from="/" to="/admin/dashboard" />
    </Switch>
  </Router>,
  document.getElementById("root")
);
