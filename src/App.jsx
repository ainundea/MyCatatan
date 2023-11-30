import React from "react";
import { Routes, Route, useLocation, Navigate, Outlet } from "react-router-dom";
import Home from "./pages/Home";
import AddTodo from "./pages/AddNote";
import Login from "./pages/Login";
import Register from "./pages/Register";
import "./App.css";
import { getAccessToken } from "./utils/network";

function NeedLogin() {
  let auth = getAccessToken();
  let location = useLocation();

  if (!auth) {
    return <Navigate to="/" state={{ from: location }} />;
  }

  return <Outlet />;
}

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route element={<NeedLogin />}>
          <Route path="/:username" element={<Home />} />
          <Route path="/:username/add" element={<AddTodo />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
