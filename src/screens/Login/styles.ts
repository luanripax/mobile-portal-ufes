import { RFValue } from 'react-native-responsive-fontsize';
import styled from 'styled-components/native';
import { getBottomSpace } from 'react-native-iphone-x-helper';
import { Button as ButtonComponent } from '../../components/Button';
import { getTheme } from '../../hooks/settings';
import theme from '../../styles/theme';

export const Container = styled.View`
    flex: 1;
    background-color: ${ ({theme}) => theme.colors[getTheme()].background_secondary};
`;

export const Title = styled.Text`
    font-size: ${RFValue(40)}px;
    font-family: ${({theme}) => theme.fonts.primary_400};
    color: ${ ({theme}) => theme.colors[getTheme()].main_text};
    margin-top: ${RFValue(50) + getBottomSpace()}px;
    margin-bottom: ${RFValue(20)}px;
`;

export const SubTitle = styled.Text`
    font-size: ${RFValue(40)}px;
    font-family: ${({theme}) => theme.fonts.primary_400};
    color: ${ ({theme}) => theme.colors[getTheme()].main_text};
    margin-top: ${RFValue(30)}px;
`;

export const Header = styled.View`
    align-items: center;
`;

export const FormContainer = styled.View`
    padding-horizontal: 20px;
    margin-top: 20px;
`;

export const ButtonContainer = styled.View`
    flex: 1;
    align-items: center;
    margin-top: 40px;
`;

export const Button = styled(ButtonComponent)`
    align-items: center;
    justify-content: center;
    width: 140px;
    height: 50px;
    background-color: ${ ({theme}) => theme.colors[getTheme()].main_green};;
`;