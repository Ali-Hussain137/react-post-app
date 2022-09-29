import React, { useEffect, useState } from "react";
import NavBar from "../components/NavBar";
import getAllPosts from "../api/postAPI";
import "../css/post-style.css";

function Posts(props) {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    getAllPosts()
      .then((response) => {
        setPosts(response.data);
      })
      .catch((error) => console.log(error));
  }, []);
  return (
    <div>
      <NavBar />
      <br />
      <br />
      <h1 className="text-center">LOCAL INSTA</h1>
      <div className="grid">
        {posts.map((post) => {
          const { id, title, body } = post;
          return (
            <div className="card" key={id}>
              <div className="card-body">
                <h5 className="card-title">{title}</h5>
                <p className="card-text">{body}</p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Posts;
