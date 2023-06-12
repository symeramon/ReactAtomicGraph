
export const ADD_FILTER = 'ADD_FILTER';
export const REMOVE_FILTER = 'REMOVE_FILTER';
export const RESET_FILTER = 'RESET_FILTER';



export const addFilter = (filter) => {
  return dispatch => {
        dispatch({ type: ADD_FILTER, payload: filter })
  }
}

export const removeFilter = (filter) => {
  return dispatch => {
        dispatch({ type: REMOVE_FILTER, payload: filter })
    
  }
}


export const resetFilter = () => {
  return dispatch => {
        dispatch({ type: RESET_FILTER })
    
  }
}
