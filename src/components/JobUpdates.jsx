import React, { useState, useEffect } from "react";
import PostForm from "./PostForm";
import axios from "../api/axios";

const JobUpdates = () => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    fetchPosts();
  }, []);

  const fetchPosts = async () => {
    try {
      const response = await axios.get("/auth/posts");
      setPosts(response.data);
    } catch (error) {
      console.error("Error fetching posts:", error);
    }
  };

  const handlePost = () => {
    fetchPosts();
  };

  return (
    <div>
      {/* <ul>
        {posts.map((post) => (
          <li key={post.id}>{post.content}</li>
        ))}
      </ul> */}

      <PostForm onPost={handlePost} />
    </div>
  );
};

export default JobUpdates;
