import React, { ChangeEvent, useEffect } from "react";
import { Formik, FormikProps } from 'formik';
import { Container, Label, InputText, Error} from './styles';

interface Props {
    label: string;
    placeholder: string;
    value: string;
    error: string;
    handleChange: (e: string | ChangeEvent<any>) => void;
}

export function InputForm({label, placeholder, value, error, handleChange}:Props) {

    useEffect(() => {
        console.log(error);
      }, []);

    return(
        <Container>
            <Label>{label}</Label>
            <InputText 
                onChangeText={handleChange}
                value={value}
                error={error}
                placeholder={placeholder}
            />
            <Error>{error}</Error>
        </Container>
    )
}