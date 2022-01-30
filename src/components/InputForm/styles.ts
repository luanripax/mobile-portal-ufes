import { TextInput } from 'react-native';
import { RFValue } from 'react-native-responsive-fontsize';
import styled from 'styled-components/native';

export const Container = styled.View`
    margin-top: 20px;
`;

export const Label = styled.Text`
    color: #D1D1D1;
`;

export const InputText = styled(TextInput)`
    background-color: #666666;
    border-radius: 5px;
    margin-top: 10px;
    height: ${RFValue(45)}px;
    padding-left: 10px;
    color: #A4A4A4;
`;

export const Error = styled.Text`
    color: red;
    font-size: 12px;
`;
