import { RFValue } from 'react-native-responsive-fontsize';
import { Feather, MaterialCommunityIcons } from '@expo/vector-icons';
import styled from 'styled-components/native';
import { getBottomSpace } from 'react-native-iphone-x-helper';
import { StackHeader } from '../../components/StackHeader';
import { Button as ButtonRecharge } from '../../components/Button';
import { getTheme } from '../../hooks/settings';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';

export const Container = styled.View`
    flex: 1;
    background-color: ${({ theme }) => theme.colors[getTheme()].background_primary};
`;

export const Title = styled.Text`
    font-size: ${RFValue(15)}px;
    font-family: ${({theme}) => theme.fonts.primary_400};
    color: ${({theme}) => getTheme() === 'light' ? theme.colors.light.main_text : 'lightgray'};
    margin-top: ${RFValue(30)}px;
    padding-horizontal: 20px;
`;

export const SubTitle = styled.Text`
    font-size: ${RFValue(40)}px;
    font-family: ${({theme}) => theme.fonts.primary_400};
    color: white;
    margin-top: ${RFValue(30)}px;
`;

export const Header = styled(StackHeader)`
`;

export const FormContainer = styled.View`
    padding-horizontal: 20px;
`;

export const ButtonContainer = styled.View`
    flex: 1;
    align-items: center;
    margin-top: 40px;
    padding-horizontal: 20px;
`;

export const Button = styled(ButtonRecharge)`
    padding: 15px 50px;
    width: 100%;
    align-items: center;
    border-radius: 5px;
    background-color: ${({ theme }) => theme.colors[getTheme()].main_green};
`;

export const ButtonLabel = styled.Text`
    font-family: ${({theme}) => theme.fonts.primary_400};
    color: #F8F8F8;
    font-weight: bold;
`;

export const ModalWrapper = styled.View`
    background-color: ${({ theme }) => theme.colors[getTheme()].background_secondary};
    padding-horizontal: 35px;
    padding-vertical: 30px;
    border-radius: 5px;
`;


export const ModalTitle = styled.Text`
    color: ${({ theme }) => theme.colors[getTheme()].main_text};
    font-size: ${RFValue(18)}px;
`;

export const ModalCodeLabel = styled.Text`
    color: gray;
    margin-top: 30px;
    font-size: ${RFValue(14)}px;
`;

export const CodeWrapper = styled.View`
    background-color: ${({ theme }) => theme.colors[getTheme()].background_primary};
    border-radius: 20px;
    padding-horizontal: 15px;
    padding-vertical: 15px;
    margin-top: 15px;
`;

export const CodeValue = styled.Text`
    text-align: center;
    color: ${({ theme }) => theme.colors[getTheme()].main_text};;
`;

export const ButtonWrapper = styled.View`
`;

export const CopyButton = styled.TouchableOpacity`
    background-color: gray;
    padding-horizontal: 45px;
    padding-vertical: 15px;
    border-radius: 5px;
`;

export const BackButton = styled.TouchableOpacity`
   background-color: #FFBC2C;
    padding-horizontal: 45px;
    padding-vertical: 15px;
    border-radius: 5px;
`;

export const BackText = styled.Text`
    color: black;
`;

export const CopyText = styled.Text`
    color: white;
`;

export const Icon = styled(MaterialCommunityIcons)`
    color: #53F1C6;
    font-size: ${RFValue(14)}px;
`;

export const KeyBoardAvoidView = styled(KeyboardAwareScrollView)`
    background-color: ${({ theme }) => theme.colors[getTheme()].background_primary};
`;