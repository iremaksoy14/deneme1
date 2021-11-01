import React, { Component } from 'react';
import {HubConnectionBuilder,LogLevel} from '@microsoft/signalr';
import {injectIntl} from "react-intl";
import "react-toastify/dist/ReactToastify.css";

//import CheckerFormAlert from '../forms/CheckerFormAlert'
import {TilesWidget} from './TilesWidget'
class CheckerHeaderPage extends Component {
  constructor(props) {
      super(props);
        this.state = {
         
          Redis:null,
          BasarsoftRequest:null,
          BasarsoftResult:null,
          RedisName:"Redis",
          BasarsoftName:this.props.intl.formatMessage({
            id: "BASARSOFT_SENDER",
          }),
          BasarsoftDonen:this.props.intl.formatMessage({
            id: "BASARSOFT_RETURN",
          })
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
       // console.log("checker-header- success")
        this.setState({status:true})
      }).catch((err)=>{
        this.setState({status:false})
        console.log("checker-header-error")
  })
    
  connection.on("broadcastMessage", (message,payload) => {
  const payloadJson=JSON.parse(payload)
  this.setState({Redis:payloadJson.RedisCount})
  this.setState({BasarsoftRequest:payloadJson.BasarsoftCreatetedCount})
  this.setState({BasarsoftResult:payloadJson.BasarSoftAnswerCount})
})}

 render() {
    return (            
      <div className="App">        
        <div class="container">
   
       
       
          <div className="row justify-content-center align-items-center">
           
           
            <TilesWidget className="ml-15"  name={this.state.RedisName} status={this.state.Redis}/>
           
            <TilesWidget className="ml-15"  name={this.state.BasarsoftName} status={this.state.BasarsoftRequest}/>
          
           <TilesWidget className="ml-15"  name={this.state.BasarsoftDonen} status={this.state.BasarsoftResult}/>
          
          
           </div>
         </div>
       </div>
      );
    }
  }

export default injectIntl(CheckerHeaderPage)


/**
 *  justify-content-md-center 
 */