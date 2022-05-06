import styled from 'styled-components/native';
import {Feather} from '@expo/vector-icons';
import { getTheme } from '../../hooks/settings';
import { RectButton } from 'react-native-gesture-handler';

export const Container = styled(RectButton)`
    background-color: ${({theme}) => theme.colors[getTheme()].background_secondary};
    border-radius: 5px;

    flex-direction: column;
    padding-horizontal: 10px;
    padding-vertical: 15px;
`;

export const Title = styled.Text`
    font-family: ${({theme}) => theme.fonts.primary_400};
    font-size: ${({active}) => active === true ? 20 : 18}px;
    color: ${({theme}) => theme.colors[getTheme()].main_text};
    margin-left: 10px;
    margin-bottom: 10px;
`;

export const Icon = styled(Feather)`
    font-size: 20px;
    margin-left: 5px;
    color: grey;
`;

export const ContentWrapper = styled.View`
    flex-direction: column;
    align-items: center;
    justify-content: center;
    margin-bottom: ${({active}) => active === true ? 10 : -15}px;
`;

export const InfoWrapper = styled.View`
    flex-direction: row;
    align-items: center;
    justify-content: space-around;
    width: 100%;
    margin-top: 10px;
`;

export const AverageWrapper = styled.View`
    align-items: center;
    background-color: ${getTheme() === 'dark' ? '#111111' : '#f2f2f2'};
    border-radius: 5px;
    padding-horizontal: 30px;
    padding-vertical: 10px;
`;

export const AbscenceWrapper = styled.View`
    align-items: center;
    background-color: ${getTheme() === 'dark' ? '#111111' : '#f2f2f2'};
    border-radius: 5px;
    padding-horizontal: 30px;
    padding-vertical: 10px;
`;

export const AverageLabel = styled.Text`
    font-family: ${({theme}) => theme.fonts.primary_400};
    font-size: 15px;
    color: grey;
    margin-bottom: 5px;
`;

export const Average = styled.Text`
    font-family: ${({theme}) => theme.fonts.primary_400};
    font-size: 20px;
    color: ${({theme}) => theme.colors[getTheme()].main_text};
`;

export const AbscenceLabel = styled.Text`
    font-family: ${({theme}) => theme.fonts.primary_400};
    font-size: 15px;
    color: grey;
    margin-bottom: 5px;
`;

export const Abscence = styled.Text`
    font-family: ${({theme}) => theme.fonts.primary_400};
    font-size: 20px;
    color: ${({warningColor}) => warningColor};
`;