import React, { Component } from 'react';
import {HubConnectionBuilder,LogLevel} from '@microsoft/signalr';
import "react-toastify/dist/ReactToastify.css";
import CityChangeCart from '../util/CityChangeCart'


import "../../ECommerce/pages/products/product-edit/css/chart.css";

class CheckerCityChangeCarts extends Component {
  constructor(props) {
    super(props);
        this.state = {
            status:false,
             chart_data:[],
             chart_category:[],                        
            }
        }

componentDidMount=()=>{

    let connection = new HubConnectionBuilder()
    .withUrl("http://192.168.1.110:27001/checkerhub")
    .withAutomaticReconnect()  
    .configureLogging(LogLevel.Information)
    .build();
    
connection.start()
        .then(()=>{
            this.setState({status:true})
        }).catch((err)=>{
            this.setState({status:false})
        })
    
    connection.on("broadcastMessage", (message,payload) => {
        const payloadJson=JSON.parse(payload)
       
    if(payloadJson==null){
        return
        }

        console.log("payloadJSON",payloadJson)
  //  this.setState({data:this.state.chart_data.push(`${payloadJson.CityChangeNotifyTime}`)})
    //this.setState({categories:this.state.chart_category.push(`${payloadJson.RedisCount}`)})
    console.log("data and categories",this.state.chart_data.length,this.state.chart_category.length)           
    if(this.state.chart_data.length== 5){
        console.log("silme işlemi 1.")
        console.log(this.state.chart_data)
        this.setState({
            chart_data:[...this.state.chart_data].splice(1)
          });
          console.log(this.state.chart_data)
    }

    if(this.state.chart_category.length== 5){
        console.log("silme işlemi 2.")
        console.log(this.state.chart_data)

        this.setState({
            chart_category:[...this.state.chart_category].splice(1)
          });
          console.log(this.state.chart_category)
    }

        this.setState({
            chart_data:[...this.state.chart_data, `${payloadJson.CityChangeNotifyTime}`]
          });
          this.setState({
            chart_category:[...this.state.chart_category, `${payloadJson.RedisCount}`]
          });          
        })      
    }
 
    render() {
    return (            
        <div className="=App">
         
           
            <div className="">
           
        <CityChangeCart data={this.state.chart_data} categories={this.state.chart_category} type="line"  height={350}   />
     
      

            </div>    
        </div>
    );
  }
}

export default CheckerCityChangeCarts