import React from 'react';
import axiosInstance from "../../../../services/axios";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

export const SearchByID = () => {
  // const baseURL = "http://localhost:3000";
  // const axiosInstance = axios.create({ baseURL });
  const navigate = useNavigate();

  const [inputData, setInputData] = useState({
    id: "",
  });

  const [stuData, setStuData] = useState({});

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setInputData({
      ...inputData,
      [name]: value,
    });
  };

  const handleSearch = async (e) => {
    e.preventDefault();

    try {
      console.log();
      const response = await axiosInstance.get(`/api/users/${inputData.id}`);
      console.log(response);
      const user = response.data.data.user;
      setStuData(user);
      //navigate("/admin_dashboard");
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
            placeholder="Search..."
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
            }}
          />
          <button
            className="fa fa-search"
            onClick={handleSearch}
            style={{
              padding: "10px 20px",
              background: "gray",
              color: "white",
              border: "none",
              borderRadius: "4px",
              cursor: "pointer",
            }}
          >
            Search
          </button>
        </div>
      </form>

      <div style={{ margin: "0 auto", overflowX: "auto" }}>
        <table
          style={{
            width: "100%",
            borderCollapse: "collapse",
            margin: "20px 0",
            fontFamily: "Arial, sans-serif",
            fontSize: "0.9em",
            minWidth: "600px",
            boxShadow: "0 0 20px rgba(0, 0, 0, 0.15)",
          }}
        >
          <thead
            style={{
              backgroundColor: "orange",
              color: "white",
              textAlign: "center",
            }}
          >
            <tr>
              <th style={{ padding: "12px 15px" }}>Student ID</th>
              <th style={{ padding: "12px 15px" }}>Role</th>
              <th style={{ padding: "12px 15px" }}>First Name</th>
              <th style={{ padding: "12px 15px" }}>Last Name</th>
              <th style={{ padding: "12px 15px" }}>Email</th>
              <th style={{ padding: "12px 15px" }}>User Name</th>
              <th style={{ padding: "12px 15px" }}>Courses</th>
            </tr>
          </thead>
          <tbody>
            <tr style={{ backgroundColor: "#f9f9f9", textAlign: "center" }}>
              <td style={{ padding: "12px 15px", color: "#4d4d4d" }}>
                {stuData._id}
              </td>
              <td style={{ padding: "12px 15px", color: "#4d4d4d" }}>
                {stuData.role}
              </td>
              <td style={{ padding: "12px 15px", color: "#4d4d4d" }}>
                {stuData.first_name}
              </td>
              <td style={{ padding: "12px 15px", color: "#4d4d4d" }}>
                {stuData.last_name}
              </td>
              <td style={{ padding: "12px 15px", color: "#4d4d4d" }}>
                {stuData.email}
              </td>
              <td style={{ padding: "12px 15px", color: "#4d4d4d" }}>
                {stuData.user_name}
              </td>
              <td style={{ padding: "12px 15px", color: "#4d4d4d" }}>
                {stuData.courses?.join(", ") || "N/A"}
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};
