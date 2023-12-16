import React from 'react';
import axiosInstance from "../../../../services/axios";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

export const DeleteByID = () => {
  // const baseURL = "http://localhost:3000";
  // const axiosInstance = axios.create({ baseURL });
  const navigate = useNavigate();

  const [inputData, setInputData] = useState({
    id: "",
  });
  //const [stuData, setStuData] = useState({});

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setInputData({
      ...inputData,
      [name]: value,
    });
  };

  const handleDelete = async (e) => {
    e.preventDefault();

    try {
      console.log();
      const response = await axiosInstance.delete(`/api/users/${inputData.id}`);
      console.log(response);
      window.alert("User has been deleted!");
      navigate("/admin_dashboard");
    } catch (err) {
      console.error("Fail to fetch data", err);
    }
  };

  return (
    <div>
      <form>
        <h2 style={{ color: "gray", textAlign: "center" }}>Enter User ID:</h2>
        <div
          className="pseudo-search"
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            margin: "20px 0",
          }}
        >
          <input
            type="text"
            name="id"
            placeholder="User ID..."
            autoFocus
            required
            value={inputData.id}
            onChange={handleInputChange}
            style={{
              padding: "10px",
              margin: "0 10px 0 0",
              borderRadius: "4px",
              border: "1px solid #ccc",
              color: "#333",
              backgroundColor: "#f8f8f8",
              width: "250px",
              boxShadow: "inset 0 1px 3px rgba(0,0,0,0.1)",
            }}
          />
          <button
            className="fa fa-search"
            onClick={handleDelete}
            style={{
              padding: "10px 20px",
              background: "gray",
              color: "white",
              border: "none",
              borderRadius: "4px",
              cursor: "pointer",
            }}
          >
            Delete
          </button>
        </div>
      </form>
    </div>
  );
};
