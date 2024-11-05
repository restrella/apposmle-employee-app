import axios from "axios";
import http from "./http";

export function fetchEmployees() {
  return http.get("/employees");
}

export function fetchEmployeesById(id) {
  return http.get(`/employees/${id}`);
}

export function addEmployee(employee) {
  const employeeClone = { ...employee };
  Object.keys(employeeClone).forEach((key) => {
    if (
      employeeClone[key] === "" ||
      employeeClone[key] === null ||
      employeeClone[key] === undefined
    ) {
      delete employeeClone[key];
    }
  });
  return http.post(`/employees`, employeeClone);
}

export function updateEmployee(id, employee) {
  const employeeClone = { ...employee };
  Object.keys(employeeClone).forEach((key) => {
    if (
      employeeClone[key] === "" ||
      employeeClone[key] === null ||
      employeeClone[key] === undefined
    ) {
      delete employeeClone[key];
    }
  });
  return http.put(`/employees/${id}`, employeeClone);
}
