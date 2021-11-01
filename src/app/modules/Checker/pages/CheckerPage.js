import React, { Suspense } from "react";
import { Redirect, Switch } from "react-router-dom";
import  CityChangePage  from "../pages/city-change/CityChangePage"
import { LayoutSplashScreen, ContentRoute } from "../../../../_metronic/layout";

export  function CheckerPage() {
  return (
    <Suspense fallback={<LayoutSplashScreen />}>
      <Switch>
        {
          <Redirect
            exact={true}
            from="/checker"
            to="/checker/city-change"
          />
        }
        <ContentRoute path="/checker/city-change" component={CityChangePage} />
      </Switch>
    </Suspense>
  );
}