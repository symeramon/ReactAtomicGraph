import {GET_LIST} from '../actions';

const INITIAL_STATE = {
  listeler: [],
};

export default (state = INITIAL_STATE, action) => {
  if (action.type === GET_LIST) {
    return {
        ...state,
        listeler: action.payload.data.filters
      };
  }
 
  return state;
}
