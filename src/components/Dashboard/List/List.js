import React, { useState, useEffect, createRef } from 'react';
import { CircularProgress, Grid, Typography, InputLabel, MenuItem, FormControl, Select } from '@material-ui/core';
import {useNavigate} from 'react-router-dom';
import PlaceDetails from '../PlaceDetails/PlaceDetails';
import './styles.css';
import{connect} from 'react-redux';

import { sendSelectedPartnerData } from '../../../actions/listActions';

const List = ({map}) => {
  const history=useNavigate();
  const handelClick=()=>{
   
    sendSelectedPartnerData(map);
    history('/partner');

  }
    return (
  <div className="list">
    <h1 className="gradient__text headingList">
      Choose nearest partner.
    </h1>
    <div className="partner__card">
                    <div className="card">
                        <div className="card__header">
                            <img src={map.img} alt="card__image" className="card__image" width="600"/>
                        </div>
                        <div className="card__body">
                            <span className="tag tag-blue">{map.Available}</span>
                            <h4>{map.Name}</h4>
                            <p>{map.Address}</p>
                        </div>
                        <div className="card__footer">
                             <div className="user">
                             <div className="user__info">
                                <h5>Certified Partner</h5>
                                <button type="button" className="chooseButton" onClick={handelClick}>Choose</button>
                             </div>
                            </div>
                        </div>
                    </div>

                </div>
    </div>
    
  );
};
const mapStateToProps=state=>({
  map:state.map
})
export default connect(mapStateToProps,{sendSelectedPartnerData})(List);