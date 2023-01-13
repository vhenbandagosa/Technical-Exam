import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";

import PrivateRoutes from "./private_routes";
import PublicRoutes from "./public_routes";
import SignInForm from "../components/landing_pages/signin_form";
import MainPages from "../components/main_pages/main_pages";
import Calculator from "../components/calculator/calculator";
import NotFound from "../components";

export default function Routes() {
  return (
    <BrowserRouter>
      <Switch>
        <PublicRoutes exact path="/" component={SignInForm} />
        <PrivateRoutes exact path="/main-page" component={MainPages} />
        <PrivateRoutes exact path="/calculator" component={Calculator} />
        <Route component={NotFound} />
      </Switch>
    </BrowserRouter>
  );
}
