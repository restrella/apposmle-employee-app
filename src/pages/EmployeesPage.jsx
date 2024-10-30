import React from "react";
import EmployeesTable from "../components/EmployeesTable";

const EmployeesPage = ({ employees, onDeleteEmployee, onEdit }) => {
  return (
    <EmployeesTable
      employees={employees}
      onDeleteEmployee={onDeleteEmployee}
      onEdit={onEdit}
    />
  );
};

export default EmployeesPage;
