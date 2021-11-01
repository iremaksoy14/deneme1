/* eslint-disable jsx-a11y/role-supports-aria-props */
/* eslint-disable no-script-url,jsx-a11y/anchor-is-valid */
import React,{useEffect,useState} from "react";
import { useLocation } from "react-router";
import { NavLink } from "react-router-dom";
import SVG from "react-inlinesvg";
import { toAbsoluteUrl, checkIsActive } from "../../../../_helpers";
import { FormattedMessage } from "react-intl";

export function AsideMenuList({ layoutProps }) {
  const [data,setData]=useState([]);
  //const [route,setRoute]=useState("")

  const location = useLocation();
  const getMenuItemActive = (url, hasSubmenu = false) => {
    return checkIsActive(location, url)
      ? ` ${!hasSubmenu &&
          "menu-item-active"} menu-item-open menu-item-not-hightlighted`
      : "";
  };

/*
  const getData=()=>{
    fetch('http://localhost:3000/posts'
    ,{
      headers : { 
        'Content-Type': 'application/json',
        'Accept': 'application/json'
       }
    }
    )
      .then(function(response){
        console.log(response)
        return response.json();
      })
      .then(function(myJson) {
       setData(myJson)
       console.log("data",myJson)
     
       
       
      });
  } */

  useEffect(()=>{
    //getData()
  },[])

  
   const calculate=(item)=>{
     if(item.title==="Dashboard"){
      return "/dashboard"
     }
     
      if(item.title==="Checker")
      {
        return "/checker/city-change"
      }
      if(item.title==="Log out"){
        return "/logout"
      }
      else{
        return "/checker-city-change"
      }

   }



  return (
    <>
      
      <ul className={`menu-nav ${layoutProps.ulClasses}`}>
        
        <li
          className={`menu-item ${getMenuItemActive("/dashboard", false)}`}
          aria-haspopup="true"
        >
          
            <NavLink className="menu-link" to="/dashboard">
            <span className="svg-icon menu-icon">
              <SVG src={toAbsoluteUrl("/media/svg/icons/Design/Layers.svg")} />
            </span>
            <span className="menu-text"><FormattedMessage id="DASHBOARD" /></span>
          </NavLink>
        </li>
       
        <li
          className={`menu-item menu-item-submenu ${getMenuItemActive(
            "/checker",
            true
          )}`}
          aria-haspopup="true"
          data-menu-toggle="hover"
        >
          <NavLink className="menu-link menu-toggle" to="/checker">
            <span className="svg-icon menu-icon">
              <SVG src={toAbsoluteUrl("/media/svg/icons/Shopping/Box2.svg")} />
            </span>
            <span className="menu-text">Checker</span>
            <i className="menu-arrow" />
          </NavLink>
          <div className="menu-submenu ">
            <ul className="menu-subnav">
              <ul className="menu-subnav">
               <li
                  className={`menu-item ${getMenuItemActive(
                    "/checker/city-change"
                  )}`}
                  aria-haspopup="true"
                >
                  <NavLink className="menu-link" to="/checker/city-change">
                    <i className="menu-bullet menu-bullet-dot">
                      <span />
                    </i>
                    <span className="menu-text"> <FormattedMessage id="CITY_CHANGE" /></span>
                  </NavLink>
                </li>
          </ul>
            </ul>
          </div>

          <div className="menu-submenu ">
            <ul className="menu-subnav">
              <ul className="menu-subnav">
            </ul>
            </ul>
          </div>
        </li>
        <li
          className={`menu-item ${getMenuItemActive("/dashboard", false)}`}
          aria-haspopup="true"
        >
          <NavLink className="menu-link" to="/logout">
            <span className="svg-icon menu-icon">
              <SVG src={toAbsoluteUrl("/media/svg/icons/Design/Layers.svg")} />
            </span>
            <span className="menu-text"><FormattedMessage id="LOG_OUT" /></span>
          </NavLink>  {
          data && data.length>0 && data.map((item)=> <NavLink className="menu-link" to={calculate(item)}>
          <span className="svg-icon menu-icon">
            <SVG src={toAbsoluteUrl("/media/svg/icons/Design/Layers.svg")} />
          </span>
          <span className="menu-text">{item.title}</span>
        </NavLink>)
      }
          <div>
   
    </div>
          
        </li>
       
        

       
        {/*end::1 Level*/}

       
       
       
     
        
      </ul>

      
    </>
  );
}





/*
  {
       data && data.length>0 && data.map((item)=> <NavLink className="menu-link" to="/checker/city-change">
       <span className="svg-icon menu-icon">
         <SVG src={toAbsoluteUrl("/media/svg/icons/Design/Layers.svg")} />
       </span>
       <span className="menu-text">{item.title}</span>
     </NavLink>)
     } */
















/*
 <ul className="menu-subnav">
                <li
                  className="menu-item  menu-item-parent"
                  aria-haspopup="true"
                >
                  <span className="menu-link">
                    <span className="menu-text">Checker</span>
                  </span>
                </li>

 */



                /*
              
                 */