import {applyMiddleware, combineReducers, createStore} from 'redux';

import CategoryReducer from './reducers/category.reducer';
import ProductReducer from './reducers/product.reducer';
import authReducer from './reducers/auth.reducer';
import cartReducer from './reducers/cart.reducer';
import orderReducer from './reducers/order.reducer';
import thunk from 'redux-thunk';

const RootReducer = combineReducers({
  categories: CategoryReducer,
  products: ProductReducer,
  cart: cartReducer,
  auth: authReducer,
  order: orderReducer,
});

export default createStore(RootReducer, applyMiddleware(thunk));
