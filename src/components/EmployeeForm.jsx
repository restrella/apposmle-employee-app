import {
  Button,
  Card,
  CardActions,
  CardContent,
  CardHeader,
  Grid2 as Grid,
  TextField,
} from "@mui/material";
import Joi from "joi";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const EmployeeForm = ({ onSubmit, initialValue }) => {
  const navigate = useNavigate();
  const [form, setForm] = useState(
    initialValue ?? {
      name: "",
      username: "",
      email: "",
      phone: "",
      address: "",
      website: "",
    }
  );

  const [errors, setErrors] = useState({});

  const schema = Joi.object({
    name: Joi.string().min(2).max(100).required(),
    username: Joi.string().min(3).max(20).required(),
    email: Joi.string()
      .email({ minDomainSegments: 2, tlds: { allow: ["com", "net"] } })
      .required(),
    phone: Joi.string().min(6).max(15).allow("").optional(),
    address: Joi.string().min(3).max(500).allow("").optional(),
    website: Joi.string().uri().allow("").optional(),
  });

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log("form", form);
    onSubmit(form);
    // console.log(event);
    // navigate("/");
  };

  const handleChange = ({ currentTarget: input }) => {
    // console.log("form", form);
    setForm({
      ...form,
      [input.name]: input.value,
    });

    const result = schema
      .extract(input.name)
      .label(input.name)
      .validate(input.value);

    console.log("errors", errors);
    if (result.error) {
      // set errors
      setErrors({
        ...errors,
        [input.name]: result.error.details[0].message,
      });
    } else {
      delete errors[input.name];
      setErrors(errors);
    }
  };

  const isFormInvalid = () => {
    console.log("form", form);
    const result = schema.validate(form);
    console.log("result", result);

    return !!result.error;
  };

  return (
    <Grid
      container
      justifyContent={"center"}
      component={"form"}
      onSubmit={handleSubmit}>
      <Grid size={6}>
        <Card>
          <CardHeader></CardHeader>
          <CardContent>
            <Grid container spacing={2}>
              <Grid size={12}>
                <TextField
                  name="name"
                  error={!!errors.name}
                  helperText={errors.name}
                  label="Name"
                  variant="standard"
                  onChange={handleChange}
                  value={form.name}
                  fullWidth
                />
              </Grid>
              <Grid size={12}>
                <TextField
                  name="username"
                  error={!!errors.username}
                  helperText={errors.username}
                  label="Username"
                  variant="standard"
                  onChange={handleChange}
                  value={form.username}
                  fullWidth
                />
              </Grid>
              <Grid size={12}>
                <TextField
                  name="phone"
                  error={!!errors.phone}
                  helperText={errors.phone}
                  label="Phone"
                  variant="standard"
                  onChange={handleChange}
                  value={form.phone}
                  fullWidth
                />
              </Grid>
              <Grid size={12}>
                <TextField
                  name="email"
                  error={!!errors.email}
                  helperText={errors.email}
                  label="Email"
                  variant="standard"
                  onChange={handleChange}
                  value={form.email}
                  fullWidth
                />
              </Grid>
              <Grid size={12}>
                <TextField
                  name="address"
                  error={!!errors.address}
                  helperText={errors.address}
                  label="Address"
                  variant="standard"
                  onChange={handleChange}
                  value={form.address}
                  fullWidth
                />
              </Grid>
              <Grid size={12}>
                <TextField
                  name="website"
                  error={!!errors.website}
                  helperText={errors.website}
                  label="Website"
                  variant="standard"
                  onChange={handleChange}
                  value={form.website}
                  fullWidth
                />
              </Grid>
            </Grid>
          </CardContent>
          <CardActions>
            <Button fullWidth type="submit" disabled={isFormInvalid()}>
              Submit
            </Button>
          </CardActions>
        </Card>
      </Grid>
    </Grid>
  );
};

export default EmployeeForm;
