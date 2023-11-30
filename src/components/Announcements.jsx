import React from "react";

const Announcements = () => {
  return (
    <div class="announcement">
      <img src="user-avatar.jpg" alt="User Avatar" class="avatar" />
      <div class="announcement-details">
        <div class="username">Username</div>
        <div class="timestamp">2 hours ago</div>
        <div class="content">
          This is the announcement content. It can be a longer text that
          provides details about the update or announcement.
        </div>
      </div>
    </div>
  );
};

export default Announcements;
