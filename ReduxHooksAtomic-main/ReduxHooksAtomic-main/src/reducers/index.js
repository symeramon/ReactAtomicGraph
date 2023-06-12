import { combineReducers } from 'redux';
import FilterReducer from './filterReducer';
import ListReducer from './listReducer';


export default combineReducers({
  filters: FilterReducer,
  lists: ListReducer

});
