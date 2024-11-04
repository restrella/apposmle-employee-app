import React from "react";
import EmployeesTable from "../components/EmployeesTable";
import { Button, Grid2 as Grid } from "@mui/material";
import { Add } from "@mui/icons-material";
import { Link } from "react-router-dom";

const EmployeesPage = ({ employees, onDeleteEmployee, onEdit }) => {
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
