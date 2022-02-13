import styled from 'styled-components';
import { RFValue } from 'react-native-responsive-fontsize';
import { getBottomSpace } from 'react-native-iphone-x-helper';
import { Feather } from '@expo/vector-icons';
import { Dimensions } from 'react-native';
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';

const {width} = Dimensions.get('window');

export const Container = styled.View`
    background-color: ${({theme})=> theme.colors.dark.background_secondary};
    border-radius: 5px;
    padding-horizontal: 10px;
    padding-vertical: 10px;
`;

export const Title = styled.Text`
    color: #cccccc;
    font-size: ${hp(2.1)}px;
`;

export const Abscence = styled.Text`
    color: grey;
`;

export const Average = styled.Text`
    color: grey;
`;

export const LabelWrapper = styled.View`
    flex-direction: row;
    justify-content: space-around;
    align-items: center;
    margin-bottom: 5px;
`;

export const ContentWrapper = styled.View`
    flex-direction: row;
    justify-content: space-around;
    margin-top: 10px;
    margin-bottom: 5px;
`;

export const ProgressWrapper = styled.View`
    flex-direction: row;
`;

export const ProgressValue = styled.Text`
    color: grey;
    font-size: 11px;
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