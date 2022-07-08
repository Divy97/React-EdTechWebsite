import { useEffect, useState } from "react";
import { Button, Col, Container, Dropdown, Image, ListGroup, Nav, Navbar, Row } from "react-bootstrap";
import { AiFillDelete } from "react-icons/ai";
import { FaShoppingCart } from "react-icons/fa";
import { Link } from "react-router-dom";
import { CartState } from "../../context/Context";
import Rating from "../course/Rating";
import "../styles.css";
const Cart = () => {
  const {
    state: { cart },
    dispatch,
  } = CartState();
  const [total, setTotal] = useState();

  useEffect(() => {
    setTotal(
      cart.reduce((acc, curr) => acc + Number(curr.price) * curr.qty, 0)
    );
  }, [cart]);

  return (
    <>
      <Navbar bg="dark" variant="light" style={{ height: 80 }}>
        <Container>
          <Navbar.Brand>
            <Link to="/" className="debug">
              DEBUG
            </Link>
          </Navbar.Brand>
          <Nav>
            <Dropdown>
              <Dropdown.Toggle variant="dark">
                <FaShoppingCart color="white" fontSize="25px" />
                <span class="cartP">{cart.length}</span>
              </Dropdown.Toggle>

              <Dropdown.Menu style={{ minWidth: 370, marginLeft: "-280px" }}>
                {cart.length > 0 ? (
                  <>
                    {cart.map((course) => (
                      <span className="cartitem" key={course.id}>
                        <img
                          src={course.image}
                          className="cartItemImg"
                          alt={course.name}
                        />
                        <div className="cartItemDetail">
                          <span>{course.name}</span>
                          <span>₹ {course.price}</span>
                        </div>
                        <AiFillDelete
                          fontSize="20px"
                          style={{ cursor: "pointer" }}
                          onClick={() =>
                            dispatch({
                              type: "REMOVE_FROM_CART",
                              payload: course,
                            })
                          }
                        />
                      </span>
                    ))}
                    <Link to="/cart">
                      <Button
                        style={{ width: "95%", margin: "0 10px" }}
                        variant="outline-dark"
                      >
                        Go To Cart
                      </Button>
                    </Link>
                  </>
                ) : (
                  <span style={{ padding: 10 }}>Cart is Empty!</span>
                )}
              </Dropdown.Menu>
            </Dropdown>
          </Nav>
        </Container>
      </Navbar>

      <div className="course">
        <div className="courseContainer">
          <ListGroup>
            {cart.map((course) => (
              <ListGroup.Item key={course.id}>
                <Row>
                  <Col md={2}>
                    <Image
                      src={course.image}
                      alt={course.name}
                      fluid
                      rounded
                      style={{
                        marginLeft: "-200px",
                        width: "500px",
                        height: "100px",
                      }}
                    />
                  </Col>
                  <Col md={2}>
                    <span style={{ marginLeft: "-100px", fontSize: "20px" }}>
                      {course.name}
                    </span>
                  </Col>
                  <Col md={2}>
                    <span style={{ marginLeft: "10px", fontSize: "20px" }}>
                      ₹ {course.price}
                    </span>
                  </Col>
                  <Col md={2}>
                    <span style={{ marginLeft: "0px" }}>
                      <Rating rating={course.ratings} />
                    </span>
                  </Col>
                  <Col md={2}>
                    <Button
                      type="button"
                      variant="light"
                      onClick={() =>
                        dispatch({
                          type: "REMOVE_FROM_CART",
                          payload: course,
                        })
                      }
                    >
                      <AiFillDelete fontSize="20px" />
                    </Button>
                  </Col>
                </Row>
              </ListGroup.Item>
            ))}
          </ListGroup>
        </div>
        <div
          className="filters summary"
        >
          <span className="title">Subtotal ({cart.length}) items</span>
          <span style={{ fontWeight: 700, fontSize: 20 }}>
            Total: ₹ {total}
          </span>
          <Link to="/">
            <Button
              type="button"
              variant="outline-light"
              disabled={cart.length === 0}
              style={{
                width: "400px",
              }}
            >
              Proceed to Checkout
            </Button>
          </Link>
        </div>
      </div>
    </>
  );
};

export default Cart;
