import "./App.css";
import Form from "./components/form/Form";
import Posts from "./components/posts/Posts";
import { useEffect } from "react";
import memories from "./assets/memories.jpg";
import {
  AppBar,
  container,
  Typography,
  Grow,
  Grid,
  Container,
} from "@material-ui/core";
import useStyles from "./styles";
import { useDispatch } from "react-redux";
import { getPosts } from "./redux/actions/posts";
function App() {
  const classes = useStyles();
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getPosts());
  }, []);

  return (
    <Container maxWidth="lg">
      <AppBar className={classes.appBar} position="static" color="inherit">
        <Typography className={classes.heading} variant="h2" align="center">
          Memories
          <img
            src={memories}
            alt="memories"
            className={classes.image}
            height={60}
          />
        </Typography>
      </AppBar>
      <Grow in>
        <Container>
          <Grid
            container
            spacing={3}
            justifyContent="space-between"
            alignItems="stretch"
          >
            <Grid item xs={12} sm={7}>
              <Posts />
            </Grid>

            <Grid item xs={12} sm={5}>
              <Form />
            </Grid>
          </Grid>
        </Container>
      </Grow>
    </Container>
  );
}

export default App;
