import React from "react";
import './index.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import { Fragment } from 'react'
import { Container, AppBar, Typography, Grow, Grid } from '@material-ui/core';

import About from './components/about'
import Banner from './components/banner'
import Button from './components/button'
import Contact from './components/contact';
import Footer from './components/footer';
import Form from './components/form';
import Microsite from './components/microSite'
import Navbar from './components/navbar'

import useStyles from './styles'

function App() {
  const classes = useStyles();
  return (
    <Router>
      <div>
        <Switch>
          <Route path="/" exact render={() =>
            <Fragment>
              <Navbar />
              <Banner />
              <Button />
              <About />
              <Footer />
            </Fragment>
          } />
          <Route path="/about" render={() =>
            <Fragment>
              <Navbar />
              <Banner />
              <Button />
              <About />
              <Footer />
            </Fragment>
          } />
          <Route path="/contact" render={() =>
            <Fragment>
              <Navbar />
              <Banner />
              <Button />
              <Contact />
              <Footer />
            </Fragment>
          } />
          <Route path="/builder" render={() =>
            <Fragment>
              <Navbar />
              <Banner />
              <Form />
              <Footer />
            </Fragment>
          } />
          <Route path="/microsite" render={() =>
            <Microsite />
          } />
        </Switch>
      </div>
    </Router>
  );
}

export default App;


{/* <Container maxwidth="lg">
<AppBar className={classes.AppBar} position="static" color="inherit">
    <Typography className={classes.heading} variant="h2" align="center">Memories</Typography>
    <img className={classes.image} src={memories} alt="memories" height="60" />
</AppBar>
<Container>
    <Grid container justify="space-between" alignItems="stretch" spacing={3}>
        <Grid item xs={12} sm={7}>
            < Form />
        </Grid>
        <Grid item xs={12} sm={4}>
            < Posts />
        </Grid>
    </Grid>
</Container>
</Container> */}