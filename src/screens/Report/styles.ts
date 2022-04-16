import { RFValue } from 'react-native-responsive-fontsize';
import styled from 'styled-components/native';
import { StackHeader } from '../../components/StackHeader';
import { Feather, MaterialCommunityIcons } from '@expo/vector-icons';
import { getBottomSpace } from 'react-native-iphone-x-helper';
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';
import { Switch, Platform} from 'react-native';
import DropDownPicker from 'react-native-dropdown-picker';
import { Button as ButtonComponent } from '../../components/Button';

export const Container = styled.View`
    flex: 1;
    background-color: ${({ theme }) => theme.colors.dark.background_primary};
    padding-bottom: ${15 + getBottomSpace()}px;
`;

export const MainHeader = styled(StackHeader)`
    margin-bottom: ${hp(4)}px;
`;

export const Setting = styled.TouchableOpacity`
    background-color: ${({ theme }) => theme.colors.dark.background_secondary};
    width: 100%;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    padding-horizontal: ${hp(1.4)}px;
    padding-vertical: ${hp(2.85)}px;
`;

export const Label = styled.Text`
    font-family: ${({theme}) => theme.fonts.primary_400};
    font-size: ${hp(2)}px;
    color: white;
`;

export const Separator = styled.View`
    height: 1px;
    width: 5%;
    background-color: ${({ theme }) => theme.colors.dark.background_secondary};;
`;

export const SettingsWrapper = styled.View`
    flex: 1;
`;

export const Logout = styled.TouchableOpacity`
    background-color: ${({ theme }) => theme.colors.dark.background_secondary};
    width: 100%;
    padding-horizontal: ${hp(1.4)}px;
    padding-vertical: ${hp(2.85)}px;
`;

export const LogoutLabel = styled.Text`
    font-family: ${({theme}) => theme.fonts.primary_400};
    font-size: ${hp(2)}px;
    text-align: center;
    color: red;
`;

export const SwitchButton = styled(Switch)`
    height: 0px;
`;

export const DropDown = styled(DropDownPicker).attrs({
})`
    position: absolute;
`;

export const Value = styled.TouchableOpacity`
    flex-direction:row;
    align-items: center;
`;

export const ValueTitle = styled.Text`
    color: grey;
    font-size: ${hp(2)}px;
`;

export const Icon = styled(Feather)`
    color: ${({ theme }) => theme.colors.dark.success};
    font-size: ${hp(2.4)}px;
    margin-top: ${hp(0.2)}px;
    margin-left: ${wp(2)}px;
`;

export const BodyWrapper = styled.View`
    flex: 1;
    padding-horizontal : 20px;
    justify-content: space-between;
`;

export const OfferType = styled.Text`
    color: white;
    margin-bottom: ${hp(1.5)}px;
    font-size: ${hp(2.4)}px;
`;

export const Button = styled(ButtonComponent)`
    background-color:#b51b28;
    border-radius: 5px;
    align-items: center;
    padding-vertical: 12px;
`;

export const ButtonLabel = styled.Text`
    color: white;
`;