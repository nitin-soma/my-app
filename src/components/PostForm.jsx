import React, { useState } from "react";
import axios from "../api/axios";
import useAuth from "../hooks/useAuth";

const POST_URL = "/auth/posts";
const PostForm = ({ onPost }) => {
  const { authState, setAuth } = useAuth();
  const [content, setContent] = useState("");

  const accessToken = authState?.token;
  console.log(accessToken);

  const handlePost = async (e) => {
    e.preventDefault();

    try {
      console.log("in postForm");

      // Include the access token in the headers
      const response = await axios.post(
        POST_URL,
        { content },
        {
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${accessToken}`,
          },
          withCredentials: true,
        }
      );

      onPost(); // Trigger a refresh of the posts after posting
      setContent(""); // Clear the input field
    } catch (error) {
      console.error("Error posting message:", error);
    }
  };

  return (
    <>
      <div className="container">
        <strong>Post Update</strong>
      </div>
      <div>
        <form onSubmit={handlePost}>
          <label>
            Post a message:
            <input
              type="text"
              value={content}
              onChange={(e) => setContent(e.target.value)}
            />
          </label>
          <button type="submit">Post</button>
        </form>
      </div>
    </>
  );
};

export default PostForm;
