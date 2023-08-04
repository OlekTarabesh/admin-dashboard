import { Box, Button, TextField } from "@mui/material";
import useMediaQuery from "@mui/material/useMediaQuery";
import { Formik } from "formik";
import * as yup from 'yup';
import Header from "../../components/Header";

const initialValues = {
    firstName: '',
    lastName: '',
    email: '',
    contact: '',
    address1: '',
    address2: '',
}

const phoneRegExp = 
    /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/;

const userSchema = yup.object().shape({
    firstName: yup.string().required('required'),
    lastName: yup.string().email('invalid email').required('required'),
    email: yup.string().required('required'),
    contact: yup
        .string()
        .matches(phoneRegExp, 'Phone number is not valid')
        .required('required'),
    address1: yup.string().required('required'),
    address2: yup.string().required('required'),
});
const Form = () => {

    return (
        <Box></Box>
    )
}

export default Form;