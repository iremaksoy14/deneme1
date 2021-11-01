import React,{Component} from "react";

import Tiles8 from '../../../app/modules/Checker/tools/tiles/Tiles8'

  class  Demo1Dashboard extends Component {

constructor(props){
  super(props)
  this.state={
    data:[],

  }
  
}



setColor=(item)=>{
  if(item=="Kiradaki Araçlar")
  {
     return "primary"
  }
  else if(item=="Boştaki Araçlar")
  {
    return  "info" 
  }
  else if(item=="Bugün Teslim Alınacak Araçlar")
  {
    return "danger" 
  }
  else if(item=="Bugün Yapacaklarım")
  {
     return "warning"
  }
  else if(item=="Cüzdanımdaki Tutar")
  {
    return  "success"
  }
  else if(item=="Harita Üzerindeki Araçlarım")
  {
     return  "secondary"
  }


}

componentDidMount=()=>{
 
  const requestOptions = {
  method: 'POST',
  headers: { 'Content-Type': 'application/json' },
  
};
fetch('http://192.168.1.101:30010/api/Home/DashboardCounter', requestOptions)
   .then(res => 
   
    res.json())

  .then((response) => {
    console.log("başarılı status");
    console.log("satus",response)
   
   
    const propertyNames = Object.values(response);
    console.log("data",propertyNames);
   
    this.setState({data:propertyNames})
 
    
 
  })
 
  .catch((err)=>{
    console.log("hata durumu",err)
  })
 
}
  render(){
    return (
      <div>
             <div className="col-lg-12 row "  style={{justifyContent:"center",marginLeft:10}} >
         {
            this.state.data.map((item)=><Tiles8  color={this.setColor(item.desc)} desc={item.desc} number={item.number}/>)
           }
              

       </div>
      </div>
    )
  }

  }

export default Demo1Dashboard;