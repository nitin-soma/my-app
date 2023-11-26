import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import SignUp from "./components/SignUp";
import StudentSignUp from "./components/StudentSignUp";
import AdminSignUp from "./components/AdminSignUp";
import "./App.css";

function App() {
  return (
    <div className="App">
      <Navbar />
      <div>
        <BrowserRouter>
          <Routes>
            <Route path="/" exact element={<Home />} />
            <Route path="/signup" element={<SignUp />} />
            <Route path="/student" element={<StudentSignUp />}></Route>
            <Route path="/admin" element={<AdminSignUp />}></Route>
          </Routes>
        </BrowserRouter>
      </div>
    </div>
  );
}

export default App;
