import React,{useState} from 'react'
import './orderDetails.css'
import {sendOrder} from '../../../actions/orderActions';
import {connect } from 'react-redux'
import {useNavigate} from 'react-router-dom';
function OrderDetails({selectedPartner,sendOrder}) {
    const history=useNavigate();

    const[count,setCount]=useState(1);
    const[price,setPrice]=useState(1000);

    const handleIncrement = () => {
        setCount(prevCount => prevCount + 1);
      };
    
      //Create handleDecrement event handler
      const handleDecrement = () => {
        setCount(prevCount => prevCount - 1);
      };

      const handlePrice=()=>{
           setPrice(1000)
      }
      const handleSmallPrice=()=>{
          setPrice(100);
      }
      const handleSubmit=()=>{
          const finalPrice=count*price
          sendOrder(selectedPartner,finalPrice,count);
          history('/orderDetail');
          
      }
    return (
        <div>
            <div className="order__details">
                <h1 className="gradient__text">Order Details</h1>
                <div className="order__section" >
                    <h3 className="heading gradient__text">No of bags</h3>
                    <div className="incrementDecrement" >
                        <div class="quantity">
                            <a href="#" class="quantity__minus" onClick={handleDecrement}><span className="minus">-</span></a>
                            <h5 className="quantity__input" >{count}</h5>
                            <a href="#" class="quantity__plus" onClick={handleIncrement}><span className="plus">+</span></a>
                        </div>
                    </div>
                    <h3 className="heading gradient__text">Price per Bag</h3>
                    <section class="card-container">

                        <div class="smallCard" onClick={handleSmallPrice}>

                            <h1>&#x20b9;</h1>
                            <h3 className="heading">100</h3>
                            <p>per hour</p>
                        </div>

                        <div class="smallCard" onClick={handlePrice}>

                            <h1>&#x20b9;</h1>
                            <h3 className="heading">1000</h3>
                            <p>per day</p>
                        </div>


                    </section>
                    <button type="button" class="submit" onClick={handleSubmit} >Place Order</button>
                </div>
            </div>

        </div>
    )
}
const mapStateToProps=(state)=>({
selectedPartner:state.selectedPartner,
})

export default connect(mapStateToProps,{sendOrder})(OrderDetails)
