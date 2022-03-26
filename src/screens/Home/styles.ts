import { RFValue } from 'react-native-responsive-fontsize';
import { Feather } from '@expo/vector-icons';
import styled from 'styled-components/native';
import { getBottomSpace } from 'react-native-iphone-x-helper';
import {
    widthPercentageToDP as wp,
    heightPercentageToDP as hp
  } from 'react-native-responsive-screen';

export const Container = styled.ScrollView`
    flex: 1;
    background-color: #2c2f33;
`;

export const Header = styled.View`
    background-color: ${({theme}) => theme.colors.dark.background_secondary};
    height: ${hp(23) + getBottomSpace()/2.5}px;
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
    margin-top: ${getBottomSpace()}px;
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
    font-size: ${hp(2.4)}px;
    color: white;
    margin-bottom: ${hp(2.5)}px;
`;

export const BoardInfo = styled.View`
    padding-horizontal: 20px;
    margin-top: ${hp(3)}px;
`;

export const BoardLabel = styled.Text`
    font-family: ${({theme}) => theme.fonts.primary_400};
    font-size: ${RFValue(18)}px;
    color: white;
    margin-bottom: ${hp(3)}px;
`;

export const SubjectInfo = styled.View`
    padding-horizontal: 20px;
    margin-top: ${hp(3)}px;
`;

export const SubjectLabel = styled.Text`
    font-family: ${({theme}) => theme.fonts.primary_400};
    font-size: ${RFValue(18)}px;
    color: white;
    margin-bottom: ${hp(3)}px;
`;

export const SContainer = styled.View`
    background-color: ${({theme}) => theme.colors.dark.background_secondary};
    border-radius: 5px;
    padding-horizontal: 10px;
    padding-vertical: 10px;
    margin-bottom: 10px;
`;

export const STitle = styled.Text`
    color: grey;
`;

export const SContent = styled.View`
    flex-direction: row;
    justify-content: space-evenly;
`;

export const AbscenceContainer = styled.View`
    align-items: center;
`;

export const AbscenceLabel = styled.Text`
    color: grey;
    font-size: 12px;
`;

export const AbscenceValue = styled.Text`
    color: grey;
    font-size: 11px;
`;

export const STitleContainer = styled.View`
 flex-direction: row;
 justify-content: space-between;
 align-items: center;
`;

