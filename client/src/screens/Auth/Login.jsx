import "./auth.css";
import React, { useState } from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import { Button, Typography } from "@mui/material";
import { useFormik } from "formik";
import * as yup from "yup";
import axios from "axios";
import { Message } from "../../components";
import { useLocation, Link } from "react-router-dom";

import { useContext } from "react";

const validationSchema = yup.object({
  email: yup
    .string("Enter your email")
    .min(14, "Email should be 14 characters long")
    .email("Enter a valid email")
    .required("Email is required"),
  password: yup
    .string("Enter your password")
    .min(8, "Password should be of minimum 8 characters length")
    .required("Password is required"),
});

function Login() {
  const [messageBar, setMessageBar] = useState("");
  const dev = "http://localhost:2000";
  const baseURL =
    window.location.hostname.split(":")[0] === "localhost" ? dev : "";
  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    validationSchema: validationSchema,
    onSubmit: (values) => {
      axios
        .post(`${baseURL}/api/v1/login`, {
          email: values.email,
          password: values.password,
        })
        .then((result) => {
          if (result.data !== "error") {
            // dispatch({
            //   type: "USER_LOGIN",
            //   payload: {
            //     fullName: result.data.fullName,
            //     email: result.data.email,
            //     gender: result.data.gender,
            //     phoneNumber: result.data.phoneNumber,
            //     address: result.data.address,
            //   },
            // });
            //message
            setMessageBar(true);
            setTimeout(() => {
              history.push("/dashboard");
              setMessageBar([]);
            }, 1000);
          } else {
            // console.log("Email or password is invalid");
            setMessageBar(false);
            setTimeout(() => {
              setMessageBar([]);
            }, 1000);
          }
        });
    },
  });

  const history = useLocation();
  return (
    <>
      {messageBar === true ? <Message type="success" message="Welcome" /> : ""}
      {messageBar === false ? (
        <Message type="error" message="Invalid email or password" />
      ) : (
        ""
      )}
      <div className="mainParent">
        <div className="parentChild">
          <div className="loginHeading">
            <Typography
              variant="h4"
              style={{ fontWeight: "bold", color: "rgba(0,183,255, 1)" }}
            >
              Login Form
            </Typography>
          </div>
          <Box
            type="form"
            component="form"
            noValidate
            autoComplete="off"
            textAlign="center"
            onSubmit={formik.handleSubmit}
          >
            <TextField
              fullWidth
              type="email"
              name="email"
              label="Email"
              variant="outlined"
              placeholder="Enter your Email"
              value={formik.values.email}
              onChange={formik.handleChange}
              error={formik.touched.email && Boolean(formik.errors.email)}
              helperText={formik.touched.email && formik.errors.email}
              style={{ marginBottom: "15px" }}
            />

            <TextField
              fullWidth
              type="password"
              name="password"
              id="outlined-basic"
              label="Password"
              variant="outlined"
              placeholder="Enter Password"
              value={formik.values.password}
              onChange={formik.handleChange}
              error={formik.touched.password && Boolean(formik.errors.password)}
              helperText={formik.touched.password && formik.errors.password}
            />
            <div
              style={{
                display: "flex",
                alignItems: "flex-start",
                marginTop: "12px",
              }}
            >
              <Button
                type="submit"
                size="small"
                variant="contained"
                style={{
                  marginRight: "5px",
                  backgroundColor: "rgba(0,183,255, 1)",
                }}
              >
                Submit
              </Button>
              <Link to="/signup">
                <Button
                  variant="contained"
                  size="small"
                  color="error"
                  style={{ backgroundColor: "rgba(0,183,255, 1)" }}
                >
                  Don't have Create
                </Button>
              </Link>
            </div>
          </Box>
        </div>
      </div>
    </>
  );
}

export default Login;
