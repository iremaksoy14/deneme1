import React, { Suspense, lazy } from "react";
import { Redirect, Switch, Route } from "react-router-dom";
import { LayoutSplashScreen, ContentRoute } from "../_metronic/layout";
import { BuilderPage } from "./pages/BuilderPage";
import { MyPage } from "./pages/MyPage";
import { DashboardPage } from "./pages/DashboardPage";

import {Tables} from "./modules/Checker/tools/tables/advance-tables/index"
import {BaseTables} from './modules/Checker/tools/tables/base-tables/index'
import {MixedWidget} from './modules/Checker/tools/mixed/index'
import {DropDowns} from './modules/Checker/tools/dropdowns/index'
import {ListWidget} from './modules/Checker/tools/lists/index'
import {Tiles} from './modules/Checker/tools/tiles/index'
import {StatWidget} from './modules/Checker/tools/stats/index'
import {CheckerPage} from "../app/modules/Checker/pages/CheckerPage"
import DataTable from './modules/Checker/tools/tables/advance-tables/DataTable'
import BannerPage from './modules/Checker/components/Banner/BannerPage'
import SlideTable from './modules/Checker/components/Banner/SlideTable'
import DetailComponent from './modules/Checker/components/Kendo/main'
import Index from './modules/Checker/schedule/Index'
import KendoGrid from "./modules/Checker/components/Kendo/main";
import Data from './modules/Checker/components/Kendo/data'


const GoogleMaterialPage = lazy(() =>
  import("./modules/GoogleMaterialExamples/GoogleMaterialPage")
);
const ReactBootstrapPage = lazy(() =>
  import("./modules/ReactBootstrapExamples/ReactBootstrapPage")
);
const ECommercePage = lazy(() =>
  import("./modules/ECommerce/pages/eCommercePage")
);
const TestPage = lazy(() =>
  import("./modules/Checker/test/pages/TestPage")
);
const UserProfilepage = lazy(() =>
  import("./modules/UserProfile/UserProfilePage")
);
// const CheckerPage = lazy(() =>
//   import("./modules/Checker/pages/CheckerPage")
// );


export default function BasePage() {
  // useEffect(() => {
  //   console.log('Base page');
  // }, []) // [] - is required if you need only one call
  // https://reactjs.org/docs/hooks-reference.html#useeffect

  return (
    <Suspense fallback={<LayoutSplashScreen />}>
      <Switch>
        {
          /* Redirect from root URL to /dashboard. */
          <Redirect exact from="/" to="/checker" />
        }
        <ContentRoute path="/dashboard" component={DashboardPage} />
        {/* <ContentRoute path="/builder" component={BuilderPage} />
        <ContentRoute path="/my-page" component={MyPage} />
        <Route path="/google-material" component={GoogleMaterialPage} />
        <Route path="/react-bootstrap" component={ReactBootstrapPage} />
        <Route path="/e-commerce" component={ECommercePage} />
        <Route path="/test" component={TestPage} /> */}



        {/* <Route path="/user-profile" component={UserProfilepage} />
        <Route path="/tables" component={Tables} />
        <Route path="/base-tables" component={BaseTables} />
        <Route path="/mixeswidgets" component={MixedWidget} />
        <Route path="/dropdowns" component={DropDowns} />
        <Route path="/listwidgets" component={ListWidget} />
        <Route path="/tiles" component={Tiles} />
        <Route path="/checker" component={CheckerPage} />,
        <Route path="/datatable" component={DataTable} />,
      
        <Route path="/calendar" component={Index} />,
        <Route path="/banner" component={BannerPage} />,
        <Route path="/slidertable" component={SlideTable} />,
        <Route path="/kendogrid" component={KendoGrid} />,
        <Route path="/data" component={Data} />,
      
       
       
        <Redirect to="error/error-v1" /> */}
      </Switch>
    </Suspense>
  );
}
