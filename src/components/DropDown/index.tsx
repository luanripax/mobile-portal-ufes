import React from 'react';
import { View } from 'react-native';
import { Label, DropDown as DropDownPicker } from './styles';
import { DropDownPickerProps } from 'react-native-dropdown-picker';
import theme from '../../styles/theme';
import { getTheme } from '../../hooks/settings';
import { heightPercentageToDP as hp } from 'react-native-responsive-screen';


type ExtraProps = {
  title: string;
  maxHeight: number;
};

type Props = DropDownPickerProps & ExtraProps;

export function DropDown({ title, maxHeight, ...props }: Props) {
  return (
    <View>
      <Label>{title}</Label>
      <DropDownPicker
        {...props}
        theme="DARK"
        style={{
          height: hp(6),
          backgroundColor: '#202020',
          borderWidth: 1,
          borderColor: '#1C1C1C',
          marginBottom: 60
        }}
        containerStyle={{
          position: 'relative'
        }}
        textStyle={{
          color: '#bdbdbd',
          fontSize: hp(2)
        }}
        labelStyle={{
          color: '#e8e8e8',
          fontSize: hp(2)
        }}
        dropDownContainerStyle={{
          backgroundColor: '#1C1C1C',
          borderColor: 'transparent',
          height: maxHeight
        }}
      />
    </View>
  );
}
