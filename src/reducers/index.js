import { combineReducers } from "redux";
import {
  GET_ALL_PRODUCT,
  GET_NUMBER_CART,
  ADD_CART,
  DECREASE_QUANTITY,
  INCREASE_QUANTITY,
  DELETE_CART,
} from "../actions/index";

const initialState = {
  numberCart: 0,
  carts: [],
  products: [],
};

function todoProduct(state = initialState, action) {
  switch (action.type) {
    case GET_ALL_PRODUCT:
      return {
        ...state,
        products: action.payload,
      };
    case GET_NUMBER_CART:
      return {
        ...state,
      };
    case ADD_CART:
      if (state.numberCart == 0) {
        let cart = {
          id: action.payload.id,
          quantity: 1,
          name: action.payload.name,
          image: action.payload.image,
          price: action.payload.price,
        };
        state.carts.push(cart);
      } else {
        let check = false;
        state.carts.map((item, key) => {
          if (item.id == action.payload.id) {
            state.carts[key].quantity++;
            check = true;
          }
        });
        if (!check) {
          let _cart = {
            id: action.payload.id,
            quantity: 1,
            name: action.payload.name,
            image: action.payload.image,
            price: action.payload.price,
          };
          state.carts.push(_cart);
        }
      }
      return {
        ...state,
        numberCart: state.numberCart + 1,
      };
    case INCREASE_QUANTITY:
      state.numberCart++;
      state.carts[action.payload].quantity++;
      return {
        ...state,
      };
  }
}

const ShopApp = combineReducers({
  _todoProduct: todoProduct,
});

export default ShopApp;