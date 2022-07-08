import React, { useState } from "react";
import "./Login.css";
import { BiShowAlt } from "react-icons/bi";
import { Link, useNavigate } from "react-router-dom";
import { AiFillDelete } from "react-icons/ai";
import { Button, Container, Dropdown, Nav, Navbar } from "react-bootstrap";
import { FaShoppingCart } from "react-icons/fa";
import { CartState } from "../../context/Context";
const Login = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [mNumber, setMNumber] = useState("");

  const [isLogin, setIsLogin] = useState(false);
  const navigate = useNavigate();

  const showPassword = () => {
    let pass = document.getElementById("myInput");
    if (pass.type === "password") {
      pass.type = "text";
    } else {
      pass.type = "password";
    }
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    setName("");
    setEmail("");
    setPassword("");
    setMNumber("");

    navigate("/", { replace: "true" });
    setIsLogin(true);
  };

  const {
    state: { cart },
    dispatch,
  } = CartState();
  return (
    <>
      <Navbar bg="dark" style={{ height: "80px" }}>
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
      <div className="main">
        <div className="login-box">
          <h2>Create An Account</h2>
          <form onSubmit={handleSubmit}>
            <div className="user-box">
              <input
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
              />
              <label>Full Name</label>
            </div>
            <div className="user-box">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
              <label>Email</label>
            </div>
            <div className="user-box">
              <input
                type="password"
                id="myInput"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
              <label>Password</label>
              <BiShowAlt className="passIcon" onClick={showPassword} />
            </div>
            <div className="user-box">
              <input
                type="text"
                value={mNumber}
                onChange={(e) => setMNumber(e.target.value)}
                required
              />
              <label>Mobile Number</label>
            </div>
            <button type="submit">
              <span></span>
              <span></span>
              <span></span>
              <span></span>
              {isLogin ? "LogOut" : "LogIn"}
            </button>
          </form>
        </div>
      </div>
    </>
  );
};

export default Login;
