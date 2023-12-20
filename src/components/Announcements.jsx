import React, { useState, useEffect } from "react";
import axios from "../api/axios";
import Navbar from "./Navbar";
import "./Threads.css";
// import Footer from "./Footer";

const Posts = () => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const getPosts = async () => {
      try {
        const response = await axios.get("/auth/posts");
        const postsData = response.data;

        // Fetch user information for each post
        const postsWithUsers = await Promise.all(
          postsData.map(async (post) => {
            const userData = await getUser(post.user);
            return { ...post, username: userData.email };
          })
        );

        setPosts(postsWithUsers);
      } catch (error) {
        console.error("Error fetching posts: ", error);
      }
    };
    getPosts();
  }, []);

  const getUser = async (userId) => {
    try {
      const userResponse = await axios.get(`/auth/users/${userId}`);
      return userResponse.data;
    } catch (error) {
      console.error("Error fetching user: ", error);
      // You might want to handle errors here, e.g., return a default user object
      return {};
    }
  };

  return (
    <div>
      <Navbar />
      {posts.map((post) => (
        <div className="thread-container container" key={post._id}>
          <div className="thread-info">
            <div className="avatar">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="30"
                height="30"
                fill="#BEBFC5"
                class="bi bi-person"
                viewBox="0 0 16 16"
              >
                <path d="M8 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6m2-3a2 2 0 1 1-4 0 2 2 0 0 1 4 0m4 8c0 1-1 1-1 1H3s-1 0-1-1 1-4 6-4 6 3 6 4m-1-.004c-.001-.246-.154-.986-.832-1.664C11.516 10.68 10.289 10 8 10c-2.29 0-3.516.68-4.168 1.332-.678.678-.83 1.418-.832 1.664z" />
              </svg>
            </div>

            <div className="thread-info-details">
              <div className="thread-username">
                <p className="p-text">{post.username}</p>
              </div>
              <div className="time-stamp">
                <small>{new Date(post.timestamp).toLocaleString()}</small>
              </div>
            </div>
          </div>
          <div className="content">
            <p className="p-content">{post.content}</p>
          </div>
        </div>
      ))}
      {/* <Footer /> */}
    </div>
  );
};

export default Posts;
