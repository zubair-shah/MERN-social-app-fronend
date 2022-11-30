import PostMessage from "../models/postMessage.js";

export const myApp = (req, res) => {
  res.send("your app is running");
};

export const getPost = async (req, res) => {
  try {
    const postMessages = await PostMessage.find();
    res.status(200).json(postMessages);
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};

export const createPost = async (req, res) => {
  const post = req.body;
  console.log(post);
  const newPost = new PostMessage(post);
  try {
    await newPost.save();
    res.status(201).json(newPost);
  } catch (error) {
    res.status(409).json({ message: error.message });
  }
};

export const updatePost = async (req, res) => {
  try {
     const { id } = req.params;
    const post = req.body;
    console.log(post);
    const newPost = new PostMessage(post);
    await newPost.save();
    res.status(201).json(newPost);
  } catch (error) {
    res.status(409).json({ message: error.message });
  }
};

export const getOnePost = async (req, res) => {
  const { id } = req.params;
  console.log(id);
  try {
    const singlePost = await PostMessage.findById(id);
    res.status(200).json(singlePost);
  } catch (e) {
    console.log(e);
  }
};

export const deletePost = async (req, res) => {
  const { id } = req.params;
  console.log(id, "id");
  try {
    await PostMessage.findByIdAndDelete(id);
    res.status(200).json();
  } catch (e) {
    console.log("chala");
    console.log(e);
  }
};
