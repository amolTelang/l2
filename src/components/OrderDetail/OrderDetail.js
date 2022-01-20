import React from 'react'
import './orderDetail.css'
import {connect} from 'react-redux'
import {useNavigate} from 'react-router-dom';
function OrderDetail({orderDetails}) {
    const history=useNavigate();
    const handleClick=()=>{
            history('/paymentForm')
    }
    return (
        <div>
            <h1 className="gradient__text headingFinal ">Order Details</h1>
            <div className="orderDetails__section">
                <h1>Location</h1>
                {console.log(orderDetails)}
                <h3>{orderDetails.Name}</h3>
                <h3>{orderDetails.Address}</h3>
                <div className="gradientBar"/>
                <h1>For</h1>
                <h3>John Doe</h3>
                <div className="gradientBar"/>
                <h1>Total No of Bags</h1>
                <h3>{orderDetails.noOfBags}</h3>
                <div className="gradientBar"/>
                <h1>Total Amount</h1>
                <h3>&#x20b9; {orderDetails.price}</h3>
                <div className="gradientBar"/>
                <button type="button" className="submit" onClick={handleClick} >Pay &#x20b9;{orderDetails.price}</button>
            </div>
        </div>
    )
}
const mapStateToProps=state=>({
    orderDetails:state.orderDetails
})

export default connect(mapStateToProps,null)(OrderDetail);
