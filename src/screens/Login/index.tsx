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
         <StatusBar 
            barStyle={getTheme() === 'dark' ? 'light-content' : 'dark-content'}
            backgroundColor="transparent"
            translucent
         />
         <Login navigation={navigation}/>
       </>
      );
}

export default LoginContainer;