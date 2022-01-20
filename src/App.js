import React from "react";
// import {Container} from "@material-ui/core";
import {BrowserRouter,Route,Routes} from "react-router-dom";

import './App.css';

//importing components
import Home from "./components/Home/Home";
import Navbar from "./components/Navbar/Navbar";
import Dashboard from "./components/Dashboard/Dashboard";
import Partner from './components/Partner/Partner';
import OrderDetail from './components/OrderDetail/OrderDetail'
import PaymentForm from "./components/PaymentForm/PaymentForm";
import Orders from './components/Orders/Orders';
//redux
import { Provider } from 'react-redux';
import store from './store';

//App function
const App=()=>{
    return(
        <Provider store={store}>
        <div>
            <div className="gradient__bg">
                <Navbar />
                </div> 
            <BrowserRouter>
            
                <div className="gradient__bg2">
            
                <Routes>
                   
                    <Route path="/" element={<Home/>}/>
                    <Route path="/dashboard" element={<Dashboard/>}/>
                    <Route path="/partner" element={<Partner/>}/>
                    <Route path="/orderDetail" element={<OrderDetail/>}/>
                    <Route path="/paymentForm" element={<PaymentForm/>}/>
                    <Route path="/orders" element={<Orders/>}/>
                   
                </Routes>
           
            </div> 
           </BrowserRouter>
        </div>
        </Provider>
           
    )
}

export default App;