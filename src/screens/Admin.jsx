import React, { useState } from "react";
import { Grow, Grid, Container } from "@material-ui/core";
import { Form, Header, Posts } from "../components";
function Admin() {
  const [currentId, setCurrentId] = useState(null);
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
              <Grid item xs={12} sm={7}>
                <Posts setCurrentId={setCurrentId} />
              </Grid>

              <Grid item xs={12} sm={5}>
                <Form currentId={currentId} setCurrentId={setCurrentId} />
              </Grid>
            </Grid>
          </Container>
        </Grow>
      </Container>
    </>
  );
}

export default Admin;
