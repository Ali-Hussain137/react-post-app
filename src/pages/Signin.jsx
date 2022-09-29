import React from "react";
import { Formik } from "formik";
import "../css/signin.css";
import insertUser from "../api/userApi";

function Signin(props) {
  return (
    <div className="signin-style">
      <h1>Sign in</h1>
      <Formik
        initialValues={{ name: "", email: "", password: "" }}
        validate={(values) => {
          const errors = {};
          if (!values.email) {
            errors.email = "Required";
          } else if (
            !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
          ) {
            errors.email = "Invalid email address";
          }
          return errors;
        }}
        onSubmit={(values, { setSubmitting }) => {
          insertUser(values)
            .then((response) => {
              console.log(response.status);
            })
            .catch((error) => console.log(error));
        }}
      >
        {({
          values,
          errors,
          touched,
          handleChange,
          handleBlur,
          handleSubmit,
          isSubmitting,
        }) => (
          <form onSubmit={handleSubmit}>
            <div class="mb-3">
              <label for="exampleInputEmail1" class="form-label">
                Name
              </label>
              <input
                type="text"
                name="name"
                class="form-control"
                id="exampleInputEmail1"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.name}
              />
              {errors.email && touched.email && errors.email}
            </div>
            <div class="mb-3">
              <label for="exampleInputEmail1" class="form-label">
                Email address
              </label>
              <input
                type="email"
                name="email"
                class="form-control"
                id="exampleInputEmail1"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.email}
              />
              {errors.email && touched.email && errors.email}
            </div>
            <div class="mb-3">
              <label for="exampleInputPassword1" class="form-label">
                Password
              </label>
              <input
                type="password"
                name="password"
                class="form-control"
                id="exampleInputPassword1"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.password}
              />
              {errors.password && touched.password && errors.password}
            </div>
            <button
              type="submit"
              class="btn btn-primary"
              disabled={isSubmitting}
            >
              Sign in
            </button>
          </form>
        )}
      </Formik>
    </div>
  );
}

export default Signin;
