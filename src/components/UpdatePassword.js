import React, { useState } from "react";
import axios from "axios";
import { projectid } from "../utils/constants";

const UpdatePasswordForm = () => {
  const [formData, setFormData] = useState({
    name: "test6969",
    email: "test6969@gmail.com",
    passwordCurrent: "12345",
    password: "1234567890",
    appType: "ott",
  });

  const projectId = projectid; // Replace with your actual project ID

  const handlePasswordUpdate = () => {
    axios
      .patch(
        "https://academics.newtonschool.co/api/v1/user/updateMyPassword",
        formData,
        {
          headers: {
            projectId,
          },
        }
      )
      .then((response) => {
        console.log("Password updated successfully:", response.data);
      })
      .catch((error) => {
        console.error("Error updating password:", error);
      });
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  return (
    <div>
      <h2>Update Password</h2>
      <div>
        <label>Name:</label>
        <input
          type="text"
          name="name"
          value={formData.name}
          onChange={handleChange}
        />
      </div>
      <div>
        <label>Email:</label>
        <input
          type="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
        />
      </div>
      <div>
        <label>Current Password:</label>
        <input
          type="password"
          name="passwordCurrent"
          value={formData.passwordCurrent}
          onChange={handleChange}
        />
      </div>
      <div>
        <label>New Password:</label>
        <input
          type="password"
          name="password"
          value={formData.password}
          onChange={handleChange}
        />
      </div>
      <div>
        <label>App Type:</label>
        <input
          type="text"
          name="appType"
          value={formData.appType}
          onChange={handleChange}
        />
      </div>
      <button onClick={handlePasswordUpdate}>Update Password</button>
    </div>
  );
};

export default UpdatePasswordForm;
