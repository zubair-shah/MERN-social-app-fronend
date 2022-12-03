import React from "react";
import useStyles from "../styles";
import memories from "../assets/memories.jpg";
import { Link } from "react-router-dom";
import { AppBar, Typography, Button, Grid, Container } from "@material-ui/core";
function Header() {
  const classes = useStyles();
  console.log(classes);
  return (
    <>
      {" "}
      <Container maxWidth="lg">
        <AppBar className={classes.appBar} position="static" color="inherit">
          <Grid sm={12}>
            <Typography className={classes.heading} variant="h2" align="center">
              Memories
              <img
                src={memories}
                alt="memories"
                className={classes.image}
                height={60}
              />
            </Typography>
          </Grid>

          {/* <Grid container> */}
          <Grid sm={2}>
            <Link to="/signup">
              <Button
                className={classes.buttonSubmit}
                variant="contained"
                color="primary"
                size="small"
                type="submit"
                style={{ margin: "5px 0px", width: "51%" }}
              >
                Sign Up
              </Button>
            </Link>
            <Link to="/login">
              <Button
                variant="contained"
                color="secondary"
                size="small"
                width="50%"
                style={{
                  margin: "5px 0px",

                  width: "51%",
                  backgroundColor: "rgba(0,183,255, 1)",
                }}
              >
                LogIn
              </Button>
            </Link>
          </Grid>

          {/* </Grid> */}
        </AppBar>
      </Container>
    </>
  );
}

export default Header;
