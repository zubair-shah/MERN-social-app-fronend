import React, { useEffect } from "react";
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
import { useDispatch } from "react-redux";
import posts from "../../../redux/reducers/posts";
import { deletePost, getPosts } from "../../../redux/actions/posts";
import { useLocation } from "react-router-dom";

function Post({ post, setCurrentId }) {
  const { pathname: location } = useLocation();
  console.log(location);
  const dispatch = useDispatch();

  const classes = useStyles();
  const deletPost = (id) => {
    dispatch(deletePost(id));
    dispatch(getPosts());
  };

  return (
    <div>
      <Card className={classes.card}>
        <CardMedia
          className={classes.media}
          image={post.selectedFile}
          title={post.title}
        >
          <div className={classes.overlay}>
            <Typography variant={"h6"}>{post.creator}</Typography>
            <Typography variant={"body"}>
              {moment(post.createdAt).fromNow()}
            </Typography>
          </div>
          <div className={classes.overlay2}>
            <Button
              style={{ color: "white" }}
              size={"small"}
              onClick={() => {
                setCurrentId(post._id);
              }}
            >
              <MoreHorizIcon fontSize={"default"} />
            </Button>
          </div>
          <div className={classes.details}>
            <Typography variant="body2" color={"white"}>
              {post.tags.map((tag) => `#${tag} `)}
            </Typography>
          </div>
        </CardMedia>
        <CardContent>
          <Typography
            className={classes.title}
            gutterBottom
            variant="h5"
            color="textSecondry"
          >
            {post.message}
          </Typography>
        </CardContent>
        <CardActions className={classes.cardActions}>
          <Button size="small" color="primary" onClick={() => {}}>
            <ThumbUpAlIcon
              fontSize="small"
              className={classes.mx5}
              style={{ alignItems: "center" }}
            />

            {post.likeCount}
          </Button>
          {location === "/admin" ? (
            <Button
              size="small"
              color="primary"
              onClick={() => {
                deletPost(post._id);
              }}
            >
              <DeleteIcon fontSize="small" />
              Delete
            </Button>
          ) : (
            ""
          )}
        </CardActions>
      </Card>
    </div>
  );
}

export default Post;
