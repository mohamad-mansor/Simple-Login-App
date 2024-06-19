// src/components/Notification.jsx
import React from "react";

const Notification = ({ message, type }) => {
  return (
    <div
      className={`p-4 ${
        type === "success" ? "bg-green-500" : "bg-red-500"
      } text-white rounded`}
    >
      {message}
    </div>
  );
};

export default Notification;
