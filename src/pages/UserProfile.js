import React, { useState } from "react";
import styled from "styled-components";

const token = localStorage.getItem("jwtToken");

const UserProfile = () => {
  const [imageFile, setImageFile] = useState(null);
  const [previewImage, setPreviewImage] = useState(null);
  const [responseMessage, setResponseMessage] = useState("");

  const handleImageChange = (event) => {
    const selectedImage = event.target.files[0];
    setImageFile(selectedImage);

    if (selectedImage) {
      const reader = new FileReader();
      reader.onload = (e) => {
        setPreviewImage(e.target.result);
      };
      reader.readAsDataURL(selectedImage);
    }
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (!imageFile) {
      setResponseMessage("Please select an image.");
      return;
    }

    const url =
      "https://academics.newtonschool.co/api/v1/user/updateProfileImage";
    const formData = new FormData();
    formData.append("profileImage", imageFile);

    try {
      const response = await fetch(url, {
        method: "PATCH",
        body: formData,
        headers: {
          Authorization: `Bearer ${token}`,
          projectId: "711pehg5ja32",
        },
      });

      const data = await response.json();

      if (response.ok) {
        setResponseMessage("Profile image updated successfully.");
      } else {
        setResponseMessage(`Error: ${data.message}`);
      }
    } catch (error) {
      setResponseMessage("An error occurred. Please try again later.");
    }
  };

  return (
    <Container>
      <div className="form flex column a-center j-center">
        <div className="container flex column">
          <h2>Update Profile Image</h2>
          <form onSubmit={handleSubmit}>
            <div>
              <label htmlFor="image">Select an image:</label>
              <input
                type="file"
                id="image"
                accept=".png,.jpg,.jpeg"
                onChange={handleImageChange}
              />
            </div>

            <button type="submit" className="btn">
              Update Profile Image
            </button>
          </form>
          <p>{responseMessage}</p>
          <div>
            {previewImage && (
              <img
                className="preview"
                src={previewImage}
                alt="Preview"
                style={{ maxWidth: "200px", maxHeight: "200px" }}
              />
            )}
          </div>
        </div>
      </div>
    </Container>
  );
};

const Container = styled.div`
  padding: 100px;
  input {
    padding: 20px;
  }
  .btn {
    background-color: red;
    color: white;
    padding: 20px;
    margin: 20px;
    border: none;
    border-radius: 5px;
  }
  .preview {
    padding: 50px;
  }
  img {
    height: 500px;
    width: 500px;
    border-radius: 20px;
  }
`;

export default UserProfile;
