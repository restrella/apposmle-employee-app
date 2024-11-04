import React from "react";
import EmployeeForm from "../components/EmployeeForm";

const AddEmployeePage = ({ onSubmit }) => {
  return <EmployeeForm onSubmit={onSubmit} />;
};

export default AddEmployeePage;
