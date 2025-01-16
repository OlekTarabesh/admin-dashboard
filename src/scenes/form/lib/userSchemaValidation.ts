import * as yup from "yup";

import { phoneRegExp } from "../../../utils";

export const userSchema = yup.object().shape({
  firstName: yup.string().required("required"),
  lastName: yup.string().email("invalid email").required("required"),
  email: yup.string().required("required"),
  contact: yup
    .string()
    .matches(phoneRegExp, "Phone number is not valid")
    .required("required"),
  address1: yup.string().required("required"),
  address2: yup.string().required("required"),
});
