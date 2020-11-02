import React, { Component } from 'react';
import '../App.css';
import {TinyButton as ScrollUpButton} from "react-scroll-up-button";
class Footer extends Component {
  render() {
    return (
      <div className="wrapper">
        <div className="ring">
          <div className="coccoc-alo-phone coccoc-alo-green coccoc-alo-show">
            <div className="coccoc-alo-ph-circle"></div>
            <div className="coccoc-alo-ph-circle-fill"></div>
            <div className="coccoc-alo-ph-img-circle"></div>
          </div>
          {/* <a href="#" id="return-to-top"><i className="fa fa-chevron-up" aria-hidden="true"></i></a> */}
        </div>
        <ScrollUpButton
          ShowAtPosition={100}
          AnimationDuration={800}
          ToggledStyle={{right: 0}}
        />
      </div>
    )
  }
}
export default Footer