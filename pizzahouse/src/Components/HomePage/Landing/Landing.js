import React from 'react'
import { useNavigate } from 'react-router-dom'
import '../../general.css'
import './css/landing.css'
import { useState } from 'react'
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons'
import { faArrowRight } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import img1 from '../../imgs/Landing/pizza.jpg'
import img2 from '../../imgs/Landing/pizza22.jpg'

function Landing() {
const changeBackground =()=>{
  const left =document.getElementById("left");
  const right =document.getElementById("right");
  const landingid =document.getElementById("landingid");
  // landingid.style.opacity="1";
  // // imgTwo.style.opacity="0";
  // // imgThree.style.opacity="0";
  landingid.classList.add("landing-tow");
  landingid.classList.remove("landingid");

}
const route = useNavigate()
  return (
    <div className='landing' id='landingid'>
      <div className="info">
      <h1 className='head1'>Perfect pizza </h1>
      <p className='parg1'>Experience the taste of a perfect pizza at PizzaHouse, one of the best restaurants</p>
      <button className='view'   onClick={() => route('Menu')}>View Our Menu</button>
      <div className="icon-left i" id='left'>
      <FontAwesomeIcon icon={faArrowLeft} className="icon" onClick={changeBackground}></FontAwesomeIcon>
      <img src={img1} alt="" />
      </div>
      <div className="icon-right i" id='right'>
      <FontAwesomeIcon icon={faArrowRight} className="icon" onClick={changeBackground}></FontAwesomeIcon>
      <img src={img2} alt="" />
      </div>
      </div>
    </div>
)
}


export default Landing
