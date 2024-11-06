import React, { useEffect, useState } from "react";
import EmployeesTable from "../components/EmployeesTable";
import { Button, Grid2 as Grid } from "@mui/material";
import { Add } from "@mui/icons-material";
import { Link, useNavigate, useSearchParams } from "react-router-dom";
import * as employeeService from "../services/employee";

const EmployeesPage = ({
  // employees,
  // onFilterEmployees,
  onEdit,
}) => {
  const [employees, setEmployees] = useState([]);

  useEffect(() => {
    employeeService
      .fetchEmployees()
      .then((response) => {
        setEmployees(response.data);
      })
      .catch((error) => {
        console.log("error", error);
      });
  }, []);

  const navigate = useNavigate();
  // const [searchParams] = useSearchParams();

  // const searchKey = searchParams.get("searchKey");

  // useEffect(() => {
  //   console.log("searchKey", searchKey);
  //   onFilterEmployees(searchKey);
  // }, []);

  const handleDeleteEmployee = async (id) => {
    const employeesClone = [...employees];

    try {
      setEmployees((prevState) =>
        prevState.filter((employee) => employee.id !== id)
      );
      await employeeService.deleteEmployee(id);
    } catch (error) {
      setEmployees(employeesClone);
      console.log(error);
      if (error.response && error.response.status === 404) {
        alert("Data might have already been deleted");
      }
    }
  };

  return (
    <Grid
      container
      spacing={2}
      justifyContent={"flex-end"}
      //   direction={"row"}

      textAlign={"right"}>
      <Grid size={4}>
        <Button
          variant="text"
          startIcon={<Add />}
          LinkComponent={Link}
          to="/employees/new">
          Add Employee
        </Button>
      </Grid>
      <Grid size={12}>
        <EmployeesTable
          employees={employees}
          onDeleteEmployee={handleDeleteEmployee}
        />
      </Grid>
    </Grid>
  );
};

export default EmployeesPage;
