import { MoreVert } from "@mui/icons-material";
import {
  Card,
  CardContent,
  CardHeader,
  Grid2 as Grid,
  IconButton,
  Menu,
  MenuItem,
  Typography,
} from "@mui/material";
import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { fetchEmployeesById } from "../services/employee";

const EmployeeDetailsPage = ({ onDeleteEmployee }) => {
  const params = useParams();
  const empId = +params.id;
  // const employee = employees.find((employee) => employee.id === empId);

  const [employee, setEmployee] = useState(null);

  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);

  const navigate = useNavigate();

  useEffect(() => {
    fetchEmployeesById(empId).then((response) => {
      // console.log("response.data", response.data);
      setEmployee(response.data);
    });
  }, []);

  const handleOpenMenu = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleCloseMenu = (event) => {
    setAnchorEl(null);
  };

  if (employee === null) {
    return <h1>Loading...</h1>;
  } else {
    return (
      // } else {
      // employee && (
      <Card>
        <CardHeader
          action={
            <IconButton onClick={handleOpenMenu}>
              <MoreVert />
            </IconButton>
          }
          title={`${employee.name}`}
          subheader={`@${employee.username}`}
        />
        <CardContent>
          <Menu
            id="basic-menu"
            anchorEl={anchorEl}
            open={open}
            onClose={handleCloseMenu}>
            <MenuItem
              onClick={() => {
                navigate(`/employees/${empId}/edit`);
              }}>
              Edit
            </MenuItem>
            <MenuItem
              onClick={() => {
                onDeleteEmployee(empId);
                navigate("/");
              }}>
              Delete
            </MenuItem>
          </Menu>
          <Grid container spacing={5}>
            <Grid size={6}>
              <Typography variant="overline">Email</Typography>
              <Typography variant="body2">{employee.email}</Typography>
            </Grid>
            <Grid size={6}>
              <Typography variant="overline">Phone</Typography>
              <Typography variant="body2">{employee.phone}</Typography>
            </Grid>
            <Grid size={6}>
              <Typography variant="overline">Address</Typography>
              <Typography variant="body2">{employee.address}</Typography>
            </Grid>
            <Grid size={6}>
              <Typography variant="overline">Website</Typography>
              <Typography variant="body2">{employee.website}</Typography>
            </Grid>
          </Grid>
        </CardContent>
      </Card>
    );
  }
};

export default EmployeeDetailsPage;
