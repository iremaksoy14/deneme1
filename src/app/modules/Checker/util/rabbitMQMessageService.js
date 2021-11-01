import SignalRService from './signalRService';

export default class rabbitMQMessageService {
    constructor(messageReceived, mqMessageReceived) {
        this._messageReceived = messageReceived;
        this._mqMessageReceived = mqMessageReceived;
        /**
         *   SignalRService.registerReceiveEvent((msg) => {
             //signalR'dan gelen mesaj
            this._messageReceived(msg);
        });

        SignalRService.registerReceiveMQEvent((msg) => {
             //rabbitMQ kuyruktan  çekilen mesaj
            this._mqMessageReceived(msg);
        });

         sendMessage = (message) => {
        //signalR'a gönderilen mesaj
        SignalRService.sendMessage(message);
    }
         */

      
    }

   
}