import axios from "axios";

const insertPost = async (post) => {
  let formData = new FormData();
  return await axios({
    url: "https://jsonplaceholder.typicode.com/posts",
    method: "POST",
    data: formData,
  });
};

const getPost = async (post) => {
  return await axios({
    url: `https://jsonplaceholder.typicode.com/posts?email`,
    method: "GET",
  });
};

const getAllPosts = async () => {
  return await axios({
    url: "https://jsonplaceholder.typicode.com/posts",
    method: "GET",
  });
};

export default (insertPost, getPost, getAllPosts);
