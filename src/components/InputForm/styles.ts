import { TextInput } from 'react-native';
import { RFValue } from 'react-native-responsive-fontsize';
import styled from 'styled-components/native';
import { getTheme } from '../../hooks/settings';

export const Container = styled.View`
    margin-top: 20px;
`;

export const Label = styled.Text`
    color: ${({theme}) => theme.colors[getTheme()].label_input}
`;

export const InputText = styled(TextInput).attrs({placeholderTextColor: '#9B9B9D'})`
    background-color: ${({theme}) => theme.colors[getTheme()].background_input};
    border-radius: 5px;
    margin-top: 10px;
    height: ${RFValue(45)}px;
    padding-left: 10px;
    color: ${({theme}) => theme.colors[getTheme()].main_text};;
`;

export const Error = styled.Text`
    color: #D95858;
    font-size: 12px;
`;
