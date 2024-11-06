import http from "./http";

export function fetchEmployees() {
  //   const accessToken = localStorage.getItem("accessToken");
  //   console.log("accessToken", accessToken);
  return http.get(
    "/employees"
    //     , {
    //     headers: {
    //       Authorization: `Bearer ${accessToken}`,
    //     },
    //   }
  );
}

export function fetchEmployeeById(id) {
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

export function deleteEmployee(id) {
  return http.delete(`/employees/${id}`);
}
