import React from 'react'

import List from './List/List'
import Map from './Map/Map'




import './dashboard.css'

function Dashboard() {
    return (
        <>
           
            <div className="mapSection section__padding">
                <div className="partnerContent">
                 <List/>
                </div>
                <div className="mapContent">
                   <Map/>
                </div>
            </div>  
                
                    
                
            
        </>
    );
};

// Dashboard.propTypes = {

// }


export default Dashboard

