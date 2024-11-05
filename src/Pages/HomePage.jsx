import React, { useEffect, useState } from "react";
import Post from "../Post";
import axios from "axios";

const HomePage = () => {
  const [posts, setPosts] = useState([]);
  useEffect(() => {
    async function getPost() {
      const post = await axios.get("http://107.21.183.182:3001/post", {
        headers: {
          "Access-Control-Allow-Origin": "*",
        },
      });
      setPosts(post.data);
    }
    getPost();
  }, []);
  return (
    <>
      {posts.length > 0 &&
        posts.map((post) => <Post key={post._id} {...post} />)}
    </>
  );
};

export default HomePage;
