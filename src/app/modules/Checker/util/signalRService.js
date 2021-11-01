import { HubConnectionBuilder, LogLevel } from '@microsoft/signalr';
//import {HubConnection} from   'signalr-client-react'

class SignalRController {
    constructor(props) {
        this.state={

            message:[]
        }
        //SignalR hub için bağlantı oluşturma(hubConnection nesnesi kurma)
       let connection=new HubConnectionBuilder().withUrl('http://192.168.1.110:27001/checkerhub').build()
       
       connection.start()
       .then(()=>{
           console.log("connected")
       })
       .then(()=>{
           connection.on('broadcastMessage',(data1,data2)=>{
           //console.log(data1,data2)
           var collection=[]
           collection.push( JSON.parse(data2))
           //console.log(collection)
          
           this.setState({message:collection})
           
          
    
       })
       })
       
            .catch(err => {
                console.log(err,'connection error');
            });
        /**
         *  const  registerReceiveMQEvent = (callback) => {
                //RABBITMQ KUYRUKTAN ÇEKİLEN MESAJ
                 connection.on("ReceiveMQMessage", function (message) {
                     console.log(message);
                     callback(message);
                 });
             }
         */

          

        //server ile bağlantı 

       
/*
 async function start(){
          try{
              await rConnection.start()

          }
        catch(error){
                setTimeout(()=>{rConnection.start()},2000)
        }} 

        start(); */
        

        
          
        
    }
    //192.168.1.110/checkerhub

    

    /** 
     *   registerReceiveEvent = (callback) => {
       //SIGNALR'DAN GELEN MESAJ
        this.rConnection.on("ReceiveMessage", function (message) {
            console.log(message);
            callback(message);
        });
    }

     

   //SIGNALR'A GÖNDERİLEN MESAJ
    sendMessage = (message) => {
        
        return this.rConnection.invoke("SendMessage", message)
        .then(()=>{console.log(" SendMessage success")})   
        .catch(function (data) {
                alert('cannot connect to the server');
            });
    }
    */

   
  

   
}

const SignalRService = new SignalRController();
export default SignalRService;