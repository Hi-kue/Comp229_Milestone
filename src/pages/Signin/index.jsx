import axiosInstance from "../../services/axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useUser } from "../../contexts/UserContext";

export const SignIn = () => {
  const { user, signin, signout } = useUser(); // declare function from UserContext
  const navigate = useNavigate();

  // const baseURL = "http://localhost:3000";
  // const axiosInstance = axios.create({ baseURL });

  const [userData, updateUserData] = useState({
    userName: "",
    password: "",
  });

  //Connect to the backend
  const handleInputChange = (event) => {
    const { name, value } = event.target;

    updateUserData({
      ...userData,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Using Axios
    try {
      const response = await axiosInstance.post("/api/auth/signin", {
        email: userData.userName,
        password: userData.password,
      });
      console.log(response);
      window.alert(response.data.status);
      // const token = response.data.token;
      // const role = response.data.user.role;
      // signin(token, role);
      // console.log(token, role);
      // console.log(user);
      navigate("/");
    } catch (err) {
      console.log(err);
    }
  };

  const handleGetAll = async (e) => {
    e.preventDefault();
    await axiosInstance
      .post("/api/auth/signin", {
        email: userData.userName,
        password: userData.password,
      })
      .then((response) => {
        console.log(response);
        window.alert(response.data.status);
        // the following two lines work with UserContext

        navigate("/");
      })
      .catch((err) => console.log(err));

    // try {
    //   const response = await axiosInstance.post("/api/auth/signin", {
    //     email: userData.userName,
    //     password: userData.password,
    //   });
    //   console.log(response);
    //   window.alert(response.data.status);
    //   const token = response.data.token;
    //   const role = response.data.user.role;
    //   navigate("/");
    // } catch (err) {
    //   console.log(err);
    // }
  };

  const handleForgotPassword = (e) => {
    navigate("/forgot_password");
  };

  return (
    <div
      className="login-container"
      style={{
        maxWidth: "400px",
        margin: "50px auto",
        padding: "20px",
        height: "400px",
        boxShadow: "0 4px 8px 0 rgba(0,0,0,0.2)",
      }}
    >
      <div
        className="login-container-wrapper clearfix"
        style={{
          margin: "0 auto",
          padding: "20px",
          width: "100%",
          height: "350px",
          backgroundColor: "#f7f7f7",
        }}
      >
        <div
          className="logo"
          style={{
            fontSize: "48px",
            textAlign: "center",
            marginBottom: "20px",
            color: "#4CAF50",
          }}
        >
          <i className="fa fa-sign-in"></i>
        </div>
        <div
          className="welcome"
          style={{
            textAlign: "center",
            marginBottom: "20px",
            fontSize: "24px",
            fontWeight: "bold",
            color: "gray",
          }}
        >
          <strong style={{ color: "Orange" }}>Welcome,</strong> please login
        </div>

        <form
          onSubmit={handleSubmit}
          className="form-horizontal login-form"
          style={{}}
        >
          <div className="form-group relative" style={{ position: "relative" }}>
            <input
              id="login_username"
              name="userName"
              className="form-control input-lg"
              type="email"
              placeholder="Username"
              required
              value={userData.userName}
              onChange={handleInputChange}
              style={{
                fontSize: "16px",
                padding: "10px 40px",
                backgroundColor: "#e6f7ff",
                color: "#003366",
                marginBottom: "6px",
              }}
            />
            <i
              className="fa fa-user"
              style={{
                position: "absolute",
                top: "10px",
                left: "10px",
                fontSize: "20px",
                color: "#aaa",
              }}
            ></i>
          </div>
          <div
            className="form-group relative password"
            style={{ position: "relative" }}
          >
            <input
              id="login_password"
              name="password"
              className="form-control input-lg"
              type="password"
              placeholder="Password"
              required
              value={userData.password}
              onChange={handleInputChange}
              style={{
                fontSize: "16px",
                padding: "10px 40px",
                backgroundColor: "#e6f7ff",
                color: "#003366",
                marginBottom: "6px",
              }}
            />
            <i
              className="fa fa-lock"
              style={{
                position: "absolute",
                top: "10px",
                left: "10px",
                fontSize: "20px",
                color: "#aaa",
              }}
            ></i>
          </div>
          <div className="form-group">
            <button
              type="submit"
              className="btn btn-success btn-lg btn-block"
              style={{
                color: "white",
                fontSize: "18px",
                padding: "10px",
                margin: "10px 0",
                width: "80%",
                background: "linear-gradient(to right, #009999, #004d4d)",
              }}
            >
              Login
            </button>
          </div>
          <div
            className="checkbox pull-left"
            style={{ float: "left", fontSize: "10px" }}
          >
            <label style={{ color: "#5cb85c", fontSize: "16px" }}>
              <input type="checkbox" /> Remember Me
            </label>
          </div>
          <div
            className="checkbox pull-right"
            style={{ float: "right", fontSize: "10px" }}
          >
            <label>
              <a
                className="forget"
                href="#"
                title="forget"
                onClick={handleForgotPassword}
                style={{
                  textDecoration: "none",
                  color: "#5cb85c",
                  fontSize: "16px",
                }}
              >
                Forgot your password
              </a>
            </label>
          </div>
        </form>
      </div>
    </div>
  );
};

// await axiosInstance
//   .post("/api/auth/signin", {
//     email: userData.userName,
//     password: userData.password,
//   })
//   .then((response) => {
//     console.log(response);
//     window.alert(response.data.status);
//     // the following two lines work with UserContext
//     const token = response.data.token;
//     console.log(token);
//     const role = response.data.user.role;
//     console.log(role);
//     //signin(token);
//     setUser(token, role);
//     navigate("/");
//   })
//   .catch((err) => console.log(err));
