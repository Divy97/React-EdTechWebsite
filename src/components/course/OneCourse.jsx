import React from "react";
import { Card, Button } from "react-bootstrap";
import { CartState } from "../../context/Context";
import Rating from "./Rating";

const OneCourse = ({ course }) => {
  const {
    state: { cart },
    dispatch
  } = CartState();
  console.log(cart); 
  return (
    <div className="products">
      <Card>
        <Card.Img style={{width:"350px",height:'290px'}} variant="top" src={course.image} alt="avatar" />
        <Card.Body>
          <Card.Title>{course.name}</Card.Title>
          <Card.Subtitle style={{ paddingBottom: 10 }}>
            <span>₹ {course.price}</span>
            <br />
            <Rating rating={course.ratings} />
          </Card.Subtitle>
          {cart.some((p) => p.id === course.id) ? (
            <Button 
            onClick={() => {
                dispatch({
                    type: 'REMOVE_FROM_CART',
                    payload: course
                })
            }}
            variant="danger">Remove From Cart</Button>
          ) : (
            <Button 
            onClick={() => {
                dispatch({
                    type: 'ADD_TO_CART',
                    payload: course
                })
            }}
            variant="dark">Add to Cart</Button>
          )}
        </Card.Body>
      </Card>
    </div>
  );
};

export default OneCourse;
