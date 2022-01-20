import React from 'react'
import './paymentForm.css'
import {connect} from 'react-redux'
import {Elements,CardElement,ElementsConsumer} from '@stripe/react-stripe-js';
import {loadStripe} from '@stripe/stripe-js';
import {useNavigate} from 'react-router-dom';

function PaymentForm({orderDetails}) {
  const history=useNavigate();
    const CARD_ELEMENT_OPTIONS = {
        iconStyle: "solid",
        hidePostalCode: true,
        style: {
          base: {
            iconColor: "rgb(240, 57, 122)",
            color: "rgb(240, 57, 122)",
            fontSize: "16px",
            fontFamily: '"Open Sans", sans-serif',
            fontSmoothing: "antialiased",
            "::placeholder": {
              color: "#CFD7DF"
            }
          },
          invalid: {
            color: "#e5424d",
            ":focus": {
              color: "#303238"
            }
          }
        }
      };
    const stripePromise=loadStripe(process.env.REACT_APP_STRIPE_API_KEY);

    const  handleSubmit=async (event,elements,stripe)=>{
        window.alert("please wait while we complete your transaction")
        event.preventDefault();
        if (!stripe || !elements) return;
        const cardElement = elements.getElement(CardElement);
        const { error, paymentMethod } = await stripe.createPaymentMethod({ type: 'card', card: cardElement });
        if (error) {
            console.log("error here")
            console.log('[error]', error);
            window.alert(error.message);
          } else {
            console.log(paymentMethod);
           window.alert("payment successfull!! redirecting")
           history('/')
           
        }
    }
    return (
        <div>
            <h1 className="gradient__text headingFinal ">Payment</h1>
            <div className="orderDetails__section">
            <Elements stripe={stripePromise}>
                <ElementsConsumer>
                    {({elements,stripe})=>(
                            <div>
                             <CardElement options={CARD_ELEMENT_OPTIONS}/>
                             <button onClick={(e) => handleSubmit(e, elements, stripe)} type="button" className="submit" >Pay &#x20b9;{orderDetails.price}</button>
                             </div>
                    )}
               
                </ElementsConsumer>
                
               
                </Elements>
            </div>
        </div>
    )
}

const mapStateToProps=state=>({
  orderDetails:state.orderDetails
})
export default connect(mapStateToProps,null)(PaymentForm)
