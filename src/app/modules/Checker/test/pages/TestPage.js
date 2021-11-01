import React, { Suspense } from "react";
import { Redirect, Switch } from "react-router-dom";
import { CheckerPage } from "./checker/CheckerPages";
import { CheckerEdit } from "./checker/checker-edit/CheckerEdit";
import { LayoutSplashScreen, ContentRoute } from "../../../../../_metronic/layout";

export default function TestPage() {
  return (
    <Suspense fallback={<LayoutSplashScreen />}>
      <Switch>
        {
          /* Redirect from eCommerce root URL to /customers */
          <Redirect
            exact={true}
            from="/test"
            to="/test/checker"
          />
        }
       
        <ContentRoute path="/test/checker/new" component={CheckerEdit} />
        <ContentRoute
          path="/test/checker/:id/edit"
          component={CheckerEdit}
        />

        <ContentRoute path="/test/checker" component={CheckerPage} />
      </Switch>
    </Suspense>
  );
}
