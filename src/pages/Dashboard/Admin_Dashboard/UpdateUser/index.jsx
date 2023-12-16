import axiosInstance from "../../../../services/axios";
import { useState } from "react";
import React from "react";
import { useNavigate } from "react-router-dom";

export const UpdateUser = () => {
  // const baseURL = "http://localhost:3000";
  // const axiosInstance = axios.create({ baseURL });
  const navigate = useNavigate();
  const [userData, updateUserData] = useState({
    userId: "",
    userName: "",
  });

  const handleInputChange = (event) => {
    const { name, value } = event.target;

    updateUserData({
      ...userData,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    await axiosInstance
      .patch(`/api/users/${userData.userId}`, {
        user_name: userData.userName,
      })
      .then((response) => {
        console.log(response);
        window.alert("Update Successfully!");
        navigate("/admin_dashboard");
      })
      .catch((err) => {
        console.log(err);
      });
  };
  return (
    <div
      class="container"
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "100vh",
        backgroundColor: "#f0f0f0",
      }}
    >
      <div
        class="card"
        style={{
          maxWidth: "500px",
          width: "90%",
          margin: "20px",
          padding: "20px",
          backgroundColor: "#fff",
          boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
          borderRadius: "10px",
        }}
      >
        <div
          class="card_title"
          style={{ marginBottom: "20px", textAlign: "center" }}
        >
          <h1>Update User</h1>
        </div>
        <div class="form">
          <form
            onSubmit={handleSubmit}
            style={{ display: "flex", flexDirection: "column", gap: "15px" }}
          >
            <input
              type="text"
              name="userId"
              id="user-id"
              placeholder="User ID..."
              value={userData.userId}
              onChange={handleInputChange}
              style={{
                padding: "10px",
                border: "1px solid #ddd",
                borderRadius: "4px",
                fontSize: "16px",
                color: "#333",
                backgroundColor: "#f8f8f8",
              }}
            />
            <input
              type="text"
              name="userName"
              id="user-name"
              placeholder="User Name..."
              value={userData.userName}
              onChange={handleInputChange}
              style={{
                padding: "10px",
                border: "1px solid #ddd",
                borderRadius: "4px",
                fontSize: "16px",
                color: "#333",
                backgroundColor: "#f8f8f8",
              }}
            />
            <button
              type="submit"
              style={{
                backgroundColor: "#4CAF50",
                color: "white",
                padding: "10px 20px",
                border: "none",
                borderRadius: "4px",
                cursor: "pointer",
              }}
            >
              Update
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};
