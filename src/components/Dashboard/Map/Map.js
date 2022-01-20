import React, { useState} from 'react';

import ReactMapGL,{Marker,Popup} from "react-map-gl";


import {connect} from 'react-redux'

import partnerData from '../../data/partners.json'
import { sendPartnerData } from '../../../actions/mapActions';

import marker from '../../../assets/marker.png'
import './styles.css'
const Map = ({place,map,sendPartnerData}) => {
  var lat=0,lng=0;
  if(place.place==='Dharwad')
  {
    lat=15.4540505;
    lng=75.0066516;

  }
  else if(place.place==="Murdeshwar")
  {
    lat=14.1008191;
    lng=74.505423;
  }else if(place.place==='Udupi')
  {
      lat=13.3419169;
      lng=74.7473232;
  }
  else
  {
    lat=14.2810827;
    lng=74.4446716;
  }
 

  const [viewport, setViewport] = useState({
    latitude:lat,
    longitude: lng,
    width: "50vw",
    height: "60vh",
    zoom:9
  });
 
  

  const [selectedPartner,setSelectedPartner]=useState();
  

 

  const hello=(objectt)=>{
    sendPartnerData(objectt);
  }
  return (
  
    <>
    
      <ReactMapGL {...viewport}
      // ref={mapRef}
      mapboxApiAccessToken="pk.eyJ1IjoiYW1vbHRlbGFuZyIsImEiOiJja3lrMzJtMDYycnVjMm9wOGNnMDVwaGZkIn0.vN6DBG_gfMNQIp3Eoa_xKA"
      onViewportChange={viewport=>{
        setViewport(viewport);
      }}>
      

        {
          partnerData.features.map(partner=>(
            <Marker key={partner.properties.id} latitude={partner.geometry.coordinates[0]}
            longitude={partner.geometry.coordinates[1]}>
              <button className="marker-btn"
              
              onClick={e => {
                e.preventDefault();
                setSelectedPartner(partner)
                hello(partner)
              }}
            >
              <img src={marker} alt="marker" />
            </button>
            </Marker>
          ))
        }
        {selectedPartner ? (
          <Popup
            latitude={selectedPartner.geometry.coordinates[0]}
            longitude={selectedPartner.geometry.coordinates[1]}
            onClose={() => {
              setSelectedPartner(null);
            }}
          >
            <div>
              <h2>{selectedPartner.properties.NAME}</h2>
              <p>{selectedPartner.properties.ADDRESS}</p>
            </div>
          </Popup>
        ) : null}
          
      </ReactMapGL>
    </>
  )
};
const mapStateToProps=state=>({
  place:state.place,
  map:state.map
})
export default connect(mapStateToProps,{sendPartnerData})(Map);