
import React from "react";
import { Link } from "react-router-dom";
import { FaShoppingCart } from "react-icons/fa";
import { Dropdown, Button } from "react-bootstrap";
import { CartState } from "../../context/Context";
import { AiFillDelete } from "react-icons/ai";
const Navbar = () => {

  const {
    state: {cart}, dispatch
  } = CartState();

  return (
    <>
      <nav class="navbar navbar-expand-lg navbar-light bg-light">
        <Link class="navbar-brand logo" to="/">
          <h1>DEBUG</h1>
        </Link>
        <button
          class="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarNavAltMarkup"
          aria-controls="navbarNavAltMarkup"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
          <div class="navbar-nav">
            <Link class="nav-item nav-link" to="/"
            style={{
              marginLeft:'500px',
              fontSize:'20px'
            }}
            >
              Home
            </Link>
            <Link class="nav-item nav-link" to="/courses"
             style={{
              marginLeft:'50px',
              fontSize:'20px'
            }}
            >
              Courses
            </Link>
            <Link class="nav-item nav-link" to="/contactus"
            style={{
              marginLeft:'50px',
              fontSize:'20px'
            }}
            >
              Contact
            </Link>
            <Link class="nav-item nav-link" to="/login"
            style={{
              marginLeft:'50px',
              fontSize:'20px'
            }}>
              Login
            </Link>
            <div
            style={{
              marginLeft:'50px',
              fontSize:'20px'
            }}>
              <Dropdown className="toggleRight">
                <Dropdown.Toggle variant="dark">
                  <FaShoppingCart className="navIconCart" />
                  <span
                    style={{
                      backgroundColor: "#000",
                      marginLeft: "5px",
                      fontWeight: "700",
                    }}
                  >
                    {cart.length}
                  </span>
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
                          variant="outline-darks"
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
            </div>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
