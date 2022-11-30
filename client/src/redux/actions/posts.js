import apis from "../../api/index";
//=========Action-creators=================

export const getPosts = (posts) => async (dispatch) => {
  try {
    const { data } = await apis.fetchPost();
    console.log(data);
    dispatch({ type: "FETCH_ALL", payload: data });
  } catch (error) {
    console.log(error.message);
  }
};

export const createPost = (post) => async (dispatch) => {
  console.log(post);
  try {
    const { data } = await apis.createPost(post);
    dispatch({ type: "CREATE", payload: data });
    console.log(data);
  } catch (error) {
    console.log(error);
  }
};

export const updatePost = (id, post) => async (dispatch) => {
  try {
    const { data } = await apis.updatePost(id, post);
    dispatch({ type: "UPDATE", payload: data });
  } catch (error) {
    console.log(error);
  }
};
export const deletePost = (id) => async (dispatch) => {
  try {
    const { data } = await apis.deletePost(id);
    dispatch({ type: "DELETE", payload: data });
  } catch (error) {
    console.log(error);
  }
};
