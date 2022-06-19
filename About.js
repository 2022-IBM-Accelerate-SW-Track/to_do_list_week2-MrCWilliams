import React, { Component } from "react";
import "./About.css";
import Hello from "../assets/IMG_1567.jpg";

export default class About extends Component {
  render() {
    return (
      <div>
        {/* <p>Design your About me page </p> */}
        <div class="split left">
          <div className="centered">
          <img 
              className="profile_image"
              // Image goes here
              src={Hello}
              alt="Profile Pic"
              ></img>
          </div>
        </div>
        <div className="split right">
          <div className="centered">
          <div className="name_title">Clarence L. Williams</div>
            <div className="brief_description">
              // Details about you goes here
              <h1><br></br>Education: Bachelors of Science in Computer Science and Managment Information Systems</h1>
              <h1><br></br>University: Prairie View A&M University</h1>
              <h1><br></br>Interests: Technical Product Management, reading, and working out</h1>
              <h1><br></br>Fun Fact: I was admitted into highschool at 12 years old</h1>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
