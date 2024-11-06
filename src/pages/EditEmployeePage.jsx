import React, { useEffect, useState } from "react";
import EmployeeForm from "../components/EmployeeForm";
import { useNavigate, useParams } from "react-router-dom";
import * as employeeService from "../services/employee";

const EditEmployeePage = ({ onEditEmployee }) => {
  const [employee, setEmployee] = useState(null);
  const [loading, setLoading] = useState(false);
  const params = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    setLoading(true);
    employeeService.fetchEmployeeById(params.id).then((response) => {
      // console.log("response.data", response.data);
      setEmployee(response.data);
      setLoading(false);
    });
  }, [params.id]);

  const handleSubmit = (form) => {
    console.log("handlingedit");
    employeeService.updateEmployee(employee.id, form).then((response) => {
      console.log("response", response);
      navigate("/");
    });
  };

  // const { id, ...employee } = employees.find(
  //   (employee) => employee.id === +params.id
  // );

  if (loading) {
    return <h1>Loading...</h1>;
  }

  if (employee)
    return (
      <EmployeeForm
        initialValue={{
          name: employee.name,
          username: employee.username,
          email: employee.email,
          phone: employee.phone || "",
          address: employee.address || "",
          website: employee.website || "",
        }}
        onSubmit={handleSubmit}
      />
    );
};

export default EditEmployeePage;
