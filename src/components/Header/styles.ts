import styled from 'styled-components';
import { RFValue } from 'react-native-responsive-fontsize';
import { getBottomSpace } from 'react-native-iphone-x-helper';
import { getTheme } from '../../hooks/settings';

export const Container = styled.View`
    background-color: ${({theme})=> theme.colors[getTheme()].background_secondary};
    width: 100%;
    height: ${RFValue(150) - getBottomSpace()/2}px;

    justify-content: center;
    align-items: center;
    padding-top: 20px;
`;

export const Title = styled.Text`
    color: ${({theme})=> theme.colors[getTheme()].main_text};
    font-size: ${RFValue(20)}px;
    margin-top: ${getBottomSpace()/2}px;
`;