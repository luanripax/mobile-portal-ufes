import React from "react";
import {Formik} from 'formik';
import { FormRecharge, initialValues } from './formValues';
import { validationSchema } from "./validationSchema";
import {StatusBar} from 'react-native';
import  Recharge  from "./Recharge";

export const RechargeContainer: React.FC = ({}) => {

    return (            
        <Recharge/>
      );
}

export default RechargeContainer;