import React, { useEffect, useState } from "react";
import axios from "../api/axios";
import PostForm from "./PostForm";

const Feed = () => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        console.log("in feed.jsx");
        const response = await axios.get("/auth/posts");
        console.log(response.data);
        setPosts(response.data);
      } catch (error) {
        console.error("Error fetching posts:", error);
      }
    };

    fetchPosts();
  }, []);

  const handlePost = () => {
    // Refresh posts after posting
    fetchPosts();
  };

  return (
    <div>
      <h1>Twitter-like Feed</h1>
      <PostForm onPost={handlePost} />
      <ul>
        {posts.map((post) => (
          <li key={post._id}>
            <p>
              {post.user.username}: {post.content}
            </p>
            <small>{new Date(post.timestamp).toLocaleString()}</small>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Feed;
