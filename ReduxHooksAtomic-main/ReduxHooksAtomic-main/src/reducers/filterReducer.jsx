import { ADD_FILTER, REMOVE_FILTER, RESET_FILTER } from '../actions';

const INITIAL_STATE = {
  filtreler: [],
};

export default (state = INITIAL_STATE, action) => {

  if (action.type === ADD_FILTER) {
    console.log("kolnlarrrr  " + state.filtreler)
    return { filtreler: [...state.filtreler, action.payload] };
  }
  else if (action.type === REMOVE_FILTER) {
    console.log("remove")
    console.log(action.payload)
    return {
      filtreler: state.filtreler.filter(hostname =>
        hostname !== action.payload
      )
    }

  }
  else if (action.type === RESET_FILTER) {
    return {
      ...state,
      filtreler: [],
    };

  }

  return state;
}
