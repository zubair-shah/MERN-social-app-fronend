import React, { useState } from "react";
import useStyles from "./styles";
import { Typography, TextField, Paper, Button } from "@mui/material";
import FileBase from "react-file-base64";
import { useDispatch } from "react-redux";
import { createPost } from "../../redux/actions/posts";

function Form() {
  const [postData, setPostData] = useState({
    creator: " ",
    title: " ",
    message: " ",
    tags: " ",
    selectedFile: " ",
  });
  const classes = useStyles();
  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(createPost(postData));
  };
  const clear = () => {};

  return (
    <Paper className={classes.paper}>
      <form
        autoComplete="off"
        className={`${classes.form} ${classes.root}`}
        noValidate
        onSubmit={handleSubmit}
      >
        <Typography variant="h6">Creating A Memory</Typography>
        <TextField
          variant="outlined"
          name="creator"
          label="Creator"
          fullWidth
          value={postData.creator}
          onChange={(e) =>
            setPostData({ ...postData, creator: e.target.value })
          }
        />
        <TextField
          variant="outlined"
          name="title"
          label="Title"
          fullWidth
          value={postData.title}
          onChange={(e) => setPostData({ ...postData, title: e.target.value })}
        />
        <TextField
          variant="outlined"
          name="Message"
          label="message"
          fullWidth
          value={postData.message}
          onChange={(e) =>
            setPostData({ ...postData, message: e.target.value })
          }
        />
        <TextField
          variant="outlined"
          name="Tags"
          label="tags"
          fullWidth
          value={postData.tags}
          onChange={(e) => setPostData({ ...postData, tags: e.target.value })}
        />
        <div className={classes.fileInput}>
          <FileBase
            type="file"
            multiple={false}
            onDone={({ base64 }) =>
              setPostData({ ...postData, selectedFile: base64 })
            }
          />
        </div>
        <Button
          className={classes.buttonSubmit}
          variant="contained"
          color="primary"
          size="large"
          type="submit"
          fullWidth
        >
          Submit
        </Button>
        <Button
          variant="contained"
          color="secondary"
          size="small"
          onClick={clear}
          fullWidth
          style={{ marginTop: "10px" }}
        >
          clear
        </Button>
      </form>
    </Paper>
  );
}

export default Form;
