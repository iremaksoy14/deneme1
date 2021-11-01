import React,{Component} from "react";
import { Line } from "react-chartjs-2";
import "chartjs-plugin-streaming";
import {HubConnectionBuilder,LogLevel} from '@microsoft/signalr';
import {Notice} from '../../../../_metronic/_partials/controls';
import ChartDataLabels from 'chartjs-plugin-datalabels';
import { Chart } from "chart.js";
import "chartjs-plugin-datalabels";
var createReactClass = require("create-react-class");

export default class ForbiddenZoneCart extends Component{
constructor(props){
    super(props)
    this.state={
      forbiddenZone_data:null,
      chart_category:34,
      data:{
      point:0,
      datasets: [
      {
        backgroundColor: "rgba(99, 184, 255, 0.8)",
        pointBackgroundColor: "#fff",
        pointHoverBackgroundColor: "#63b8ff",
        pointStyle: "circle",
        label: "Oluşturulan Notification",
        borderColor: "#63b8ff",
        borderWidth: 3,
        borderJoinStyle: "round",
        lineTension: 0.3,
        fontColor: "#fff",
        hitRadius: 5,
        hoverRadius: 8,
        radius: 4,
        fill: false,
        data:[]
        },
      
        ]
      },
      options:{
        maintainAspectRatio: false,
        scales: {
          x: {
            grid: {
              display: false
            }
          },
          y: {
            display: false,
            grid: {
              display: false
            }
          }
        },
        plugins: {
          legend: {
            display: false
          },
          title: {
            display: true,
            text: "Avg interest by month (days)",
            padding: {
              bottom: 30
            },
            weight: "bold",
            color: "#00325c",
            font: {
              size: 13
            },
            align: "start"
          },
          datalabels: {
            display: true,
            color: "black",
            align: "end",
            padding: {
              right: 2
            },
            labels: {
              padding: { top: 10 },
              title: {
                font: {
                  weight: "bold"
                }
              },
              value: {
                color: "green"
              }
            },
            formatter: function (value) {
              console.log("value",value.y)
              return "\n" + value.y;
            }
          }
        },
        scales: {
          xAxes: [
            {
              type: "realtime",
              realtime: {
              delay: 50,
              refresh: 30000,
              duration: 50000,
               onRefresh: this.GetData
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
                max: 10,
                min: 0
              }
            }
          ]
        }
      }

    }
  }
  componentDidMount=()=>{
    var deneme=[]
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
          console.log("rediscount",payloadJson)
          console.log("deneme",deneme)
          this.setState({forbiddenZone_data:payloadJson.CreateNotificationCount})
          console.log("data_chart",this.state.forbiddenZone_data)
          })

        setInterval(() => {
        this.state.point = this.state.forbiddenZone_data;
        console.log("point",this.state.point)
                      }, 20000);
               }

    GetData=()=> {
      this.state.data.datasets[0].data.push({
      x: Date.now(),
      y:this.state.point
      });
     }
     render(){
    return(
      
       <div>
       <Line   height="200" data={this.state.data} options={this.state.options} />
       </div>
      
      )
  }

}









