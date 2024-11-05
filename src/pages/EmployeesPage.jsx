import React, { useEffect, useState } from "react";
import EmployeesTable from "../components/EmployeesTable";
import { Button, Grid2 as Grid } from "@mui/material";
import { Add } from "@mui/icons-material";
import { Link, useSearchParams } from "react-router-dom";
import * as employeeService from "../services/employee";

const EmployeesPage = ({
  // employees,
  onDeleteEmployee,
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

  // const [searchParams] = useSearchParams();

  // const searchKey = searchParams.get("searchKey");

  // useEffect(() => {
  //   console.log("searchKey", searchKey);
  //   onFilterEmployees(searchKey);
  // }, []);

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
          onDeleteEmployee={onDeleteEmployee}
        />
      </Grid>
    </Grid>
  );
};

export default EmployeesPage;
