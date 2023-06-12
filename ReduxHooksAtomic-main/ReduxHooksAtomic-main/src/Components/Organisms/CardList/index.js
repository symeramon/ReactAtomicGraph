import React from 'react'

import { useSelector } from 'react-redux'
import PropTypes from "prop-types";
import Card from "../../Molecules/EventListItem";
import Grid from '@mui/material/Grid';



export function List(props) {

  const filteredData = useSelector((state) => state.lists.listeler)
  return (
    <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }}>
     
      {filteredData.length > 0 ? filteredData.map((filteredData) => (

        <Grid item xs={2} sm={4} md={4} >
          <Card vals={props.vals} texti={"aliveli"} eventData={filteredData} />
        </Grid>
      )):null} </Grid>
  )
}
List.propTypes = {
  title: PropTypes.string.isRequired,
  eventDataList: PropTypes.arrayOf(
    PropTypes.shape({
      date: PropTypes.string.isRequired,
      title: PropTypes.string.isRequired,
      type: PropTypes.string.isRequired,
    })
  ),
};

List.defaultProps = {};


export default List
