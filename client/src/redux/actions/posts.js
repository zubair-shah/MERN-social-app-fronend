import * as api from "../../api/index";

//=========Action-creators=================

export const getPosts = (posts) => async (dispatch) => {
  console.log(posts);
  try {
    const { data } = await api.fetchPost();
    // console.log(data);
    dispatch({ type: "FETCH_ALL", payload: data });
  } catch (error) {
    console.log(error.message);
  }
};

export const createPost = (post) => async (dispatch) => {
  try {
    const { data } = await api.createPost(post);
    dispatch({ type: "CREATE", payload: data });
  } catch (error) {
    console.log(error);
  }
};
