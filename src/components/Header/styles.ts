import styled from 'styled-components';
import { RFValue } from 'react-native-responsive-fontsize';

export const Container = styled.View`
    background-color: ${({theme})=> theme.colors.dark.background_secondary};
    width: 100%;
    height: ${RFValue(130)}px;

    justify-content: center;
    align-items: center;
    padding-top: 20px;
`;

export const Title = styled.Text`
    color: #ffffff;
`;