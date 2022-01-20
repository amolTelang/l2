import React,{useState} from 'react';
import people from '../../../assets/people.png'
import headerImage from '../../../assets/headerImage.svg';
import './header.css';
import { sendData } from '../../../actions/homeActions';
import {useNavigate} from 'react-router-dom';
import {connect} from 'react-redux';
import PropTypes from 'react-redux';
const Header = ({sendData}) => {
  const [place,setPlace]=useState('Dharwad');
  const history=useNavigate();
  const handleClick =()=>{
      sendData(place);
      history('/dashboard');
  }
  
  return (
  <div className="gpt3__header section__padding" id="home">
    <div className="gpt3__header-content">
    <h1 className="gradient__text">Luggage Storage Near You</h1>
      <p>Find luggage storage in certified shops &amp; hotels.</p>
      <div className="gpt3__header-content__input">
        
        <select name="locatins" onChange={e=>setPlace(e.target.value)}>
          <option value="Dharwad">Dharwad</option>
          <option value="Murdeshwar">Murdeshwar</option>
          <option value="Udupi">Udupi</option>
          <option value="Honnavar">Honnavar</option>
        </select> 
        <button type="button" onClick={handleClick}>Go!</button>
      </div>

      <div className="gpt3__header-content__people">
        <img src={people} />
        <p>Trusted among people</p>
      </div>
    </div>

    <div className="gpt3__header-image">
      <img src={headerImage} />
    </div>
  </div>
);
}


export default connect(null,{sendData})(Header);