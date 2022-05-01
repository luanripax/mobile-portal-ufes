import React from "react";
import {Formik} from 'formik';
import { FormLogin, initialValues } from './formValues';
import { validationSchema } from "./validationSchema";
import {StatusBar} from 'react-native';
import  Login  from "./Login";
import { getTheme } from "../../hooks/settings";

export const LoginContainer = ({navigation}) => {

    return (
       <>
         <Login navigation={navigation}/>
       </>
      );
}

export default LoginContainer;