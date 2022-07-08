import React from "react";
import "../index.css";
import featureImage1 from "../Assets/feature_1.png";
import featureImage2 from "../Assets/feature_2.png";
import featureImage3 from "../Assets/feature_3.png";

import Growth from "../Assets/growth.svg";
import office from "../Assets/office.svg";
import one from "../Assets/one.svg";
import FeatureBox from "./FeatureBox";
import { Card } from "react-bootstrap";

const Feature = () => {
  return (
    <>
    <div className="block">
    <h1
    style={{
      marginLeft:'340px',
      marginTop:'30px'
    }}
    >800+ Lives Transformed And Counting!</h1>
      <div
      className="cards"
        style={{
          display: "flex",
          flexDirection: "row",
        }}
      >
        
        <Card
          bg="dark"
          text="light"
          style={{ width: "20rem", height:'14rem', marginTop: "20px", marginLeft: "50px", borderRadius:'10px' }}
        >
          <Card.Body>
            <Card.Title>Placed At Apple </Card.Title>
            <Card.Text>
              I would recommend DEBUG Academy course to everyone who wants to
              revamp their career as they have an excellent curriculum which is
              coupled with a highly talented pool of instructors.
            </Card.Text>
          </Card.Body>
        </Card>
        <Card
          bg="danger"
          text="light"
          style={{ width: "20rem", height:'14rem', marginTop: "20px", marginLeft: "220px", borderRadius:'10px' }}
        >
          <Card.Body>
            <Card.Title>Placed At Google</Card.Title>
            <Card.Text>
              Getting to learn System Design topics from people having worked at
              top companies that face a large scale, getting to learn algorithms
              from people who have been at ICPC World Finals is an altogether
              different experience.
            </Card.Text>
          </Card.Body>
        </Card>
        <Card
          bg="info"
          text="light"
          style={{width: "20rem", height:'14rem', marginTop: "20px", marginLeft: "200px",borderRadius:'10px' }}
        >
          <Card.Body>
            <Card.Title>Placed At Amazon</Card.Title>
            <Card.Text>
              was looking to make a move in my career. That's when I heard about
              DEBUG Academy! I immediately applied and started attending
              classes and got an offer from Amazon.
            </Card.Text>
          </Card.Body>
        </Card>
      </div> 
      <div className="extraFeatures">
        <div className="extraFeaturesOne">
          <img src={Growth} alt="Growth" />
          <p>
            <big style={{ fontWeight: "bold" }}>126%</big> Avg. Salary Hike
          </p>
        </div>
        <div className="extraFeaturesTwo">
          <img src={one} alt="office" />
          <p>
            <big style={{ fontWeight: "bold" }}>1:1</big> Mentorship
          </p>
        </div>
        <div className="extraFeaturesThree">
          <img src={office} alt="one" />
          <p>
            <big style={{ fontWeight: "bold" }}>1.7 Cr</big> Highest CTC
          </p>
        </div>
      </div>
      </div>
      <div id="features">
        <div className="a-container">
          <FeatureBox image={featureImage1} title={"Web Development"} />
          <FeatureBox image={featureImage2} title={"Mobile Development"} />
          <FeatureBox image={featureImage3} title={"Essential Courses"} />
        </div>
      </div>
    </>
  );
};

export default Feature;
