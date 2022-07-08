import React from "react";
import './Contact.css';
import { FaShoppingCart } from "react-icons/fa";
import { Button, Container, Dropdown, Nav, Navbar } from "react-bootstrap";
import { Link } from "react-router-dom";
import { CartState } from "../../context/Context";
import { AiFillDelete } from "react-icons/ai";
const Contact = () => {
  const {
    state: { cart },
    dispatch,
  } = CartState();
  return (
    <>
        <Navbar bg='dark' style={{height:'80px'}}>
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
      <section id="contactSec">
        <div className="contact-box">
          <div className="contact-links">
            <h2>CONTACT US</h2>
            <div className="links">
              <div className="link">
                <a href='https://in.linkedin.com/' target="_blank">
                  <img
                    src="https://i.postimg.cc/m2mg2Hjm/linkedin.png"
                    alt="linkedin"
                  />
                </a>
              </div>
              <div className="link">
                <a href="https://github.com/" target="_blank">
                  <img
                    src="https://i.postimg.cc/YCV2QBJg/github.png"
                    alt="github"
                  />
                </a>
              </div>
              <div className="link">
                <a href="https://mail.google.com/mail/u/0/#inbox" target="_blank">
                  <img
                    src="https://i.postimg.cc/NjLfyjPB/email.png"
                    alt="email"
                  />
                </a>
              </div>
            </div>
          </div>
          <div className="contact-form-wrapper">
            <form>
              <div className="form-item">
                <input type="text" name="sender" required />
                <label>Name:</label>
              </div>
              <div className="form-item">
                <input type="text" name="email" required />
                <label>Email:</label>
              </div>
              <div className="form-item">
                <textarea className="" name="message" required ></textarea>
                <label>Message:</label>
              </div>
              <Link to='/'>
              <button type='submit' className="submit-btn">
              <span></span>
              <span></span>
              <span></span>
              <span></span>
               SEND
            </button>
            </Link>
            </form>
          </div>
        </div>
      </section>
    </>
  );
};

export default Contact;
