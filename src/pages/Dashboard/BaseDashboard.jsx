import React from 'react';
import { Link } from "react-router-dom";
import { useUser } from "../../contexts/UserContext.jsx";
import AdminDashBoard from "./Admin_Dashboard/index.jsx";
import StudentDashBoard from "./Student_Dashboard/index.jsx";
import { SignIn } from '../Signin/index.jsx';

export const BaseDashboard = () => {
    const { user, signout } = useUser();
    const isAdmin = user?.role === 'administrator';
    const isAuthenticated = !!user;

    return (
        <>
            <div className="">
                {isAdmin ? (
                    <AdminDashBoard />                    
                ) : (
                    isAuthenticated ? (
                        <StudentDashBoard />
                    ) : (
                        <SignIn />
                    )
                )}
                {/*
                {!isAdmin && isAuthenticated ? (
                    <StudentDashBoard />
                ) : (
                    <AdminDashBoard />
                )}
                */}
            </div>
        </>
    );
}

export default BaseDashboard;