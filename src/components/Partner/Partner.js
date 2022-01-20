import React from 'react'


import PartnerDetails from './PartnerDetails/PartnerDetails'
import OrderDetails from './OrderDetails/OrderDetails'

import './partner.css'

function Partner() {
    return (
        <div className="partner__section section__padding">
            <div className="partner__content">
            <PartnerDetails/>
            </div>
            <div className="orderDetails__content">
            <OrderDetails/>
            </div>
            
            
            
        </div>
    )
}

export default Partner
