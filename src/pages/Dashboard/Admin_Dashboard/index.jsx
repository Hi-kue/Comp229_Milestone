import React from "react";
import axiosInstance from "../../../services/axios";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

function AdminDashBoard() {
  // const baseURL = "http://localhost:3000";
  // const axiosInstance = axios.create({ baseURL });
  const navigate = useNavigate();

  const [stuData, setStuData] = useState([]);

  const handleListAll = async (e) => {
    e.preventDefault();

    try {
      const response = await axiosInstance.get("/api/users");
      console.log(response.data);
      const formattedData = response.data.map((row) => ({
        stu_id: row["_id"],
        stu_role: row["role"],
        stu_firstName: row["first_name"],
        stu_lastName: row["last_name"],
        stu_email: row["email"],
        stu_userName: row["user_name"],
        stu_courses: row["courses"],
      }));
      setStuData(formattedData);
      console.log(stuData);
    } catch (err) {
      console.error("Fail to fetch data", err);
    }
  };

  const handleFineById = () => {
    navigate("/search_by_id");
  };

  const handleDeleteById = () => {
    navigate("/delete_by_id");
  };

  const handleUpdateById = () => {
    navigate("/update_by_id");
  };

  const handleBackToHome = (e) => {
    navigate("/");
  };

  useEffect(() => {
    console.log(stuData);
  }, [stuData]);

  return (
    <div>
      <div
        id="element1"
        style={{
          padding: "10px",
          borderBottom: "1px solid #e2e2e2",
          display: "flex",
          flexDirection: "column",
          width: "200px",
          backgroundColor: "#333",
          height: "100vh",
        }}
      >
        <ul
          style={{
            listStyleType: "none",
            margin: "0",
            padding: "0",
            overflow: "hidden",
            color: "white",
          }}
        >
          <li
            style={{
              float: "left",
              padding: "10px",
              borderBottom: "1px solid grey",
            }}
          >
            <a
              className="active"
              href="#home"
              style={{
                display: "block",
                color: "black",
                textAlign: "center",
                padding: "14px 16px",
                textDecoration: "none",
              }}
              onClick={handleBackToHome}
            >
              Home
            </a>
          </li>
          <li
            style={{
              float: "left",
              padding: "10px",
              borderBottom: "1px solid grey",
            }}
          >
            <a href="#solution" onClick={handleListAll}>
              List All Students
            </a>
          </li>
          <li
            style={{
              float: "left",
              padding: "10px",
              borderBottom: "1px solid grey",
            }}
          >
            <a href="#contact" onClick={handleDeleteById}>
              Delete Student
            </a>
          </li>
          <li
            style={{
              float: "left",
              padding: "10px",
              borderBottom: "1px solid grey",
            }}
          >
            <a href="#about" onClick={handleFineById}>
              Find a Student
            </a>
          </li>
          <li
            style={{
              float: "left",
              padding: "10px",
              borderBottom: "1px solid grey",
            }}
          >
            <a href="#blog" onClick={handleUpdateById}>
              Update a Student
            </a>
          </li>
        </ul>
      </div>

      <div className="for-middle-text">
        <div
          style={{
            overflowX: "auto",
            display: "flex",
            flexDirection: "column",
            width: "100%",
            backgroundColor: "#333",
            height: "500px",
            padding: "10px",
          }}
        >
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
                backgroundColor: "#4CAF50",
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
            {stuData.map((student) => (
              <tr
                className="th_td"
                key={student._id}
                style={{
                  backgroundColor: "#f9f9f9",
                  borderBottom: "1px solid #e2e2e2",
                  textAlign: "center",
                }}
              >
                <td style={{ padding: "12px 15px", color: "gray" }}>
                  {student.stu_id}
                </td>
                <td style={{ padding: "12px 15px", color: "gray" }}>
                  {student.stu_role}
                </td>
                <td style={{ padding: "12px 15px", color: "gray" }}>
                  {student.stu_firstName}
                </td>
                <td style={{ padding: "12px 15px", color: "gray" }}>
                  {student.stu_lastName}
                </td>
                <td style={{ padding: "12px 15px", color: "gray" }}>
                  {student.stu_email}
                </td>
                <td style={{ padding: "12px 15px", color: "gray" }}>
                  {student.stu_userName}
                </td>
                <td style={{ padding: "12px 15px", color: "gray" }}>
                  {student.stu_courses}
                </td>
              </tr>
            ))}
          </table>
        </div>
      </div>
    </div>
  );
}

export default AdminDashBoard;
