import React, { useEffect, useState } from "react";
import { EMPLOYEES_DATA } from "./data/employees";
import EmployeesTable from "./components/EmployeesTable";
import { Container, CssBaseline } from "@mui/material";
import EmployeeForm from "./components/EmployeeForm";
import EmployeesPage from "./pages/EmployeesPage";
import { Navigate, Route, Router, Routes } from "react-router-dom";
import NotFoundPage from "./pages/NotFoundPage";
import AddEmployeePage from "./pages/AddEmployeePage";
import EmployeeDetailsPage from "./pages/EmployeeDetailsPage";
import EditEmployeePage from "./pages/EditEmployeePage";
import axios from "axios";
import { fetchEmployees } from "./services/employee";

const App = () => {
  // const handleDeleteEmployee = (id) => {
  //   setEmployees((prevState) =>
  //     prevState.filter((employee) => employee.id !== id)
  //   );
  // };

  // const handleSubmit = (employee) => {
  //   setEmployees((prevState) => [
  //     ...prevState,
  //     { ...employee, id: prevState.length * 999 + 1 },
  //   ]);
  // };

  // const handleFilterEmployees = (searchKey) => {
  //   setEmployees((prevState) =>
  //     prevState.filter((employee) =>
  //       employee.name.toLowerCase().includes(searchKey.toLowerCase())
  //     )
  //   );
  // };

  // const handleEditEmployee = (id, employee) => {
  //   console.log("id", id);
  //   console.log("employee", employee);
  //   setEmployees((prevState) =>
  //     prevState.map((oldEmployee) => {
  //       if (oldEmployee.id == id) {
  //         return {
  //           ...employee,
  //         };
  //       }
  //       return oldEmployee;
  //     })
  //   );
  // };

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
              // employees={employees}
              // onDeleteEmployee={handleDeleteEmployee}
              // onFilterEmployees={handleFilterEmployees}
              />
            }></Route>

          <Route
            path="/employees/:id"
            element={
              <EmployeeDetailsPage
              // employees={employees}
              // onDeleteEmployee={handleDeleteEmployee}
              />
            }
          />
          <Route
            path="/employees/new"
            element={
              <AddEmployeePage
              // onSubmit={handleSubmit}
              />
            }
          />
          <Route
            path="/employees/:id/edit"
            element={
              <EditEmployeePage
              // employees={employees}
              // onEditEmployee={handleEditEmployee}
              />
            }></Route>

          <Route path="/not-found" element={<NotFoundPage />} />
          <Route path="*" element={<Navigate to="/not-found" />} />
        </Routes>
      </Container>
    </>
  );
};

export default App;
