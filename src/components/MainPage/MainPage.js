import React from "react";

//import mui components
import Container from "@material-ui/core/Container";
import Grid from "@material-ui/core/Grid"

//import css
import './MainPage.css'

const MainPage = () => {
  return (
      <Container>
          <Grid container spacing = {2}>
              <Grid container item>
                  <Grid item>
                      Potato
                  </Grid>
                  <Grid item>
                      Tomato
                  </Grid>
              </Grid>
          </Grid>
      </Container>
  )
};

export default MainPage;
