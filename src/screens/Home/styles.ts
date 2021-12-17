import { RFValue } from 'react-native-responsive-fontsize';
import { Feather } from '@expo/vector-icons';
import styled from 'styled-components/native';

export const Container = styled.View`
    flex: 1;
    background-color: #2c2f33;
`;

export const Header = styled.View`
    background-color: ${({theme}) => theme.colors.dark.background_secondary};
    height: ${RFValue(180)}px;
    border-bottom-left-radius: 25px;
    border-bottom-right-radius: 25px;
    /* superior | direita | inferior | esquerda */
    padding: 50px 20px 0px 20px;
    /*ios: padding: 100px 20px 0px 20px; */
`;

export const Title = styled.Text`
    font-family: ${({theme}) => theme.fonts.primary_400};
    font-size: ${RFValue(30)}px;
    color: white;
`;

export const PersonalInfo = styled.View`
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    padding-bottom: 15px;
`;

export const Icon = styled(Feather)`
    color: grey;
    font-size: ${RFValue(20)}px;
`;

export const CourseInfo = styled.View`
`;

export const CourseLabel = styled.Text`
    font-size: ${RFValue(13)}px;
    font-family: ${({theme}) => theme.fonts.primary_400};
    color: ${({theme}) => theme.colors.dark.select};
`;

export const Course = styled.Text`
    font-size: ${RFValue(13)}px;
    font-family: ${({theme}) => theme.fonts.primary_400};
    color: grey;
`;

export const ImportantInfo = styled.View`
    padding: 20px 20px;

`;

export const ImportantLabel = styled.Text`
    font-family: ${({theme}) => theme.fonts.primary_400};
    color: white;
`;

export const BoardInfo = styled.View`
    padding-left: 20px;
`;

export const BoardLabel = styled.Text`
    font-family: ${({theme}) => theme.fonts.primary_400};
    color: white;
`;


