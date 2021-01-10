import React, { Component } from 'react'
export default class Slider extends Component {

   render() {
    return (
      <div className="slider-container rev_slider_wrapper" style={{ height: 700 }}>
        
      <div id="revolutionSlider" className="slider rev_slider" data-plugin-revolution-slider data-plugin-options="{'delay': 9000, 'gridwidth': 800, 'gridheight': 700}">
       
        <ul>
          <li data-transition="fade">
            <img src="img/parkimg/anasayfa1.jpg" data-bgposition="center center" data-bgfit="cover" data-bgrepeat="no-repeat" className="rev-slidebg" />
            <div className="tp-caption" data-x="center" data-hoffset={-150} data-y="center" data-voffset={-95} data-start={1000} style={{ zIndex: 5 }} data-transform_in="x:[-300%];opacity:0;s:500;"><img src="img/parkimg/slide-title-border.png" /></div>
            <div className="tp-caption top-label" data-x="center" data-hoffset={0} data-y="center" data-voffset={-95} data-start={500} style={{ zIndex: 5 }} data-transform_in="y:[-300%];opacity:0;s:500;">PARK HUKUK</div>
            <div className="tp-caption" data-x="center" data-hoffset={150} data-y="center" data-voffset={-95} data-start={1000} style={{ zIndex: 5 }} data-transform_in="x:[300%];opacity:0;s:500;"><img src="img/parkimg/slide-title-border.png" /></div>
            <div className="tp-caption main-label" data-x="center" data-hoffset={0} data-y="center" data-voffset={-45} data-start={1500} data-whitespace="nowrap" data-transform_in="y:[100%];s:500;" data-transform_out="opacity:0;s:500;" style={{ zIndex: 5 }} data-mask_in="x:0px;y:0px;">Avukatlık {"&"} Danışmanlık</div>
            <div className="tp-caption main-label" data-x="center" data-hoffset={0} data-y="center" data-voffset={10} data-start={1500} data-whitespace="nowrap" data-transform_in="y:[100%];s:500;" data-transform_out="opacity:0;s:500;" style={{ zIndex: 5 }} data-mask_in="x:0px;y:0px;"> Bürosu</div>
            <div className="tp-caption bottom-label" data-x="center" data-hoffset={0} data-y="center" data-voffset={60} data-start={2000} style={{ zIndex: 5 }} data-transform_in="y:[100%];opacity:0;s:500;">Adalet devletin amacıdır. (James Madison)</div>
          
          </li>
          <li data-transition="fade">
            <img src="img/parkimg/anasayfa2.jpg" data-bgposition="center center" data-bgfit="cover" data-bgrepeat="no-repeat" className="rev-slidebg" />
            <div className="tp-caption" data-x="center" data-hoffset={-150} data-y="center" data-voffset={-95} data-start={1000} style={{ zIndex: 5 }} data-transform_in="x:[-300%];opacity:0;s:500;"><img src="img/parkimg/slide-title-border.png" /></div>
            <div className="tp-caption top-label" data-x="center" data-hoffset={0} data-y="center" data-voffset={-95} data-start={500} style={{ zIndex: 5 }} data-transform_in="y:[-300%];opacity:0;s:500;">PARK HUKUK</div>
            <div className="tp-caption" data-x="center" data-hoffset={150} data-y="center" data-voffset={-95} data-start={1000} style={{ zIndex: 5 }} data-transform_in="x:[300%];opacity:0;s:500;"><img src="img/parkimg/slide-title-border.png" /></div>
            <div className="tp-caption main-label" data-x="center" data-hoffset={0} data-y="center" data-voffset={-45} data-start={1500} data-whitespace="nowrap" data-transform_in="y:[100%];s:500;" data-transform_out="opacity:0;s:500;" style={{ zIndex: 5 }} data-mask_in="x:0px;y:0px;">Avukatlık {"&"} Danışmanlık</div>
            <div className="tp-caption main-label" data-x="center" data-hoffset={0} data-y="center" data-voffset={10} data-start={1500} data-whitespace="nowrap" data-transform_in="y:[100%];s:500;" data-transform_out="opacity:0;s:500;" style={{ zIndex: 5 }} data-mask_in="x:0px;y:0px;"> Bürosu</div>
            <div className="tp-caption bottom-label" data-x="center" data-hoffset={0} data-y="center" data-voffset={60} data-start={2000} style={{ zIndex: 5 }} data-transform_in="y:[100%];opacity:0;s:500;">Adalet devletin amacıdır. (James Madison)</div>
          
            <div className="tp-dottedoverlay tp-opacity-overlay" />
          </li>
        </ul>
      </div>
    </div>
    )
  }
}







// import React from 'react'
// import {withRouter} from "react-router-dom"
// import {useLocation} from "react-router-dom";
// import { useState, useEffect } from 'react';
// function Slider() {
//   const location = useLocation();
 
//   useEffect(() => {
//    console.log("dd",)
   
//   }, [location.pathname]);
 
//   return (
    
//   )
// }
// export default withRouter(Slider);
