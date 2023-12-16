import React, { useContext } from "react";
import styles from "../../components/Navbar/navbar.module.css";
import Logo from "../../assets/Wizstack Title.png";
import { useUser } from "../../contexts/UserContext.jsx";
import { Link } from "react-router-dom";

const Navbar = () => {
  // Variables from the context
  const { user, signout } = useUser();
  const isAdmin = user?.role === "administrator";
  const isAuthenticated = !!user;

  return (
    <div className={styles.navbar_container}>
      {/* Logo linking to the home page */}
      <Link to={"/"}>
        <img src={Logo} alt="WizStack Title" className={styles.logo} />
      </Link>
      {/* Navigation links */}
      <div className={styles.navbar_links}>
        <Link to={"/dashboard"}>DASHBOARD</Link>
        <Link to={"/about"}>ABOUT</Link>
        <Link to={"/contact"}>CONTACT</Link>
        <Link to={"/"}>HOME</Link>
      </div>
      {/* Action links based on user authentication and role */}
      <div className={styles.navbar_actions}>
        {isAdmin && <Link to={"/users"}>USERS</Link>}
        {isAuthenticated ? (
          <>
            <Link to={"/reset_password"}>PROFILE</Link>
            <Link to={"/"} onClick={signout}>
              SIGN OUT
            </Link>
          </>
        ) : (
          <>
            <Link to={"/signup"}>SIGN UP</Link>
            <Link to={"/signin"}>SIGN IN</Link>
          </>
        )}
      </div>
    </div>
  );
};

export default Navbar;
