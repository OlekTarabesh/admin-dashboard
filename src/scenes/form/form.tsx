import { FC } from "react";
import { Box } from "@mui/material";
import useMediaQuery from "@mui/material/useMediaQuery";
import { Formik } from "formik";

import Header from "../../components/Header";
import FormInputs from "./FormInputs";

import { IFormValues } from "./form.types";
import { userSchema } from "./lib";

const initialValues: IFormValues = {
  firstName: "",
  lastName: "",
  email: "",
  contact: "",
  address1: "",
  address2: "",
};

const Form: FC = () => {
  const isNonMobile = useMediaQuery("(min-width: 600px)");

  const handleFormSubmit = (values: IFormValues) => {
    console.log(values);
  };

  return (
    <Box m="20px">
      <Header title="CREATE USER" subtitle="Create a New User Profile" />

      <Formik
        onSubmit={handleFormSubmit}
        initialValues={initialValues}
        validationSchema={userSchema}
      >
        {({
          values,
          errors,
          touched,
          handleBlur,
          handleChange,
          handleSubmit,
        }) => (
          <FormInputs
            handleSubmit={handleSubmit}
            isNonMobile={isNonMobile}
            handleBlur={handleBlur}
            handleChange={handleChange}
            values={values}
            touched={touched}
            errors={errors}
          />
        )}
      </Formik>
    </Box>
  );
};

export default Form;
