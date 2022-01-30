import React from "react";
import {Formik} from 'formik';
import { FormLogin, initialValues } from './formValues';
import { validationSchema } from "./validationSchema";
import  Login  from "./Login";

export const LoginContainer: React.FC = () => {

    return (
            <Login/>
      );
}

export default LoginContainer;