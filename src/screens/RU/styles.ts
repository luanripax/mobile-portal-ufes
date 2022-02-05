import { RFValue } from 'react-native-responsive-fontsize';
import styled from 'styled-components/native';
import { Header } from '../../components/Header';
import { Feather, MaterialCommunityIcons } from '@expo/vector-icons';

export const Container = styled.View`
    flex: 1;
    background-color: ${({ theme }) => theme.colors.dark.background_primary};
`;

export const MainHeader = styled(Header)`
    margin-bottom: 10px;
`;

export const BalanceWrapper = styled.View`
    background-color: ${({theme}) => theme.colors.dark.background_secondary};
    padding-horizontal: 20px;
    padding-vertical: 20px;
    margin-horizontal: 15px;
    border-radius: 5px;
`;

export const BalanceLabel = styled.Text`
    color: white;
    font-family: ${({theme}) => theme.fonts.primary_400};
    font-size:${RFValue(20)}px;
`;

export const Balance = styled.Text`
    color: ${({theme}) => theme.colors.dark.success};
    font-family: ${({theme}) => theme.fonts.primary_400};
    font-size:${RFValue(30)}px;
`;

export const BalanceHeader = styled.View`
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
`;

export const BalanceRecharge = styled(Feather)`
    font-size: ${RFValue(25)}px;
    color: grey
`;

export const MenuWrapper = styled.View`
    flex: 1;
    margin-top: 10px;
    border-radius: 5px;
`;
