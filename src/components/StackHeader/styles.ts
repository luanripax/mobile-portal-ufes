import styled from 'styled-components';
import { RFValue } from 'react-native-responsive-fontsize';
import { getBottomSpace } from 'react-native-iphone-x-helper';
import { Feather } from '@expo/vector-icons';
import { Dimensions } from 'react-native';
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';

const {width} = Dimensions.get('window');

export const Container = styled.View`
    background-color: ${({theme})=> theme.colors.dark.background_secondary};
    width: 100%;
    height: ${hp(18) - getBottomSpace()/2}px;

    align-items: center;
    justify-content: center;
    padding-top: ${hp(3)}px;
    flex-direction: row;
`;

export const Title = styled.Text`
    color: #ffffff;
    font-size: ${hp(2.85)}px;
    text-align: center;
    margin-right: 35px;
`;

export const Icon = styled(Feather)`
    color: white;
    font-size: ${hp(3.57)}px;
    margin-left: 10px;
`;

export const TitleWrapper = styled.View`
    justify-content: center;
    flex: 1;
`;

export const IconWrapper = styled.View`
    justify-content: flex-start;
`;