import { useState, useEffect } from "react";
import * as React from 'react';

import TextField from "@mui/material/TextField";
import Radios from "../../Components/Radios"
import Button from '@mui/material/Button';
import { addFilter, removeFilter, getList, resetFilter } from '../../actions';
import { useDispatch, useSelector } from 'react-redux'

import logo from '../../assets/logo.jpg'
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import { Parallax } from 'react-parallax';
import CardList from "../../Components/Organisms/CardList"
// import { fetchEventData } from "services/EventDataService";


const HomePage = () => {
  const [inputText, setInputText] = useState("");
  let inputHandler = (e) => {
    var lowerCase = e.target.value.toLowerCase();
    setInputText(lowerCase);
  };
  const [value, setValue] = useState(2);
  const dispatch = useDispatch()
  const pages = ['Suchen', 'Verkaufen', 'Informieren', 'NEU: Leasing'];
  const [anchorElNav, setAnchorElNav] = React.useState(null);

  

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };



  const filtersa = useSelector((state) => state.filters)


  useEffect((state) => {
    dispatch(getList(filtersa, inputText));
  }, [filtersa, inputText]);
  useEffect(() => {
    dispatch(resetFilter())

  }, []);
  const handleChange = (even) => {

    console.log(even)
    if (even.target.checked) {
      dispatch(addFilter(parseInt(even.target.defaultValue, 10)))
      setValue(even.target.defaultValue);

    }
    else {
      dispatch(removeFilter(parseInt(even.target.defaultValue, 10)))

    }
    dispatch(getList(filtersa, inputText));

  };
  /*  const fetchEventList = useCallback(async () => {
     const eventData = await fetchEventData();
     setEventDataList([...eventData]);
   }, [setEventDataList]);
 
   const handleAddEvent = useCallback((eventData) => {
     console.log("New Event Added", eventData);
   }, []);
 
   useEffect(() => {
     fetchEventList();
   }, [fetchEventList]); */

  return (
    <div style={{ minHeight: "100vh" }} class="container">
      <div class="top-nav">
        <div class="row">
          <AppBar style={{ background: "white" }} position="static">
            <Container maxWidth="xl">
              <Toolbar disableGutters>
                <Grid container direction="row" alignItems="center">
                  <img src={logo} alt={"logo"} />
                  <p>Deutschlands größter Fahrzeugmarkt</p>
                </Grid>

                <Typography
                  variant="h6"
                  noWrap
                  component="div"
                  sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}
                >
                  LOGO
                </Typography>
                <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
                  {pages.map((page) => (
                    <Button
                      key={page}
                      style={{ color: "black", wordWrap: "none", width: "9vw" }} variant="h3"
                      onClick={handleCloseNavMenu}
                      sx={{ my: 2, color: 'white', display: 'block' }}
                    >
                      {page}
                    </Button>
                  ))}
                </Box>


              </Toolbar>
            </Container>
          </AppBar>
        </div>
      </div>
      <div class="row" style={{ marginTop: 0 }}>
        <Parallax
          blur={0}
          bgImage={require('../../assets/private-selling-fallback-de.jpg')}
          bgImageAlt="the cat"
          strength={300}

        >

          <div style={{ height: '400px', textAlign: "left" }} >
            <TextField
              id="outlined-basic"
              onChange={inputHandler}
              variant="outlined"
              style={{ width: "40%", left: "10%", top: "50%", backgroundColor: "white" }}
              label="Suche"

            />
          </div>
        </Parallax>

      </div>
      <div class="row" style={{ marginTop: "25px" }}>
        <div class="col-md-3">

          <Radios onChange={(val) => handleChange(val)} vals={value} />

        </div>
        <div class="col" style={{ marginBottom: "25px" }}>

          <div>
            <CardList vals={"valsi"} input={inputText} filter={value} />
          </div>
        </div>
      </div>

      <div class="row">
        <div class="footer-clean">
          <div class="row justify-content-center">
            <div class="col-sm-4 col-md-3 item">
              <h3>Titel</h3>
              <ul>
                <li><a href="#">Untertitel</a></li>
                <li><a href="#">Untertitel</a></li>
                <li><a href="#">Untertitel</a></li>
              </ul>
            </div>
            <div class="col-sm-4 col-md-3 item">
              <h3>Titel</h3>
              <ul>
                <li><a href="#">Untertitel</a></li>
                <li><a href="#">Untertitel</a></li>
                <li><a href="#">Untertitel</a></li>
              </ul>
            </div>
            <div class="col-sm-4 col-md-3 item">
              <h3>Titel</h3>
              <ul>
                <li><a href="#">Untertitel</a></li>
                <li><a href="#">Untertitel</a></li>
                <li><a href="#">Untertitel</a></li>
              </ul>
            </div>

          </div>
        </div>
      </div>

    </div>
  );
};

HomePage.propTypes = {};

HomePage.defaultProps = {};

export default HomePage;