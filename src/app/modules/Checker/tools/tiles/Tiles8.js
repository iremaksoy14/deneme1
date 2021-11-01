import React,{useState} from 'react';
import { MDBCard, MDBCardTitle, MDBCardText, MDBCardBody, MDBCardHeader } from 'mdb-react-ui-kit';

/**
 * warning
 * danger
 * success
 * info
 * light
 * dark
 * 
 * 
 */
export default function Tiles8({number,desc,color}) {
  
  return (
    <div  style={{marginLeft:5}}>
     

      <MDBCard  background={color} className='mb-3 ' style={{ maxWidth: '18rem',fontSize:"12"}}>
        <MDBCardHeader  style={{fontSize:"20px",height:"100px"}}  background={color} >{desc}</MDBCardHeader>
        <MDBCardBody >
         
          <MDBCardText  style={{fontSize:"18px",fontWeight:"bolder"}} background="warning">
           {number}
          </MDBCardText>
        </MDBCardBody>
      </MDBCard>

    
    </div>
  );
}