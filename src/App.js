import React, { useEffect, useState } from "react";
import { EMPLOYEES_DATA } from "./data/employees";
import EmployeesTable from "./components/EmployeesTable";
import { Container, CssBaseline } from "@mui/material";
import EmployeeForm from "./components/EmployeeForm";
import EmployeesPage from "./pages/EmployeesPage";
import { Navigate, Route, Router, Routes, useNavigate } from "react-router-dom";
import NotFoundPage from "./pages/NotFoundPage";
import AddEmployeePage from "./pages/AddEmployeePage";
import EmployeeDetailsPage from "./pages/EmployeeDetailsPage";
import EditEmployeePage from "./pages/EditEmployeePage";
import axios from "axios";
import { fetchEmployees } from "./services/employee";
import RegisterPage from "./pages/RegisterPage";
import NavBar from "./components/NavBar";
import LoginPage from "./pages/LoginPage";
import * as authService from "./services/auth";

const App = () => {
  const navigate = useNavigate();
  const [accessToken, setAccessToken] = useState(authService.getAccessToken());

  const handleLogin = async (username, password) => {
    try {
      console.log("handleLogin");
      const response = await authService.login(username, password);
      console.log("response", response);
      localStorage.setItem("accessToken", response.data.accessToken);
      setAccessToken(response.data.accessToken);
      navigate("/");
    } catch (error) {
      // if(error.response )
      // alert
      console.log("error", error);
    }
  };

  const handleLogout = () => {
    authService.logout();
    setAccessToken(null);
    navigate("/login");
  };
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
      <NavBar onLogout={handleLogout} />
      <Container sx={{ marginTop: 3 }}>
        <Routes>
          <Route path="/" element={<Navigate to="/employees" />}></Route>
          <Route
            path="/employees"
            element={
              accessToken ? (
                <EmployeesPage
                // employees={employees}
                // onDeleteEmployee={handleDeleteEmployee}
                // onFilterEmployees={handleFilterEmployees}
                />
              ) : (
                <Navigate to="/login" />
              )
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
            }
          />

          <Route path="/register" element={<RegisterPage />} />
          <Route path="/login" element={<LoginPage onLogin={handleLogin} />} />

          <Route path="/not-found" element={<NotFoundPage />} />
          <Route path="*" element={<Navigate to="/not-found" />} />
        </Routes>
      </Container>
    </>
  );
};

export default App;
