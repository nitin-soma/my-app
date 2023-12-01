import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./components/Home";
import Dashboard from "./components/Dashboard";
import SignUp from "./components/SignUp";
import StudentSignUp from "./components/StudentSignUp";
import AdminSignUp from "./components/AdminSignUp";
import LogIn from "./components/LogIn";
import AdminHome from "./components/AdminHome";
import Announcements from "./components/Announcements";
import RequireAuth from "./components/RequireAuth";
import ContactUs from "./components/Contactus";
import PostForm from "./components/PostForm";
import "./App.css";

function App() {
  return (
    <div className="App">
      <div>
        <BrowserRouter>
          <Routes>
            <Route path="/" exact element={<Home />} />
            <Route path="/signup" element={<SignUp />} />
            <Route path="/student" element={<StudentSignUp />}></Route>
            <Route path="/admin" element={<AdminSignUp />}></Route>
            <Route path="/announcements" element={<Announcements />}></Route>
            <Route path="/contactus" element={<ContactUs />} />
            <Route path="/login" element={<LogIn />}></Route>
            <Route element={<RequireAuth allowedRoles={["admin"]} />}>
              <Route path="/adminHome" element={<AdminHome />}></Route>
            </Route>
            <Route path="/dashboard" element={<Dashboard />}></Route>
            <Route path="/postform" element={<PostForm />} />
          </Routes>
        </BrowserRouter>
      </div>
    </div>
  );
}

export default App;
