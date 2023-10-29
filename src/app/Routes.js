/**
 * High level router.
 *
 * Note: It's recommended to compose related routes in internal router
 * components (e.g: `src/app/modules/Auth/pages/AuthPage`, `src/app/BasePage`).
 */

import React,{useEffect} from "react";
import { Redirect, Switch, Route } from "react-router-dom";
import { shallowEqual, useSelector } from "react-redux";
import { Layout } from "../_metronic/layout";
import BasePage from "./BasePage";
import { Logout, AuthPage } from "./modules/Auth";
import ErrorsPage from "./modules/ErrorsExamples/ErrorsPage";

export function Routes() {
  const { isAuthorized ,hasAuthToken} = useSelector(
    ({ auth }) => ({
      isAuthorized: auth.user != null,
      hasAuthToken:auth.authToken !=null
    }),
    shallowEqual
  );

  useEffect(()=>{
    if(!hasAuthToken){
      localStorage.removeItem("access-token")
      localStorage.removeItem("expires_in")
      localStorage.removeItem("token_type")
    }

  },[hasAuthToken])

  return (
    <Switch>
    
        <Layout>
          <BasePage />
        </Layout>
     
    </Switch>
  );
}
