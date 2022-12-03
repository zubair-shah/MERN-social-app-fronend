import axios from "axios";
// import Posts from "../components/posts/Posts";

// const url = "http://localhost:6000/";

const createBackendServer = (baseURL) => {
  const api = axios.create({
    baseURL,
    headers: { Accept: "application/json" },
    timeout: 60 * 1000,
  });

  const headers = {
    "Content-Type": "multipart/form-data",
  };

  /*==========    GET REQUESTS    ==========*/

  const fetchPost = async () => api.get("/posts");
  /*==========    POST REQUESTS    ==========*/

  const createPost = async (newPost) => api.post("/posts", newPost);
  /*==========    DELETE REQUESTS    ==========*/
  const deletePost = (id, updatedPost) => api.delete(`posts/${id}`);
  /*==========    PUT REQUESTS    ==========*/
  const updatePost = (id, updatedPost) => api.patch(`posts/${id}`, updatedPost);

  return { updatePost, createPost, fetchPost, deletePost };
};
const SERVER_URL = process.env.REACT_APP_API_BASE_URL;
// const SERVER_URL = process.env.REACT_APP_API_Production_BASE_URL;
const apis = createBackendServer(SERVER_URL);
export default apis;
