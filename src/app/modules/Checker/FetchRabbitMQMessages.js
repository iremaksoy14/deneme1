import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { actionCreators } from './store/RabbitMQ';
import rabbitMQMessageService from './util/rabbitMQMessageService';

//Sunucu tarafında RabbitMQ tüketicisini her 3 saniyede bir mesaj alacak şekilde yapılandırılması gerekiyor

class FetchRabbitMQMassages extends Component {
    constructor(props) {
        super(props);
        this.state = { message: '', messages: [], signalReceived: '' };
       

        this.rabbitMQMessageService = new rabbitMQMessageService((msg) =>
         {
            this.receiveMessage(msg);
        }, (msgs) => {
            this.receiveMQMessage(msgs);
        });
    }

    componentDidMount() {
       
        this.props.refreshAction();
        //this.timeInterval = setInterval(() => {
        //    this.props.refreshAction();
        //}, 1000);
    }

    sendToQ = () => {
        //mesajları Kuyruğa göndermek için
        //her tıklama kuyruğa bir mesaj ekler
        this.props.sendToQAction();
    }


    //tüketici, 3 mesajı arabellekte alacak ve tutacak şekilde yapılandırılmdı.
    //listenin her 3 saniyede bir otomatik olarak güncellenecek
    refresh = () => {
        this.props.refreshAction();
    }

    handleChange = (e) => {
        this.setState({ message: e.target.value });
    }

    receiveMessage = (msg) => {
        //sunucudan gelen mesajı dinler.
        //bileşen tarafından alınan sinyal
        console.log('Signal received by component: ' + msg);
        this.setState({ signalReceived: msg });
      //  console.log(this.state.receiveMessage)
    }

    receiveMQMessage = (msgs) => {
        debugger
        //sunucudan gelen List<string> mesajını dinler.
        //MQ'dan bileşen tarafından alınan mesaj
        console.log('Messages received by component from MQ: ' + msgs);
        
       
        this.setState({ messages: msgs });
        JSON.parse(this.state.messages)
        //console.log(this.state.messages)
    }


    //SignalR kullanarak oluşturduğumuz websocket üzerinden sunucuya mesaj gönderir
    sendMessageSignal = (e) => {
        e.preventDefault();
        const { message } = this.state;
        //input alanına girilen mesajı signalR'a  gönder
        this.rabbitMQMessageService.sendMessage(message);
    }

    render() {
        const { message, messages, signalReceived } = this.state;
        return (
            <div>
                <h1>Messages in Q</h1>
               
                {<MessagesTable
                   
                    handleChange={this.handleChange}
                    message={message}
                   
                    
                    signalReceived={signalReceived}/>}
            </div>
        );
    }
}

function MessagesTable(props) {
    return (
        <div>
            <div style={{ background: 'bisque', margin: '10px'}}>
                {!!props.signalReceived && ` Signal received: ${props.signalReceived}`}
            </div>
            <div style={{ display: 'flex' }}>
                <div style={{ margin: '10px' }}>
                    <input placeholder='Message' value={props.message} onChange={props.handleChange} />
                </div>
                <div style={{ margin: '10px' }}>
                    <button className="btn btn-primary" onClick={props.sendToQ}>SendToQ</button>
                </div>
                <div style={{ margin: '10px' }}>
                    <button className="btn btn-primary" onClick={props.sendMessageSignal}>Send Signal</button>
                   

                </div>
            </div>
            
          
        </div>
    );
}

function mapStateToProps(state) {
    const { rabbitMQMessages } = state
    return { rabbitMQMessages}
  }

  const mapDispatchToProps = ( dispatch) => {
    return {...bindActionCreators(actionCreators, dispatch)  }
  }
/** 
 * export default connect(
    state => state.rabbitMQMessages,
    dispatch => bindActionCreators(actionCreators, dispatch)
)(FetchRabbitMQMassages);

*/


export default connect(mapStateToProps,mapDispatchToProps)(FetchRabbitMQMassages)