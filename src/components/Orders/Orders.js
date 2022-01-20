import React from 'react';
import {connect} from 'react-redux';
import './orders.css'

function Orders({orderDetails}) {
    {console.log(orderDetails)}
  if(orderDetails.placed==="true")
  return(
      <div>
            <h1 className="gradient__text headingFinal ">Your Orders</h1>
            <div className="trueOrders">
            <h1>Location</h1>
        <h1>{orderDetails.Name}</h1>
        <h1>{orderDetails.Address}</h1>
        <h1>Total No Of Bags</h1>
        <h1>{orderDetails.noOfBags}</h1>
        <h1>Amount Paid</h1>
        <h1>{orderDetails.price}</h1>
      </div>
      <div className="gradientBar"/>
            </div>
   
    
    
  )
  else
  return(
      <div>
      <h1 className="gradient__text headingFinal ">Your Orders</h1>
      <h1 className="gradient__text headingFinal"> No Orders yet!</h1>
      </div>
  
  )
}


const mapStateToProps=state=>({
    orderDetails:state.orderDetails,
})

export default connect(mapStateToProps,null)(Orders);
