import React from "react";
import { Route, Routes } from "react-router-dom";
import EmployeeData from "./Component/EmployeeData";
import Login from "./Component/Login";

const Routing = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/register" element={<EmployeeData />} />
      </Routes>
    </div>
  );
};

export default Routing;
