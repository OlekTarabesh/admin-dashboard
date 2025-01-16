import { FormikErrors, FormikHandlers, FormikTouched } from "formik";

export interface IFormValues {
  firstName: string;
  lastName: string;
  email: string;
  contact: string;
  address1: string;
  address2: string;
}

export interface IFormInputsProps {
  handleSubmit: (e?: React.FormEvent<HTMLFormElement>) => void;
  isNonMobile: boolean;
  handleBlur: FormikHandlers["handleBlur"];
  handleChange: FormikHandlers["handleChange"];
  values: IFormValues;
  touched: FormikTouched<IFormValues>;
  errors: FormikErrors<IFormValues>;
}
