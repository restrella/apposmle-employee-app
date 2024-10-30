import React, { useState } from "react";
import { EMPLOYEES_DATA } from "./data/employees";
import EmployeesTable from "./components/EmployeesTable";
import { Container, CssBaseline } from "@mui/material";
import EmployeeForm from "./components/EmployeeForm";
import EmployeesPage from "./pages/EmployeesPage";
import { Navigate, Route, Router, Routes } from "react-router-dom";

const App = () => {
  const [employees, setEmployees] = useState(EMPLOYEES_DATA);
  const [edit, setEdit] = useState(false);

  const handleDeleteEmployee = (id) => {
    setEmployees((prevState) =>
      prevState.filter((employee) => employee.id !== id)
    );
  };

  const handleEdit = (id) => {
    setEdit(true);
  };
  return (
    <>
      <CssBaseline />
      <Container>
        <Routes>
          <Route path="/" element={<Navigate to="/employees" />}></Route>
          <Route
            path="/employees"
            element={
              <EmployeesPage
                employees={employees}
                onDeleteEmployee={handleDeleteEmployee}
                onEdit={handleEdit}
              />
            }></Route>
        </Routes>
      </Container>
    </>
  );
};

export default App;
