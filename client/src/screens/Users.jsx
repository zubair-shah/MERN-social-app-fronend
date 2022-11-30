import { useState, useEffect } from "react";
import { Header, Posts } from "../components";
import { Grow, Grid, Container } from "@material-ui/core";
import { useDispatch } from "react-redux";
import { getPosts } from "../redux/actions/posts";
function Users() {
  const [currentId, setCurrentId] = useState(null);
  const dispatch = useDispatch();
  console.log(currentId);
  useEffect(() => {
    dispatch(getPosts());
  }, []);
  return (
    <>
      {" "}
      <Container maxWidth="lg">
        <Header />
        <Grow in>
          <Container>
            <Grid
              container
              spacing={3}
              justifyContent="space-between"
              alignItems="stretch"
            >
              <Grid item xs={12} sm={12} md={12}>
                <Posts setCurrentId={setCurrentId} />
              </Grid>
            </Grid>
          </Container>
        </Grow>
      </Container>
    </>
  );
}

export default Users;
