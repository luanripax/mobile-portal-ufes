import styled from 'styled-components/native';
import {Feather} from '@expo/vector-icons';
import { RectButton } from 'react-native-gesture-handler';

export const Container = styled(RectButton)`
    height: 60px;
    background-color: ${({theme}) => theme.colors.dark.background_secondary};
    border-radius: 5px;

    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    padding-horizontal: 10px;
`;

export const Title = styled.Text`
    font-family: ${({theme}) => theme.fonts.primary_400};
    font-size: 15px;
    color: grey;
    margin-left: 15px;
`;

export const Icon = styled(Feather)`
    font-size: 25px;
    color: grey;
`;

export const ContentWrapper = styled.View`
    flex-direction: row;
    align-items: center;
`;