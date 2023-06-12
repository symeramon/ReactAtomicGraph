import axios from 'axios'

export const GET_LIST = 'GET_LIST';

export const getList = (filtersi, input) => {
  const operationName= "Filters";
  const query = `query Filters($input: String, $filtersi: JSON) {\r\n  filters(input: $input, filtersi: $filtersi) {\r\n    id\r\n    text\r\n    pic\r\n  }\r\n}`;
  const variables = {
    
      input: input,
      filtersi: filtersi
    
  };
  return dispatch => {
    axios.post('http://localhost:4000/graphql/', {
      query,
      variables,
      operationName

    })
      .then(response => {
        const result = response.data;
        console.log("result " + JSON.stringify(result))
        dispatch({ type: GET_LIST, payload: result })
      })
      .catch(err => console.log(err));

  }
}