import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import SignUp from "./components/SignUp";
import StudentSignUp from "./components/StudentSignUp";
import AdminSignUp from "./components/AdminSignUp";
import Footer from "./components/Footer";
import LogIn from "./components/LogIn";
import Announcements from "./components/Announcements";
import "./App.css";
import { AuthProvider } from "./context/AuthProvider";

function App() {
  return (
    <AuthProvider>
      <div className="App">
        <Navbar />
        <div>
          <BrowserRouter>
            <Routes>
              <Route path="/" exact element={<Home />} />
              <Route path="/signup" element={<SignUp />} />
              <Route path="/student" element={<StudentSignUp />}></Route>
              <Route path="/admin" element={<AdminSignUp />}></Route>
              <Route path="/login" element={<LogIn />}></Route>
              <Route path="/announcements" element={<Announcements />}></Route>
            </Routes>
          </BrowserRouter>
        </div>
        <Footer />
      </div>
    </AuthProvider>
  );
}

export default App;
