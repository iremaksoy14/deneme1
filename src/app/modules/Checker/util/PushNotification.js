import React from "react";
import { FieldWrapper } from '@progress/kendo-react-form';
import { HubConnectionBuilder, LogLevel } from '@microsoft/signalr';
import axios from 'axios'
import ReactTooltip from "react-tooltip";
import ReactTable from "react-table-6";
import "react-table-v6/react-table.css"
import { tsPropertySignature } from "@babel/types";
class PushNotification extends React.Component {
  state = {
    defaultPage: 0,
    rows: [{}],
    color: "success",
    toggle: true,
    datainput: 20,
    tableData: [],
    columns: [
      {
        Header: () => <p style={{ fontWeight: "bolder" }} >Durum</p>,
        accessor: 'Status',
        maxWidth: 100,
        getProps: (state, rowInfo, column) => {
          return {
            style: {
              color: rowInfo && rowInfo.row.Status == "Error" ? 'red' : null,
            },
          };
        },
      },
      {
        Header: () => <p style={{ fontWeight: "bolder" }} >Tarih</p>,
        accessor: 'CreateDate',
        Cell: props => <span >{props.value}</span>,
        minWidth: 75,
      },
      {
        Header: () => <p style={{ fontWeight: "bolder" }} >Miktar</p>,
        accessor: 'Count',
        Cell: props => <span>{props.value}</span>,
        maxWidth: 50,
      },
      {
        Header: () => <p style={{ fontWeight: "bolder" }} >Açıklama</p>,
        Cell: (row) => <div>  <ReactTooltip place="top" type="info" effect="solid" /><span data-tip={row.value}>

          {row.value}
        </span>
        </div>

        ,
        accessor: 'Message',

        minWidth: 200,
        getProps: (state, rowInfo, column) => {
          return {
            style: {
              color: rowInfo && rowInfo.row.Status == "Error" ? 'red' : null,
            },
          };
        },
      },

    ]
  };


  componentDidMount = () => {
   // this.setState({ toggle: !this.state.toggle })
   
    
          let connection = new HubConnectionBuilder()
            .withUrl("http://192.168.1.110:27001/pushnotificationhub")
            .withAutomaticReconnect()
            .configureLogging(LogLevel.Information)
            .build();


          connection.start()
            .then(() => {
              console.log("push notification table success")
              this.setState({ status: true })
            }).catch((err) => {
              console.log("push notification error", err)
              this.setState({ status: false })
            })
          connection.on("PushNotification", (message, payload) => {
               console.log("payload",payload)
            var json = JSON.parse(payload)
            console.log("json parse  push notification veri", json)

            json.map((item) => {
              this.setState({ tableData: [item, ...this.state.tableData] })
              console.log("lenght :", this.state.tableData.length)


            })
            var count = 0
            this.state.tableData.map((item, index) => {
              count++;
              if (count >= 19) {

                this.state.tableData.splice(index, this.state.tableData.length - count)

                console.log(index)
                // this.setState({tableData:this.state.tableData.filter((item,i)=>i!==index)})

              }


            })


            console.log("updated state push notification", this.state.tableData)
          })
        
      
      
  }
  handleChangeInput = (e) => { this.setState({ datainput: e.target.value }); };

  //date,toplam,description
  handleChange = (idx) => (e) => {
    const { name, value } = e.target;
    const rows = [...this.state.rows];
    rows[idx] = {
      [name]: value
    };
    this.setState({
      rows
    });
  };

  handleAddRow = () => {
    const item = {
      Status: "",
      Count: "",
      Mesaagege: ""
    };
    this.setState({
      tableData: [...this.state.tableData, item]
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
      <div style={{ backgroundColor: "white" }}>

        <div className="container">
          <div className="row clearfix">
            <div className="col-md-12 column">
              <FieldWrapper>
                <div className={"k-form-field-wrap"} style={{ marginBottom: 10 }}> </div>
              </FieldWrapper>

              <ReactTable style={{
                fontFamily: "sans-serif",
                textAlign: "center", overflow: "scroll", display: "block", height: "250px"
              }}
                data={this.state.tableData}
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

export default PushNotification;