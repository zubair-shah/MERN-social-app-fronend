import React from "react";
import {
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Button,
} from "@material-ui/core";
import { Typography } from "@mui/material";
import ThumbUpAlIcon from "@mui/icons-material/ThumbUpAlt";
import MoreHorizIcon from "@mui/icons-material/MoreHoriz";

import DeleteIcon from "@mui/icons-material/Delete";
import useStyles from "./styles";
import moment from "moment";

function Post({ post }) {
  console.log(post);
  const classes = useStyles();

  return (
    <div>
      title
      <Card className={classes.card}>
        <CardMedia
          className={classes.media}
          // image={post.selectedFile}
          // title={post.title}
        >
          <div className={classes.overlay}>
            <Typography variant={"h6"}>{/* {post.creator} */}</Typography>
            <Typography variant={"body"}>
              {/* {moment(post.createdAt).fromNow()} */}
            </Typography>
          </div>
          <div className={classes.overlay2}>
            <Button
              style={{ color: "white" }}
              size={"small"}
              onClick={() => {}}
            >
              <MoreHorizIcon fontSize={"default"} />
            </Button>
          </div>
          <div className={classes.details}>
            <Typography variant="body2" color="textSecondry">
              {/* {post.tags.map((tag) => `#${tag} `)} */}
            </Typography>
          </div>
          <CardContent>
            <Typography
              className={classes.title}
              gutterBottom
              variant="h5"
              color="textSecondry"
            >
              {/* {post.message} */}
            </Typography>
          </CardContent>
          <CardActions className={classes.cardActions}>
            <Button size="small" color="primary" onClick={() => {}}>
              <ThumbUpAlIcon fontSize="small" />
              like
              {/* {post.likeCount} */}
            </Button>
            <Button size="small" color="primary" onClick={() => {}}>
              <DeleteIcon fontSize="small" />
              Delete
            </Button>
          </CardActions>
        </CardMedia>
      </Card>
    </div>
  );
}

export default Post;
