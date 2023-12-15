import "./App.css";
import "@radix-ui/themes/styles.css";
import { Theme } from "@radix-ui/themes";
import {
  createBrowserRouter,
  Route,
  createRoutesFromElements,
  Outlet,
  RouterProvider,
} from "react-router-dom";
import { Home } from "./pages/Home/index.jsx";
import { About } from "./pages/About/index.jsx";
import { Contact } from "./pages/Contact/index.jsx";
import { SignUp } from "./pages/Signup/index.jsx";
import { SignIn } from "./pages/Signin/index.jsx";
import { UserProvider } from "./contexts/UserContext.jsx";
import BaseDashboard from "./pages/Dashboard/BaseDashboard.jsx";
import AdminDashBoard from "./pages/Dashboard/Admin_Dashboard/index.jsx";
import StudentDashBoard from "./pages/Dashboard/Student_Dashboard/index.jsx";
import { SearchByID } from "./pages/Dashboard/Admin_Dashboard/FindOneUser/index.jsx";
import { DeleteByID } from "./pages/Dashboard/Admin_Dashboard/DeleteUser/index.jsx";
import { UpdateUser } from "./pages/Dashboard/Admin_Dashboard/UpdateUser/index.jsx";
import { ForgotPassword } from "./pages/ForgotPassword/index.jsx";
import { ResetPassword } from "./pages/ResetPassword/index.jsx";
import Navbar from "./components/Navbar/Navbar.jsx";
import Footer from "./components/Footer/Footer.jsx";

const App = () => {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<Root />}>
        <Route index element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/signin" element={<SignIn />}></Route>
        <Route path="/dashboard" element={<BaseDashboard />} />
        <Route path="/admin_dashboard" element={<AdminDashBoard />} />
        <Route path="/stu_dashboard" element={<StudentDashBoard />} />
        <Route path="/search_by_id" element={<SearchByID />} />
        <Route path="/delete_by_id" element={<DeleteByID />} />
        <Route path="/update_by_id" element={<UpdateUser />} />
        <Route path="/forgot_password" element={<ForgotPassword />} />
        <Route path="/reset_password" element={<ResetPassword />} />
      </Route>
    )
  );

  return (
    <div className="App">
      <UserProvider>
        <RouterProvider router={router} />
      </UserProvider>
    </div>
  );
};

const Root = () => {
  return (
    <>
      <div>
        <Navbar />
        <Outlet />
        <Footer />
      </div>
    </>
  );
};

export default App;
