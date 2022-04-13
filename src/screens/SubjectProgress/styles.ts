import { RFValue } from 'react-native-responsive-fontsize';
import styled from 'styled-components/native';
import { Header } from '../../components/Header';
import CategoryButton  from '../../components/CategoryButton';
import SubjectInfo from '../../components/SubjectInfo';
import {MaterialCommunityIcons} from '@expo/vector-icons';

export const Container = styled.View`
    flex: 1;
    background-color: ${({theme}) => theme.colors.dark.background_primary};
`;

export const HeaderComponent = styled(Header)`
    margin-bottom: 20px;
`;

export const ContentWrapper = styled.View`
    padding-horizontal: 10px;
    margin-top: 10px;
`;

export const SubjectInfoFC = styled(SubjectInfo)`
    margin-bottom: 20px;
`;

export const CategoryWrapper = styled.View`
    padding-horizontal: 10px;
    margin-top: 20px;
    flex-direction: row;
    align-items: center;
`;


export const CategoryTitle = styled.Text`
    font-family: ${({theme}) => theme.fonts.primary_400};
    color: gray;
    font-size: 22px;
    margin-left: 15px;
`;

export const CategoryIcon = styled(MaterialCommunityIcons)`
    color: gray;
    font-size: 22px;
`;

export const CategoryLine = styled.View`
    height: 1px;
    background-color: gray;
    margin-top: 15px;
    margin-bottom: 5px;
    margin-horizontal: 10px;
    border-radius: 50px;
`;