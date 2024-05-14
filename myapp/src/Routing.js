import React from "react";
import { Route, Routes } from "react-router-dom";
import HrLogin from "./Component/HrLogin";
import EmployeeData from "./Component/EmployeeData";

const Routing = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<HrLogin />} />
        <Route path="/register" element={<EmployeeData />} />
      </Routes>
    </div>
  );
};

export default Routing;
