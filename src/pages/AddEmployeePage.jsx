import React from "react";
import EmployeeForm from "../components/EmployeeForm";
import * as employeeService from "../services/employee";
import { useNavigate } from "react-router-dom";

const AddEmployeePage = () => {
  const navigate = useNavigate();
  const handleSubmit = (form) => {
    employeeService.addEmployee(form).then((response) => {
      console.log(response);
      navigate("/");
    });
  };
  return <EmployeeForm onSubmit={handleSubmit} />;
};

export default AddEmployeePage;
