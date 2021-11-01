import React,{Component} from "react";
import { Line } from "react-chartjs-2";
import "chartjs-plugin-streaming";
import "chartjs-plugin-datalabels";
import {HubConnectionBuilder,LogLevel} from '@microsoft/signalr';
import { injectIntl} from "react-intl";
//var createReactClass = require("create-react-class");

class HighwayCart extends Component{
 min=0;
 max=30;
   constructor(props){
    super(props)
    this.state={
     
      status:false,
      highway_data:null,
      chart_category:34,
      data:{
      point:0,
      datasets: [
      {
        backgroundColor: "rgba(99, 184, 255, 0.8)",
        pointBackgroundColor: "#fff",
        pointHoverBackgroundColor: "#63b8ff",
        pointStyle: "circle",
        label: this.props.intl.formatMessage({
          id: "CREATED_NOTIFICATION",
        }),
        style:{
          justifyContent:"center",
          alignItems:"center"
  
          },
        borderColor: "#63b8ff",
        borderWidth: 3,
        borderJoinStyle: "round",
        lineTension: 0.3,
        fontColor: "#fff",
        hitRadius: 5,
        hoverRadius: 8,
        radius: 4,
        fill: false,
        data:[],
     },
     ]
      },
      options:{
        tooltips: {
          callbacks: {
            title: function(tooltipItem, data) {
             
             // return data['labels'][tooltipItem[0]['index']];
             return "Oluşturulan  Otoyol"
              
             
            },
            label: function(tooltipItem, data) {
             
             // return data['datasets'][0]['data'][tooltipItem['index']];
            },
            afterLabel: function(tooltipItem, data) {
             
              console.log("value",tooltipItem['value'])
              
            
              return tooltipItem['value'];
            } }
          },
        maintainAspectRatio : true,
        responsive : true,
        cutoutPercentage: 80,
        scales: {
          x: {
            grid: {
              display: false
            }
          },
          y: {
            display: false,
            grid: {
              display: false,
             
            }
          }
        },
        plugins: {
          legend: {
            display: false
          },
         datalabels: {
            display: true,
            color: "black",
           align: "end",
            padding: {
              right: 1
            },
            clip:true,
            formatter: function (value) {
                  return "\n" + value.y;
            }
          }
        },
        
      scales: {
          xAxes: [
            {
              ticks: {
                autoskip: true,
                autoSkipPadding: 30,

                fontColor: 'transparent'
            },
              type: "realtime",
              distribution: 'linear',
              realtime: {
              delay: 0,
              duration: 180000,
               }
            }
          ],
          yAxes: [
            {
              scaleLabel: {
              display: true,
              fontFamily: "Arial",
              labelString: "",
              fontSize: 20,
              fontColor: "#6c757d"
              },
              
              ticks: {
                min: 0,
             
                stepSize:5,
                  },
               },
            
 ]
        }
      }

    }
  }
  
componentDidMount=()=>{
     let connection = new HubConnectionBuilder()
    .withUrl("http://192.168.1.110:27001/higwayhub")
    .withAutomaticReconnect()  
    .configureLogging(LogLevel.Information)
    .build();
    connection.start()
        .then(()=>{
          console.log("city change success")
            this.setState({status:true})
        }).catch((err)=>{
          console.log("city change error",err)
            this.setState({status:false})
        })
      connection.on("Higway", (message,payload) => {
        this.setState({status:true})
        console.log("DATE",Date.now())
        const payloadJson=JSON.parse(payload)
           if(payloadJson==null){
          return
          } 
          console.log("highway  data ",payloadJson)
          this.setState({highway_data:payloadJson.HigWayCount})
        
          })

       setInterval(() => {
        this.state.point = this.state.highway_data;
        if(this.state.status){
          this.GetData()
          this.setState({status:false})
              }
},1000);
}

    GetData=()=> {
      this.state.data.datasets[0].data.push({
      x: Date.now(),
      y:this.state.point
      });
     }
    
    
     render(){
         return(
       <div style={{backgroundColor:"white"}}>
     
          <Line height="140"  data={this.state.data} options={this.state.options} />
        </div>
    
    
      )
  }

}

export default injectIntl(HighwayCart)


