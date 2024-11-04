import React from "react";
import EmployeeForm from "../components/EmployeeForm";
import { useParams } from "react-router-dom";

const EditEmployeePage = ({ employees, onEditEmployee }) => {
  console.log("employees", employees);
  const params = useParams();
  const { id, ...employee } = employees.find(
    (employee) => employee.id === +params.id
  );

  return (
    <EmployeeForm
      initialValue={employee}
      onSubmit={(form) => onEditEmployee(id, form)}
    />
  );
};

export default EditEmployeePage;
