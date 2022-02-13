import styled from 'styled-components/native';
import { heightPercentageToDP as hp } from 'react-native-responsive-screen';
import DropDownPicker from 'react-native-dropdown-picker';


export const Label = styled.Text`
    color: white;
    margin-bottom: ${hp(1.5)}px;
    font-size: ${hp(2.4)}px;
`;

export const DropDown = styled(DropDownPicker)``;