import React, { useEffect, useState } from 'react';
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
import { locale } from '../../locale';

export function SelectScreen({ navigation, route }) {
  const { appTheme, setAppTheme, idiom, setIdiom } = useSetting();
  const [update, setUpdate] = useState(false);
  const { type, title } = route.params;

  const changeTheme = (theme: string) => {
    setAppTheme(theme);
  };

  const changeIdiom = (selectedIdiom: string) => {
    setIdiom(selectedIdiom);
  };

  useEffect(() => {
    setUpdate((old) => !old);
  }, [idiom, appTheme]);

  const isDark = appTheme === 'dark';
  const isEnglish = idiom === 'en_US';

  return (
    <>
      <If condition={type === 'theme'}>
        <Container>
          <MainHeader title={locale('settings.theme')} />
          <SettingsWrapper>
            <Setting onPress={() => changeTheme('dark')}>
              <Label>{locale('themes.dark')}</Label>
              <If condition={isDark}>
                <Icon name="check" />
              </If>
            </Setting>
            <Separator />
            <Setting onPress={() => changeTheme('light')}>
              <Label>{locale('themes.light')}</Label>
              <If condition={!isDark}>
                <Icon name="check" />
              </If>
            </Setting>
          </SettingsWrapper>
        </Container>
      </If>

      <If condition={type === 'idiom'}>
        <Container>
          <MainHeader title={locale('settings.idiom')} />
          <SettingsWrapper>
            <Setting onPress={() => changeIdiom('en_US')}>
              <Label>{locale('idioms.en_US')}</Label>
              <If condition={isEnglish}>
                <Icon name="check" />
              </If>
            </Setting>
            <Separator />
            <Setting onPress={() => changeIdiom('pt_BR')}>
              <Label>{locale('idioms.pt_BR')}</Label>
              <If condition={!isEnglish}>
                <Icon name="check" />
              </If>
            </Setting>
          </SettingsWrapper>
        </Container>
      </If>
    </>
  );
}
