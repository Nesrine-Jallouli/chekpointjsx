import React, { Component } from 'react';
import imageInSrc from './imageInSrc.jpg';
import './style.css';
  export default class style extends Component {
    render(){
      return (
        <div>
          <div id="map" style={{maxWidth:"100vw" , border :"solid 1px black"}}>
              <h1  className="title red">Your name here</h1>
              <br/>
              <img src={imageInSrc}  width="320" alt="imageInSrc" />
              <br/>
              <img src="imageInPublic.jpg" width="320" alt="imageInPublic" />
          </div>
          <video width="320" height="240" controls>
            <source src="myVideo.mp4" type="video/mp4" />
          </video>
        </div>
      );
    }
  
  }


