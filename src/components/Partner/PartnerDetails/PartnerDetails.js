import React from 'react'
import {connect} from 'react-redux'

import './partnerDetails.css'


function PartnerDetails({selectedPartner,map}) {
    return (
        <div>
            <div className="partner__details">
                <h1 className="gradient__text">Partner Details</h1>
                <div className="partner__card">
                    <div className="card">
                        <div className="card__header">
                            <img src={map.img} alt="card__image" className="card__image" width="600"/>
                        </div>
                        <div className="card__body">
                            <span className="tag tag-blue">{selectedPartner.Available}</span>
                            <h4>{selectedPartner.Name}</h4>
                            <p>{selectedPartner.Address}</p>
                        </div>
                        <div className="card__footer">
                             <div className="user">
                             <div className="user__info">
                                <h5>Certified Partner</h5>
                                <h5>Selected!</h5>
                             </div>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
           
        </div>
    )
}

const mapStateToProps=state=>({
   selectedPartner:state.selectedPartner,
   map:state.map,
  })

export default connect(mapStateToProps,null)(PartnerDetails)
