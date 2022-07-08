import { createContext, useContext, useReducer } from "react";

import { cartReducer, productReducer } from "./Reducers";
import { courses } from "./courses";
const Cart = createContext();

const Context = ({ children }) => {
  // const courses = [...Array(20)].map(() => ({
  //   id: faker.datatype.uuid(),
  //   name: faker.internet.userName(),
  //   price: faker.commerce.price(),
  //   image: faker.image.avatar(),
  //   ratings: faker.helpers.arrayElement([1,2,3,4,5])
  // }));

  const [state, dispatch] = useReducer(cartReducer, {
    courses: courses,
    cart: []
  });

  const [productState, productDispatch] = useReducer(productReducer, {
    courses: courses,
    byCategory: 'Web Development',
    byRating: 0,
    searchQuery: ""
  });
  
  console.log(courses);
  
  return <Cart.Provider value={{state, dispatch, productState, productDispatch}}>{children}</Cart.Provider>
};

export const CartState = () => {
    return useContext(Cart);
}

export default Context;
