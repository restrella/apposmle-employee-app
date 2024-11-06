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
import * as authService from "../services/auth";

const RegisterPage = ({ onSubmit, initialValue }) => {
  const navigate = useNavigate();
  const [form, setForm] = useState({
    username: "",
    password: "",
  });

  const [errors, setErrors] = useState({});

  const schema = Joi.object({
    username: Joi.string().required(),
    password: Joi.string().required(),
  });

  const handleSubmit = async (event) => {
    event.preventDefault();
    console.log("form", form);

    try {
      await authService.register(form.username, form.password);
      alert("Successful registration");
      navigate("/");
    } catch (error) {
      console.log(error);
      if (error.response && error.response.status === 400) {
        alert(error.response.data.message[0]);
      }
    }
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
                  name="password"
                  error={!!errors.password}
                  helperText={errors.password}
                  label="Password"
                  variant="standard"
                  onChange={handleChange}
                  value={form.name}
                  type={"password"}
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

export default RegisterPage;
