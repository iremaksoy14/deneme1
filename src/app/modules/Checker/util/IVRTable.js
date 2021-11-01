
import React,{Component} from "react";
import {FieldWrapper } from '@progress/kendo-react-form';
import {HubConnectionBuilder,LogLevel} from '@microsoft/signalr';
import ReactTable from "react-table-6"; 
import ReactTooltip from "react-tooltip";
import "react-table-v6/react-table.css" 

import Moment from 'moment'
class IVRTable extends Component {
  state = {
    defaultPage:0,
    rows: [{}],
    color:"success",
    toggle:true,
    datainput:20,
    status:false,
    table : [],
     columns : [
    {
      Header: ()=><p style={{fontWeight:"bolder"}} >Tarih</p>,
    
      accessor: 'ldate', 
      maxWidth: 150,
      Cell: props => <span >{props.value.substring(0, 10) +" "+props.value.substring(11,19)}</span>,
      
      getProps: (state, rowInfo, column) => {
        return {
            style: {
              //  color: rowInfo && rowInfo.row.Status =="Error" ? 'red' : null,
            },
        };
    },
    },
    {
      Header: ()=><p style={{fontWeight:"bolder"}} > Hata Tip</p>,
      accessor: 'msgtype', 
      
      Cell: props => <span >{this.changeName(props.value)}</span>
       ,
      maxWidth: 90,
      getProps: (state, rowInfo, column) => {
        return {
       //  style:{color:this.Color(rowInfo && rowInfo.row.msgtype)}
        };
    },
    },
    {
      Header: ()=><p style={{fontWeight:"bolder"}} > Çalışan Uygulama Adı</p>,
      accessor: 'clientName', 
      
      Cell: props => <span  >{props.value}</span>
       ,
      maxWidth: 180,
    
    },
    
    {
      Header: ()=><p style={{fontWeight:"bolder"}} >Açıklama</p>,
      
      Cell: (row) =><div>  <ReactTooltip place="left" type="info" effect="solid" /><span data-tip={row.value}>
     {row.value}
    </span>
    </div>
   ,
      accessor: 'ldescription', 
      maxWidth: 400,
      getProps: (state, rowInfo, column) => {
        return {
            style: {
              //  color: rowInfo && rowInfo.row.Status =="Error" ? 'red' : null,
            }
        };
    },
    }
    
  ]
  };
 
  changeName=(changeName)=>{
    if(changeName==1){
      return "Message"
    }
    else if(changeName==2){
      return "Error"
    }
    else if(changeName==3){
      return "Warning"
    }
  }


  componentDidMount=()=>{
     var liste = new Array();
    let connection = new HubConnectionBuilder()
    .withUrl("http://192.168.1.110:27001/ivrhub")
    .withAutomaticReconnect()  
    .configureLogging(LogLevel.Information)
    .build();
    connection.start()
    .then(()=>{
      console.log("ivr  table success")
    })
    .catch((err)=>{
      console.log("ivr  error",err)
    })

    connection.on("IvrLog", (message,payload) => {
       console.log("ivr payload data ",payload)     
        liste.push(payload);
        console.log("push list",liste)

        
        liste.map((item)=>{
          this.setState({ table: [item,...this.state.table]})
          console.log("lenght :" ,this.state.table.length)
      
   
  }) 
  var count=0
  this.state.table.map((item,index)=>{
    count++;
    if(count>=19){

      this.state.table.splice(index,this.state.table.length-count)
      
      console.log(index)
     // this.setState({tableData:this.state.tableData.filter((item,i)=>i!==index)})

    }
  

  })  
  console.log("update  ıvr state",this.state.table)
  console.log("update  ıvr state length",this.state.table.length)
     
       
        
         
}) 
 }

  
     handleAddRow = () => {
    const item = {
      Status: "",
      Count: "",
      Mesaagege:""
    };
    this.setState({
      table: [...this.state.table, item]
    });
  };
  handleRemoveRow = () => {
    this.setState({
      rows: this.state.rows.slice(0, -1)
    });
  };
  handleRemoveSpecificRow = (idx) => () => {
    const rows = [...this.state.rows];
    rows.splice(idx, 1);
    this.setState({ rows });
  };
  render() {
    return (
      <div style={{backgroundColor:"white"}}>
        <div className="container">
          <div className="row clearfix">
          <div className="col-md-12 column">
            <FieldWrapper>
     <div className={"k-form-field-wrap"} style={{marginBottom:10}}> </div>
          </FieldWrapper>
    
     <ReactTable  style={{ fontFamily: "sans-serif",
  textAlign:"center",overflow:"scroll",display:"block",height:"250px"}}
        data={this.state.table}
        columns={this.state.columns}
        showPagination={false}
       pageSize={this.state.datainput}
       defaultSortDesc={true}
       maxRows={50}
           />
   
     </div>
     </div>
    </div>
     </div>
    );
  }
}
export default IVRTable;