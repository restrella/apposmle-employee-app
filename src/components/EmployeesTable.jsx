import { ArrowForward, Delete, Edit } from "@mui/icons-material";
import {
  Icon,
  IconButton,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
} from "@mui/material";
import React from "react";
import { Link, useNavigate } from "react-router-dom";

const EmployeesTable = ({ employees, onDeleteEmployee }) => {
  const navigate = useNavigate();
  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} size="small" aria-label="a dense table">
        <TableHead>
          <TableRow>
            <TableCell>Name</TableCell>
            <TableCell>Username</TableCell>
            <TableCell>Actions</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {employees.map((employee) => (
            <TableRow
              key={employee.id}
              sx={{ "&:last-child td, &:last-child th": { border: 0 } }}>
              <TableCell component="th" scope="row">
                {employee.name}
              </TableCell>
              <TableCell>{employee.username}</TableCell>
              <TableCell>
                <IconButton
                  color="primary"
                  onClick={() => navigate(`/employees/${employee.id}`)}>
                  <ArrowForward />
                </IconButton>
                <Link to={`${employee.id}/edit`}>
                  <IconButton color={"primary"}>
                    <Edit />
                  </IconButton>
                </Link>
                <IconButton
                  color="error"
                  onClick={() => onDeleteEmployee(employee.id)}>
                  <Delete />
                </IconButton>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default EmployeesTable;
