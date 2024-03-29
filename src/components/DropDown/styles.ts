import styled from 'styled-components/native';
import { heightPercentageToDP as hp } from 'react-native-responsive-screen';
import { getTheme } from '../../hooks/settings';
import DropDownPicker from 'react-native-dropdown-picker';


export const Label = styled.Text`
    color: ${({theme}) => theme.colors[getTheme()].main_text};
    margin-bottom: ${hp(1.5)}px;
    font-size: ${hp(2.4)}px;
`;

export const DropDown = styled(DropDownPicker)``;