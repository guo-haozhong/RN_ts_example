import { combineReducers } from 'redux';
import {login} from './loginReducer'
const appReducer = combineReducers({
    login:login
});
export default appReducer
