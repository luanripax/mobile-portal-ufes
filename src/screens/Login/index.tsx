import React from "react";
import {Formik} from 'formik';
import { FormLogin, initialValues } from './formValues';
import { validationSchema } from "./validationSchema";
import {StatusBar} from 'react-native';
import  Login  from "./Login";

export const LoginContainer: React.FC = ({}) => {

    return (
       <>
            <StatusBar 
            barStyle='light-content'
            backgroundColor="transparent"
            translucent
            />
            <Login/>
       </>
      );
}

export default LoginContainer;