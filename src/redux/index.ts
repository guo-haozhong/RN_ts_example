import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import appReducer from './reducers/index'

let middlewares = [thunk];

const createStoreWithMiddleware = applyMiddleware(...middlewares);
const store = createStore(appReducer, createStoreWithMiddleware);

export default store