import React, { useState, useContext } from 'react';
import { useSetting } from '../../hooks/settings';
import { View, Text, Platform, Switch } from 'react-native';
import { useNavigation, useRoute } from '@react-navigation/native';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp
} from 'react-native-responsive-screen';
import {
  Container,
  MainHeader,
  Setting,
  Label,
  Separator,
  SettingsWrapper,
  Logout,
  LogoutLabel,
  SwitchButton,
  DropDown,
  Value,
  ValueTitle,
  Icon
} from './styles';
import If from '../../components/If';

export function SelectScreen({ navigation, route }) {
  const { appTheme, setAppTheme } = useSetting();
  const { type, title } = route.params;

  const changeTheme = (theme: string) => {
    setAppTheme(theme);
  };

  const isDark = appTheme === 'dark';

  return (
    <Container>
      <MainHeader title={title} />
      <SettingsWrapper>
        <Setting onPress={() => changeTheme('dark')}>
          <Label>Escuro</Label>
          <If condition={isDark}>
            <Icon name="check" />
          </If>
        </Setting>
        <Separator />
        <Setting onPress={() => changeTheme('light')}>
          <Label>Claro</Label>
          <If condition={!isDark}>
            <Icon name="check" />
          </If>
        </Setting>
      </SettingsWrapper>
    </Container>
  );
}
