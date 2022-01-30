import { TouchableOpacity } from 'react-native-gesture-handler';
import { RectButton } from 'react-native-gesture-handler';
import { RFValue } from 'react-native-responsive-fontsize';
import styled from 'styled-components/native';
import { getBottomSpace } from 'react-native-iphone-x-helper';

export const Container = styled.View`
    flex: 1;
    background-color: ${ ({theme}) => theme.colors.dark.background_secondary};
`;

export const Title = styled.Text`
    font-size: ${RFValue(40)}px;
    font-family: ${({theme}) => theme.fonts.primary_400};
    color: white;
    margin-top: ${RFValue(50) + getBottomSpace()}px;
    margin-bottom: ${RFValue(20)}px;
`;

export const SubTitle = styled.Text`
    font-size: ${RFValue(40)}px;
    font-family: ${({theme}) => theme.fonts.primary_400};
    color: white;
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

export const Button = styled(TouchableOpacity)`
    background-color: #40D48D;
    padding: 15px 50px;
    width: 100%;
    align-items: center;
    border-radius: 5px;
`;

export const ButtonLabel = styled.Text`
    font-family: ${({theme}) => theme.fonts.primary_400};
    color: #F8F8F8;
    font-weight: bold;
`;