import React, { ChangeEvent, useEffect } from "react";
import { TextInputProps } from 'react-native';
import { Formik, FormikProps } from 'formik';
import { Container, Label, InputText, Error} from './styles';

interface Props {
    label: string;
    placeholder: string;
    value: string;
    error: string;
    handleChange: (e: string | ChangeEvent<any>) => void;
}

export function InputForm({label, placeholder, value, error, handleChange, autoCapitalize, ...props}:Props & TextInputProps) {

    return(
        <Container {...props}>
            <Label>{label}</Label>
            <InputText 
                onChangeText={handleChange}
                value={value}
                error={error}
                placeholder={placeholder}
                autoCapitalize={autoCapitalize}
            />
            <Error>{error}</Error>
        </Container>
    )
}