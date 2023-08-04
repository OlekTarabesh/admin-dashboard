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

const Form = () => {
    
    return (
        <Box></Box>
    )
}

export default Form;