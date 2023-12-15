import { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

export const ResetPassword = () => {
  const navigate = useNavigate();
  const baseURL = "http://localhost:3000";
  const axiosInstance = axios.create({ baseURL });

  const [userData, updateUserData] = useState({
    sentToken: "",
    password: "",
    passwordConfirm: "",
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
      .patch(`api/auth/resetPassword/${userData.sentToken}`, {
        password: userData.password,
        passwordConfirm: userData.passwordConfirm,
      })
      .then((response) => {
        console.log(response);
        window.alert("Update Success!");
        console.log(response);
        navigate("/");
      });
  };

  const handleBack = async (e) => {
    e.preventDefault();
    navigate("/");
  };

  return (
    <div className="bg-gray-100">
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          height: "100vh",
          backgroundColor: "#f5f5f5",
        }}
      >
        <div
          style={{
            maxWidth: "400px",
            width: "90%",
            padding: "20px",
            backgroundColor: "white",
            boxShadow: "0 4px 8px rgba(0, 0, 0, 0.2)",
            borderRadius: "8px",
            textAlign: "center",
          }}
        >
          <h3
            style={{
              color: "#333",
              fontSize: "24px",
              fontWeight: "bold",
              marginBottom: "20px",
            }}
          >
            Reset Your Password
          </h3>
          <form name="signupForm" id="signupForm">
            <div
              style={{
                margin: "10px 0",
                display: "inline-block",
                width: "100%",
                textAlign: "left",
              }}
            >
              <label
                for="password"
                style={{ display: "block", marginBottom: "5px" }}
              >
                New Password
              </label>
              <input
                type="password"
                id="password"
                name="password"
                // Required
                value={userData.password}
                onChange={handleInputChange}
                style={{
                  width: "100%",
                  padding: "10px",
                  border: "1px solid #ddd",
                  borderRadius: "4px",
                }}
              />
            </div>

            <div
              style={{
                margin: "10px 0",
                display: "inline-block",
                width: "100%",
                textAlign: "left",
              }}
            >
              <label
                for="confirmPassword"
                style={{ display: "block", marginBottom: "5px" }}
              >
                Confirm Password
              </label>
              <input
                type="password"
                id="confirmPassword"
                name="passwordConfirm"
                value={userData.passwordConfirm}
                onChange={handleInputChange}
                style={{
                  width: "100%",
                  padding: "10px",
                  border: "1px solid #ddd",
                  borderRadius: "4px",
                }}
              />
            </div>

            <div
              className="inputDiv"
              style={{
                margin: "10px 0",
                display: "inline-block",
                width: "100%",
                textAlign: "left",
              }}
            >
              <label
                for="sentToken"
                style={{ display: "block", marginBottom: "5px" }}
              >
                Sent Token
              </label>
              <input
                type="text"
                id="sentToken"
                name="sentToken"
                value={userData.sentToken}
                onChange={handleInputChange}
                style={{
                  width: "100%",
                  padding: "10px",
                  border: "1px solid #ddd",
                  borderRadius: "4px",
                }}
              />
            </div>

            <div style={{ textAlign: "center", marginTop: "20px" }}>
              <button
                id="submitButton"
                onClick={handleSubmit}
                style={{
                  backgroundColor: "gray",
                  color: "orange",
                  fontSize: "16px",
                  padding: "12px 24px",
                  border: "none",
                  cursor: "pointer",
                  borderRadius: "10px",
                  width: "100%",
                }}
              >
                <span>Continue</span>
              </button>
            </div>
            <div style={{ textAlign: "center", marginTop: "20px" }}>
              <button
                id="backButton"
                onClick={handleBack}
                style={{
                  backgroundColor: "gray",
                  color: "orange",
                  fontSize: "16px",
                  padding: "12px 24px",
                  border: "none",
                  cursor: "pointer",
                  borderRadius: "10px",
                  width: "100%",
                }}
              >
                <span>Back to Home</span>
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};
