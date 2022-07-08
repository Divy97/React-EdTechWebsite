import { FaShoppingCart } from "react-icons/fa";
import { AiFillDelete } from "react-icons/ai";
import {
  Badge,
  Button,
  Container,
  Dropdown,
  FormControl,
  Nav,
  Navbar,
} from "react-bootstrap";
import { Link, useLocation } from "react-router-dom";

import '../styles.css';
import { CartState } from "../../context/Context";

const CourseNavbar = () => {
  const {
    state: { cart },
    dispatch,
    productDispatch
  } = CartState();

  return (
    <div className="header">
    <Navbar  bg='dark' variant="light" style={{ height: 80 }}>
      <Container>
        <Navbar.Brand>
          <Link to="/" className="debug">DEBUG</Link>
        </Navbar.Brand>
        {useLocation().pathname.split("/")[1] !== "cart" && (
          <Navbar.Text className="search">
            <FormControl
              style={{ width: 500 }}
              type="search"
              placeholder="Search a Course..."
              className="m-auto"
              aria-label="Search"
              onChange={(e) => {
                productDispatch({
                  type: "FILTER_BY_SEARCH",
                  payload: e.target.value,
                });
              }}
            />
          </Navbar.Text>
        )}
        <Nav>
          <Dropdown>
            <Dropdown.Toggle variant="dark">
              <FaShoppingCart color="white" fontSize="25px" />
              <span class='cartP'>{cart.length}</span>
            </Dropdown.Toggle>

            <Dropdown.Menu style={{ minWidth: 370, marginLeft: '-280px' }}>
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
                    <Button style={{ width: "95%", margin: "0 10px" }} variant='outline-dark'>
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
    </div>
  );
};

export default CourseNavbar