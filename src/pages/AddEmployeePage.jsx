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
    }).catch(error => {
      if(error.response && error.response.status >= 400 && error.response.status < 500 ) {
        alert(error.response.data.message[0])
      }
    });
  };
  return <EmployeeForm onSubmit={handleSubmit} />;
};

export default AddEmployeePage;
