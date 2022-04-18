import {cartTypes} from '../types/cart.types';

const {ADD_ITEM, REMOVE_ITEM, CONFIRM_CART} = cartTypes;

const initialState = {
  items: [],
  total: 0,
  empty: true
};

const sumTotal = list => 
  list
    .map(item => item.quantity * item.price)
    .reduce((acc, curr) => acc + curr, 0);

const cartReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_ITEM:
      const indexItem = state.items.findIndex(
        item => item.id === action.item.id,
      );
      if (indexItem === -1) {
        const item = {...action.item, quantity: 1};
        const updatedCart = [...state.items, item];
        return {
          ...state,
          items: updatedCart,
          total: sumTotal(updatedCart),
          empty: false,
        };
      }
      const items = [...state.items].map(item => {
        if (item.id === action.item.id) {
          item.quantity ++;
          return item;
        }
      });

      return {
        ...state,
        items,
        total: sumTotal(items),
        empty: false,
      };

    case REMOVE_ITEM:
      const cleanCart = [...state.items].filter(item => item.id !== action.id);
      let allEmpty = false    
      if (cleanCart.length === 0) {
        allEmpty = true        
      }
      return {
        ...state,
        items: cleanCart,
        total: sumTotal(cleanCart),
        empty: allEmpty,
      };
    case CONFIRM_CART:
      return {
        ...state,
        items: [],
        total: 0,
        empty: true,
      };
    default:
      return state;
  }
};
export default cartReducer;
