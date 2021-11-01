import React from "react";
import CheckerHeaderPage from "../../components/CheckerHeaderPage";
import HighwayCart from '../../util/HighwayCart'
import IndustryCart from '../../util/IndustryCart'
import CityChangeCart from '../../util/CityChangeCart'
import Helmet from "react-helmet"
import {Notice} from '../../../../../_metronic/_partials/controls';
import PushNotification from '../../util/PushNotification';
import { FormattedMessage } from "react-intl";
import IVRTable from '../../util/IVRTable'

export default function CityChangePage() {
return (
     <> 
     <div className="row">
        <Helmet  htmlAttributes > <title>Rentacars's</title> </Helmet>
       <div className="col-lg-12 col-xxl-12"><CheckerHeaderPage/></div>
         <div className="col-lg-12 row ">


         <div className="col-lg-4 col-xxl-4 mt-2  "><h5 className='card-title align-items-start flex-column '>
         <span className='card-label fw-bolder fs-3 mb-1 '><FormattedMessage id="CITY_CHANGE" /></span>
         </h5><CityChangeCart/></div>

        <div className="col-lg-4 col-xxl-4  mt-2 "> <h5 className='card-title align-items-start flex-column '>
          <span className='card-label fw-bolder fs-3 mb-1 '><FormattedMessage id="HIGHWAY" /></span>
         </h5><HighwayCart/></div>
         <div className="col-lg-4 col-xxl-4  mt-2"><h5 className='card-title align-items-start flex-column  '>
        <span className='card-label fw-bolder fs-3 mb-1 '><FormattedMessage id="INDUSTRIAL_AREA" /></span>
        </h5><IndustryCart/></div> 
</div>

     <div className="col-lg-12 row ">
       <div className="col-lg-6 col-xxl-6 mt-3 "><h5 className='card-title align-items-start flex-column '>
       <span className='card-label fw-bolder fs-3 '>Push Notification </span>
       </h5><PushNotification/></div>

<div className="col-lg-6 col-xxl-6 mt-3  "><h5 className='card-title align-items-start flex-column '>
   <span className='card-label fw-bolder fs-3'>IVR Table </span>
 </h5><IVRTable/></div>
 
</div>
    
  </div>
   
     </>
   );
 }