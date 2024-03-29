import { TextInput } from 'react-native';
import { RFValue } from 'react-native-responsive-fontsize';
import { getTheme } from '../../hooks/settings';
import styled from 'styled-components/native';

export const Container = styled.View`
    background-color: ${({theme}) => theme.colors[getTheme()].background_secondary};
    margin-horizontal: 15px;
    padding-horizontal: 20px;
    padding-vertical: 10px;
    border-radius: 5px;
`;

export const Title = styled.Text`
    color: ${({theme}) => theme.colors[getTheme()].main_text};
    font-size: ${RFValue(20)}px;
    font-family: ${({theme}) => theme.fonts.primary_400};
    margin-bottom: 15px;
`;

export const MenuItems = styled.View``;

export const Item = styled.View`
    margin-bottom: 20px;
`;

export const ItemLabel = styled.Text`
    color: grey;
    font-size: ${RFValue(14)}px;
    font-family: ${({theme}) => theme.fonts.primary_400};
    margin-left: 20px;
`;

export const ItemContent = styled.Text`
    color: ${({theme}) => theme.colors[getTheme()].main_text};
    font-size: ${RFValue(15)}px;
    font-family: ${({theme}) => theme.fonts.primary_400};
`;

export const ItemHeader = styled.View`
    flex-direction: row;
    align-items: center;
    margin-bottom: 10px;
`;