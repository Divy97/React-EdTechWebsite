import { CartState } from "../../context/Context";
import OneCourse from "./OneCourse";
import Rating from "./Rating";
import {  Button } from "react-bootstrap";
import { useState } from "react";
import '../styles.css';
import CourseNavbar from "./CourseNavbar";
const Courses = () => {
  const {
    state: { courses },
    productState: { byRating, searchQuery },
    productDispatch,
  } = CartState();

  let [items, setItems] = useState(courses);
  if (searchQuery) {
    items = items.filter((course) =>
      course.name.toLowerCase().includes(searchQuery)
    );
  }
  if (byRating) {
    items = items.filter((course) => course.ratings >= byRating);
  }
  const filterItem = (curCate) => {
    const updated = courses.filter((curELE) => {
      console.log("in function", curELE.category);
      return curELE.category === curCate;
    });
    setItems(updated);
  };

  return (
    <>
    <div style={{backgroundColor: '#6a9ac4'}}>
    <CourseNavbar/>
    <div className="course" >
      <div className="filters">
        <div className="title">Choose Your TechStack</div>
        <span>
          <button
          className="coursesBtn"
           onClick={() => {
              filterItem("web");
            }}
          >
            {" "}
            Web Development{" "}
          </button>
        </span>
        <span>
          <button
          className="coursesBtn"
            onClick={() => {
              filterItem("Mobile");
            }}
          >
            {" "}
            Mobile Development{" "}
          </button>
        </span>
        <span>
          <button
          className="coursesBtn"
            onClick={() => {
              filterItem("Prerequisite");
            }}
          >
            {" "}
            Prerequisite{" "}
          </button>
        </span>
        <label style={{ paddingRight: 100, paddingTop:470}}> Rating: </label>
        <span className="rating">
          
          <p></p>
          <Rating
            rating={byRating}
            onClick={(index) =>
              productDispatch({
                type: "FILTER_BY_RATING",
                payload: index + 1,
              })
            }
            style={{ cursor: "pointer" }}
          />
        </span>
        <Button
          variant="outline-light"
          onClick={() =>
            productDispatch({
              type: "CLEAR_FILTERS",
            })
          }
        >
          Clear Filters
        </Button>
      </div>

      <div className="courseContainer">
        {items.map((course) => {
          return <OneCourse course={course} key={course.id} />;
        })}
      </div>
    </div>
    </div>
    </>
  );
};

export default Courses;
