export default (posts = [], action) => {
  console.log(posts);
  switch (action.type) {
    case "FETCH_ALL":
      console.log([...posts, action.payload]);
      return action.payload;
    case "CREATE":
      return [...posts, action.payload];
    case "UPDATE":
      return [...posts, action.payload];
    case "DELETE":
      return [...posts];
    default:
      return [...posts];
  }
};
