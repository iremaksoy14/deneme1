import React,{useEffect} from 'react';

import {InputLabel} from '@material-ui/core';
import {FormHelperText} from '@material-ui/core';
import {FormControl} from '@material-ui/core';
import {Select} from '@material-ui/core';
import {Button} from '@material-ui/core';
import {NativeSelect} from '@material-ui/core';
import {TextField} from '@material-ui/core';
import { useDispatch } from "react-redux";
import {Grid} from '@material-ui/core';
import axios from 'axios'
import {Card} from '@material-ui/core';
import {Notice} from '../../../../_metronic/_partials/controls';



const IDENTIT_LOCAL="http://192.168.1.110:27001/api/checker/start"

export default function Date() {
  //const classes = useStyles();

  const dispatch=useDispatch()
  const [state, setState] = React.useState({
    timeZone: 'Minute',
    time: null
  });

  const handleChange = (event) => {
    const name = event.target.name;
    setState({
      ...state,
      timeZone:event.target.value,
    });
  };

   const setChange = (event) => {
    const name = event.target.name;
    setState({
      ...state,
      time:event.target.value,
    });
  };


   const gonder=()=>{
   // console.log(state.timeZone,state.time)
    const data={
        "TimeZone":state.timeZone,
        "Time": state.time,
    }
 
const data1= JSON.stringify(data)
//console.log(data)

 const options = {
  headers: {
  'secret-key': process.env.REACT_APP_NOT_SECRET_CODE,
  'Accept': 'application/json',
  'Content-Type': 'application/json'
}
 }
  
 axios.post(IDENTIT_LOCAL,{
        "TimeZone":state.timeZone,
        "Time":  Number(state.time),
    }
 ,{
  'secret-key': process.env.REACT_APP_NOT_SECRET_CODE,
  'Accept': 'application/json',
  'Content-Type': 'application/json'
}).then(()=>{
      console.log("başarılı")   
    }) 
    .catch(err=>console.log("hata",err))

/** setState(() => ({
      timeZone:"",
      time:null
  }));*/
      
  setState({
    ...state,
   
    timeZone: state.timeZone="Minute",
    time:state.time=null
  })
  //console.log("yeni timeZone",state.timeZone)
 // console.log("yeni time",state.time)
  

}

 


  return (
    <Notice  >
    
    <div className="float-left mb-4 ">
    <span className="pb-6">
            <code>Şehir Değişikliği Hangfire Job :</code>
            </span>
    
    <FormControl  >
        <InputLabel htmlFor="age-native-simple"></InputLabel>
        <Select className="mt-0 ml-10 "
          native
        //  value="Minute"
         value={state.timeZone}
          onChange={handleChange}
          inputProps={{
            name: 'timeZone',
            id: 'age-native-simple',
          }}
        >
          <option aria-label="None" />
          <option value={"Hour"}>Saat</option>
          <option value={"Minute"}>Dakika</option>
          <option value={"Day"}>Gün</option>
        </Select>
      </FormControl>
    </div>


    
    

      <div  className="float-left ml-10">  <input    type="number"  onChange={setChange}  value={state.time}   id="standard-basic" label="Standard" /></div>

      <div className="float-left ml-10" >  <Button  onClick={gonder}  variant="contained">Gönder</Button>
     </div>
     
      
     
    </Notice>
  );
}