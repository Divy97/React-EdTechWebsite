import React from 'react'
import { Button } from 'react-bootstrap';
import {Link} from 'react-router-dom';
import '../index.css';

const FeatureBox = ({image, title}) => {
  return (
    <div className="a-box">
        <div className="a-b-img">
            <img src={image} alt="" />
        </div>
        <div className="s-b-text">
            <h2>{title}</h2>
            <Link to='/courses'>
            <Button variant='outline-dark'
            style={{
              width:'290px'
            }}
            >
              Know More
            </Button>
            </Link>
        </div>
    </div>
  )
}

export default FeatureBox;