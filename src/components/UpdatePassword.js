import React, { useState } from "react";
const token = localStorage.getItem("jwtToken");
const UpdateNameAndEmail = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [responseMessage, setResponseMessage] = useState("");

  const handleSubmit = async (event) => {
    event.preventDefault();

    const url = "https://academics.newtonschool.co/api/v1/user/updateMe";

    try {
      const response = await fetch(url, {
        method: "PATCH",
        body: JSON.stringify({
          name,
          email,
        }),
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
          ProjectId: "711pehg5ja32",
        },
      });

      const data = await response.json();

      if (response.ok) {
        setResponseMessage("Profile updated successfully.");
      } else {
        setResponseMessage(`Error: ${data.message}`);
      }
    } catch (error) {
      setResponseMessage("An error occurred. Please try again later.");
    }
  };

  return (
    <div>
      <h2>Update Name and Email</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="name">Name:</label>
          <input
            type="text"
            id="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
        </div>
        <div>
          <label htmlFor="email">Email:</label>
          <input
            type="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
        <button type="submit">Update Name and Email</button>
      </form>
      <p>{responseMessage}</p>
    </div>
  );
};

export default UpdateNameAndEmail;
